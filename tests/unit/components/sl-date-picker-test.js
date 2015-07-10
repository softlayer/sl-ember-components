import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-date-picker', 'Unit | Component | sl date picker', {
    unit: true
});

test('it renders', function( assert ) {
    assert.expect( 2 );

    // Creates the component instance
    var component = this.subject();
    assert.equal( component._state, 'preRender' );

    // Renders the component to the page
    this.render();
    assert.equal( component._state, 'inDOM' );
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
});


test( 'Default properties are set correctly', function( assert ) {
    var component = this.subject();

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
    let component = this.subject();

    let inputElementId = this.$( 'input.date-picker' ).prop( 'id' );

    assert.equal(
        component.get( 'inputElementId' ),
        inputElementId,
        "'inputElementId' set correctly"
    );
});

test( 'setupDatepicker() - listens to correct event', function( assert ) {
    assert.expect( 1 );

    let done = assert.async();

    this.subject({
        action: 'changeDate',
        targetObject: {
            changeDate() {
                assert.ok( 'changeDate event fired' );
                done();
            }
        }
    });

    let inputElement = this.$( 'input.date-picker' );

    Ember.run( () => {
        inputElement.trigger( 'changeDate' );
    });
});

test( 'setEndDate() - listens to correct event', function( assert ) {
    assert.expect( 1 );

    let component = this.subject({
        endDate: window.moment().toDate()
    });
    let inputElement = this.$( 'input.date-picker' );
    let spy = sinon.spy( Object.getPrototypeOf( inputElement ), 'datepicker' );
    let testDate = window.moment( '2013-02-08' ).toDate();

    Ember.run( () => {
        component.set( 'endDate', testDate );
    });

    assert.ok(
        spy.calledWith( 'setEndDate', testDate )
    );

    inputElement.datepicker.restore();
});

test( 'setStartDate() - listens to correct event', function( assert ) {
    assert.expect( 1 );

    let component = this.subject({
        startDate: window.moment().toDate()
    });
    let inputElement = this.$( 'input.date-picker' );
    let spy = sinon.spy( Object.getPrototypeOf( inputElement ), 'datepicker' );
    let testDate = window.moment( '2013-02-08' ).toDate();

    Ember.run( () => {
        component.set( 'startDate', testDate );
    });

    assert.ok(
        spy.calledWith( 'setStartDate', testDate )
    );

    inputElement.datepicker.restore();
});

test( 'unregisterEvents() - listens to correct event', function( assert ) {
    let component = this.subject();
    let inputElement = this.$( 'input.date-picker' )[ 0 ];

    assert.equal(
        Ember.typeOf( $._data( inputElement, 'events' ).changeDate ),
        'array',
        'Datepicker has a changeDate event listener after render'
    );

    component.trigger( 'willClearRender' );

    assert.strictEqual(
        $._data( inputElement, 'events' ),
        undefined,
        'Datepicker does not have event listeners after willClearRender'
    );
});
