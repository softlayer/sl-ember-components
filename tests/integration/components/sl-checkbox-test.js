import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-checkbox', 'Integration | Component | sl checkbox', {
    integration: true
});

test( 'Defaults applied correctly', function( assert ) {
    this.render( hbs`
        {{sl-checkbox}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'checkbox' ),
        'Has class "checkbox"'
    );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'form-group' ),
        'Has class "form-group"'
    );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sl-checkbox' ),
        'Has class "sl-checkbox"'
    );
});

test( 'Disabled state applies class and disables input', function( assert ) {
    this.render( hbs`
        {{sl-checkbox}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).hasClass( 'disabled' ),
        false,
        'Initially does not have class "disabled"'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'input' ).prop( 'disabled' ),
        false,
        'Rendered input is initially enabled'
    );

    this.render( hbs`
        {{sl-checkbox disabled=true}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).hasClass( 'disabled' ),
        true,
        'Has class "disabled"'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'input' ).prop( 'disabled' ),
        true,
        'Rendered input is disabled'
    );
});

test( 'Checked state applies property to input', function( assert ) {
    this.render( hbs`
        {{sl-checkbox}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'input' ).prop( 'checked' ),
        false,
        'Rendered input is not checked'
    );

    this.render( hbs`
        {{sl-checkbox checked=true}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'input' ).prop( 'checked' ),
        true,
        'Rendered input is checked'
    );
});
