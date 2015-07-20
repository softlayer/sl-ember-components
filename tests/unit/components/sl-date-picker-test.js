import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-date-picker', 'Unit | Component | sl date picker', {
    unit: true
});

test( 'Default class names are present', function( assert ) {
    this.subject();

    assert.ok(
        this.$().hasClass( 'form-group' ),
        'Default rendered component has class "form-group"'
    );

    assert.ok(
        this.$().hasClass( 'sl-date-picker' ),
        'Default rendered component has class "sl-date-picker"'
    );

    assert.ok(
        this.$( 'input' ).hasClass( 'date-picker' ),
        'Default rendered input has class "date-picker"'
    );

    assert.ok(
        this.$( 'input' ).hasClass( 'form-control' ),
        'Default rendered input has class "form-control"'
    );
});


test( 'Default properties are set correctly', function( assert ) {
    const component = this.subject();

    assert.equal(
        component.get( 'autoclose' ),
        true,
        'The "autoclose" default vaue is correct'
    );

    assert.equal(
        component.get( 'calendarWeeks' ),
        false,
        'The "calendarWeeks" default value is correct'
    );

    assert.equal(
        component.get( 'clearBtn' ),
        false,
        'The "clearBtn" default value is correct'
    );

    assert.deepEqual(
        component.get( 'daysOfWeekDisabled' ),
        [],
        'Thed "daysOfWeekDisabled" default value is correct'
    );

    assert.equal(
        component.get( 'disabled' ),
        false,
        'The "disabled" default value is correct'
    );

    assert.equal(
        component.get( 'endDate' ),
        null,
        'The "endDate" default value is correct'
    );

    assert.equal(
        component.get( 'forceParse' ),
        true,
        'The "forceParse" default value is correct'
    );

    assert.equal(
        component.get( 'format' ),
        'mm/dd/yyyy',
        'The "forceParse" default value is correct'
    );

    assert.equal(
        component.get( 'helpText' ),
        null,
        'The "helpText" default value is correct'
    );

    assert.equal(
        component.get( 'inputElementId' ),
        null,
        'The "inputElementId" default value is correct'
    );

    assert.equal(
        component.get( 'inputs' ),
        null,
        'The "inputs" default value is correct'
    );

    assert.equal(
        component.get( 'keyboardNavigation' ),
        true,
        'The "keyboardNavigation" default value is correct'
    );

    assert.equal(
        component.get( 'label' ),
        null,
        'The "label" default value is correct'
    );

    assert.equal(
        component.get( 'language' ),
        'en',
        'The "language" default value is correct'
    );

    assert.equal(
        component.get( 'minViewMode' ),
        'days',
        'The "minViewMode" default value is correct'
    );

    assert.equal(
        component.get( 'multidate' ),
        false,
        'The "multidate" default value is correct'
    );

    assert.equal(
        component.get( 'orientation' ),
        'auto',
        'The "orientation" default value is correct'
    );

    assert.equal(
        component.get( 'placeholder' ),
        null,
        'The "placeholder" default value is correct'
    );

    assert.equal(
        component.get( 'startDate' ),
        null,
        'The "startDate" default value is correct'
    );

    assert.equal(
        component.get( 'startView' ),
        'month',
        'The "startView" default value is correct'
    );

    assert.equal(
        component.get( 'todayBtn' ),
        false,
        'The "todayBtn" default value is correct'
    );

    assert.equal(
        component.get( 'todayHighlight' ),
        false,
        'The "todayHighlight" default value is correct'
    );

    assert.equal(
        component.get( 'value' ),
        null,
        'The "value" default value is correct'
    );

    assert.equal(
        component.get( 'weekStart' ),
        0,
        'The "weekStart" default value is correct'
    );
});

test( 'setInputElementId() - sets inputElementId correctly', function( assert ) {
    const component = this.subject();

    const inputElementId = this.$( 'input.date-picker' ).prop( 'id' );

    assert.equal(
        component.get( 'inputElementId' ),
        inputElementId,
        "'inputElementId' set correctly"
    );
});

test( 'setupDatepicker() - listens to correct event', function( assert ) {
    assert.expect( 1 );

    const done = assert.async();

    this.subject({
        action: 'changeDate',
        targetObject: {
            changeDate() {
                assert.ok( 'changeDate event fired' );
                done();
            }
        }
    });

    Ember.run( () => {
        this.$( 'input.date-picker' )
            .trigger( 'changeDate' );
    });
});

test( 'updateDateRange() - listens to endDate event', function( assert ) {
    assert.expect( 1 );

    const component = this.subject({
        endDate: window.moment().toDate()
    });
    const inputElement = this.$( 'input.date-picker' ).data( 'datepicker' );
    const spy = sinon.spy( Object.getPrototypeOf( inputElement ), 'setEndDate' );

    Ember.run( () => {
        component.set(
            'endDate',
            window.moment( '2013-02-08' ).toDate()
        );
    });

    assert.ok(
        spy.called
    );

    inputElement.setEndDate.restore();
});

test( 'updateDateRange() - listens to startDate event', function( assert ) {
    assert.expect( 1 );

    const component = this.subject({
        startDate: window.moment().toDate()
    });
    const inputElement = this.$( 'input.date-picker' ).data( 'datepicker' );
    const spy = sinon.spy( Object.getPrototypeOf( inputElement ), 'setStartDate' );

    Ember.run( () => {
        component.set(
            'startDate',
            window.moment( '2013-02-08' ).toDate()
        );
    });

    assert.ok(
        spy.called
    );

    inputElement.setStartDate.restore();
});

test( 'updateDateRange() - clears input date when outside of startDate range', function( assert ) {
    assert.expect( 2 );

    const component = this.subject({
        startDate: window.moment().toDate()
    });
    const inputElement = this.$( 'input.date-picker' ).data( 'datepicker' );

    inputElement.setDate( window.moment( '2015-06-08' ).toDate() );

    Ember.run( () => {
        component.set(
            'startDate',
            window.moment( '2015-07-08' ).toDate()
        );
    });

    assert.equal(
        inputElement.getDate(),
        'Invalid Date',
        'Setting a date before "startDate" results in an "Invalid Date"'
    );

    assert.equal(
        this.$( 'input.date-picker' ).datepicker().val(),
        '',
        'The datepicker input value was cleared successfully'
    );
});

test( 'updateDateRange() - clears input date when outside of endDate range', function( assert ) {
    assert.expect( 2 );

    const component = this.subject({
        endDate: window.moment().toDate()
    });
    const inputElement = this.$( 'input.date-picker' ).data( 'datepicker' );

    inputElement.setDate( window.moment( '2015-07-20' ).toDate() );

    Ember.run( () => {
        component.set(
            'endDate',
            window.moment( '2015-07-08' ).toDate()
        );
    });

    assert.equal(
        inputElement.getDate(),
        'Invalid Date',
        'Setting a date after "endDate" results in an "Invalid Date"'
    );

    assert.equal(
        this.$( 'input.date-picker' ).datepicker().val(),
        '',
        'The datepicker input value was cleared successfully'
    );
});

test( 'updateDateRange() - when date outside startDate range we show placeholder text when supplied', function( assert ) {
    assert.expect( 1 );

    const component = this.subject({
        startDate: window.moment().toDate(),
        placeholder: 'Enter a valid date'
    });

    this.$( 'input.date-picker' ).data( 'datepicker' )
        .setDate( window.moment( '2015-06-08' ).toDate() );

    Ember.run( () => {
        component.set(
            'startDate',
            window.moment( '2015-07-08' ).toDate()
        );
    });

    assert.equal(
        this.$( 'input.date-picker' ).datepicker().attr( 'placeholder' ),
        'Enter a valid date',
        'The "placeholder" value was displayed'
    );
});

test( 'updateDateRange() - when date outside endDate range we show placeholder text when supplied', function( assert ) {
    assert.expect( 1 );

    const component = this.subject({
        endDate: window.moment().toDate(),
        placeholder: 'Enter a valid date'
    });

    this.$( 'input.date-picker' ).data( 'datepicker' )
        .setDate( window.moment( '2015-07-20' ).toDate() );

    Ember.run( () => {
        component.set(
            'endDate',
            window.moment( '2015-07-08' ).toDate()
        );
    });

    assert.equal(
        this.$( 'input.date-picker' ).datepicker().attr( 'placeholder' ),
        'Enter a valid date',
        'The "placeholder" value was displayed'
    );
});

test( 'changeDate listener is added and removed from the correct namespace', function( assert ) {
    const component = this.subject();
    const inputElement = this.$( 'input.date-picker' );
    const jQueryData = Ember.get( Ember.$, '_data' );
    const eventData = Ember.get( jQueryData( inputElement[0], 'events' ), 'changeDate' );
    const hasDatePickerNamespace = () => {
        let hasNamespace = false;

        eventData.every(
            ( element ) => {
                if ( 'sl-date-picker' === element.namespace ) {
                    hasNamespace = true;
                    return false;
                }
                return true;
            }
        );

        return hasNamespace;
    };

    assert.ok(
        hasDatePickerNamespace(),
        'Datepicker has a changeDate event listener in the correct namespace after render'
    );

    inputElement.on( 'changeDate', function(){} );
    Ember.run( () => {
        component.trigger( 'willClearRender' );
    });

    assert.ok(
        eventData.length > 0,
        'Datepicker has at least one changeDate event listener'
    );
    assert.strictEqual(
        hasDatePickerNamespace(),
        false,
        'willClearRender removes changeDate listener from the correct namespace'
    );
});

test( 'options() - object contains the expected keys', function( assert ) {
    const component = this.subject();
    const optionsMockObject = Ember.Object.create({
        autoclose: true,
        calendarWeeks: false,
        clearBtn: false,
        daysOfWeekDisabled: [],
        endDate: null,
        forceParse: true,
        format: 'mm/dd/yyyy',
        inputs: null,
        keyboardNavigation: true,
        language: 'en',
        multidate: false,
        orientation: 'auto',
        startDate: null,
        startView: 'month',
        todayBtn: false,
        todayHighlight: false,
        weekStart: 0
    });

    assert.deepEqual(
        Object.keys( component.get( 'options' ) ).sort(),
        Object.keys( optionsMockObject ).sort(),
        'The options object contains the expected keys'
    );
});

