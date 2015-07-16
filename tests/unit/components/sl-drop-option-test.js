import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-drop-option', 'Unit | Component | sl drop option', {
    unit: true
});

test( 'Has expected initial class name', function( assert ) {
    assert.ok(
        this.$().hasClass( 'sl-drop-option' ),
        'Rendered component has class "sl-drop-option"'
    );
});

test( 'Has expected aria-role property', function( assert ) {
    assert.strictEqual(
        this.$().attr( 'role' ),
        'menuitem',
        'ARIA role is properly set to "menuitem"'
    );
});

test( 'Option type class value depends on `label` value', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        this.$().hasClass( 'presentation' ),
        false,
        'Rendered component initially does not have class "presentation"'
    );

    assert.ok(
        this.$().hasClass( 'divider' ),
        'Rendered component initially has class "divider"'
    );

    Ember.run( function() {
        component.set( 'label', 'Test' );
    });

    assert.strictEqual(
        this.$().hasClass( 'divider' ),
        false,
        'Rendered component does not have class "divider"'
    );

    assert.ok(
        this.$().hasClass( 'presentation' ),
        'Rendered compnonet has class "presentation" with valid "label" value'
    );
});

test( 'Click triggers bound action', function( assert ) {
    this.subject({
        action: 'test',
        label: 'Test',
        targetObject: {
            test: function() {
                assert.ok( true, 'Test action fired correctly' );
            }
        }
    });

    assert.expect( 1 );
    this.$( 'a' ).trigger( 'click' );
});
