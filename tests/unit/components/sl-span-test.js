import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-span', 'Unit | Component | sl span', {
    needs: [ 'component:sl-loading-icon' ],

    unit: true
});

test( '"value" property is supported', function( assert ) {
    this.subject({ value: 'Test content' });

    assert.equal(
        Ember.$.trim( this.$().text() ),
        'Test content'
    );
});

test( 'If "loading" is true, sl-loading-icon component is displayed', function( assert ) {
    var component = this.subject();

    assert.equal(
        this.$( '.sl-loading-icon' ).length,
        0,
        'Loading icon is not present initially'
    );

    Ember.run( () => {
        component.set( 'loading', true );
    });

    assert.equal(
        this.$( '.sl-loading-icon' ).length,
        1,
        'Loading icon is present while span is loading'
    );
});

test( 'Inverse property applies to loading-icon', function( assert ) {
    var component = this.subject({ loading: true });

    assert.ok(
        this.$( '.sl-loading-icon' ).hasClass( 'sl-loading-icon-dark' ),
        'Loading icon is dark initially'
    );

    Ember.run( () => {
        component.set( 'inverse', true );
    });

    assert.ok(
        this.$( '.sl-loading-icon' ).hasClass( 'sl-loading-icon-light' ),
        'Loading icon is light when inverse'
    );
});
