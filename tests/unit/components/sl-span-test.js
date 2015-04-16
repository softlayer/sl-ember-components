import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-span', 'Unit - component: sl-span', {
    needs: [ 'component:sl-loading-icon' ]
});

test( '"value" property is supported', function( assert ) {
    var component  = this.subject({
        value: 'Test content'
    });

    assert.equal(
        Ember.$.trim( this.$().text() ),
        'Test content',
        "Rendered component's text is expected value"
    );
});

test( 'If "loading" is true, sl-loading-icon component is displayed', function( assert ) {
    var component  = this.subject({
        loading: true
    });

    assert.strictEqual(
        this.$( '.sl-loading-icon' ).length,
        1,
        'Loading icon is present'
    );
});
