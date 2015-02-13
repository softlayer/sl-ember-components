import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import SlButton from 'sl-ember-components/components/sl-button';

moduleForComponent( 'sl-button', 'Unit - component: sl-button' );

test( 'Label changes for pending state', function() {
    var pendingText = 'Pending',
        staticText  = 'Static',
        component   = this.subject({
            pendingLabel : pendingText,
            label        : staticText
        }),
        $component = this.render();

    equal( component.get( 'currentLabel' ), staticText );

    Ember.run( function() {
        component.set( 'pending', true );
    });

    equal( component.get( 'currentLabel' ), pendingText );
});

test( 'The element fires event when clicked', function() {
    var component = this.subject({
            action: 'externalAction',
            targetObject: {
                externalAction: function() {
                    ok( true, 'External action was called' );
                }
            }
        }),
        $component = this.render();

    expect( 1 );
    $component.click();
});

test( 'Button supports disabled state', function() {
    var component  = this.subject(),
        $component = this.render();

    equal( $component.is( ':disabled' ), false );

    Ember.run( function() {
        component.set( 'disabled', true );
    });

    equal( $component.is( ':disabled' ), true );
});

/**
 * While it appears that core Ember functionality is being tested this test is ensuring
 * that the implied contract about which DOM element is rendered is adhered to.
 */
/*
test( 'Renders as a button tag', function() {
});

test( 'Expected default classes are applied', function() {
});

test( 'Labels are correctly initialized', function() {
});

test( 'sizeClass() returns correct values', function() {
});

test( 'themeClass() returns correct value', function() {
});
*/
