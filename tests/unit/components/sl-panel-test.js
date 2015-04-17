import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-panel', 'Unit - component: sl-panel' );

test( 'Default classes are present', function( assert ) {
    var $component = this.render();

    assert.ok(
        $component.hasClass( 'panel' ),
        'Default rendered component has class "panel"'
    );

    assert.ok(
        $component.hasClass( 'panel-default' ),
        'Default rendered component has class "panel-default"'
    );

    assert.ok(
        $component.hasClass( 'sl-panel' ),
        'Default rendered component has class "sl-panel"'
    );
});

test( 'Loading state applies class name', function( assert ) {
    var component  = this.subject(),
        $component = this.render();

    assert.strictEqual(
        $component.hasClass( 'sl-loading' ),
        false,
        'Default rendered component does not have class "sl-loading"'
    );

    Ember.run( () => {
        component.set( 'loading', true );
    });

    assert.ok(
        $component.hasClass( 'sl-loading' ),
        'Rendered component has class "sl-loading"'
    );
});

test( 'Valid heading value renders panel-heading', function( assert ) {
    var component  = this.subject(),
        $component = this.render();

    assert.strictEqual(
        $component.find( '.panel-heading' ).length,
        0,
        'Default rendered component has no .panel-heading'
    );

    Ember.run( () => {
        component.set( 'heading', 'Test' );
    });

    assert.strictEqual(
        $component.find( '.panel-heading' ).length,
        1,
        'Rendered component has panel-heading text'
    );
});
