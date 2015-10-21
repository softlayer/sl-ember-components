import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-input', 'Integration | Component | sl input', {
    integration: true
});

test( 'for attribute value on label matches id of input', function( assert ) {
    this.render( hbs`
        {{sl-input label="test label"}}
    ` );

    const wrapper = this.$( '>:first-child' );

    assert.strictEqual(
        wrapper.find( 'label' ).attr( 'for' ),
        wrapper.find( 'input' ).attr( 'id' )
    );
});

test( 'Click to edit input has the correct class', function( assert ) {
    this.render( hbs`
        {{sl-input clickToEdit="true"}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).find( 'input' ).hasClass( 'click-to-edit' )
    );
});

test( 'Input can be disabled', function( assert ) {
    this.render( hbs`
        {{sl-input disabled="true"}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).find( 'input' ).prop( 'disabled' )
    );
});

test( 'Help text is displayed', function( assert ) {
    this.set( 'helpText', 'Testing help text is displayed' );

    this.render( hbs`
        {{sl-input helpText=helpText}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.help-block' ).text().trim(),
        'Testing help text is displayed'
    );
});

test( 'Label text is displayed', function( assert ) {
    this.set( 'labelText', 'Testing test label text is displayed' );

    this.render( hbs`
        {{sl-input label=labelText}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.control-label' ).text().trim(),
        'Testing test label text is displayed'
    );
});

test( 'Label text is not displayed', function( assert ) {
    this.render( hbs`
        {{sl-input}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.control-label' ).length,
        0
    );
});

test( 'Placeholder property sets the placeholder for the input', function( assert ) {
    this.set( 'placeholder', 'placeholder' );

    this.render( hbs`
        {{sl-input placeholder=placeholder}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'input' ).prop( 'placeholder' ),
        this.$( '>:first-child' ).find( 'input' ).prop( 'placeholder' )
    );
});

test( 'Readonly property, makes the input readonly', function( assert ) {
    this.render( hbs`
        {{sl-input readonly="true"}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).find( 'input' ).prop( 'readonly' )
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
