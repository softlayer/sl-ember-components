import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-checkbox', 'Integration | Component | sl checkbox', {
    integration: true
});

test( 'Default rendered state', function( assert ) {
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

test( 'Tooltip properties are set correctly when title parameter is set', function( assert ) {
    const title = 'test title';

    this.set( 'title', title );

    this.render( hbs`
        {{sl-checkbox title=title}}
    ` );

    const data = this.$( '>:first-child' ).data();
    const tooltipData = data[ 'bs.tooltip' ];
    const options = tooltipData.getOptions();

    assert.strictEqual(
        tooltipData.enabled,
        true,
        'tooltip is enabled'
    );

    assert.strictEqual(
        tooltipData.getTitle(),
        title,
        'Title text is set correctly'
    );

    assert.strictEqual(
        options.trigger,
        'hover focus',
        'Default trigger is "hover focus"'
    );
});

test( 'Popover properties are set correctly when popover parameter is set', function( assert ) {
    const title = 'test title';
    const popover = 'popover text';

    this.set( 'title', title );
    this.set( 'popover', popover );

    this.render( hbs`
        {{sl-checkbox title=title popover=popover}}
    ` );

    const data = this.$( '>:first-child' ).data();
    const popoverData = data[ 'bs.popover' ];
    const options = popoverData.getOptions();

    assert.strictEqual(
        popoverData.enabled,
        true,
        'Popover is enabled'
    );

    assert.strictEqual(
        popoverData.getTitle(),
        title,
        'Popover title was set correctly'
    );

    assert.strictEqual(
        popoverData.getContent(),
        popover,
        'Popover text is set correctly'
    );

    assert.strictEqual(
        options.trigger,
        'click',
        'Default trigger is "click"'
    );
});
