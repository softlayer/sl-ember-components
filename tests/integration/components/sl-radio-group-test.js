import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-radio-group', 'Integration | Component | sl radio group', {
    integration: true
});

test( 'Default rendered state', function( assert ) {
    this.render( hbs`
        {{#sl-radio-group name="testName"}}
        {{/sl-radio-group}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'form-group' ),
        'Has class "form-group"'
    );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sl-radio-group' ),
        'Has class "sl-radio-group"'
    );
});

test( 'The disabled state applies the disabled attribute and class', function( assert ) {
    this.render( hbs`
        {{#sl-radio-group disabled=true name="testName"}}
        {{/sl-radio-group}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).attr( 'disabled' ),
        'disabled',
        'has "disabled" attribute'
    );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'disabled' ),
        'has "disabled" class'
    );
});

test( 'The disabled state applies to sl-radio children', function( assert ) {
    this.render( hbs`
        {{#sl-radio-group disabled=true name="testName"}}
            {{sl-radio label="One" value="one"}}
            {{sl-radio label="Two" value="two"}}
            {{sl-radio label="Three" value="three"}}
        {{/sl-radio-group}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'input[disabled]' ).length,
        3,
        'Rendered component has three disabled inputs'
    );
});

test( 'The "name" property applies the name attribute to sl-radio children', function( assert ) {
    this.render( hbs`
        {{#sl-radio-group name="testName"}}
            {{sl-radio label="One" value="one"}}
            {{sl-radio label="Two" value="two"}}
            {{sl-radio label="Three" value="three"}}
        {{/sl-radio-group}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'input[name="testName"]' ).length,
        3,
        'input has "name" attribute set to correcly passed "name" property'
    );
});

test( '"label" property is supported', function( assert ) {
    this.render( hbs`
        {{#sl-radio-group
            name="testName"
            label="testLabel"
        }}
        {{/sl-radio-group}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'label' ).text().trim(),
        'testLabel',
        '"label" property sets text inside HTML label tag'
    );
});

test( '"optional" property is supported', function( assert ) {
    this.set( 'optionalTest', false );

    this.render( hbs`
        {{#sl-radio-group
            name="testName"
            label="testLabel"
            optional=optionalTest
        }}
        {{/sl-radio-group}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'label' ).find( 'small' ).length,
        0,
        '"optional" property does not add HTML small tag'
    );

    this.set( 'optionalTest', true );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'label' ).find( 'small' ).length,
        1,
        '"optional" property adds HTML small tag'
    );

    assert.ok(
        this.$( '>:first-child' ).find( 'label' ).find( 'small' ).hasClass( 'text-info' ),
        '"optional" property sets class "text-info" on HTML small tag'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'label' ).find( 'small' ).text().trim(),
        'Optional',
        '"optional" property sets correct text inside HTML small tag'
    );
});

test( '"required" property is supported', function( assert ) {
    this.set( 'requiredTest', false );

    this.render( hbs`
        {{#sl-radio-group
            name="testName"
            label="testLabel"
            required=requiredTest
        }}
        {{/sl-radio-group}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'label' ).find( 'small' ).length,
        0,
        '"required" property does not add HTML small tag'
    );

    this.set( 'requiredTest', true );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'label' ).find( 'small' ).length,
        1,
        '"required" property adds HTML small tag'
    );

    assert.ok(
        this.$( '>:first-child' ).find( 'label' ).find( 'small' ).hasClass( 'text-danger' ),
        '"required" property sets class "text-danger" on HTML small tag'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'label' ).find( 'small' ).text().trim(),
        'Required',
        '"required" property sets correct text inside HTML small tag'
    );
});

test( "Inline true sets sl-radio children's inline property to true", function( assert ) {
    this.render( hbs`
        {{#sl-radio-group inline=true name="testName"}}
            {{sl-radio label="One" value="one"}}
            {{sl-radio label="Two" value="two"}}
            {{sl-radio label="Three" value="three"}}
        {{/sl-radio-group}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.sl-radio.radio' ).length,
        0,
        'Rendered component children buttons are not inline'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.sl-radio.radio-inline' ).length,
        3,
        'Rendered component children buttons are inline'
    );
});

test( "Inline false sets sl-radio children's inline property to false", function( assert ) {
    this.render( hbs`
        {{#sl-radio-group inline=false name="testName"}}
            {{sl-radio label="One" value="one"}}
            {{sl-radio label="Two" value="two"}}
            {{sl-radio label="Three" value="three"}}
        {{/sl-radio-group}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.sl-radio.radio-inline' ).length,
        0,
        'Rendered component has zero inline radio buttons'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.sl-radio.radio' ).length,
        3,
        'Rendered component has three default (non-inline) radio buttons'
    );
});

test( 'Value changes when sl-radio child selected', function( assert ) {
    this.set( 'value', 'jeremy' );
    this.render( hbs`
        {{#sl-radio-group value=value name="testName"}}
            {{sl-radio label="One" value="eric"}}
            {{sl-radio label="Two" value="josh"}}
            {{sl-radio label="Three" value="michael"}}
        {{/sl-radio-group}}
    ` );

    Ember.run( () => {
        const radioButton = this.$( '>:first-child' ).find( 'input[value="eric"]' );
        radioButton.click();
    });

    assert.strictEqual(
        this.get( 'value' ),
        'eric',
        '"eric" value is selected'
    );
});

test( 'Default value gets selected by default', function( assert ) {
    this.set( 'value', 'josh' );
    this.render( hbs`
        {{#sl-radio-group value=value name="testName"}}
            {{sl-radio label="One" value="eric"}}
            {{sl-radio label="Two" value="josh"}}
            {{sl-radio label="Three" value="michael"}}
        {{/sl-radio-group}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'input[name="testName"]:checked' ).val(),
        'josh',
        'The value "josh" that is set is selected by default'
    );
});

test( 'Yielded content passes through', function( assert ) {

    this.render( hbs`
        {{#sl-radio-group name="testName"}}
            A content
        {{/sl-radio-group}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).text().trim(),
        'A content',
        'Expected content is present'
    );
});
