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

test( 'Content is yielded', function( assert ) {
    this.render( hbs`
        {{#sl-span}}
            Some yielded text
        {{/sl-span}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).text().trim(),
        'Some yielded text',
        'Content yields successfully'
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

test( 'loading property applies loading class', function( assert ) {
    this.render( hbs`
        {{sl-span}}
    ` );

    assert.notOk(
        this.$( '>:first-child' ).hasClass( 'sl-loading' ),
        'Component does not have class "sl-loading"'
    );

    this.render( hbs`
        {{sl-span loading=true}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sl-loading' ),
        'Component has class "sl-loading"'
    );
});

test( 'inverse property applies inverse class', function( assert ) {
    this.render( hbs`
        {{sl-span}}
    ` );

    assert.notOk(
        this.$( '>:first-child' ).hasClass( 'inverse' ),
        'Component does not have class "inverse"'
    );

    this.render( hbs`
        {{sl-span inverse=true}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'inverse' ),
        'Component has class "inverse"'
    );
});
