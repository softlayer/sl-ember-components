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
        this.$( '>:first-child' ).text().trim(),
        '',
        '"value" defaults to null'
    );
});

test( '"value" property is supported', function( assert ) {
    this.render( hbs`
        {{sl-span value="value text"}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).text().trim(),
        'value text',
        '"value" text is displayed'
    );
});

test( 'If "loading" is true, sl-loading-icon component is displayed', function( assert ) {
    this.render( hbs`
        {{sl-span}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.loading-icon' ).length,
        0,
        'Loading icon is not present initially'
    );

    this.render( hbs`
        {{sl-span loading=true}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.loading-icon' ).length,
        1,
        'Loading icon is present while span is loading'
    );
});

test( 'Inverse property applies to loading-icon', function( assert ) {
    this.render( hbs`
        {{sl-span loading=true}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.loading-icon-dark' ).length,
        1,
        'Loading icon is dark initially'
    );

    this.render( hbs`
        {{sl-span inverse=true loading=true}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.loading-icon-light' ).length,
        1,
        'Loading icon is light when inverse'
    );
});
