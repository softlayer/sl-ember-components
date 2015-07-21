import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent(
    'sl-date-range-picker',
    'Unit | Component | sl date range picker',
    {
        needs: [
            'component:sl-date-picker'
        ],

        unit: true
    }
);

test( 'Default classNames are present', function( assert ) {
    this.subject();

    assert.ok(
        this.$().hasClass( 'sl-date-range-picker' ),
        'Default rendered component has class "sl-date-range-picker"'
    );
});

test( 'Change focus to end date input upon start date change', function( assert ) {
    assert.expect( 1 );

    const done = assert.async();

    this.subject();

    this.$( '.sl-daterange-end-date input' ).on( 'focus', () => {
        assert.ok(
            true,
            'End date input receives focus upon start date change'
        );

        $( '.datepicker' ).remove();
        done();
    });

    this.$( '.sl-daterange-start-date input' ).trigger( 'change' );
});

test( 'Earliest end date is the based on min date and start date', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'earliestEndDate' ),
        null
    );

    Ember.run( () => {
        component.set( 'minDate', '01/01/2001' );
    });

    assert.equal(
        component.get( 'earliestEndDate' ),
        '01/01/2001'
    );

    Ember.run( () => {
        component.set( 'startDateValue', '01/01/2015' );
    });

    assert.equal(
        component.get( 'earliestEndDate' ),
        '01/01/2015'
    );
});

test( 'Latest start date is the based on max date and end date', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'latestStartDate' ),
        null
    );

    Ember.run( () => {
        component.set( 'maxDate', '01/01/2029' );
    });

    assert.equal(
        component.get( 'latestStartDate' ),
        '01/01/2029'
    );

    Ember.run( () => {
        component.set( 'endDateValue', '01/01/2015' );
    });

    assert.equal(
        component.get( 'latestStartDate' ),
        '01/01/2015'
    );
});

test( 'Events from start date input are removed upon willClearRender', function( assert ) {
    const component = this.subject();

    this.render();

    const startDateInput = this.$( '.sl-daterange-start-date input' )[ 0 ];
    const jQueryData = Ember.get( Ember.$, '_data' );

    assert.equal(
        Ember.typeOf(
            Ember.get( jQueryData( startDateInput, 'events' ), 'change' )
        ),
        'array',
        'Start date input has change event listener after render'
    );

    Ember.run( () => {
        component.trigger( 'willClearRender' );
    });

    assert.strictEqual(
        jQueryData( startDateInput, 'events' ),
        undefined,
        'Start date input has no event listeners after willClearRender'
    );
});

test( 'Default properties are set correctly in the component', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'earliestEndDate' ),
        null,
        '"earliestEndDate" is undefined by default'
    );

    assert.strictEqual(
        component.get( 'endDatePlaceholder' ),
        null,
        '"endDatePlaceholder" is undefined by default'
    );

    assert.strictEqual(
        component.get( 'endDateValue' ),
        null,
        'The "endDateValue" default value is correct'
    );

    assert.strictEqual(
        component.get( 'format' ),
        'mm/dd/yyyy',
        'The "format" default value is correct'
    );

    assert.strictEqual(
        component.get( 'helpText' ),
        null,
        'The "helpText" default value is correct'
    );

    assert.equal(
        component.get( 'inputElementId' ),
        null,
        'The "inputElementId" default value is correct'
    );

    assert.strictEqual(
        component.get( 'label' ),
        null,
        'The "label" default value is correct'
    );

    assert.strictEqual(
        component.get( 'latestStartDate' ),
        null,
        'The "latestStartDate" default value is correct'
    );

    assert.strictEqual(
        component.get( 'maxDate' ),
        null,
        'The "maxDate" default value is correct'
    );

    assert.strictEqual(
        component.get( 'minDate' ),
        null,
        'The "minDate" default value is correct'
    );

    assert.strictEqual(
        component.get( 'startDatePlaceholder' ),
        null,
        'The "startDatePlaceholder" default value is correct'
    );

    assert.strictEqual(
        component.get( 'startDateValue' ),
        null,
        'The "startDateValue" default value is correct'
    );
});

test( 'Default properties are set correctly in the DOM', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        this.$( 'label' )[ 0 ],
        undefined,
        'No label is created when label is undefined'
    );

    assert.strictEqual(
        this.$( '.sl-daterange-start-date input' ).prop( 'placeholder' ),
        '',
        'Start date input placeholder is empty when startDatePlaceholder is undefined'
    );

    assert.strictEqual(
        this.$( '.sl-daterange-end-date input' ).prop( 'placeholder' ),
        '',
        'End date input placeholder is empty when endDatePlaceholder is undefined'
    );
});

test( 'label is accepted as a parameter', function( assert ) {
    const labelText = 'lorem ipsum';
    const component = this.subject({ label: labelText });

    assert.equal(
        this.$( 'label' ).html(),
        labelText,
        'label element was created with label parameter text'
    );

    assert.equal(
        this.$( 'label' ).prop( 'for' ),
        component.get( 'inputElementId' ),
        'label element has the correct for property'
    );

    assert.equal(
        this.$( 'label' ).prop( 'for' ),
        this.$( '.sl-daterange-start-date input' ).prop( 'id' ),
        'label is used for start date input'
    );
});

test( 'helpText is set correctly', function( assert ) {
    const testHelpText = 'lorem ipsum';

    const component = this.subject({ helpText: testHelpText });

    assert.equal(
        this.$( '.help-block' ).text(),
        testHelpText,
        'Start date input helpText was passed through correctly'
    );
});

test( 'startDatePlaceholder is set correctly', function( assert ) {
    const placeholderText = 'lorem ipsum';

    this.subject({ startDatePlaceholder: placeholderText });

    assert.equal(
        this.$( '.sl-daterange-start-date input' ).prop( 'placeholder' ),
        placeholderText,
        'Start date input placeholder was passed through correctly'
    );
});

test( 'endDatePlaceholder is is set correctly', function( assert ) {
    const placeholderText = 'lorem ipsum';

    this.subject({ endDatePlaceholder: placeholderText });

    assert.equal(
        this.$( '.sl-daterange-end-date input' ).prop( 'placeholder' ),
        placeholderText,
        'End date input placeholder was passed through correctly'
    );
});

test( 'Default format gets passed to child date pickers', function( assert ) {
    const component = this.subject();

    assert.equal(
        this.$( '.sl-daterange-start-date input.date-picker' ).data().datepicker.o.format,
        component.get( 'format' ),
        'Default format gets passed to start date picker'
    );

    assert.equal(
        this.$( '.sl-daterange-end-date input.date-picker' ).data().datepicker.o.format,
        component.get( 'format' ),
        'Default format gets passed to end date picker'
    );
});

test( 'Format parameter gets passed to child date pickers', function( assert ) {
    const format = 'yyyy/mm/dd';

    this.subject({ format: format });

    assert.equal(
        this.$( '.sl-daterange-start-date input.date-picker' ).data().datepicker.o.format,
        format,
        'Format parameter gets passed to start date picker'
    );

    assert.equal(
        this.$( '.sl-daterange-end-date input.date-picker' ).data().datepicker.o.format,
        format,
        'Format parameter gets passed to end date picker'
    );
});

// @todo This needs to be updated when upgrading to 1.13 to spy on the child
// sl-date-pickers rather than directly accessing bootstrap-datepicker values
test( 'Date pickers have unbound start and end dates by default', function( assert ) {
    this.subject();

    assert.equal(
        this.$( '.sl-daterange-start-date input.date-picker' ).data().datepicker.o.startDate,
        -Infinity,
        'Start date picker start date is unboundt'
    );

    assert.equal(
        this.$( '.sl-daterange-start-date input.date-picker' ).data().datepicker.o.endDate,
        Infinity,
        'Start date picker end date is unbound'
    );

    assert.equal(
        this.$( '.sl-daterange-end-date input.date-picker' ).data().datepicker.o.startDate,
        -Infinity,
        'End date picker start date is unbound'
    );

    assert.equal(
        this.$( '.sl-daterange-end-date input.date-picker' ).data().datepicker.o.endDate,
        Infinity,
        'End date picker end date is unbound'
    );
});

window.QUnit.skip( 'Date pickers respects minDate', function() {
    // waiting for 1.13 for a way to mock and spy on child components
});

window.QUnit.skip( 'Date pickers respects maxDate', function() {
    // waiting for 1.13 for a way to mock and spy on child components
});

window.QUnit.skip( 'End date picker respects startDateValue over minDate due to earliestEndDate', function() {
    // waiting for 1.13 for a way to mock and spy on child components
});

window.QUnit.skip( 'Start date picker respects endDateValue over maxDate due to latestStartDate', function() {
    // waiting for 1.13 for a way to mock and spy on child components
});
