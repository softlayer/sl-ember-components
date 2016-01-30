import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import { skip } from 'qunit';

const defaultTemplate = hbs`
    {{sl-date-picker}}
`;

moduleForComponent( 'sl-date-picker', 'Integration | Component | sl date picker', {
    integration: true
});

test( 'Default rendered state', function( assert ) {
    this.render( defaultTemplate );

    const first = this.$( '>:first-child' );
    const input = first.find( 'input' );

    assert.ok(
        first.hasClass( 'form-group' ),
        'Default rendered component has class "form-group"'
    );

    assert.ok(
        first.hasClass( 'sl-date-picker' ),
        'Default rendered component has class "sl-date-picker"'
    );

    assert.ok(
        input.hasClass( 'date-picker' ),
        'Default rendered input has class "date-picker"'
    );

    assert.ok(
        input.hasClass( 'form-control' ),
        'Default rendered input has class "form-control"'
    );
});

test( 'disabled is accepted as a parameter', function( assert ) {
    this.render( defaultTemplate );

    let input = this.$( '>:first-child' ).find( 'input' );

    assert.notOk(
        input.prop( 'disabled' ),
        'Default rendered date picker is not disabled'
    );

    this.render( `
        {{sl-date-picker disabled=true}}
    ` );

    input = this.$( '>:first-child' ).find( 'input' );

    assert.ok(
        input.prop( 'disabled' ),
        'Date picker is disabled when disabled property is true'
    );
});

test( 'helpText is accepted as a parameter', function( assert ) {
    this.render( defaultTemplate );

    let first = this.$( '>:first-child' );

    assert.strictEqual(
        first.find( '.help-block' ).length,
        0,
        'Default rendered component does not have any help text'
    );

    const helpText = 'Please select a date';

    this.set( 'helpText', helpText );

    this.render( `
        {{sl-date-picker helpText=helpText}}
    ` );

    first = this.$( '>:first-child' );

    assert.strictEqual(
        first.find( '.help-block' ).text().trim(),
        helpText
    );
});

// not proper way to seed value
skip( 'value is accepted as a parameter', function( assert ) {
    this.render( defaultTemplate );

    let input = this.$( '>:first-child' ).find( 'input' );

    assert.strictEqual(
        input.val().trim(),
        '',
        'Default rendered datepicker has no prefilled value'
    );

    const value = '10/20/2010';

    this.set( 'value', value );

    this.render( `
        {{sl-date-picker value=value}}
    ` );

    input = this.$( '>:first-child' ).find( 'input' );

    assert.strictEqual(
        input.val().trim(),
        value
    );
});

test( 'label is accepted as a parameter', function( assert ) {
    this.render( defaultTemplate );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'label' ).length,
        0,
        'Default rendered date picker does not have a label'
    );

    const labeltext = 'lorem ipsum';

    this.set( 'label', labeltext );

    this.render( `hbs
        {{sl-date-picker label=label}}
    ` );

    const first = this.$( '>:first-child' );

    assert.strictEqual(
        first.find( 'label' ).text().trim(),
        labeltext,
        'label element was created with label parameter text'
    );

    assert.strictEqual(
        first.find( 'label' ).prop( 'for' ),
        first.find( 'input' ).prop( 'id' ),
        'label is used for date input'
    );
});

test( 'placeholder is accepted as a parameter', function( assert ) {
    this.render( defaultTemplate );

    let input = this.$( '>:first-child' ).find( 'input' );

    assert.notOk(
        input.prop( 'placeholder' ),
        'Default rendered component does not have a placeholder'
    );

    const placeholder = 'Select a date';

    this.set( 'placeholder', placeholder );

    this.render( `hbs
        {{sl-date-picker placeholder=placeholder}}
    ` );

    input = this.$( '>:first-child' ).find( 'input' );

    assert.strictEqual(
        input.prop( 'placeholder' ),
        placeholder
    );
});

test( 'Selected day is set in the input field', function( assert ) {
    const selectedDate = window.moment( [ 2015, 0, 5 ] );
    const format = "MM/DD/YYYY";

    this.set( 'selectedDate', selectedDate );
    this.set( 'format', format );

    this.render( hbs`
        {{sl-date-picker
            selectedDate=selectedDate
            format=format
        }}
    ` );

    const input = this.$( '>:first-child' ).find( 'input' );

    assert.strictEqual(
        input.val(),
        '01/05/2015',
        'The selected day is set in the input field'
    );

    const newDate = window.moment( selectedDate.add( 5, 'months' ) );

    this.set( 'selectedDate', newDate );

    assert.strictEqual(
        input.val(),
        '06/05/2015',
        'The selected day is updated in the input field'
    );
});

test( 'properties are properly passed to sl-calendar', function( assert ) {
    const mockCalendarTemplate = hbs`
        <span class="testAttrs">{{testAttrs}}</span>
    `;

    this.registry.register( 'template:sl-calendar', mockCalendarTemplate );

    this.registry.register( 'component:sl-calendar',
        Ember.Component.extend({
            layoutName: 'sl-calendar',

            testAttrs: null,

            init() {
                this._super( ...arguments );

                const attrs = this.get( 'attrs' );

                this.set( 'testAttrs', JSON.stringify( attrs ) );
            }
        })
    );

    const locale = 'fr';
    const selectedDate = window.moment( [ 2015, 0, 1 ] );
    const viewingDate = window.moment( [ 2015, 0, 1 ] );
    const selectConstraint = {
        start: window.moment( [ 2015, 0, 1 ] ),
        end: window.moment( [ 2015, 0, 5 ] )
    };

    this.set( 'locale', locale );
    this.set( 'selectedDate', selectedDate );
    this.set( 'viewingDate', viewingDate );
    this.set( 'selectConstraint', selectConstraint );

    this.render( hbs`
        {{sl-date-picker
            locale=locale
            selectedDate=selectedDate
            viewingDate=viewingDate
            selectConstraint=selectConstraint
            hasFocus=true
        }}
    ` );

    const testAttrs = {
        locale: locale,
        selectedDate: selectedDate,
        viewingDate: viewingDate,
        selectConstraint: selectConstraint
    };

    const assertAttrs = JSON.parse( JSON.stringify( testAttrs ) );

    const attrs = JSON.parse( this.$( '>:first-child' ).find( 'span.testAttrs' ).text() );

    assert.strictEqual(
        attrs.fixedWeekCount,
        true,
        'fixedWeekCount is passed through to calendar'
    );

    assert.strictEqual(
        attrs.locale.value,
        assertAttrs.locale,
        'locale is passed through to calendar'
    );

    assert.strictEqual(
        attrs.selectedDate.value,
        assertAttrs.selectedDate,
        'selectedDate is passed through to calendar'
    );

    assert.strictEqual(
        attrs.viewingDate.value,
        assertAttrs.viewingDate,
        'viewingDate is passed through to calendar'
    );

    assert.deepEqual(
        attrs.selectConstraint.value,
        assertAttrs.selectConstraint,
        'selectConstraint is passed through to calendar'
    );
});

test( 'action is fired when date changes on datepicker', function( assert ) {
    assert.expect( 1 );

    const done = assert.async();

    this.render( hbs`
        {{sl-date-picker action="testAction" hasFocus=true}}
    ` );

    this.on( 'testAction', function() {
        assert.ok(
            true,
            'Action was fired'
        );

        done();
    });

    this.$( 'td.day:first' ).click();
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
