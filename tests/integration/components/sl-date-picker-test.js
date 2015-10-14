import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';

const template = hbs`
    {{sl-date-picker}}
`;

moduleForComponent( 'sl-date-picker', 'Integration | Component | sl date picker', {
    integration: true,

    afterEach() {
        Ember.$( '.datepicker' ).remove();
    }
});

test( 'Defaults rendering of component is as expected', function( assert ) {
    this.render( template );

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

    assert.notOk(
        input.prop( 'disabled' ),
        'Default rendered input is not disabled'
    );

    assert.strictEqual(
       first.find( 'label' ).length,
        0,
        'Default rendered component has no label present'
    );

    assert.strictEqual(
        first.find( '.help-block' ).length,
        0,
        'Default rendered component does not have any help text'
    );

    assert.notOk(
        input.prop( 'placeholder' ),
        'Default rendered component does not have a placeholder'
    );

    assert.strictEqual(
        input.val().trim(),
        '',
        'Default rendered datepicker has no prefilled value'
    );
});

test( 'disabled property works as expected', function( assert ) {
    this.render( `
        {{sl-date-picker disabled=true}}
    ` );

    const first = this.$( '>:first-child' );

    assert.ok(
        first.find( 'input' ).prop( 'disabled' ),
        'Date picker is disabled when disabled property is true'
    );
});

test( 'helpText property is accepted as a parameter', function( assert ) {
    const helpText = 'Please select a date';

    this.set( 'helpText', helpText );

    this.render( `
        {{sl-date-picker helpText=helpText}}
    ` );

    const first = this.$( '>:first-child' );

    assert.strictEqual(
        first.find( '.help-block' ).text().trim(),
        helpText
    );
});

test( 'value is accepted as a parameter', function( assert ) {
    const value = '10/20/2010';

    this.set( 'value', value );

    this.render( `
        {{sl-date-picker value=value}}
    ` );

    const input = this.$( '>:first-child' ).find( 'input' );

    assert.strictEqual(
        input.val().trim(),
        value
    );
});

test( 'label is accepted as a parameter', function( assert ) {
    const labeltext = 'lorem ipsum';

    this.set( 'label', labeltext );

    this.render( `hbs
        {{sl-date-picker label=label}}
    ` );

    const first = this.$( '>:first-child' );

    assert.equal(
        first.find( 'label' ).html(),
        labeltext,
        'label element was created with label parameter text'
    );

    assert.equal(
        first.find( 'label' ).prop( 'for' ),
        first.find( 'input' ).prop( 'id' ),
        'label is used for date input'
    );
});

test( 'placeholder is accepted as a parameter', function( assert ) {
    const placeholder = 'Select a date';

    this.set( 'placeholder', placeholder );

    this.render( `hbs
        {{sl-date-picker placeholder=placeholder}}
    ` );

    const input = this.$( '>:first-child' ).find( 'input' );

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
        {{sl-date-picker action='action'}}
    ` );

    this.$( '>:first-child' )
        .find( 'input.date-picker' )
        .triggerHandler( 'focus' );

    Ember.$( '.day:first' ).click();
});

test( 'updateDateRange() - clears input date when outside of startDate range', function( assert ) {
    this.set( 'startDate', window.moment().toDate() );

    this.render( hbs`
        {{sl-date-picker startDate=startDate }}
    ` );

    const input = this.$( '>:first-child' ).find( 'input.date-picker' );
    const datePicker = input.data( 'datepicker' );

    datePicker.setDate( window.moment( '2015-06-08' ).toDate() );

    this.set( 'startDate', window.moment( '2015-07-08' ).toDate() );


    assert.equal(
        datePicker.getDate(),
        'Invalid Date',
        'Setting a date before "startDate" results in an "Invalid Date"'
    );

    assert.equal(
        input.datepicker().val(),
        '',
        'The datepicker input value was cleared successfully'
    );
});

test( 'updateDateRange() - clears input date when outside of endDate range', function( assert ) {
    this.set( 'endDate', window.moment().toDate() );

    this.render( hbs`
        {{sl-date-picker endDate=endDate}}
    ` );

    const input = this.$( '>:first-child' ).find( 'input.date-picker' );
    const datePicker = input.data( 'datepicker' );

    datePicker.setDate( window.moment( '2015-07-20' ).toDate() );

    this.set(
        'endDate',
        window.moment( '2015-07-08' ).toDate()
    );

    assert.equal(
        datePicker.getDate(),
        'Invalid Date',
        'Setting a date after "endDate" results in an "Invalid Date"'
    );

    assert.equal(
        input.datepicker().val(),
        '',
        'The datepicker input value was cleared successfully'
    );
});

test( 'updateDateRange() - when date outside startDate range we show placeholder text when supplied',
    function( assert ) {
        const placeHolder = 'Enter a valid date';

        this.set( 'startDate', window.moment().toDate() );
        this.set( 'placeholder', placeHolder );

        this.render( hbs`
            {{sl-date-picker placeholder=placeholder startDate=startDate}}
        ` );

        const input = this.$( '>:first-child' ).find( 'input.date-picker' );
        const datePicker = input.data( 'datepicker' );

        datePicker.setDate( window.moment( '2015-06-08' ).toDate() );

        this.set(
            'startDate',
            window.moment( '2015-07-08' ).toDate()
        );

        assert.equal(
            input.datepicker().attr( 'placeholder' ),
            placeHolder,
            'the "placeholder" value was displayed'
        );
    }
);

test( 'updateDateRange() - when date outside endDate range we show placeholder text when supplied',
    function( assert ) {
        const placeHolder = 'Enter a valid date';

        this.set( 'endDate', window.moment().toDate() );
        this.set( 'placeholder', placeHolder );

        this.render( hbs`
            {{sl-date-picker placeholder=placeholder endDate=endDate}}
        ` );

        const input = this.$( '>:first-child' ).find( 'input.date-picker' );
        const datePicker = input.data( 'datepicker' );

        datePicker.setDate( window.moment( '2015-07-20' ).toDate() );

        this.set(
            'endDate',
            window.moment( '2015-07-08' ).toDate()
        );

        assert.equal(
            input.datepicker().attr( 'placeholder' ),
            placeHolder,
            'the "placeholder" value was displayed'
        );
    }
);

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
