import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-loading-icon', 'Integration | Component | sl loading icon', {
    integration: true
});

test( 'Default classes are set', function( assert ) {
    this.render( hbs`
        {{#sl-loading-icon}}
        {{/sl-loading-icon}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sl-loading-icon' ),
        'Has class "sl-loading-icon"'
    );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sl-loading-icon-dark' ),
        'Has class "sl-loading-icon-dark"'
    );

    assert.ok(
        this.$( '>:first-child' ).find( 'span#tagName' ),
        'tagName renders a span tag'
    );
});

test( 'Inverse property renders light icon scheme', function( assert ) {
    this.render( hbs`
        {{#sl-loading-icon}}
        {{/sl-loading-icon}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sl-loading-icon-dark' ),
        'Inverse renders default scheme "sl-loading-icon-dark" icon'
    );

    this.render( hbs`
        {{#sl-loading-icon inverse=true}}
        {{/sl-loading-icon}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sl-loading-icon-light' ),
        'Inverse true renders scheme "sl-loading-icon-light" icon'
    );
});
