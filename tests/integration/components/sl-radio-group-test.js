import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import waitForPendingRunLoops from 'ember-test-helpers/wait';

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
        this.$( '>:first-child' ).find( '.text-info' ).length,
        0,
        '"optional" property does not set class "text-info"'
    );

    this.set( 'optionalTest', true );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.text-info' ).length,
        1,
        '"optional" property sets class "text-info"'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.text-info' ).text().trim(),
        'Optional',
        '"optional" property sets correct text inside HTML tag'
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
        this.$( '>:first-child' ).find( '.text-danger' ).length,
        0,
        '"required" property does not set class "text-danger"'
    );

    this.set( 'requiredTest', true );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.text-danger' ).length,
        1,
        '"required" property sets class "text-danger"'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.text-danger' ).text().trim(),
        'Required',
        '"required" property sets correct text inside HTML tag'
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
        this.$( '>:first-child' ).find( '.sl-ember-components-radio.radio' ).length,
        0,
        'Rendered component children buttons are not inline'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.sl-ember-components-radio.radio-inline' ).length,
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
        this.$( '>:first-child' ).find( '.sl-ember-components-radio.radio-inline' ).length,
        0,
        'Rendered component has zero inline radio buttons'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.sl-ember-components-radio.radio' ).length,
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

    return waitForPendingRunLoops().then( () => {
        assert.strictEqual(
            this.get( 'value' ),
            'eric',
            '"eric" value is selected'
        );
    });
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
