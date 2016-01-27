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

test( 'properties are properly passed to first sl-date-picker', function( assert ) {
    const mockDatePickerTemplate = hbs`
        <span class="testAttrs">{{testAttrs}}</span>
    `;

    this.registry.register( 'template:sl-date-picker', mockDatePickerTemplate );

    this.registry.register( 'component:sl-date-picker',
        Ember.Component.extend({
            layoutName: 'sl-date-picker',

            testAttrs: null,

            init() {
                this._super( ...arguments );

                const attrs = this.get( 'attrs' );

                this.set( 'testAttrs', JSON.stringify( attrs ) );
            }
        })
    );

    const placeholder = '__startPlaceholder__';
    const format = 'YYYY+MM-DD';
    const selectConstraint = {
        start: window.moment( [ 2015, 0, 1 ] ),
        end: window.moment( [ 2015, 0, 5 ] )
    };
    const selectedDate = window.moment( [ 2015, 0, 1 ] );

    this.set( 'placeholder', placeholder );
    this.set( 'format', format );
    this.set( 'selectConstraint', selectConstraint );
    this.set( 'selectedDate', selectedDate );

    this.render( hbs`
        {{sl-date-range-picker
            startDatePlaceholder=placeholder
            format=format
            selectConstraint=selectConstraint
            startDate=selectedDate
        }}
    ` );

    const testAttrs = {
        placeholder: placeholder,
        format: format,
        selectConstraint: selectConstraint,
        selectedDate: selectedDate
    };

    const assertAttrs = JSON.parse( JSON.stringify( testAttrs ) );

    const attrs = JSON.parse( this.$( '>:first-child' ).find( 'span.testAttrs' ).first().text() );

    assert.strictEqual(
        attrs.placeholder.value,
        assertAttrs.placeholder,
        'placeholder is passed through to date-picker'
    );

    assert.strictEqual(
        attrs.format.value,
        assertAttrs.format,
        'format is passed through to date-picker'
    );

    assert.deepEqual(
        attrs.selectConstraint.value,
        assertAttrs.selectConstraint,
        'selectConstraint is passed through to date-picker'
    );

    assert.strictEqual(
        attrs.selectedDate.value,
        assertAttrs.selectedDate,
        'selectedDate is passed through to date-picker'
    );
});

test( 'properties are properly passed to second sl-date-picker', function( assert ) {
    const mockDatePickerTemplate = hbs`
        <span class="testAttrs">{{testAttrs}}</span>
    `;

    this.registry.register( 'template:sl-date-picker', mockDatePickerTemplate );

    this.registry.register( 'component:sl-date-picker',
        Ember.Component.extend({
            layoutName: 'sl-date-picker',

            testAttrs: null,

            init() {
                this._super( ...arguments );

                const attrs = this.get( 'attrs' );

                this.set( 'testAttrs', JSON.stringify( attrs ) );
            }
        })
    );

    const placeholder = '__endPlaceholder__';
    const format = 'YYYY+MM-DD';
    const selectConstraint = {
        start: window.moment( [ 2015, 0, 1 ] ),
        end: window.moment( [ 2015, 0, 5 ] )
    };
    const selectedDate = window.moment( [ 2015, 0, 1 ] );

    this.set( 'placeholder', placeholder );
    this.set( 'format', format );
    this.set( 'selectConstraint', selectConstraint );
    this.set( 'selectedDate', selectedDate );

    this.render( hbs`
        {{sl-date-range-picker
            endDatePlaceholder=placeholder
            format=format
            selectConstraint=selectConstraint
            endDate=selectedDate
        }}
    ` );

    const testAttrs = {
        placeholder: placeholder,
        format: format,
        selectConstraint: selectConstraint,
        selectedDate: selectedDate
    };

    const assertAttrs = JSON.parse( JSON.stringify( testAttrs ) );

    const attrs = JSON.parse( this.$( '>:first-child' ).find( 'span.testAttrs' ).last().text() );

    assert.strictEqual(
        attrs.placeholder.value,
        assertAttrs.placeholder,
        'placeholder is passed through to date-picker'
    );

    assert.strictEqual(
        attrs.format.value,
        assertAttrs.format,
        'format is passed through to date-picker'
    );

    assert.deepEqual(
        attrs.selectConstraint.value,
        assertAttrs.selectConstraint,
        'selectConstraint is passed through to date-picker'
    );

    assert.strictEqual(
        attrs.selectedDate.value,
        assertAttrs.selectedDate,
        'selectedDate is passed through to date-picker'
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

// removing value seeding
skip( 'startDateValue is accepted as a parameter', function( assert ) {

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

// removing value seeding
skip( 'endDateValue is accepted as a parameter', function( assert ) {

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

// verify this is in date-picker
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

// verify this is in date-picker
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
