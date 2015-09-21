import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-textarea', 'Integration | Component | sl textarea', {
    integration: true
});

test( 'for attribute value on label matches id of textarea', function( assert ) {
    this.render( hbs`
        {{sl-textarea label="test label"}}
    ` );

    assert.equal(
        this.$( '>:first-child' ).find( 'label' ).attr( 'for' ),
        this.$( '>:first-child' ).find( 'textarea' ).attr( 'id' )
    );
});

test( '"spellcheck" property is supported', function( assert ) {
    this.render( hbs`
        {{#sl-textarea spellcheck=true}}
        {{/sl-textarea}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).attr( 'spellcheck' ),
        'true',
        'Textarea spellcheck attribute is expected value'
    );
});

test( '"spellcheck" property is supported with bound values', function( assert ) {
    this.set( 'spellcheck', true );
    this.render( hbs`
        {{#sl-textarea spellcheck=spellcheck}}
        {{/sl-textarea}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).attr( 'spellcheck' ),
        'true',
        'Textarea spellcheck attribute is expected value'
    );

    this.set( 'spellcheck', false );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).attr( 'spellcheck' ),
        'false',
        'Textarea spellcheck attribute is expected value'
    );
});

test( '"spellcheck" property defaults correctly', function( assert ) {
    this.render( hbs`
        {{#sl-textarea}}
        {{/sl-textarea}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).attr( 'spellcheck' ),
        'false',
        'Textarea spellcheck attribute default value is false'
    );
});
