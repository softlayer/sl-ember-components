import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-panel', 'Integration | Component | sl panel', {
    integration: true
});

test( 'Default rendered state', function( assert ) {
    this.render( hbs`
        {{sl-panel}}
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

    assert.strictEqual(
        this.$( '>:first-child' ).find( '> .panel-body' ).length,
        1,
        'Default rendered component has child with class "panel-body"'
    );

    const panelBody = this.$( '>:first-child' ).find( '> .panel-body' );

    assert.strictEqual(
        panelBody.find( '> .sl-maskable-content' ).length,
        1,
        'Default rendered component has child with class "sl-maskable-content"'
    );

    assert.strictEqual(
        panelBody.find( '> .sl-mask' ).length,
        1,
        'Default rendered component has child with class "sl-mask"'
    );
});

test( 'Valid heading value renders panel-heading', function( assert ) {
    this.render( hbs`
        {{sl-panel heading="Test"}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.panel-heading' ).length,
        1,
        'Rendered component has panel-heading text'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.panel-heading' ).text(),
        'Test',
        'Text of rendered heading is equal to value passed to it'
    );
});

test( 'Loading state applies class name', function( assert ) {
    this.render( hbs`
        {{sl-panel loading=true}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sl-loading' ),
        'Rendered component has class "sl-loading"'
    );
});

test( 'Content is yielded', function( assert ) {
    this.render( hbs`
        {{#sl-panel}}
            <div class="yield-test"></div>
        {{/sl-panel}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.yield-test' ).length,
        1,
        'Content yields successfully'
    );
});
