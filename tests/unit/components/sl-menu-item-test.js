import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-menu-item', 'Unit | Component | sl menu item', {
    unit: true
});

test( 'Initial class names are present', function( assert ) {
    this.subject();

    assert.ok(
        this.$().hasClass( 'sl-menu-item' ),
        'Rendered element has class "sl-menu-item"'
    );
});

test( 'Active state applies class', function( assert ) {
    const component = this.subject();

    assert.equal(
        component.get( 'active' ),
        false,
        'Component is not active by default'
    );
assert.equal(
        this.$().hasClass( 'active' ),
        false,
        'Rendered element does not have class "active" by default'
    );

    Ember.run( () => {
        component.set( 'active', true );
    });

    assert.ok(
        this.$().hasClass( 'active' ),
        'Rendered element has class "active" when component is active'
    );
});

test( 'Class "has-sub-menu" is present when bound item has items array', function( assert ) {
    const item = {};
    const component = this.subject();

    assert.ok(
        this.$().hasClass( 'has-sub-menu' ) === false,
        'Rendered element does not have class "has-sub-menu" by default'
    );

    Ember.run( () => {
        component.set( 'item', { items: [] } );
    });

    assert.ok(
        this.$().hasClass( 'has-sub-menu' ),
        'Rendered element has class "has-sub-menu"'
    );
});

test( 'Class "active" is present when bound item is selected', function( assert ) {
    const component = this.subject();

    assert.ok(
        this.$().hasClass( 'active' ) === false,
        'Rendered element does not have class "active" by default'
    );

    Ember.run( () => {
        component.set( 'item', { selected: true } );
    });

    assert.ok(
        this.$().hasClass( 'active' ),
        'Rendered element has class "active"'
    );
});

test( 'Component responds to mouse enter/leave events', function( assert ) {
    const component = this.subject();

    assert.ok(
        component.get( 'active' ) === false,
        'Component is not active by default'
    );

    assert.ok(
        this.$().hasClass( 'active' ) === false,
        'Rendered element does not have "active" class'
    );

    Ember.run( () => {
        this.$().trigger( 'mouseenter' );
    });

    assert.ok(
        component.get( 'active' ) === true,
        'Component is active after mouseenter event'
    );

    assert.ok(
        this.$().hasClass( 'active' ),
        'Rendered element has "active" class after mouseenter event'
    );

    Ember.run( () => {
        this.$().trigger( 'mouseleave' );
    });

    assert.ok(
        component.get( 'active' ) === false,
        'Component is inactive after mouseleave event'
    );

    assert.ok(
        this.$().hasClass( 'active' ) === false,
        'Rendered element is inactive after mouseleave event'
    );
});

test( 'Bound item.action is triggered when link is clicked', function( assert ) {
    this.subject({
        action: 'test',

        item: {
            action: 'test',
            data: { okay: true },
            label: 'Test'
        },

        targetObject: {
            test( actionName, data ) {
                assert.ok(
                    actionName === 'test' && data.okay === true,
                    'Bound item.action triggered with expected data'
                );
            }
        }
    });

    this.$( 'a' ).trigger( 'click' );
});
