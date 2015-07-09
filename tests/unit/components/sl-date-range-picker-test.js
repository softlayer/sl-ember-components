import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-date-range-picker', 'Unit | Component | sl date range picker', {
    needs: [
        'component:sl-date-picker'
    ],
    unit: true
});

test( 'Default classNames are present', function( assert ) {
    this.subject();

    assert.ok(
        this.$().hasClass( 'sl-date-range-picker' ),
        'Default rendered component has class "sl-date-range-picker"'
    );
});

test( 'Change focus to end date input upon start date change', function( assert ) {
    assert.expect( 1 );

    this.subject();

    this.$( '.sl-daterange-end-date input' ).on( 'focus', () => {
        assert.ok( true, 'End date input receives focus upon start date change');
    });

    Ember.run( () => {
        this.$( '.sl-daterange-start-date input' ).trigger( 'change' );
    });
});

test( 'Earliest end date is the based on min date and start date', function( assert ) {
    let component = this.subject();

    assert.strictEqual(
        component.get( 'earliestEndDate' ),
        null
    );

    component.set( 'minDate', '01/01/2001' );

    assert.equal(
        component.get( 'earliestEndDate' ),
        '01/01/2001'
    );

    component.set( 'startDateValue', '01/01/2015' );

    assert.equal(
        component.get( 'earliestEndDate' ),
        '01/01/2015'
    );
});

test( 'Latest start date is the based on max date and end date', function( assert ) {
    let component = this.subject();

    assert.strictEqual(
        component.get( 'latestStartDate' ),
        null
    );

    component.set( 'maxDate', '01/01/2029' );

    assert.equal(
        component.get( 'latestStartDate' ),
        '01/01/2029'
    );

    component.set( 'endDateValue', '01/01/2015' );

    assert.equal(
        component.get( 'latestStartDate' ),
        '01/01/2015'
    );
});

test( 'Events from start date input are removed upon willClearRender', function( assert ) {
    let component = this.subject();
    let startDateInput = this.$( '.sl-daterange-start-date input' )[0];

    assert.equal(
        Ember.typeOf( $._data( startDateInput, 'events' ).change ),
        'array',
        'Start date input has change event listener after render'
    );

    component.trigger( 'willClearRender' );

    assert.strictEqual(
        $._data( startDateInput, 'events' ),
        undefined,
        'Start date input has no event listeners after willClearRender'
    );
});

test( 'label, startDatePlaceholder, and endDatePlaceholder are undefined by default', function( assert ) {
    let component = this.subject();

    assert.strictEqual(
        component.get( 'label' ),
        undefined,
        'label is undefined by default'
    );

    assert.strictEqual(
        this.$( 'label' )[0],
        undefined,
        'No label is created when label is undefined'
    );

    assert.strictEqual(
        component.get( 'startDatePlaceholder' ),
        undefined,
        'startDatePlaceholder is undefined by default'
    );

    assert.strictEqual(
        this.$( '.sl-daterange-start-date input' ).prop( 'placeholder' ),
        '',
        'Start date input placeholder is empty when startDatePlaceholder is undefined'
    );

    assert.strictEqual(
        component.get( 'endDatePlaceholder' ),
        undefined,
        'endDatePlaceholder is undefined by default'
    );

    assert.strictEqual(
        this.$( '.sl-daterange-end-date input' ).prop( 'placeholder' ),
        '',
        'End date input placeholder is empty when endDatePlaceholder is undefined'
    );
});

test( 'label is accepted as a parameter', function( assert ) {
    let labelText = 'lorem ipsum';
    let component = this.subject({ label: labelText });

    assert.equal(
        component.get( 'label' ),
        labelText,
        'label was accepted as a parameter'
    );

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

    assert.strictEqual(
        component.get( 'startDatePlaceholder' ),
        undefined,
        'startDatePlaceholder is undefined by default'
    );

    assert.strictEqual(
        this.$( '.sl-daterange-start-date input' ).prop( 'placeholder' ),
        '',
        'Start date input placeholder is empty when startDatePlaceholder is undefined'
    );

    assert.strictEqual(
        component.get( 'endDatePlaceholder' ),
        undefined,
        'endDatePlaceholder is undefined by default'
    );

    assert.strictEqual(
        this.$( '.sl-daterange-end-date input' ).prop( 'placeholder' ),
        '',
        'End date input placeholder is empty when endDatePlaceholder is undefined'
    );
});

test( 'startDatePlaceholder is accepted as a parameter', function( assert ) {
    let placeholderText = 'lorem ipsum';
    let component = this.subject({ startDatePlaceholder: placeholderText });

    assert.equal(
        component.get( 'startDatePlaceholder' ),
        placeholderText,
        'startDatePlaceholder was accepted as a parameter'
    );

    assert.equal(
        this.$( '.sl-daterange-start-date input' ).prop( 'placeholder' ),
        placeholderText,
        'Start date input placeholder was passed through correctly'
    );

    assert.strictEqual(
        component.get( 'label' ),
        undefined,
        'label is undefined by default'
    );

    assert.strictEqual(
        this.$( 'label' )[0],
        undefined,
        'No label is created when label is undefined'
    );

    assert.strictEqual(
        this.$( '.sl-daterange-end-date input' ).prop( 'placeholder' ),
        '',
        'End date input placeholder is empty when endDatePlaceholder is undefined'
    );

    assert.strictEqual(
        component.get( 'endDatePlaceholder' ),
        undefined,
        'endDatePlaceholder is undefined by default'
    );
});

test( 'endDatePlaceholder is accepted as a parameter', function( assert ) {
    let placeholderText = 'lorem ipsum';
    let component = this.subject({ endDatePlaceholder: placeholderText });

    assert.equal(
        component.get( 'endDatePlaceholder' ),
        placeholderText,
        'endDatePlaceholder was accepted as a parameter'
    );

    assert.equal(
        this.$( '.sl-daterange-end-date input' ).prop( 'placeholder' ),
        placeholderText,
        'End date input placeholder was passed through correctly'
    );

    assert.strictEqual(
        component.get( 'label' ),
        undefined,
        'label is undefined by default'
    );

    assert.strictEqual(
        this.$( 'label' )[0],
        undefined,
        'No label is created when label is undefined'
    );

    assert.strictEqual(
        component.get( 'startDatePlaceholder' ),
        undefined,
        'startDatePlaceholder is undefined by default'
    );

    assert.strictEqual(
        this.$( '.sl-daterange-start-date input' ).prop( 'placeholder' ),
        '',
        'Start date input placeholder is empty when startDatePlaceholder is undefined'
    );
});

test( 'label, startDatePlaceholder, and endDatePlaceholder can be accepted as parameters together', function( assert ) {
    let labelText = 'text 1';
    let startDatePlaceholderText = 'text 2';
    let endDatePlaceholderText = 'text 3';
    let component = this.subject({
        label: labelText,
        startDatePlaceholder: startDatePlaceholderText,
        endDatePlaceholder: endDatePlaceholderText
    });

    assert.equal(
        component.get( 'label' ),
        labelText,
        'label was accepted as a parameter'
    );

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
        component.get( 'startDatePlaceholder' ),
        startDatePlaceholderText,
        'startDatePlaceholder was accepted as a parameter'
    );

    assert.equal(
        this.$( '.sl-daterange-start-date input' ).prop( 'placeholder' ),
        startDatePlaceholderText,
        'Start date input placeholder was passed through correctly'
    );

    assert.equal(
        component.get( 'endDatePlaceholder' ),
        endDatePlaceholderText,
        'endDatePlaceholder was accepted as a parameter'
    );

    assert.equal(
        this.$( '.sl-daterange-end-date input' ).prop( 'placeholder' ),
        endDatePlaceholderText,
        'End date input placeholder was passed through correctly'
    );
});

test( 'Default format gets passed to child date pickers', function( assert ) {
    let component = this.subject();

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
    let format = 'yyyy/mm/dd';
    let component = this.subject({ format: format });

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
