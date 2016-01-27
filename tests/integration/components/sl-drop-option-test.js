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
        'separator',
        'ARIA role is properly set to "separator"'
    );
});

test( 'divider class depends on `label` value', function( assert ) {
    this.render( hbs`
        {{sl-drop-option}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'divider' ),
        'Rendered component initially has class "divider"'
    );

    this.render( hbs`
        {{sl-drop-option label="test"}}
    ` );

    assert.notOk(
        this.$( '>:first-child' ).hasClass( 'divider' ),
        'Rendered component does not have class "divider"'
    );
});

test( 'aria-role properly set for non-separator', function( assert ) {
    this.render( hbs`
        {{sl-drop-option label="test"}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).attr( 'role' ),
        'menuitem',
        'ARIA role is properly set to "menuitem"'
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

test( 'Action is wired into template hyperlink tag', function( assert ) {
    assert.expect( 1 );

    const done = assert.async();

    this.render( hbs`
        {{sl-drop-option action="testAction" label="test"}}
    ` );

    this.on( 'testAction', () => {
        assert.ok(
            true,
            'The test action was called'
        );

        done();
    });

    this.$( '>:first-child' ).find( 'a' ).click();
});
