import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-drop-button', 'Integration | Component | sl drop button', {
    integration: true
});

test( 'Default classes are present', function( assert ) {
    this.render( hbs`
      {{sl-drop-button}}
    ` );

    assert.ok(
         this.$( '>:first-child' ).hasClass( 'btn-group' ),
        'Has class "btn-group"'
    );

    assert.ok(
         this.$( '>:first-child' ).hasClass( 'dropdown' ),
        'Has class "dropdown"'
    );

    assert.ok(
         this.$( '>:first-child' ).hasClass( 'sl-drop-button' ),
        'Has class "sl-drop-button"'
    );
});

test( 'Theme property applies theme class', function( assert ) {
    this.render( hbs`
      {{sl-drop-button}}
    ` );

    assert.ok(
         this.$( '>:first-child' ).hasClass( 'dropdown-default' ),
        'Default rendered drop-button has class "dropdown-default"'
    );

    this.set( 'theme', 'danger' );
    this.render( hbs`
      {{sl-drop-button theme=theme}}
    ` );

    assert.ok(
         this.$( '>:first-child' ).hasClass( 'dropdown-danger' ),
        'Rendered drop-button has new theme class'
    );
});

test( 'Icon class property is supported', function( assert ) {
    this.render( hbs`
      {{sl-drop-button label="test"}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'span' ).hasClass( 'caret' ),
        true,
        'Default component has iconClass "caret"'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'span.caret' ).length,
        1,
        'Default rendered component includes caret icon span'
    );

    this.render( hbs`
      {{sl-drop-button label="test" iconClass="test"}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'span.test' ).length,
        1,
        'Rendered component includes test icon span'
    );
});

test( 'Content is yielded when label is not set', function( assert ) {
    this.render( hbs`
        {{#sl-drop-button}}
           <div class="test"></div>
        {{/sl-drop-button}}`
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.test' ).length,
        1
    );
});

test( 'Click action triggers bound action', function( assert ) {
    assert.expect( 1 );

    this.render( hbs`
        {{#sl-drop-button}}
            {{sl-drop-option action="testAction" label="red"}}
            {{sl-drop-option action="testActionTwo" label="blue"}}
        {{/sl-drop-button}}
    ` );

    this.on( 'testAction', () => {
        assert.ok(
            true,
            'The test action was called'
        );
    });

    this.$( '>:first-child' ).find( 'a:contains("red")' ).click();
});
