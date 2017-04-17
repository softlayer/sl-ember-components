import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import ClassPrefix from 'sl-ember-components/mixins/class-prefix';
import ComponentInputId from 'sl-ember-components/mixins/sl-component-input-id';
import TooltipEnabled from 'sl-ember-components/mixins/sl-tooltip-enabled';
import sinon from 'sinon';
import globalLibraries from '../../helpers/sl/synchronous/global-libraries';

moduleForComponent( 'sl-date-picker', 'Unit | Component | sl date picker', {
    unit: true
});

test( 'Expected Mixins are present', function( assert ) {
    assert.ok(
        ClassPrefix.detect( this.subject() ),
        'ClassPrefix Mixin is present'
    );

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
        component.get( 'componentClass' ),
        'date-picker',
        'componentClass is set to date-picker'
    );

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

    assert.strictEqual(
        component.get( 'componentClass' ),
        'date-picker',
        'componentClass is set to date-picker'
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
    const spyOn = sinon.spy( Ember.$.fn, 'on' );
    const spyOff = sinon.spy( Ember.$.fn, 'off' );
    const component = this.subject();
    const input = this.$( 'input.date-picker' );

    const matchElement = sinon.match( ( value ) => {
        return value.get( 0 ) === input.get( 0 );
    });

    this.render();

    spyOn.reset();

    component.trigger( 'didInsertElement' );

    assert.ok(
        spyOn.calledWith( component.namespaceEvent( 'changeDate' ) ),
        'on() was called with namespaced changeDate event'
    );

    assert.ok(
        spyOn.calledOn( matchElement ),
        'on() was called on expected input'
    );

    spyOff.reset();

    component.trigger( 'willClearRender' );

    assert.ok(
        spyOff.calledWith( component.namespaceEvent( 'changeDate' ) ),
        'off() was called with namespaced changeDate event'
    );

    assert.ok(
        spyOff.calledOn( matchElement ),
        'off() was called on expected input'
    );

    Ember.$.fn.on.restore();
    Ember.$.fn.off.restore();
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

test( 'Observer keys are correct', function( assert ) {
    const component = this.subject();

    const updateDateRangeKeys = [
        'endDate',
        'startDate'
    ];

    assert.deepEqual(
        component.updateDateRange.__ember_observes__,
        updateDateRangeKeys,
        'Observer keys are correct for updateDateRange()'
    );

    const emptyComponent = this.subject({
        autoclose: undefined,
        calendarWeeks: undefined,
        clearBtn: undefined,
        daysOfWeekDisabled: undefined,
        endDate: undefined,
        forceParse: undefined,
        format: undefined,
        inputs: undefined,
        keyboardNavigation: undefined,
        language: undefined,
        multidate: undefined,
        orientation: undefined,
        startDate: undefined,
        startView: undefined,
        todayBtn: undefined,
        todayHighlight: undefined,
        weekStart: undefined
    });

    assert.deepEqual(
        emptyComponent.get( 'options' ),
        {
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
        },
        'Undefined properties change to default values'
    );

});

test( 'There are no references to Ember.$, $ or jQuery', function( assert ) {
    globalLibraries.setupSpies();

    const component = this.subject();

    this.render();

    globalLibraries.triggerEvents( component );

    assert.notOk(
        globalLibraries.called(),
        'Global libraries are not referenced in component'
    );

    globalLibraries.restoreSpies();
});
