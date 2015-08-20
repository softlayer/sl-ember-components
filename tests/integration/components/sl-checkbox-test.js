import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sl-checkbox', 'Integration | Component | sl checkbox', {
    integration: true
});

test( 'Defaults applied correctly', function( assert ) {
    this.render( hbs`
        {{#sl-checkbox}}
        {{/sl-checkbox}}
    ` );

    assert.ok(
        this.$( '.sl-checkbox' ).hasClass( 'checkbox' ),
        'Has class "checkbox"'
    );

    assert.ok(
        this.$( '.sl-checkbox' ).hasClass( 'form-group' ),
        'Has class "form-group"'
    );

    assert.ok(
        this.$( '.sl-checkbox' ).hasClass( 'sl-checkbox' ),
        'Has class "sl-checkbox"'
    );
});

test( 'Disabled state applies class and disables input', function( assert ) {
    this.render( hbs`
        {{#sl-checkbox}}
        {{/sl-checkbox}}
    ` );

    assert.strictEqual(
        this.$( 'input' ).hasClass( 'disabled' ),
        false,
        'Initially does not have class "disabled"'
    );

    assert.strictEqual(
        this.$( 'input' ).prop( 'disabled' ),
        false,
        'Rendered input is initially enabled'
    );

    this.render( hbs`
        {{#sl-checkbox disabled=true}}
        {{/sl-checkbox}}
    ` );

    assert.strictEqual(
        this.$( 'input' ).prop( 'disabled' ),
        true,
        'Rendered input is disabled'
    );
});

test( 'Checked state applies property to input', function( assert ) {
    this.render( hbs`
        {{#sl-checkbox}}
        {{/sl-checkbox}}
    ` );

    assert.strictEqual(
        this.$( 'input' ).prop( 'checked' ),
        false,
        'Rendered input is not checked'
    );

    this.render( hbs`
        {{#sl-checkbox checked=true}}
        {{/sl-checkbox}}
    ` );

    assert.strictEqual(
        this.$( 'input' ).prop( 'checked' ),
        true,
        'Rendered input is checked'
    );
});
