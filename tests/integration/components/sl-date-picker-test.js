import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';

const defaultTemplate = hbs`
    {{sl-date-picker}}
`;

moduleForComponent( 'sl-date-picker', 'Integration | Component | sl date picker', {
    integration: true,

    afterEach() {
        Ember.$( '.datepicker' ).remove();
    }
});

test( 'Default rendered state', function( assert ) {
    this.render( defaultTemplate );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sl-ember-components-date-picker' ),
        'Has class "sl-ember-components-date-picker"'
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

test( 'value is accepted as a parameter', function( assert ) {
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
        first.find( 'label' ).html(),
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

test( 'action is fired when date changes on datepicker', function( assert ) {
    assert.expect( 1 );

    const done = assert.async();

    this.on( 'action', function() {
        assert.ok(
            'Action was fired'
        );

        done();
    });

    this.render( hbs`
        {{sl-date-picker action="action"}}
    ` );

    this.$( '>:first-child' )
        .find( 'input.date-picker' )
        .triggerHandler( 'focus' );

    Ember.$( '.day:first' ).click();
});

test( 'updateDateRange() - clears input date when outside of startDate range', function( assert ) {
    this.set( 'startDate' );

    this.render( hbs`
        {{sl-date-picker startDate=startDate }}
    ` );

    const input = this.$( '>:first-child' ).find( 'input.date-picker' );

    input.triggerHandler( 'focus' );

    Ember.$( '.day:first' ).click();

    this.set( 'startDate', window.moment().add( 30, 'days' ).toDate() );

    assert.strictEqual(
        input.datepicker().val(),
        '',
        'The datepicker input value was cleared successfully'
    );
});

test( 'updateDateRange() - clears input date when outside of endDate range', function( assert ) {
    this.set( 'endDate' );

    this.render( hbs`
        {{sl-date-picker endDate=endDate}}
    ` );

    const input = this.$( '>:first-child' ).find( 'input.date-picker' );

    input.triggerHandler( 'focus' );

    Ember.$( '.day:first' ).click();

    this.set( 'endDate', window.moment().subtract( 60, 'days' ).toDate() );

    assert.strictEqual(
        input.datepicker().val(),
        '',
        'The datepicker input value was cleared successfully'
    );
});

test( 'End date is set on datepicker when endDate property is updated', function( assert ) {
    const endDate = window.moment( '2016-01-01' ).toDate();
    const endDateTwo = window.moment( '2016-02-02' ).toDate();

    this.set( 'endDate', endDate );

    this.render( hbs`
        {{sl-date-picker endDate=endDate}}
    ` );

    const input = this.$( '>:first-child' ).find( 'input.date-picker' );
    const datePicker = input.data( 'datepicker' );
    const spy = sinon.spy( Object.getPrototypeOf( datePicker ), 'setEndDate' );

    this.set( 'endDate', endDateTwo );

    assert.ok(
        spy.calledWith( endDateTwo )
    );

    datePicker.setEndDate.restore();
});

test( 'Start date is set on datepicker when startDate property is updated', function( assert ) {
    const startDate = window.moment( '2016-01-01' ).toDate();
    const startDateTwo = window.moment( '2016-02-02' ).toDate();

    this.set( 'startDate', startDate );

    this.render( hbs`
        {{sl-date-picker startDate=startDate}}
    ` );

    const input = this.$( '>:first-child' ).find( 'input.date-picker' );
    const datePicker = input.data( 'datepicker' );
    const spy = sinon.spy( Object.getPrototypeOf( datePicker ), 'setStartDate' );

    this.set( 'startDate', startDateTwo );

    assert.ok(
        spy.calledWith( startDateTwo )
    );

    datePicker.setStartDate.restore();
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
