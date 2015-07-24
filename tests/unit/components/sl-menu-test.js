import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-menu', 'Unit | Component | sl menu', {
    unit: true
});

test( 'Default property values', function( assert ) {
    this.subject();

    assert.ok(
        this.$().hasClass( 'sl-menu' ),
        'Has class "sl-menu"'
    );

    assert.ok(
        this.$().is( 'div' ),
        'Element is a <div>'
    );
});

/*
test( 'Actions are handled properly from menu items', function( assert ) {
    this.subject({

    });
});
// */
