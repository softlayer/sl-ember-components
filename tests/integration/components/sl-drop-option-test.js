import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-drop-option', 'Integration | Component | sl drop option', {
    integration: true
});

test( 'Has expected initial class name', function( assert ) {
    this.render( hbs`
        {{sl-drop-option}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sl-drop-option' ),
        'Rendered component has class "sl-drop-option"'
    );

    assert.ok(
        this.$( '>:first-child' ).find( 'li' ),
        'Rendered componenet has the correct "li" tag'
    );
});

test( 'Has expected aria-role property', function( assert ) {
    this.render( hbs`
        {{sl-drop-option}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).attr( 'role' ),
        'menuitem',
        'ARIA role is properly set to "menuitem"'
    );
});

test( 'Option type class value depends on `label` value', function( assert ) {
    this.render( hbs`
        {{sl-drop-option}}
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
        {{sl-drop-option label="test"}}
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

test( 'label is present thus hyperlink tag is rendered', function( assert ) {
    this.render( hbs`
        {{sl-drop-option}}
    ` );

    assert.notOk(
        this.$( '>:first-child' ).find( 'a' ).attr( 'role' ),
        'Hyperlink is not rendered if label is not set'
    );

    this.render( hbs`
        {{sl-drop-option label="test"}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'a' ).attr( 'role' ),
        'menuitem',
        'Hyperlink is rendered if label is set'
    );
});

test( 'if label is present and icon is set icon image tag is renedred with sample path', function( assert ) {
    this.render( hbs`
        {{sl-drop-option label="test"}}
    ` );

    assert.notOk(
        this.$( '>:first-child' ).find( 'img' ).attr( 'src' ),
        'Icon is not present thus img tag not set'
    );

    this.render( hbs`
        {{sl-drop-option label="test" icon="testDir/testImg.jpeg"}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'img' ).attr( 'src' ),
        'testDir/testImg.jpeg',
        'Icon is present with correct path and img tag is rendered with same path'
    );
});