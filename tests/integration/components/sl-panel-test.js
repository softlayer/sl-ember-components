import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-panel', 'Integration | Component | sl panel', {
    integration: true
});

test( 'Default classes are present', function( assert ) {
    this.render( hbs`
        {{sl-panel}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'panel' ),
        'Default rendered component has class "panel"'
    );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'panel-default' ),
        'Default rendered component has class "panel-default"'
    );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sl-panel' ),
        'Default rendered component has class "sl-panel"'
    );

    assert.ok(
        this.$( '>:first-child' ).find( 'panel-body' ),
        'Default rendered component has class "panel-body"'
    );

    assert.ok(
        this.$( '>:first-child' ).find( 'sl-maskable-content' ),
        'Default rendered component has class "sl-maskable-content"'
    );

    assert.ok(
        this.$( '>:first-child' ).find( 'sl-mask' ),
        'Default rendered component has class "sl-mask"'
    );
});

test( 'Valid structure rendered for sl-panel', function( assert ) {
    this.render( hbs`
        {{sl-panel}}
    ` );

    const component = this.$( '>:first-child' );

    assert.strictEqual(
      component.children()[0].className,
      'panel-body',
      'Parent node rendered is "panel-body"'
    );

    assert.strictEqual(
      component.children().children()[0].className,
      'sl-maskable-content',
      'First child of Parent Node rendered is "sl-maskable-content"'
    );

    assert.strictEqual(
      component.children().children()[1].className,
      'sl-mask',
      'Second child of Parent Node rendered is "sl-mask"'
    );
});

test( 'Valid heading value renders panel-heading', function( assert ) {
    this.render( hbs`
        {{sl-panel}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.panel-heading' ).length,
        0,
        'Default rendered component has no .panel-heading'
    );

    this.render( hbs`
        {{sl-panel heading="Test"}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.panel-heading' ).length,
        1,
        'Rendered component has panel-heading text'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.panel-heading' ).text(),
        'Test',
        'Text of rendered heading is equal to value passed to it'
    );
});

test( 'Loading state applies class name', function( assert ) {
    this.render( hbs`
        {{sl-panel}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).hasClass( 'sl-loading' ),
        false,
        'Default rendered component does not have class "sl-loading"'
    );

    this.render( hbs`
        {{sl-panel loading=true}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sl-loading' ),
        'Rendered component has class "sl-loading"'
    );
});

test( 'Content is yielded', function( assert ) {
    this.render( hbs`
        {{#sl-panel}}
            <div class="test"></div>
        {{/sl-panel}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.test' ).length,
        1,
        'Content yields successfully'
    );
});
