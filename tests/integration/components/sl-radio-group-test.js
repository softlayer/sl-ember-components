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

test( 'Tooltip properties are set correctly when title parameter is set', function( assert ) {
    const title = 'test title';

    this.set( 'title', title );

    this.render( hbs`
        {{#sl-alert title=title}}
            Default info alert
        {{/sl-alert}}
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
        {{#sl-alert popover=popover}}
            Default info alert
        {{/sl-alert}}
    ` );

    let data = this.$( '>:first-child' ).data();
    let popoverData = data[ 'bs.popover' ];

    assert.strictEqual(
        popoverData.enabled,
        true,
        'Popover is enabled'
    );

    this.render( hbs`
        {{#sl-alert title=title popover=popover}}
            Default info alert
        {{/sl-alert}}
    ` );

    data = this.$( '>:first-child' ).data();
    popoverData = data[ 'bs.popover' ];
    const options = popoverData.getOptions();

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
