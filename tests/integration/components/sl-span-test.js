import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-span', 'Integration | Component | sl span', {
    integration: true
});

test( '"value" property is supported', function( assert ) {
    this.render( hbs`
        {{#sl-span value="Test content"}}
        {{/sl-span}}
    ` );

    assert.equal(
        this.$( '>:first-child' ).text().trim(),
        'Test content'
    );
});

test( 'If "loading" is true, sl-loading-icon component is displayed', function( assert ) {
    this.render( hbs`
        {{#sl-span}}
        {{/sl-span}}
    ` );

    assert.equal(
        this.$( '>:first-child' ).find( '.sl-loading-icon' ).length,
        0,
        'Loading icon is not present initially'
    );

    this.render( hbs`
        {{#sl-span loading=true}}
        {{/sl-span}}
    ` );

    assert.equal(
        this.$( '>:first-child' ).find( '.sl-loading-icon' ).length,
        1,
        'Loading icon is present while span is loading'
    );
});

test( 'Inverse property applies to loading-icon', function( assert ) {
    this.render( hbs`
        {{#sl-span loading=true}}
        {{/sl-span}}
    ` );

    assert.equal(
        this.$( '>:first-child' ).find( '.sl-loading-icon-dark' ).length,
        1,
        'Loading icon is dark initially'
    );

    this.render( hbs`
        {{#sl-span inverse=true loading=true}}
        {{/sl-span}}
    ` );

    assert.equal(
        this.$( '>:first-child' ).find( '.sl-loading-icon-light' ).length,
        1,
        'Loading icon is light when inverse'
    );
});
