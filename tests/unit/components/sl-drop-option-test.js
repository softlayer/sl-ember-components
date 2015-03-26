import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-drop-option', 'Unit - component: sl-drop-option' );

test( 'Has expected initial class name', function( assert ) {
    var $component = this.render();

    assert.ok(
        $component.hasClass( 'sl-drop-option' ),
        'Rendered component has class "sl-drop-option"'
    );
});

test( 'Has expected aria-role property', function( assert ) {
    var $component = this.render();

    assert.strictEqual(
        $component.attr( 'role' ),
        'menuitem',
        'ARIA role is properly set to "menuitem"'
    );
});

test( 'Option type class value depends on `label` value', function( assert ) {
    var component  = this.subject(),
        $component = this.render();

    assert.strictEqual(
        $component.hasClass( 'presentation' ),
        false,
        'Rendered component initially does not have class "presentation"'
    );
    assert.ok(
        $component.hasClass( 'divider' ),
        'Rendered component initially has class "divider"'
    );

    Ember.run( function() {
        component.set( 'label', 'Test' );
    });

    assert.strictEqual(
        $component.hasClass( 'divider' ),
        false,
        'Rendered component does not have class "divider"'
    );

    assert.ok(
        $component.hasClass( 'presentation' ),
        'Rendered compnonet has class "presentation" with valid "label" value'
    );
});

test( 'Click triggers bound action', function( assert ) {
    var $component;

    this.subject({
        action: 'test',
        label: 'Test',
        targetObject: {
            test: function() {
                assert.ok( true, 'Test action fired correctly' );
            }
        }
    });
    $component = this.render();

    assert.expect( 1 );
    $component.find( 'a' ).trigger( 'click' );
});
