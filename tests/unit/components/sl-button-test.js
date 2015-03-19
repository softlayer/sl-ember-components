import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import SlButton from 'sl-ember-components/components/sl-button';

moduleForComponent( 'sl-button', 'Unit - component: sl-button' );

test( 'Label changes for pending state', function( assert ) {
    var pendingText = 'Pending',
        staticText  = 'Static',
        component   = this.subject({
            pendingLabel : pendingText,
            label        : staticText
        }),
        $component = this.render();

    assert.equal( component.get( 'currentLabel' ), staticText, 'Static text is set initially' );

    Ember.run( function() {
        component.set( 'pending', true );
    });

    assert.equal( component.get( 'currentLabel' ), pendingText, 'Pending text is set while pending' );
});

test( 'The element fires event when clicked', function( assert ) {
    var component = this.subject({
            action: 'externalAction',
            targetObject: {
                externalAction: function() {
                    ok( true, 'External action was called' );
                }
            }
        }),
        $component = this.render();

    assert.expect( 1 );
    $component.click();
});

test( 'Button supports disabled state', function( assert ) {
    var component  = this.subject(),
        $component = this.render();

    assert.strictEqual( $component.is( ':disabled' ), false, 'Component is disabled by default' );

    Ember.run( function() {
        component.set( 'disabled', true );
    });

    assert.strictEqual( $component.is( ':disabled' ), true, 'Component becomes disabled' );
});

/**
 * While it appears that core Ember functionality is being tested this test is
 * ensuring that the implied contract about which DOM element is rendered is
 * adhered to.
 */

test( 'Renders as a button tag', function( assert ) {
    var $component = this.render();

    assert.ok( $component.is( 'button' ), 'Is a <button>' );
});

test( 'Expected default classes are applied', function( assert ) {
    var $component = this.render();

    assert.ok( $component.hasClass( 'btn' ), 'Has class "btn"' );
    assert.ok( $component.hasClass( 'sl-button' ), 'Has class "sl-button"' );
});

test( 'Labels are correctly initialized', function( assert ) {
    var $component;

    this.subject({ label: 'Test' });
    $component = this.render();

    assert.equal( Ember.$.trim( $component.text() ), 'Test', 'Expected label is present as text' );
});

test( 'sizeClass() returns correct values', function( assert ) {
    var component  = this.subject({ size: 'large' }),
        $component = this.render();

    assert.equal( component.get( 'sizeClass' ), 'btn-lg', 'sizeClass is expected value' );
    assert.ok( $component.hasClass( 'btn-lg' ), 'Has expected class "btn-lg"' );
});

test( 'themeClass() returns correct value', function( assert ) {
    var component  = this.subject({ theme: 'success' }),
        $component = this.render();

    assert.equal( component.get( 'themeClass' ), 'btn-success', 'themeClass is expected value' );
    assert.ok( $component.hasClass( 'btn-success' ), 'Has expected class "btn-success"' );
});
