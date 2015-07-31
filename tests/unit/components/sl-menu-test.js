import Ember from 'ember';
import { moduleForComponent, skip, test } from 'ember-qunit';

let testItems;

moduleForComponent( 'sl-menu', 'Unit | Component | sl menu', {
    unit: true,

    needs: [
        'component:sl-menu-item',
        'component:sl-menu-item-show-all'
    ],

    beforeEach() {
        testItems = new Ember.A([
            {
                action: 'firstTest',
                data: 'first',
                label: 'First',
                items: [
                    { label: 'First sub-item' },
                    { label: 'Second sub-item' }
                ]
            }, {
                action: 'secondTest',
                data: 'second',
                label: 'Second'
            }
        ]);
    }
});

test( 'Default property values', function( assert ) {
    this.subject();

    assert.ok(
        this.$().hasClass( 'sl-menu' ),
        'Has class "sl-menu"'
    );

    assert.ok(
        this.$().is( 'div' ),
        'Element is a <div>'
    );
});

test( 'Items are rendered', function( assert ) {
    this.subject({
        items: testItems
    });

    assert.equal(
        this.$( 'li' ).length,
        4,
        'Has 4 children list items'
    );
});

test( 'Actions are handled properly from menu items', function( assert ) {
    this.subject({
        action: 'test',
        items: testItems,

        targetObject: {
            test( actionName, data ) {
                assert.equal(
                    actionName,
                    'firstTest',
                    'Given action name is expected value'
                );

                assert.equal(
                    data,
                    'first',
                    'Given data is expected value'
                );
            }
        }
    });

    this.$( 'li a' ).first().trigger( 'click' );
});

test( 'allowShowAll property enables the show-all menu item', function( assert ) {
    this.subject({
        allowShowAll: true,
        items: testItems
    });

    assert.ok(
        this.$( 'li' ).last().hasClass( 'show-all' ),
        'show-all menu item is rendered'
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

test( 'hideAll() hides all currently visible menus', function( assert ) {
    const component = this.subject({
        items: testItems,
        showingAll: true
    });

    assert.equal(
        this.$( 'li:visible' ).length,
        4,
        'All children menu items are visible'
    );

    Ember.run( () => {
        component.hideAll();
    });

    assert.equal(
        this.$( 'li:visible' ).length,
        2,
        'Only top-level menu items are visible'
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

    const selections = component.get( 'selections' );

    assert.equal(
        selections.length,
        1,
        'A single item is selected after select()'
    );

    assert.equal(
        component.get( 'selectedItem' ),
        testItems[ 0 ],
        'Selected item is first testItem'
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
        component.selectLeft(); // "left" to the first top-level item
        component.selectDown(); // "down" into the first sub-menu
    });

    // This assertion ensures that we have gone into the first sub-menu
    assert.equal(
        component.get( 'selections' ).length,
        2,
        'Two selections are made'
    );

    Ember.run( () => {
        component.selectLeft(); // Back to top-level items
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
        component.select( 0 ); // Select the first top-level item
        component.selectSubMenu(); // Descend into the first sub-menu
    });

    assert.equal(
        component.get( 'selectedItem' ),
        testItems[ 0 ].items[ 0 ],
        'The first sub-menu item is selected'
    );
});

/* TODO
skip( 'selectPrevious() selects ', function() {
});

skip( 'selectRight() selects ', function() {
});

skip( 'selectSubMenu() selects ', function() {
});

skip( 'selectUp() selects ', function() {
});
*/
