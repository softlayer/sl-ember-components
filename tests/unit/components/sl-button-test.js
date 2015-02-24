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

    assert.equal( component.get( 'currentLabel' ), staticText );

    Ember.run( function() {
        component.set( 'pending', true );
    });

    assert.equal( component.get( 'currentLabel' ), pendingText );
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

    assert.equal( $component.is( ':disabled' ), false );

    Ember.run( function() {
        component.set( 'disabled', true );
    });

    assert.equal( $component.is( ':disabled' ), true );
});

/**
 * While it appears that core Ember functionality is being tested this test is ensuring
 * that the implied contract about which DOM element is rendered is adhered to.
 */
/*
test( 'Renders as a button tag', function( assert ) {
});

test( 'Expected default classes are applied', function( assert ) {
});

test( 'Labels are correctly initialized', function( assert ) {
});

test( 'sizeClass() returns correct values', function( assert ) {
});

test( 'themeClass() returns correct value', function( assert ) {
});
*/
