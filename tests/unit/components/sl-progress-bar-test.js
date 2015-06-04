import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-progress-bar', 'Unit | Component | sl-progress-bar', {
    unit: true
});

test( 'isLowPercentage is only true when value < 50', function( assert ) {
    var component = this.subject({ value: 49 });

    assert.ok(
        component.get( 'isLowPercentage' ),
        'Value < 50 is low percentage'
    );

    Ember.run( function() {
        component.set( 'value', 50 );
    });

    assert.strictEqual(
        component.get( 'isLowPercentage' ),
        false,
        'Value >= 50 is not low percentage'
    );
});

test( 'Has class for low percentage value', function( assert ) {
    this.subject({ value: 40 });

    assert.ok(
        this.$().hasClass( 'sl-progress-bar-low-percentage' ),
        'Has class "sl-progress-bar-low-percentage"'
    );
});

test( 'Width style string is set equal to the percentage value', function( assert ) {
    var randomValue = 100 * Math.random(),
        component = this.subject({ value: randomValue });

    assert.equal(
        component.get( 'styleString' ),
        'width: ' + randomValue + '%;',
        'Style string has correct width value'
    );
});

test( 'themeClass is set correctly by theme property', function( assert ) {
    var component = this.subject({ theme: 'danger' });

    assert.equal(
        component.get( 'themeClassName' ),
        'progress-bar-danger',
        'themeClassName has expected value'
    );

    assert.ok(
        this.$( '.progress-bar' ).hasClass( 'progress-bar-danger' ),
        'Has expected class on element'
    );
});

test( 'Has class "active" when animated set to true', function( assert ) {
    this.subject({ animated: true });

    assert.ok( this.$( '.progress-bar' ).hasClass( 'active' ), 'Is active' );
});

test( 'Has class "progress-bar-striped" when striped set to true', function( assert ) {
    this.subject({ striped: true });

    assert.ok(
        this.$( '.progress-bar' ).hasClass( 'progress-bar-striped' ),
        'Progress bar has class "progress-bar-striped"'
    );
});
