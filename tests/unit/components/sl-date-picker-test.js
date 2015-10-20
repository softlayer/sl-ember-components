import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import ComponentInputId from 'sl-ember-components/mixins/sl-component-input-id';
import TooltipEnabled from 'sl-ember-components/mixins/sl-tooltip-enabled';

moduleForComponent( 'sl-date-picker', 'Unit | Component | sl date picker', {
    unit: true
});

test( 'Expected Mixins are present', function( assert ) {
    assert.ok(
        ComponentInputId.detect( this.subject() ),
        'sl-component-input-id mixin is present'
    );

    assert.ok(
        TooltipEnabled.detect( this.subject() ),
        'sl-tooltip-enabled mixin is present'
    );
});

test( 'Default properties are set correctly', function( assert ) {
    const component = this.subject();

    assert.equal(
        component.get( 'autoclose' ),
        true,
        '"autoclose" default vaue is correct'
    );

    assert.equal(
        component.get( 'calendarWeeks' ),
        false,
        '"calendarWeeks" default value is correct'
    );

    assert.equal(
        component.get( 'clearBtn' ),
        false,
        '"clearBtn" default value is correct'
    );

    assert.deepEqual(
        component.get( 'daysOfWeekDisabled' ),
        [],
        '"daysOfWeekDisabled" default value is correct'
    );

    assert.equal(
        component.get( 'disabled' ),
        false,
        '"disabled" default value is correct'
    );

    assert.equal(
        component.get( 'endDate' ),
        null,
        '"endDate" default value is correct'
    );

    assert.equal(
        component.get( 'forceParse' ),
        true,
        '"forceParse" default value is correct'
    );

    assert.equal(
        component.get( 'format' ),
        'mm/dd/yyyy',
        '"forceParse" default value is correct'
    );

    assert.equal(
        component.get( 'helpText' ),
        null,
        '"helpText" default value is correct'
    );

    assert.equal(
        component.get( 'inputs' ),
        null,
        '"inputs" default value is correct'
    );

    assert.equal(
        component.get( 'keyboardNavigation' ),
        true,
        '"keyboardNavigation" default value is correct'
    );

    assert.equal(
        component.get( 'label' ),
        null,
        '"label" default value is correct'
    );

    assert.equal(
        component.get( 'language' ),
        'en',
        '"language" default value is correct'
    );

    assert.equal(
        component.get( 'minViewMode' ),
        'days',
        '"minViewMode" default value is correct'
    );

    assert.equal(
        component.get( 'multidate' ),
        false,
        '"multidate" default value is correct'
    );

    assert.equal(
        component.get( 'orientation' ),
        'auto',
        '"orientation" default value is correct'
    );

    assert.equal(
        component.get( 'placeholder' ),
        null,
        '"placeholder" default value is correct'
    );

    assert.equal(
        component.get( 'startDate' ),
        null,
        '"startDate" default value is correct'
    );

    assert.equal(
        component.get( 'startView' ),
        'month',
        '"startView" default value is correct'
    );

    assert.equal(
        component.get( 'todayBtn' ),
        false,
        '"todayBtn" default value is correct'
    );

    assert.equal(
        component.get( 'todayHighlight' ),
        false,
        '"todayHighlight" default value is correct'
    );

    assert.equal(
        component.get( 'value' ),
        null,
        '"value" default value is correct'
    );

    assert.equal(
        component.get( 'weekStart' ),
        0,
        '"weekStart" default value is correct'
    );
});

test( 'Event handlers are registered and unregistered', function( assert ) {
    const component = this.subject();

    const input = this.$( 'input.date-picker' ).get( 0 );
    const jQueryData = Ember.get( Ember.$, '_data' );
    const events = jQueryData( input, 'events' );

    assert.ok(
        'changeDate' in events,
        'changeDate handler is registered after didInsertElement'
    );

    Ember.run( () => component.trigger( 'willClearRender' ) );

    assert.notOk(
        'changeDate' in events,
        'changeDate event handler is unregistered after willClearRender'
    );
});

test( 'options() - object contains the expected keys and default values', function( assert ) {
    const component = this.subject();

    const options = {
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
        minViewMode: 'days',
        multidate: false,
        orientation: 'auto',
        startDate: null,
        startView: 'month',
        todayBtn: false,
        todayHighlight: false,
        weekStart: 0
    };

    assert.deepEqual(
        component.get( 'options' ),
        options
    );
});

test( 'Changing "autoclose" to non default value works as expected', function( assert ) {
    const autoclose = false;

    const component = this.subject({
        autoclose: autoclose
    });

    const options = component.get( 'options' );

    assert.strictEqual(
        options.autoclose,
        autoclose
    );
});

test( 'Changing "calenderWeeks" to a non default value works as expected', function( assert ) {
    const calendarWeeks = true;

    const component = this.subject({
        calendarWeeks: calendarWeeks
    });

    const options = component.get( 'options' );

    assert.strictEqual(
        options.calendarWeeks,
        calendarWeeks
    );
});

test( 'Changing "clearBtn" to a non default value works as expected', function( assert ) {
    const clearBtn = true;

    const component = this.subject({
        clearBtn: clearBtn
    });

    const options = component.get( 'options' );

    assert.strictEqual(
        options.clearBtn,
        clearBtn
    );
});

test( 'Changing "daysOfWeekDisabled" to a non default value works as expected', function( assert ) {
    const daysOfWeek = [ 1, 2, 3 ];

    const component = this.subject({
        daysOfWeekDisabled: daysOfWeek
    });

    const options = component.get( 'options' );

    assert.strictEqual(
        options.daysOfWeekDisabled,
        daysOfWeek
    );
});

test( 'Changing "endDate" to a non default value works as expected', function( assert ) {
    const endDate = window.moment( '2015-06-08' );

    const component = this.subject({
        endDate: endDate
    });

    const options = component.get( 'options' );

    assert.strictEqual(
        options.endDate,
        endDate
    );
});

test( 'Changing "forceParse" to a non default value works as expected', function( assert ) {
    const forceParse = false;

    const component = this.subject({
        forceParse: forceParse
    });

    const options = component.get( 'options' );

    assert.strictEqual(
        options.forceParse,
        forceParse
    );
});

test( 'Changing "format" to a non default value works as expected', function( assert ) {
    const format = 'dd/mm/yyyy';

    const component = this.subject({
        format: format
    });

    const options = component.get( 'options' );

    assert.strictEqual(
        options.format,
        format
    );
});

test( 'Changing "inputs" to a non default value works as expected', function( assert ) {
    const inputs = [ Ember.$( '<input />' ), Ember.$( '<input />' ) ];

    const component = this.subject({
        inputs: inputs
    });

    const options = component.get( 'options' );

    assert.deepEqual(
        options.inputs,
        inputs
    );
});

test( 'Changing "keyboardNavigation" to a non default value works as expected', function( assert ) {
    const keyboardNavigation = false;

    const component = this.subject({
        keyboardNavigation: keyboardNavigation
    });

    const options = component.get( 'options' );

    assert.strictEqual(
        options.keyboardNavigation,
        keyboardNavigation
    );
});

test( 'Changing "language" to a non default value works as expected', function( assert ) {
    const language = 'eu';

    const component = this.subject({
        language: language
    });

    const options = component.get( 'options' );

    assert.strictEqual(
        options.language,
        language
    );
});

test( 'Changing "minViewMode" to a non default value works as expected', function( assert ) {
    const minViewMode = 'months';

    const component = this.subject({
        minViewMode: minViewMode
    });

    const options = component.get( 'options' );

    assert.strictEqual(
        options.minViewMode,
        minViewMode
    );
});

test( 'Changing "multidate" to a non default value works as expected', function( assert ) {
    const multidate = false;

    const component = this.subject({
        multidate: multidate
    });

    const options = component.get( 'options' );

    assert.strictEqual(
        options.multidate,
        multidate
    );
});

test( 'Changing "orientation" to a non default value works as expected', function( assert ) {
    const orientation = 'top';

    const component = this.subject({
        orientation: orientation
    });

    const options = component.get( 'options' );

    assert.strictEqual(
        options.orientation,
        orientation
    );
});

test( 'Changing "startDate" to a non default value works as expected', function( assert ) {
    const startDate = window.moment( '2015-01-01' );

    const component = this.subject({
        startDate: startDate
    });

    const options = component.get( 'options' );

    assert.strictEqual(
        options.startDate,
        startDate
    );
});

test( 'Changing "startView" to a non default value works as expected', function( assert ) {
    const startView = 'year';

    const component = this.subject({
        startView: startView
    });

    const options = component.get( 'options' );

    assert.strictEqual(
        options.startView,
        startView
    );
});

test( 'Changing "todayBtn" to a non default value works as expected', function( assert ) {
    const todayBtn = true;

    const component = this.subject({
        todayBtn: todayBtn
    });

    const options = component.get( 'options' );

    assert.strictEqual(
        options.todayBtn,
        todayBtn
    );
});

test( 'Changing "todayHighlight" to a non default value works as expected', function( assert ) {
    const todayHighlight = true;

    const component = this.subject({
        todayHighlight: todayHighlight
    });

    const options = component.get( 'options' );

    assert.strictEqual(
        options.todayHighlight,
        todayHighlight
    );
});

test( 'Changing "weekStart" to a non default value works as expected', function( assert ) {
    const weekStart = 1;

    const component = this.subject({
        weekStart: weekStart
    });

    const options = component.get( 'options' );

    assert.strictEqual(
        options.weekStart,
        weekStart
    );
});
