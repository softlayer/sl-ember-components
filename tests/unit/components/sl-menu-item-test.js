import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import globalLibraries from '../../helpers/sl/synchronous/global-libraries';

moduleForComponent( 'sl-menu-item', 'Unit | Component | sl menu item', {
    unit: true
});

test( 'Default property values', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'tagName' ),
        'li',
        'Default tagName is "li"'
    );

    assert.strictEqual(
        component.get( 'active' ),
        false,
        '"active" is "false"'
    );

    assert.strictEqual(
        component.get( 'item' ),
        null,
        '"item" is "null"'
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

test( 'Class "contains-dropdown" is present when bound item has items array', function( assert ) {
    const component = this.subject();

    assert.ok(
        false === this.$().hasClass( 'contains-dropdown' ),
        'Rendered element does not have class "contains-dropdown" by default'
    );

    Ember.run( () => {
        component.set( 'item', { items: [ { label: '' } ] } );
    });

    assert.ok(
        this.$().hasClass( 'contains-dropdown' ),
        'Rendered element has class "contains-dropdown"'
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

test( '`subItems` computed property is null when `item.items` does not exist', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'subItems' ),
        null,
        '"subItems" is null'
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

test( 'Dependent keys are correct', function( assert ) {
    const component = this.subject();

    const hasSubItemsDependentKeys = [
        'item'
    ];

    assert.deepEqual(
        component.hasSubItems._dependentKeys,
        hasSubItemsDependentKeys,
        'Dependent keys are correct for hasSubItems()'
    );

    const subItemsDependentKeys = [
        'item'
    ];

    assert.deepEqual(
        component.subItems._dependentKeys,
        subItemsDependentKeys,
        'Dependent keys are correct for subItems()'
    );
});

test( 'There are no references to Ember.$, $ or jQuery', function( assert ) {
    globalLibraries.setupSpies();

    const component = this.subject();

    this.render();

    globalLibraries.triggerEvents( component );

    assert.notOk(
        globalLibraries.called(),
        'Global libraries are not referenced in component'
    );

    globalLibraries.restoreSpies();
});
