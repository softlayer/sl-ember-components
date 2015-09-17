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

    const wrapper = this.$( '>:first-child' );

    assert.ok(
        wrapper.hasClass( 'sl-loading-icon' ),
        'Has class "sl-loading-icon"'
    );

    assert.ok(
        wrapper.hasClass( 'sl-loading-icon-dark' ),
        'Has class "sl-loading-icon-dark"'
    );
});

test( 'Inverse property uses light icon scheme', function( assert ) {
    this.render( hbs`
        {{#sl-loading-icon inverse=true}}
        {{/sl-loading-icon}}
    ` );

    const wrapper = this.$( '>:first-child' );

    assert.ok(
        wrapper.hasClass( 'sl-loading-icon-light' ),
        'Has class "sl-loading-icon-light"'
    );
});
