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

    assert.ok( $component.hasClass( 'divider' ), 'Initially has "divider"' );

    Ember.run( function() {
        component.set( 'label', 'Test' );
    });

    assert.ok(
        $component.hasClass( 'presentation' ),
        'Has class "presentation" with valid "label" value'
    );
});

test( 'Click triggers bound action', function( assert ) {
    var component = this.subject({
            action: 'test',
            label: 'Test',
            targetObject: {
                test: function() {
                    assert.ok( 'Test action fired correctly' );
                }
            }
        }),
        $component = this.render();

    assert.expect( 1 );
    $component.find( 'a' ).trigger( 'click' );
});
