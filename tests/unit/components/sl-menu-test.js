import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

const mockStream = {
    actions: {},

    on( actionName, handler ) {
        this.actions[ actionName ] = handler;
    },

    subject: {
        dispose() {
            mockStream.actions = {};
        },

        onCompleted() {}
    }
};

const testItems = new Ember.A([
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
            }, {
                label: 'Second sub-item'
            }
        ]
    }, {
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
        5,
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

test( 'Stream action "doAction" triggers doAction()', function( assert ) {
    const component = this.subject({
        items: testItems,
        stream: mockStream
    });
    const doActionSpy = window.sinon.spy( component, 'doAction' );

    mockStream.actions[ 'doAction' ]();
    assert.ok(
        doActionSpy.called,
        'doAction method was called'
    );
});

test( 'Stream action "hideAll" triggers hideAll()', function( assert ) {
    const component = this.subject({
        items: testItems,
        stream: mockStream
    });
    const doActionSpy = window.sinon.spy( component, 'doAction' );

    mockStream.actions[ 'doAction' ]();
    assert.ok(
        doActionSpy.called,
        'doAction method was called'
    );
});

test( 'Stream action "select" triggers select()', function( assert ) {
    const component = this.subject({
        items: testItems,
        stream: mockStream
    });
    const selectSpy = window.sinon.spy( component, 'select' );

    mockStream.actions[ 'select' ]( 0 );
    assert.ok(
        selectSpy.called,
        'select method was called'
    );
});

test( 'Stream action "selectDown" triggers selectDown()', function( assert ) {
    const component = this.subject({
        items: testItems,
        stream: mockStream
    });
    const selectDownSpy = window.sinon.spy( component, 'selectDown' );

    mockStream.actions[ 'selectDown' ]();
    assert.ok(
        selectDownSpy.called,
        'selectDown method was called'
    );
});

test( 'Stream action "selectLeft" triggers selectLeft()', function( assert ) {
    const component = this.subject({
        items: testItems,
        stream: mockStream
    });
    const selectLeftSpy = window.sinon.spy( component, 'selectLeft' );

    mockStream.actions[ 'selectLeft' ]();
    assert.ok(
        selectLeftSpy.called,
        'selectLeft method was called'
    );
});

test( 'Stream action "selectNext" triggers selectNext()', function( assert ) {
    const component = this.subject({
        items: testItems,
        stream: mockStream
    });
    const selectNextSpy = window.sinon.spy( component, 'selectNext' );

    mockStream.actions[ 'selectNext' ]();
    assert.ok(
        selectNextSpy.called,
        'selectNext method was called'
    );
});

test( 'Stream action "selectParent" triggers selectParent()', function( assert ) {
    const component = this.subject({
        items: testItems,
        stream: mockStream
    });
    const selectParentSpy = window.sinon.spy( component, 'selectParent' );

    Ember.run( () => {
        // An error occurs if selectParent() is triggered without any parent
        // context, so we need to descend into the first sub-menu first
        component.select( 0 );
        component.selectSubMenu();
    });

    mockStream.actions[ 'selectParent' ]();
    assert.ok(
        selectParentSpy.called,
        'selectParent method was called'
    );
});

test( 'Stream action "selectPrevious" triggers selectPrevious()', function( assert ) {
    const component = this.subject({
        items: testItems,
        stream: mockStream
    });
    const selectPreviousSpy = window.sinon.spy( component, 'selectPrevious' );

    mockStream.actions[ 'selectPrevious' ]();
    assert.ok(
        selectPreviousSpy.called,
        'selectPrevious method was called'
    );
});

test( 'Stream action "selectRight" triggers selectRight()', function( assert ) {
    const component = this.subject({
        items: testItems,
        stream: mockStream
    });
    const selectRightSpy = window.sinon.spy( component, 'selectRight' );

    mockStream.actions[ 'selectRight' ]();
    assert.ok(
        selectRightSpy.called,
        'selectRight method was called'
    );
});

test( 'Stream action "selectSubMenu" triggers selectSubMenu()', function( assert ) {
    const component = this.subject({
        items: testItems,
        stream: mockStream
    });
    const selectSubMenuSpy = window.sinon.spy( component, 'selectSubMenu' );

    mockStream.actions[ 'selectSubMenu' ]();
    assert.ok(
        selectSubMenuSpy.called,
        'selectSubMenu method was called'
    );
});

test( 'Stream action "selectUp" triggers selectUp()', function( assert ) {
    const component = this.subject({
        items: testItems,
        stream: mockStream
    });
    const selectUpSpy = window.sinon.spy( component, 'selectUp' );

    mockStream.actions[ 'selectUp' ]();
    assert.ok(
        selectUpSpy.called,
        'selectUp method was called'
    );
});

test( 'Stream action "showAll" triggers showAll()', function( assert ) {
    const component = this.subject({
        items: testItems,
        stream: mockStream
    });
    const showAllSpy = window.sinon.spy( component, 'showAll' );

    mockStream.actions[ 'showAll' ]();
    assert.ok(
        showAllSpy.called,
        'showAll method was called'
    );
});
