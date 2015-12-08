import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { skip } from 'qunit';

moduleForComponent( 'sl-date-range-picker', 'Integration | Component | sl date range picker', {
    afterEach() {
        Ember.$( '.datepicker' ).remove();
    },

    integration: true
});

test( 'Default rendered state', function( assert ) {
    this.render( hbs`
        {{sl-date-range-picker}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sl-date-range-picker' ),
        'Has class "sl-date-range-picker"'
    );
});

test( 'placeholders are accepted', function( assert ) {
    this.render( hbs`
        {{sl-date-range-picker
            label="Select date range"
            startDatePlaceholder="__StartPlaceholder__"
            endDatePlaceholder="__EndPlaceholder__"
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.sl-daterange-start-date' ).find( 'input' ).prop( 'placeholder' ),
        '__StartPlaceholder__',
        'Start date input placeholder is set'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.sl-daterange-end-date' ).find( 'input' ).prop( 'placeholder' ),
        '__EndPlaceholder__',
        'End date input placeholder is set'
    );
});

test( 'label is accepted as a parameter', function( assert ) {

    this.render( hbs`
        {{sl-date-range-picker
            label="lorem ipsum"
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'label' ).html(),
        'lorem ipsum',
        'The "label" property text was set'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'label' ).prop( 'for' ),
        this.$( '>:first-child' ).find( '.sl-daterange-start-date' ).find( 'input' ).prop( 'id' ),
        '"label for" property has the correct value'
    );
});

test( 'endDatePlaceholder is accepted as a parameter', function( assert ) {

    this.render( hbs`
        {{sl-date-range-picker
            endDatePlaceholder="Select end date"
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.sl-daterange-end-date' ).find( 'input' ).attr( 'placeholder' ),
        'Select end date',
        'The "endDatePlaceholder" property text was set'
    );
});

test( 'startDatePlaceholder is accepted as a parameter', function( assert ) {

    this.render( hbs`
        {{sl-date-range-picker
            startDatePlaceholder="Select start date"
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.sl-daterange-start-date' ).find( 'input' ).attr( 'placeholder' ),
        'Select start date',
        'The "startDatePlaceholder" property text was set'
    );
});

test( 'helpText is accepted as a parameter', function( assert ) {

    this.render( hbs`
        {{sl-date-range-picker
            helpText="This is helpful"
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.help-block' ).html(),
        'This is helpful',
        'The "helpText" property text was set'
    );
});

test( 'startDateValue is accepted as a parameter', function( assert ) {

    this.render( hbs`
        {{sl-date-range-picker
            startDateValue="09/25/2015"
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.sl-daterange-start-date' ).find( 'input' ).val(),
        '09/25/2015',
        'The "startDateValue" property text was set'
    );
});

test( 'endDateValue is accepted as a parameter', function( assert ) {

    this.render( hbs`
        {{sl-date-range-picker
            endDateValue="12/25/2015"
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.sl-daterange-end-date' ).find( 'input' ).val(),
        '12/25/2015',
        'The "endDateValue" property text was set'
    );
});

test( 'format is accepted as a parameter', function( assert ) {

    this.render( hbs`
        {{sl-date-range-picker
            format="m/d/yyyy"
            startDateValue="09/25/2015"
        }}
    ` );

    const input = this.$( '>:first-child' ).find( '.sl-daterange-start-date' ).find( 'input' );
    input.triggerHandler( 'focus' );

    Ember.$( '.datepicker' ).last().find( '.datepicker-days' ).find( 'td' ).not( '.old' ).first().trigger( 'click' );

    assert.strictEqual(
        input.val(),
        '9/1/2015',
        'The selected date was formatted based on the "format" property'
    );
});

test( 'minDate is accepted as a parameter', function( assert ) {

    this.render( hbs`
        {{sl-date-range-picker
            minDate="09/15/2015"
            startDateValue="09/25/2015"
        }}
    ` );

    this.$( '>:first-child' ).find( '.sl-daterange-start-date' ).find( 'input' ).triggerHandler( 'focus' );

    assert.strictEqual(
        Ember.$( '.datepicker' ).last().find( '.datepicker-days' ).find( 'td' ).not( '.disabled' ).first().text(),
        '15',
        'The "minDate" was set correctly'
    );
});

test( 'maxDate is accepted as a parameter', function( assert ) {

    this.render( hbs`
        {{sl-date-range-picker
            maxDate="09/28/2015"
            endDateValue="09/25/2015"
        }}
    ` );

    this.$( '>:first-child' ).find( '.sl-daterange-end-date' ).find( 'input' ).triggerHandler( 'focus' );

    assert.strictEqual(
        Ember.$( '.datepicker' ).last().find( '.datepicker-days' ).find( 'td' ).not( '.disabled' ).last().text(),
        '28',
        'The "maxDate" was set correctly'
    );
});

test( 'Selected day is set in the start date input field', function( assert ) {

    this.render( hbs`
        {{sl-date-range-picker
            startDateValue="09/25/2015"
        }}
    ` );

    const input = this.$( '>:first-child' ).find( '.sl-daterange-start-date' ).find( 'input' );
    input.triggerHandler( 'focus' );

    Ember.$( '.datepicker' ).last().find( '.datepicker-days' ).find( 'td' ).not( '.old' ).first().trigger( 'click' );

    assert.strictEqual(
        input.val(),
        '09/01/2015',
        'The selected day is set in the input field'
    );
});

test( 'Selected day is set in the end date input field', function( assert ) {
    this.render( hbs`
        {{sl-date-range-picker
            endDateValue="09/25/2015"
        }}
    ` );

    const input = this.$( '>:first-child' ).find( '.sl-daterange-end-date' ).find( 'input' );
    input.triggerHandler( 'focus' );

    Ember.$( '.datepicker' ).last().find( '.datepicker-days' ).find( 'td' ).not( '.old' ).first().trigger( 'click' );

    assert.strictEqual(
        input.val(),
        '09/01/2015',
        'The selected day is set in the input field'
    );
});

skip( '"startDateValue" cannot be less than "minDate"', function( assert ) {

    this.render( hbs`
        {{sl-date-range-picker
            minDate="09/28/2015"
            startDateValue="09/25/2015"
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.sl-daterange-start-date' ).find( 'input' ).val(),
        '09/28/2015',
        'The "startDateValue" is not less than the "minDate"'
    );
});

skip( '"endDateValue" cannot be more than "maxDate"', function( assert ) {

    this.render( hbs`
        {{sl-date-range-picker
            maxDate="09/25/2015"
            endDateValue="09/28/2015"
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.sl-daterange-end-date' ).find( 'input' ).val(),
        '09/25/2015',
        'The "endDateValue" is not more than the "maxDate"'
    );
});

skip( '"endDateValue" cannot be less than "startDateValue"', function( assert ) {

    this.render( hbs`
        {{sl-date-range-picker
            startDateValue="09/25/2015"
            endDateValue="09/20/2015"
        }}
    ` );

    assert.notEqual(
        this.$( '>:first-child' ).find( '.sl-daterange-end-date' ).find( 'input' ).val(),
        '09/20/2015',
        'The "endDateValue" is not less than the "startDateValue"'
    );
});

skip( '"startDateValue" cannot be more than "endDateValue"', function( assert ) {

    this.render( hbs`
        {{sl-date-range-picker
            startDateValue="09/25/2015"
            endDateValue="09/20/2015"
        }}
    ` );

    assert.notEqual(
        this.$( '>:first-child' ).find( '.sl-daterange-start-date' ).find( 'input' ).val(),
        '09/25/2015',
        'The "startDateValue" is not more than the "endDateValue"'
    );
});
