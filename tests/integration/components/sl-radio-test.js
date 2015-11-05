import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const defaultTemplate = hbs`
    {{sl-radio}}
`;

moduleForComponent( 'sl-radio', 'Integration | Component | sl radio', {
    integration: true
});

test( 'Default rendered state', function( assert ) {
    this.render( defaultTemplate );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sl-radio' ),
        'Has class "sl-radio"'
    );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'radio' ),
        'Has class "radio"'
    );

    assert.ok(
        this.$( '>:first-child' ).find( 'input[type="radio"]' ),
        'input type is set to "radio"'
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
});

test( 'name applies property to input', function( assert ) {
    this.render( defaultTemplate );

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

test( '"value" property is supported', function( assert ) {
    this.render( defaultTemplate );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'input' ).val(),
        'on',
        'input value set to default value of "on"'
    );

    this.set( 'valueTest', 'testValue' );

    this.render( hbs`
        {{sl-radio value=valueTest}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'input' ).val(),
        'testValue',
        '"value" is set'
    );
});

test( '"label" property is supported', function( assert ) {
    this.render( defaultTemplate );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'label' ).text().trim(),
        '',
        '"label" text is not set'
    );

    this.set( 'labelTest', 'testLabel' );

    this.render( hbs`
        {{sl-radio label=labelTest}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'label' ).text().trim(),
        'testLabel',
        '"label" text gets set'
    );
});
