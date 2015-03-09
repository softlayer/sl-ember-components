import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-progress-bar', 'Unit - component: sl-progress-bar' );

test( 'isLowPercentage is true when value < 50', function( assert ) {
    var component  = this.subject({ value: 40 }),
        $component = this.render();

    assert.ok( component.get( 'isLowPercentage' ) );
});

test( 'Has class for low percentage value', function( assert ) {
    var component  = this.subject({ value: 40 }),
        $component = this.render();

    assert.ok( $component.hasClass( 'sl-progress-bar-low-percentage' ) );
});

test( 'Width style string is set equal to the percentage value', function( assert ) {
    var randomValue = 100 * Math.random(),
        component   = this.subject({ value: randomValue }),
        $component  = this.render();

    assert.equal( component.get( 'styleString' ), 'width: ' + randomValue + '%;' );
});

test( 'themeClass is set correctly by theme property', function( assert ) {
    var component  = this.subject({ theme: 'danger' }),
        $component = this.render();

    assert.equal( component.get( 'themeClassName' ), 'progress-bar-danger' );
});

test( 'Has class "active" when animated set to true', function( assert ) {
    var component  = this.subject({ animated: true }),
        $component = this.render();

    assert.ok( $component.find( '.progress-bar' ).hasClass( 'active' ) );
});

test( 'Has class "progress-bar-striped" when striped set to true', function( assert ) {
    var component  = this.subject({ striped: true }),
        $component = this.render();

    assert.ok( $component.find( '.progress-bar' ).hasClass( 'progress-bar-striped' ) );
});
