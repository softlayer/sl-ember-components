import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import StreamEnabledMixin from 'ember-stream/mixins/stream-enabled';

const testItems = Ember.A([
    {
        action: 'firstTest',
        data: 'first',
        label: 'First',
        items: [
            {
                label: 'First sub-item',
                items: [
                    { label: 'First sub-item sub-item' }
                ]
            },
            {
                label: 'Second sub-item'
            }
        ]
    },
    {
        action: 'secondTest',
        data: 'second',
        label: 'Second'
    }
]);

moduleForComponent( 'sl-menu', 'Unit | Component | sl menu', {
    unit: true,

    needs: [
        'component:sl-menu-item',
        'component:sl-menu-item-show-all'
    ]
});

test( 'Expected Mixins are present', function( assert ) {
    assert.ok(
        StreamEnabledMixin.detect( this.subject() ),
        'StreamEnabled Mixin is present'
    );
});

test( 'Default property values', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'allowShowAll' ),
        false,
        '"allowShowAll" is "false"'
    );

    assert.strictEqual(
        component.get( 'items' ),
        null,
        '"items" is "null"'
    );

    assert.deepEqual(
        component.get( 'selections' ),
        [],
        '"selections" is "[]"'
    );

    assert.strictEqual(
        component.get( 'showingAll' ),
        false,
        '"showingAll" is "false"'
    );
});

test( 'showAll() properly sets state to showingAll', function( assert ) {
    const component = this.subject({
        allowShowAll: true,
        items: testItems
    });

    assert.ok(
        !component.get( 'showingAll' ),
        'showingAll is initially false'
    );

    Ember.run( () => {
        component.showAll();
    });

    assert.ok(
        component.get( 'showingAll' ),
        'showingAll is true after showAll()'
    );
});

test( 'hideAll() sets state to not showingAll', function( assert ) {
    const component = this.subject({
        items: testItems,
        showingAll: true
    });

    Ember.run( () => {
        component.hideAll();
    });

    assert.equal(
        component.get( 'showingAll' ),
        false,
        'showingAll is false'
    );
});

test( 'showingAll sets class "show-all"', function( assert ) {
    this.subject({
        showingAll: true
    });

    assert.ok(
        this.$().hasClass( 'show-all' ),
        'Rendered element has class "show-all"'
    );
});

test( 'select() selects a certain menu item', function( assert ) {
    const component = this.subject({
        items: testItems
    });

    assert.equal(
        component.get( 'selections' ).length,
        0,
        'Nothing is selected initially'
    );

    Ember.run( () => {
        component.select( 0 );
    });

    assert.equal(
        component.get( 'selections' ).length,
        1,
        'A single item is selected after select()'
    );

    assert.equal(
        component.get( 'selectedItem' ),
        testItems[ 0 ],
        'Selected item is first test item'
    );

    Ember.run( () => {
        component.select( 1 );
    });

    assert.equal(
        component.get( 'selections' ).length,
        1,
        'A single item is selected after select()'
    );

    assert.equal(
        component.get( 'selectedItem' ),
        testItems[ 1 ],
        'Selected item is second test item'
    );
});

test( 'selectDown() selects an item in the "down" direction', function( assert ) {
    const component = this.subject({
        items: testItems
    });

    assert.equal(
        component.get( 'selections' ).length,
        0,
        'Nothing is selected initially'
    );

    Ember.run( () => {
        component.selectDown();
    });

    assert.equal(
        component.get( 'selectedItem' ),
        testItems[ 0 ],
        'Selected item is first testItem'
    );

    Ember.run( () => {
        component.selectDown();
    });

    assert.equal(
        component.get( 'selectedItem' ),
        testItems[ 0 ].items[ 0 ],
        'Selected item is first sub-menu item'
    );
});

test( 'selectLeft() selects an item in the "left" direction', function( assert ) {
    const component = this.subject({
        items: testItems
    });

    assert.equal(
        component.get( 'selections' ).length,
        0,
        'Nothing is selected initially'
    );

    Ember.run( () => {
        // Selection has to be "down" first in order to select the top level for
        // the context
        component.selectDown();
        component.selectLeft();
    });

    assert.equal(
        component.get( 'selections' ).length,
        1,
        'Only one selection is made'
    );

    Ember.run( () => {
        // Select "left" to the first top-level item
        component.selectLeft();

        // Select "down" into the first sub-menu
        component.selectDown();
    });

    // This assertion ensures that we have gone into the first sub-menu
    assert.equal(
        component.get( 'selections' ).length,
        2,
        'Two selections are made'
    );

    Ember.run( () => {
        // Back to top-level items
        component.selectLeft();
    });

    assert.equal(
        component.get( 'selections' ).length,
        1,
        'Only one selection is made'
    );

    assert.equal(
        component.get( 'selectedItem' ),
        testItems[ 0 ],
        'First top-level item is selected again'
    );
});

test( 'selectNext() selects the next sibling menu item', function( assert ) {
    const component = this.subject({
        items: testItems
    });

    assert.equal(
        component.get( 'selections' ).length,
        0,
        'Nothing is selected initially'
    );

    Ember.run( () => {
        component.selectNext();
    });

    assert.equal(
        component.get( 'selectedItem' ),
        testItems[ 0 ],
        'First top-level item is selected'
    );

    Ember.run( () => {
        component.selectNext();
    });

    assert.equal(
        component.get( 'selections' ).length,
        1,
        'One item is still selected'
    );

    assert.equal(
        component.get( 'selectedItem' ),
        testItems[ 1 ],
        'Second top-level item is selected'
    );
});

test( "selectParent() selects a sub-menu's parent item", function( assert ) {
    const component = this.subject({
        items: testItems
    });

    assert.equal(
        component.get( 'selections' ).length,
        0,
        'Nothing is selected initially'
    );

    Ember.run( () => {
        // Select the first top-level item
        component.select( 0 );

        // Descend into the first sub-menu
        component.selectSubMenu();
    });

    assert.equal(
        component.get( 'selectedItem' ),
        testItems[ 0 ].items[ 0 ],
        'The first sub-menu item is selected'
    );
});

test( 'selectPrevious() selects the previous sibling menu item', function( assert ) {
    const component = this.subject({
        items: testItems
    });

    assert.equal(
        component.get( 'selections' ).length,
        0,
        'Nothing is selected initially'
    );

    Ember.run( () => {
        // Select the second top-level item
        component.select( 1 );

        // Select previous; should be the first top-level item
        component.selectPrevious();
    });

    assert.equal(
        component.get( 'selectedItem' ),
        testItems[ 0 ],
        'The first top-level item is selected'
    );

    Ember.run( () => {
        // Select previous again; should wrap and select the second top-level item
        component.selectPrevious();
    });

    assert.equal(
        component.get( 'selectedItem' ),
        testItems[ 1 ],
        'The second top-level item is selected'
    );
});

test( 'selectRight() selects an item in the "right" direction', function( assert ) {
    const component = this.subject({
        items: testItems
    });

    assert.equal(
        component.get( 'selections' ).length,
        0,
        'Nothing is selected initially'
    );

    Ember.run( () => {
        component.select( 0 );
        component.selectRight();
    });

    assert.equal(
        component.get( 'selectedItem' ),
        testItems[ 1 ],
        'The second top-level item is selected'
    );

    Ember.run( () => {
        // Should wrap around back to the first item
        component.selectRight();
    });

    assert.equal(
        component.get( 'selectedItem' ),
        testItems[ 0 ],
        'The first top-level item is selected'
    );

    Ember.run( () => {
        // Descend "down" into the first sub-menu
        component.selectDown();

        // Select "right" to the first nested sub-menu's first sub-item
        component.selectRight();
    });

    assert.equal(
        component.get( 'selectedItem' ),
        testItems[ 0 ].items[ 0 ].items[ 0 ],
        "The first nested sub-menu's first sub-item is selected"
    );
});

test( 'selectSubMenu() selects a sub-menu item', function( assert ) {
    const component = this.subject({
        items: testItems
    });

    assert.equal(
        component.get( 'selections' ).length,
        0,
        'Nothing is selected initially'
    );

    Ember.run( () => {
        // Select the first top-level item
        component.select( 0 );

        // Select the first sub-menu
        component.selectSubMenu();
    });

    assert.equal(
        component.get( 'selectedItem' ),
        testItems[ 0 ].items[ 0 ],
        'The first sub-menu item is selected'
    );
});

test( 'selectUp() selects an item in the "up" direction', function( assert ) {
    const component = this.subject({
        items: testItems
    });

    assert.equal(
        component.get( 'selections' ).length,
        0,
        'Nothing is selected initially'
    );

    Ember.run( () => {
        // Select the first top-level item
        component.select( 0 );

        // Select the first sub-menu
        component.selectSubMenu();

        // Select the second sub-menu item
        component.selectDown();
    });

    assert.equal(
        component.get( 'selectedItem' ),
        testItems[ 0 ].items[ 1 ],
        'The second sub-menu item is selected'
    );

    Ember.run( () => {
        // Select "up" to the first sub-menu item
        component.selectUp();
    });

    assert.equal(
        component.get( 'selectedItem' ),
        testItems[ 0 ].items[ 0 ],
        'The first sub-menu item is selected'
    );

    Ember.run( () => {
        // Select "up" again to select the sub-menu's parent
        component.selectUp();
    });

    assert.equal(
        component.get( 'selectedItem' ),
        testItems[ 0 ],
        'The first top-level item is selected'
    );
});

test( 'selectNext() shows all at the end of the context', function( assert ) {
    const component = this.subject({
        allowShowAll: true,
        items: testItems
    });

    Ember.run( () => {
        // Select the last item option
        component.select( 1 );
    });

    assert.ok(
        false === component.get( 'showingAll' ),
        'Component is not showing all'
    );

    Ember.run( () => {
        component.selectNext();
    });

    assert.ok(
        component.get( 'showingAll' ),
        'Component is now showing all'
    );
});

test( 'selectPrevious() shows all when at the beginning of the context', function( assert ) {
    const component = this.subject({
        allowShowAll: true,
        items: testItems
    });

    assert.ok(
        false === component.get( 'showingAll' ),
        'Component is not showing all by default'
    );

    Ember.run( () => {
        component.selectPrevious();
    });

    assert.ok(
        component.get( 'showingAll' ),
        'Component is now showing all'
    );
});

test( 'Dependent keys are correct', function( assert ) {
    const component = this.subject();

    const selectedItemDependentKeys = [
        'selections.@each.item'
    ];

    assert.deepEqual(
        component.selectedItem._dependentKeys,
        selectedItemDependentKeys,
        'Dependent keys are correct for selectedItem()'
    );
});
