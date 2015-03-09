import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-loading-icon', 'Unit - component: sl-loading-icon' );

test( 'Default classes are set', function( assert ) {
    var component  = this.subject(),
        $component = this.render();

    assert.ok( $component.hasClass( 'sl-loading-icon' ), 'Has class "sl-loading-icon"' );
    assert.ok( $component.hasClass( 'sl-loading-icon-dark' ), 'Has class "sl-loading-icon-dark"' );
});

test( 'Inverse property uses light icon scheme', function( assert ) {
    var component  = this.subject({ inverse: true }),
        $component = this.render();

    assert.ok( $component.hasClass( 'sl-loading-icon-light' ), 'Has class "sl-loading-icon-light"' );
});
