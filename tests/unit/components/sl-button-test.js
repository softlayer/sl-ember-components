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

test( 'Renders as a button tag', function( assert ) {
    var component  = this.subject(),
        $component = this.render();

    assert.ok( $component.is( 'button' ), 'Is a <button>' );
});

test( 'Expected default classes are applied', function( assert ) {
    var component  = this.subject(),
        $component = this.render();

    assert.ok( $component.hasClass( 'btn' ), 'Has class "btn"' );
    assert.ok( $component.hasClass( 'sl-button' ), 'Has class "sl-button"' );
});

test( 'Labels are correctly initialized', function( assert ) {
    var component  = this.subject({ label: 'Test' }),
        $component = this.render();

    assert.equal( Ember.$.trim( $component.text() ), 'Test' );
});

test( 'sizeClass() returns correct values', function( assert ) {
    var component  = this.subject({ size: 'large' }),
        $component = this.render();

    assert.equal( component.get( 'sizeClass' ), 'btn-lg' );
});

test( 'themeClass() returns correct value', function( assert ) {
    var component  = this.subject({ theme: 'success' }),
        $component = this.render();

    assert.equal( component.get( 'themeClass' ), 'btn-success' );
});
