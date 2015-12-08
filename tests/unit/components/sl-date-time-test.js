import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import TooltipEnabledMixin from 'sl-ember-components/mixins/sl-tooltip-enabled';

moduleForComponent( 'sl-date-time', 'Unit | Component | sl date time', {
    unit: true
});

test( 'Expected Mixins are present', function( assert ) {
    assert.ok(
        TooltipEnabledMixin.detect( this.subject({ timezone: 'America/Chicago' }) ),
        'TooltipEnabled Mixin is present'
    );
});

test( 'Default property values', function( assert ) {
    this.subject({ timezone: 'America/Chicago' });

    assert.ok(
        this.$().hasClass( 'sl-datetime' ),
        'Default rendered component has class "sl-datetime"'
    );
});

test( 'Attribute "datetime" is properly set', function( assert ) {
    this.subject({
        timezone: 'America/Chicago',
        value: new Date( 2015, 0, 1 )
    });

    assert.equal(
        this.$().attr( 'datetime' ),
        '2015-01-01 00:00 CST',
        '"datetime" attribute is expected value'
    );
});

test( 'Format "date" results in correctly formatted value', function( assert ) {
    const component = this.subject({
        format: 'date',
        timezone: 'America/Chicago',
        value: new Date( 2015, 0, 1 )
    });

    const formattedValue = '2015-01-01';

    assert.equal(
        component.get( 'formattedValue' ),
        formattedValue,
        '"date" formatted date is expected value'
    );

    assert.equal(
        Ember.$.trim( this.$().text() ),
        formattedValue,
        'Rendered component text is expected formatted value'
    );
});

test( 'Format "relative" results in correctly formatted value', function( assert ) {
    const component = this.subject({
        format: 'relative',
        timezone: 'America/Chicago',
        value: window.moment().subtract( 1, 'year' )
    });

    const formattedValue = 'a year ago';

    assert.equal(
        component.get( 'formattedValue' ),
        formattedValue,
        '"relative" formatted date is expected value'
    );

    assert.equal(
        Ember.$.trim( this.$().text() ),
        formattedValue,
        'Rendered component text is expected formatted value'
    );
});

test( 'Format "datetime" results in correctly formatted value', function( assert ) {
    const component = this.subject({
        format: 'datetime',
        timezone: 'America/Chicago',
        value: new Date( 2015, 0, 1 )
    });

    const formattedValue = 'Thursday, January 1st 2015, 12:00 AM CST';

    assert.equal(
        component.get( 'formattedValue' ),
        formattedValue,
        '"datetime" formatted date is expected value'
    );

    assert.equal(
        Ember.$.trim( this.$().text() ),
        formattedValue,
        'Rendered component text is expected formatted value'
    );
});

test( 'Computed momentValue is set and updated correctly', function( assert ) {
    const component = this.subject({
        timezone: 'America/Chicago',
        value: new Date( 2015, 0, 1 )
    });

    assert.equal(
        component.get( 'momentValue' ).calendar(),
        '01/01/2015',
        'Initial momentValue is expected value'
    );

    Ember.run( () => {
        component.set( 'value', new Date( 2015, 1, 15 ) );
    });
    assert.equal(
        component.get( 'momentValue' ).calendar(),
        '02/15/2015',
        'Updated momentValue is expected value'
    );
});

test( 'Computed timezoneString is set and updated correctly', function( assert ) {
    const component = this.subject({
        timezone: 'America/Chicago',
        value: new Date( 2015, 0, 1 )
    });

    assert.equal(
        component.get( 'timezoneString' ),
        'CST',
        'Initial timezoneString is expected value'
    );

    Ember.run( () => {
        component.set( 'timezone', 'America/Los_Angeles' );
    });

    assert.equal(
        component.get( 'timezoneString' ),
        'PST',
        'Updated timezoneString is expected value'
    );
});

test( '"title" property is an alias to "datetime" value', function( assert ) {
    const component = this.subject({ timezone: 'America/Chicago' });

    assert.equal(
        component.get( 'title' ),
        component.get( 'datetime' ),
        '"title" property is aliased to "datetime" property'
    );
});

test( 'Dependent keys are correct', function( assert ) {
    const component = this.subject({ timezone: 'America/Chicago' });

    const datetimeDependentKeys = [
        'timezoneString',
        'value'
    ];

    const formattedValueDependentKeys = [
        'format',
        'momentValue'
    ];

    const momentValueDependentKeys = [
        'value'
    ];

    const timezoneStringDependentKeys = [
        'timezone',
        'momentValue'
    ];

    assert.deepEqual(
        component.datetime._dependentKeys,
        datetimeDependentKeys,
        'Dependent keys are correct for datetime()'
    );

    assert.deepEqual(
        component.formattedValue._dependentKeys,
        formattedValueDependentKeys,
        'Dependent keys are correct for formattedValue()'
    );

    assert.deepEqual(
        component.momentValue._dependentKeys,
        momentValueDependentKeys,
        'Dependent keys are correct for momentValue()'
    );

    assert.deepEqual(
        component.timezoneString._dependentKeys,
        timezoneStringDependentKeys,
        'Dependent keys are correct for timezoneString()'
    );
});

test( 'init() - "timezone" property needs to be a string', function( assert ) {
    const properties = Ember.Object.create();

    const callSubject = () => this.subject( properties );

    // Empty Property

    assert.throws(
        callSubject,
        'Property was empty'
    );

    // Null Property

    properties.set( 'timezone', null );

    assert.throws(
        callSubject,
        'Property was null'
    );


    // Number Property

    properties.set( 'timezone', 3 );

    assert.throws(
        callSubject,
        'Property was a number'
    );

    // Boolean Property

    properties.set( 'timezone', true );

    assert.throws(
        callSubject,
        'Property was a boolean'
    );

    // Array Property

    properties.set( 'timezone', [] );

    assert.throws(
        callSubject,
        'Property was an array'
    );

    // Function Property

    properties.set( 'timezone', function() { } );

    assert.throws(
        callSubject,
        'Property was a function'
    );

    // Object Property

    properties.set( 'timezone', {} );

    assert.throws(
        callSubject,
        'Property was an object'
    );

    // Undefined Property

    properties.set( 'timezone', undefined );

    assert.throws(
        callSubject,
        'Property was undefined'
    );

    // String Property

    properties.set( 'timezone', 'America/Chicago' );

    assert.ok(
        callSubject(),
        'Property was a string'
    );
});

test( 'init() - "timezone" property needs to be valid', function( assert ) {
    const properties = Ember.Object.create();

    const callSubject = () => this.subject( properties );

    // non-valid timezone property
    properties.set( 'timezone', 'HammerTime/MiddleEarth' );

    assert.throws(
        callSubject,
        'timezone property is not valid'
    );

    // valid timezone property
    properties.set( 'timezone', 'America/Chicago' );

    assert.ok(
        callSubject(),
        'timezone property is valid'
    );
});
