import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-input', 'Integration | Component | sl input', {
    integration: true
});

test( 'Default rendered state', function( assert ) {
    this.render( hbs`
        {{sl-input}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).attr( 'data-trigger' ),
        'focus',
        'dataTrigger defaults to focus'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'input' ).prop( 'type' ),
        'text',
        'type defaults to text'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'input' ).prop( 'disabled' ),
        false,
        'disabled defaults to false'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'input' ).prop( 'name' ),
        '',
        'name defaults to empty string'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'input' ).prop( 'placeholder' ),
        '',
        'placeholder defaults to empty string'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'input' ).prop( 'readonly' ),
        false,
        'readonly defaults to false'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'input' ).prop( 'value' ),
        '',
        'value defaults to empty string'
    );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'form-group' ),
        'Has class "form-group"'
    );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sl-input' ),
        'Has class "sl-input"'
    );
});

test( 'Label is supported', function( assert ) {
    this.render( hbs`
        {{sl-input}}
    ` );

    assert.notOk(
        this.$( '>:first-child' ).hasClass( '.control-label' ),
        'control-label class is not rendered if label is not set'
    );

    this.render( hbs`
        {{sl-input label="Test label"}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.control-label' ).text().trim(),
        'Test label',
        'control-label is rendered when label is set'
    );
});

test( 'for attribute value on label matches id of input', function( assert ) {
    this.render( hbs`
        {{sl-input label="test label"}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'label' ).attr( 'for' ),
        this.$( '>:first-child' ).find( 'input' ).attr( 'id' ),
        'for value matches id of input'
    );
});

test( 'Optional property is supported', function( assert ) {
    this.render( hbs`
        {{sl-input label="Required" }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.text-info' ).length,
        0,
        'text-info is not rendered if optional is not set'
    );

    this.render( hbs`
        {{sl-input label="Optional" optional="true"}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.text-info' ).text().trim(),
        'Optional',
        'text-info renders optional when optional is set'
    );
});

test( 'Required property is supported', function( assert ) {
    this.render( hbs`
        {{sl-input label="Required" }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.text-danger' ).length,
        0,
        'text-danger is not rendered if required is not set'
    );

    this.render( hbs`
        {{sl-input label="Required" required="true"}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.text-danger' ).text().trim(),
        'Required',
        'text-danger renders required when required is set'
    );
});

test( 'type property is supported', function( assert ) {
    this.render( hbs`
        {{sl-input type="email"}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'input' ).prop( 'type' ),
        'email',
        'type property is supported'
    );
});

test( 'Click to edit input has the correct class', function( assert ) {
    this.render( hbs`
        {{sl-input clickToEdit="true"}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).find( 'input' ).hasClass( 'click-to-edit' ),
        'click-to-edit class is present upon clickToEdit set to true'
    );
});

test( 'disabled property is supported', function( assert ) {
    this.render( hbs`
        {{sl-input disabled="true"}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).find( 'input' ).prop( 'disabled' ),
        'disabled property is supported'
    );
});

test( 'Help text is displayed', function( assert ) {
    this.render( hbs`
        {{sl-input}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.help-block' ).length,
        0,
        'help-block is not rendered if required is not set'
    );

    this.render( hbs`
        {{sl-input helpText="help text"}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.help-block' ).text().trim(),
        'help text',
        'help-block renders helpText when helpText is set'
    );
});

test( 'Placeholder property is supported', function( assert ) {
    this.render( hbs`
        {{sl-input placeholder="placeholder"}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'input' ).prop( 'placeholder' ),
        'placeholder',
        'placeholder is rendered if placeholder is set'
    );
});

test( 'Readonly property is supported', function( assert ) {
    this.render( hbs`
        {{sl-input readonly="true"}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).find( 'input' ).prop( 'readonly' ),
        'readonly is set when readonly is true'
    );
});

test( 'Typeahead classes are present', function( assert ) {
    const colors = [
        'Black',
        'Yellow'
    ];
    this.set( 'suggestions', colors );

    this.render( hbs`
        {{sl-input suggestions=suggestions}}
    ` );

    assert.ok(
        this.$( '.twitter-typeahead' ),
        'twitter-typeahead class exists'
    );

    assert.ok(
        this.$( '.typeahead' ),
        'typeahead class exists'
    );

    assert.ok(
        this.$( '.tt-input' ),
        'tt-input class exists'
    );

    assert.ok(
        this.$( '.tt-menu' ),
        'tt-menu class exists'
    );

    assert.ok(
        this.$( '.tt-dataset' ),
        'tt-dataset class exists'
    );
});

test( 'name property is supported', function( assert ) {
    this.render( hbs`
        {{sl-input}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'input' ).prop( 'name' ),
        '',
        'Rendered input has empty name'
    );

    this.render( hbs`
        {{sl-input name="testname"}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'input' ).prop( 'name' ),
        'testname',
        'Rendered input has name set'
    );
});
