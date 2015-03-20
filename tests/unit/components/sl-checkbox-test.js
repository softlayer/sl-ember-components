import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-checkbox', 'Unit - component: sl-checkbox' );

test( 'Has expected initial classes', function( assert ) {
    var $component = this.render();

    assert.ok( $component.hasClass( 'checkbox' ), 'Has class "checkbox"' );
    assert.ok( $component.hasClass( 'form-group' ), 'Has class "form-group"' );
    assert.ok( $component.hasClass( 'sl-checkbox' ), 'Has class "sl-checkbox"' );
});

test( 'Disabled state applies class and disables input', function( assert ) {
    var component  = this.subject(),
        $component = this.render(),
        $input     = $component.find( 'input' );

    assert.strictEqual(
        $component.hasClass( 'disabled' ),
        false,
        'Initially does not have class "disabled"'
    );
    assert.strictEqual(
        $input.prop( 'disabled' ),
        false,
        'Rendered input is initially enabled'
    );

    Ember.run( function() {
        component.set( 'disabled', true );
    });
    assert.ok( $component.hasClass( 'disabled' ), 'Has class "disabled"' );
    assert.ok( $input.prop( 'disabled' ), 'Rendered input is disabled' );
});

test( 'Checked state applies property to input', function( assert ) {
    var component  = this.subject(),
        $component = this.render(),
        $input     = $component.find( 'input' );

    assert.strictEqual(
        $input.prop( 'checked' ),
        false,
        'Rendered input is not checked'
    );

    Ember.run( function() {
        component.set( 'checked', true );
    });

    assert.ok( $input.prop( 'checked' ), 'Rendered input is checked' );
});
