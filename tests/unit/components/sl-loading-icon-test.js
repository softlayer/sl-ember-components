import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-loading-icon', 'Unit - component: sl-loading-icon' );

test( 'Default classes are set', function( assert ) {
    assert.ok(
        this.$().hasClass( 'sl-loading-icon' ),
        'Has class "sl-loading-icon"'
    );

    assert.ok(
        this.$().hasClass( 'sl-loading-icon-dark' ),
        'Has class "sl-loading-icon-dark"'
    );
});

test( 'Inverse property uses light icon scheme', function( assert ) {
    this.subject({ inverse: true });

    assert.ok(
        this.$().hasClass( 'sl-loading-icon-light' ),
        'Has class "sl-loading-icon-light"'
    );
});
