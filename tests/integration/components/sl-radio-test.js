import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-radio', 'Integration | Component | sl radio', {
    integration: true
});

test( 'Disabled state applies disabled class, and attribute to input', function( assert ) {
    this.render( hbs`
        {{#sl-radio disabled=true}}
        {{/sl-radio}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).find( 'input' ).prop( 'disabled' ),
        'has attribute "disabled"'
    );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'disabled' ),
        'has class "disabled"'
    );
});

test( 'Inline property sets relevant class', function( assert ) {
    this.render( hbs`
        {{#sl-radio inline=true}}
        {{/sl-radio}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'radio-inline' ),
        'has class "radio-inline"'
    );
});
