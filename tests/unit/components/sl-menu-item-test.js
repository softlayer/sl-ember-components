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
    const component = this.subject();

    assert.ok(
        false === this.$().hasClass( 'has-sub-menu' ),
        'Rendered element does not have class "has-sub-menu" by default'
    );

    Ember.run( () => {
        component.set( 'item', { items: [ { label: '' } ] } );
    });

    assert.ok(
        this.$().hasClass( 'has-sub-menu' ),
        'Rendered element has class "has-sub-menu"'
    );
});

test( 'Class "active" is present when bound item is selected', function( assert ) {
    const component = this.subject();

    assert.ok(
        false === this.$().hasClass( 'active' ),
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
        false === component.get( 'active' ),
        'Component is not active by default'
    );

    Ember.run( () => {
        this.$().trigger( 'mouseenter' );
    });

    assert.ok(
        true === component.get( 'active' ),
        'Component is active after mouseenter event'
    );

    Ember.run( () => {
        this.$().trigger( 'mouseleave' );
    });

    assert.ok(
        false === component.get( 'active' ),
        'Component is inactive after mouseleave event'
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
                    'test' === actionName && true === data.okay,
                    'Bound item.action triggered with expected data'
                );
            }
        }
    });

    this.$( 'a' ).trigger( 'click' );
});

test( 'Rendered element is correct element type', function( assert ) {
    assert.ok(
        this.$().is( 'li' ),
        'Element is an <li>'
    );
});

test( '`subItems` computed property is a wrapped `item.items` array', function( assert ) {
    const component = this.subject({
        item: {
            items: [ { okay: true } ]
        }
    });

    assert.ok(
        component.get( 'subItems' ).objectAt( 0 ).okay,
        'Parsed `subItems` correctly'
    );
});

test( '`hasSubItems` represents the presence of `item.items`', function( assert ) {
    const component = this.subject();

    assert.ok(
        false === component.get( 'hasSubItems' ),
        '`hasSubItems` is false with no `item.items`'
    );

    Ember.run( () => {
        component.set( 'item', { items: [] } );
    });

    assert.ok(
        false === component.get( 'hasSubItems' ),
        '`hasSubItems` is false with empty `item.items`'
    );

    Ember.run( () => {
        component.set( 'item', { items: [ { okay: true } ] } );
    });

    assert.ok(
        true === component.get( 'hasSubItems' ),
        '`hasSubItems` is true when `item.items` is present and not empty'
    );
});
