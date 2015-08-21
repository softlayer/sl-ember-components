import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-date-time', 'Unit | Component | sl date time', {
    unit: true
});

test( 'Default class names are present', function( assert ) {
    this.subject({ timezone: 'America/Chicago' });

    assert.ok(
        this.$().hasClass( 'sl-datetime' ),
        'Default rendered component has class "sl-datetime"'
    );
});

test( 'Attribute "datetime" is properly set', function( assert ) {
    this.subject({
        timezone: 'America/Denver',
        value: '2015-01-01 00:00'
    });

    assert.equal(
        this.$().attr( 'datetime' ),
        '2015-01-01 00:00 MST',
        '"datetime" attribute is expected value'
    );

    this.subject({
        timezone: 'America/Denver',
        value: '2015-01-01 07:00+00:00'
    });

    assert.equal(
        this.$().attr( 'datetime' ),
        '2015-01-01 00:00 MST',
        '"datetime" attribute is expected value (from GMT)'
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
        timezone: 'America/Denver',
        value: '2015-01-01 07:00+00:00'
    });

    const formattedValue = 'Thursday, January 1st 2015, 12:00 AM MST';

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
