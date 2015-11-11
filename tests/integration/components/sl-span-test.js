import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-span', 'Integration | Component | sl span', {
    integration: true
});

test( 'Default rendered state', function( assert ) {
    this.render( hbs`
        {{sl-span}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).hasClass( '.sl-loading-icon-dark' ),
        false,
        'sl-loading-icon-dark is not rendered intially with default inverse property'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).hasClass( '.sl-loading-icon-light' ),
        false,
        'sl-loading-icon-light is not rendered intially with default inverse property'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).hasClass( '.sl-loading-icon' ),
        false,
        'sl-loading-icon is not rendered intially with default loading property'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).text().trim(),
        '',
        'Value defaults to null'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).prop( 'tagName' ),
        'SPAN',
        'tagName propety defaults to "span"'
    );
});

test( '"value" property is supported', function( assert ) {
    this.render( hbs`
        {{sl-span value="Test content"}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).text().trim(),
        'Test content'
    );
});

test( '"loading" property is supported', function( assert ) {
    this.render( hbs`
        {{sl-span loading=true}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.sl-loading-icon' ).length,
        1,
        'Loading icon is present while span is loading'
    );
});

test( '"Inverse" property is supported', function( assert ) {
    this.render( hbs`
        {{sl-span loading=true}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.sl-loading-icon-dark' ).length,
        1,
        'Loading icon is dark initially'
    );

    this.render( hbs`
        {{sl-span inverse=true loading=true}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.sl-loading-icon-light' ).length,
        1,
        'Loading icon is light when inverse'
    );
});
