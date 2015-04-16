import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-button', 'Unit - component: sl-button' );

test( 'Label changes for pending state', function( assert ) {
    var pendingText = 'Pending',
        staticText  = 'Static',
        component   = this.subject({
            pendingLabel : pendingText,
            label        : staticText
        });

    assert.equal(
        component.get( 'currentLabel' ),
        staticText,
        'Static text is set initially'
    );

    Ember.run( function() {
        component.set( 'pending', true );
    });

    assert.equal(
        component.get( 'currentLabel' ),
        pendingText,
        'Pending text is set while pending'
    );
});

test( 'The element fires event when clicked', function( assert ) {
    var component = this.subject({
            action: 'externalAction',
            targetObject: {
                externalAction: function() {
                    ok( true, 'External action was called' );
                }
            }
        });

    assert.expect( 1 );
    this.$().click();
});

test( 'Button supports disabled state', function( assert ) {
    var component  = this.subject();

    assert.strictEqual(
        this.$().is( ':disabled' ),
        false,
        'Component is disabled by default'
    );

    Ember.run( function() {
        component.set( 'disabled', true );
    });

    assert.strictEqual(
        this.$().is( ':disabled' ),
        true,
        'Component becomes disabled'
    );
});

/**
 * While it appears that core Ember functionality is being tested this test is
 * ensuring that the implied contract about which DOM element is rendered is
 * adhered to.
 */

test( 'Renders as a button tag', function( assert ) {
    assert.ok( this.$().is( 'button' ), 'Is a <button>' );
});

test( 'Expected default classes are applied', function( assert ) {
    assert.ok( this.$().hasClass( 'btn' ), 'Has class "btn"' );
    assert.ok( this.$().hasClass( 'sl-button' ), 'Has class "sl-button"' );
});

test( 'Labels are correctly initialized', function( assert ) {
    this.subject({ label: 'Test' });

    assert.equal(
        Ember.$.trim( this.$().text() ),
        'Test',
        'Expected label is present as text'
    );
});

test( 'sizeClass() returns correct values', function( assert ) {
    var component  = this.subject({ size: 'large' });

    assert.equal(
        component.get( 'sizeClass' ),
        'btn-lg',
        'sizeClass is expected value'
    );

    assert.ok(
        this.$().hasClass( 'btn-lg' ),
        'Has expected class "btn-lg"'
    );
});

test( 'themeClass() returns correct value', function( assert ) {
    var component  = this.subject({ theme: 'success' });

    assert.equal(
        component.get( 'themeClass' ),
        'btn-success',
        'themeClass is expected value'
    );

    assert.ok(
        this.$().hasClass( 'btn-success' ),
        'Has expected class "btn-success"'
    );
});
