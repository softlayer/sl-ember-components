import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-panel', 'Integration | Component | sl panel', {
    integration: true
});

test( 'Default classes are present', function( assert ) {
    this.render( hbs`
      {{#sl-panel}}
      {{/sl-panel}}
    ` );
    assert.ok(
        this.$( '>:first-child' ).hasClass( 'panel' ),
        'Default rendered component has class "panel"'
    );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'panel-default' ),
        'Default rendered component has class "panel-default"'
    );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sl-panel' ),
        'Default rendered component has class "sl-panel"'
    );
});

test( 'Valid heading value renders panel-heading', function( assert ) {
    this.render( hbs`
      {{#sl-panel}}
      {{/sl-panel}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.panel-heading' ).length,
        0,
        'Default rendered component has no .panel-heading'
    );

    this.render( hbs`
      {{#sl-panel heading="Test"}}
      {{/sl-panel}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.panel-heading' ).length,
        1,
        'Rendered component has panel-heading text'
    );
});

test( 'Loading state applies class name', function( assert ) {
    this.render( hbs`
      {{#sl-panel}}
      {{/sl-panel}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).hasClass( 'sl-loading' ),
        false,
        'Default rendered component does not have class "sl-loading"'
    );

    this.render( hbs`
      {{#sl-panel loading=true}}
      {{/sl-panel}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sl-loading' ),
        'Rendered component has class "sl-loading"'
    );
});
