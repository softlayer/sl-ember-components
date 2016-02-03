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

test( 'Change focus to end date input upon start date selection', function( assert ) {
    assert.expect( 1 );

    const done = assert.async();

    const mockFocus = function() {
        assert.ok(
            true,
            'focus was given to the end date input'
        );

        done();
    };

    this.set( 'mock', function() {
        return { focus: mockFocus }
    } );

    this.render( hbs`
        {{sl-date-range-picker
          $=mock
        }}
    ` );

    const startDatePicker = this.$( '>:first-child' ).find( '.sl-daterange-start-date' );

    startDatePicker.find( 'input' ).trigger( 'focusin' );
    startDatePicker.find( 'td.day:first' ).click();
});
