import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-radio', 'Integration | Component | sl radio', {
    integration: true
});

test( 'Default rendered state', function( assert ) {
    this.render( hbs`
        {{sl-radio}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'radio' ),
        'Has class "radio"'
    );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'form-group' ),
        'Has class "form-group"'
    );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sl-radio' ),
        'Has class "sl-radio"'
    );
});

test( 'Disabled state applies disabled class, and attribute to input', function( assert ) {
    this.render( hbs`
        {{sl-radio disabled=true}}
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
        {{sl-radio inline=true}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'radio-inline' ),
        'has class "radio-inline"'
    );

    assert.notOk(
        this.$( '>:first-child' ).hasClass( 'form-group' ),
        'inline radio does not have class "form-group"'
    );
});

test( 'name applies property to input', function( assert ) {
    this.render( hbs`
        {{sl-radio}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'input' ).prop( 'name' ),
        '',
        'Rendered input has empty name'
    );

    this.render( hbs`
        {{sl-radio name="testname"}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'input' ).prop( 'name' ),
        'testname',
        'Rendered input has name set'
    );
});
