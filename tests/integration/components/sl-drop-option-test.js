import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-drop-option', 'Integration | Component | sl drop option', {
    integration: true
});

test( 'Default rendered state', function( assert ) {
    this.render( hbs`
        {{sl-drop-option}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sl-drop-option' ),
        'Rendered component has class "sl-drop-option"'
    );

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

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'a' ).text().trim(),
        'test',
        'Hyperlink text is that of label value'
    );
});

test( 'if label is present and icon is set icon image tag is rendered with sample path', function( assert ) {
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

test( 'Action is wired into template hyperlink tag', function( assert ) {
    assert.expect( 1 );

    this.render( hbs`
        {{sl-drop-option action="testAction" label="test"}}
    ` );

    this.on( 'testAction', () => {
        assert.ok(
            true,
            'The test action was called'
        );
    });

    this.$( '>:first-child' ).find( 'a' ).click();
});
