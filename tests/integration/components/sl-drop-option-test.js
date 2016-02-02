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
});

test( 'ARIA role is set when "label" attribute is set', function( assert ) {
    this.render( hbs`
        {{sl-drop-option label="test"}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'a' ).attr( 'role' ),
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

test( '"label" attribute can be set with yielded content', function( assert ) {
    this.render( hbs`
        {{#sl-drop-option label="test"}}
            <i class="testClass"></i>
        {{/sl-drop-option}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'a' ).text().trim(),
        'test',
        '"label" attribute value is set'
    );

    assert.ok(
        this.$( '>:first-child' ).find( 'i' ).hasClass( 'testClass' ),
        'Content is yielded correctly'
    );
});

test( 'Content is yielded', function( assert ) {
    this.render( hbs`
        {{#sl-drop-option}}
            Some yielded text
        {{/sl-drop-option}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'a' ).text().trim(),
        'Some yielded text',
        'Content is yielded correctly'
    );
});

