import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-radio-group', 'Integration | Component | sl radio group', {
    integration: true
});

test( 'The disabled state applies the disabled attribute and class', function( assert ) {
    this.render( hbs`
        {{#sl-radio-group disabled=true name="testName"}}
        {{/sl-radio-group}}
    ` );

    assert.equal(
        this.$( '.sl-radio-group' ).attr( 'disabled' ),
        'disabled',
        'has "disabled" attribute'
    );

    assert.ok(
        this.$( '.sl-radio-group' ).hasClass( 'disabled' ),
        'has "disabled" class'
    );
});

test( 'The disabled state applies to sl-radio children', function( assert ) {
    this.render( hbs`
        {{#sl-radio-group disabled=true name="testName"}}
            {{#sl-radio label="One" value="one"}}
            {{/sl-radio}}
            {{#sl-radio label="Two" value="two"}}
            {{/sl-radio}}
            {{#sl-radio label="Three" value="three"}}
            {{/sl-radio}}
        {{/sl-radio-group}}
    ` );

    assert.equal(
        this.$( 'input[disabled]' ).length,
        3,
        'Rendered component has three disabled inputs'
    );
});

test( 'The readonly state applies to sl-radio children', function( assert ) {
    this.render( hbs`
        {{#sl-radio-group readonly=true name="testName"}}
            {{#sl-radio label="One" value="one"}}
            {{/sl-radio}}
            {{#sl-radio label="Two" value="two"}}
            {{/sl-radio}}
            {{#sl-radio label="Three" value="three"}}
            {{/sl-radio}}
        {{/sl-radio-group}}
    ` );

    assert.equal(
        this.$( 'input[readonly]' ).length,
        3,
        'Rendered component has three readonly inputs'
    );
});

test( "Inline true sets sl-radio children's inline property to true", function( assert ) {
    this.render( hbs`
        {{#sl-radio-group inline=true name="testName"}}
            {{#sl-radio label="One" value="one"}}
            {{/sl-radio}}
            {{#sl-radio label="Two" value="two"}}
            {{/sl-radio}}
            {{#sl-radio label="Three" value="three"}}
            {{/sl-radio}}
        {{/sl-radio-group}}
    ` );

    assert.equal(
        this.$( '.sl-radio.radio' ).length,
        0,
        'Rendered component children buttons are not inline'
    );

    assert.equal(
        this.$( '.sl-radio.radio-inline' ).length,
        3,
        'Rendered component children buttons are inline'
    );
});

test( "Inline false sets sl-radio children's inline property to false", function( assert ) {
    this.render( hbs`
        {{#sl-radio-group inline=false name="testName"}}
            {{#sl-radio label="One" value="one"}}
            {{/sl-radio}}
            {{#sl-radio label="Two" value="two"}}
            {{/sl-radio}}
            {{#sl-radio label="Three" value="three"}}
            {{/sl-radio}}
        {{/sl-radio-group}}
    ` );

    assert.equal(
        this.$( '.sl-radio.radio-inline' ).length,
        0,
        'Rendered component has zero inline radio buttons'
    );

    assert.equal(
        this.$( '.sl-radio.radio' ).length,
        3,
        'Rendered component has three default (non-inline) radio buttons'
    );
});

test( 'Value changes when sl-radio child selected', function( assert ) {
    this.set( 'value', 'jeremy' );
    this.render( hbs`
        {{#sl-radio-group value=value name="testName"}}
            {{#sl-radio label="One" value="eric"}}
            {{/sl-radio}}
            {{#sl-radio label="Two" value="josh"}}
            {{/sl-radio}}
            {{#sl-radio label="Three" value="michael"}}
            {{/sl-radio}}
        {{/sl-radio-group}}
    ` );

    Ember.run( () => {
        const $radioButton = this.$( 'input[value="eric"]' );
        $radioButton.click();
    });

    assert.equal(
        this.get( 'value' ),
        'eric',
        '"eric" value is selected'
    );

    Ember.run( () => {
        const $radioButton = this.$( 'input[value="josh"]' );
        $radioButton.click();
    });

    assert.equal(
        this.get( 'value' ),
        'josh',
        '"josh" value is selected'
    );
});

test( 'default Value gets selected by default', function( assert ) {
    this.set( 'value', 'eric' );
    this.render( hbs`
        {{#sl-radio-group value=value name="testName"}}
            {{#sl-radio label="One" value="eric"}}
            {{/sl-radio}}
            {{#sl-radio label="Two" value="josh"}}
            {{/sl-radio}}
            {{#sl-radio label="Three" value="michael"}}
            {{/sl-radio}}
        {{/sl-radio-group}}
    ` );

    assert.equal(
        this.$( 'input[name="testName"]:checked' ).val(),
        'eric',
        'The value "eric" that is set is selected by default'
    );
});