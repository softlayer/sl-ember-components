import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-drop-option', 'Integration | Component | sl drop option', {
    integration: true
});

test( 'Has expected initial class name', function( assert ) {
    this.render( hbs`
        {{#sl-drop-option}}
        {{/sl-drop-option}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sl-drop-option' ),
        'Rendered component has class "sl-drop-option"'
    );

    assert.ok(
        this.$( '>:first-child' ).find( 'li#tagName' ),
        'Rendered componenet has the correct "li" tag'
    );
});

test( 'Has expected aria-role property', function( assert ) {
    this.render( hbs`
        {{#sl-drop-option}}
        {{/sl-drop-option}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).attr( 'role' ),
        'menuitem',
        'ARIA role is properly set to "menuitem"'
    );
});

test( 'Option type class value depends on `label` value', function( assert ) {
    this.render( hbs`
        {{#sl-drop-option}}
        {{/sl-drop-option}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).hasClass( 'presentation' ),
        false,
        'Rendered component initially does not have class "presentation"'
    );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'divider' ),
        'Rendered component initially has class "divider"'
    );

    this.render( hbs`
        {{#sl-drop-option label="test"}}
        {{/sl-drop-option}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).hasClass( 'divider' ),
        false,
        'Rendered component does not have class "divider"'
    );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'presentation' ),
        'Rendered compnonet has class "presentation" with valid "label" value'
    );
});