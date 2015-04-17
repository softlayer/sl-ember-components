import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-panel', 'Unit - component: sl-panel' );

test( 'Default classes are present', function( assert ) {
    assert.ok(
        this.$().hasClass( 'panel' ),
        'Default rendered component has class "panel"'
    );

    assert.ok(
        this.$().hasClass( 'panel-default' ),
        'Default rendered component has class "panel-default"'
    );

    assert.ok(
        this.$().hasClass( 'sl-panel' ),
        'Default rendered component has class "sl-panel"'
    );
});

test( 'Loading state applies class name', function( assert ) {
    var component = this.subject();

    assert.strictEqual(
        this.$().hasClass( 'sl-loading' ),
        false,
        'Default rendered component does not have class "sl-loading"'
    );

    Ember.run( () => {
        component.set( 'loading', true );
    });

    assert.ok(
        this.$().hasClass( 'sl-loading' ),
        'Rendered component has class "sl-loading"'
    );
});

test( 'Valid heading value renders panel-heading', function( assert ) {
    var component = this.subject();

    assert.strictEqual(
        this.$().find( '.panel-heading' ).length,
        0,
        'Default rendered component has no .panel-heading'
    );

    Ember.run( () => {
        component.set( 'heading', 'Test' );
    });

    assert.strictEqual(
        this.$().find( '.panel-heading' ).length,
        1,
        'Rendered component has panel-heading text'
    );
});
