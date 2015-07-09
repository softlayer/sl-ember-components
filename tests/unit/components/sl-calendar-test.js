import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-calendar', 'Unit | Component | sl calendar', {
    needs: [
        'component:sl-calendar-day',
        'component:sl-calendar-month',
        'component:sl-calendar-year'
    ],

    unit: true
});

test( 'Default class name is present', function( assert ) {
    assert.ok(
        this.$().hasClass( 'sl-calendar' ),
        'Default rendered component has class "sl-calendar"'
    );
});

test( 'Locked property applies class', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        this.$().hasClass( 'sl-calendar-locked' ),
        false,
        'Default rendered component does not have class "sl-calendar-locked"'
    );

    Ember.run( () => {
        component.set( 'locked', true );
    });

    assert.ok(
        this.$().hasClass( 'sl-calendar-locked' ),
        'Locked, rendered component has class "sl-calendar-locked"'
    );
});

test( 'Lock mode prevents changing state', function( assert ) {
    const component = this.subject({ locked: true });

    const initialDecadeStart = component.get( 'decadeStart' );
    component.send( 'changeDecade', 1 );
    assert.equal(
        initialDecadeStart,
        component.get( 'decadeStart' ),
        'Value decadeStart is unchanged from actions.changeDecade'
    );

    const initialMonth = component.get( 'currentMonth' );
    component.send( 'changeMonth', 1 );
    assert.equal(
        initialMonth,
        component.get( 'currentMonth' ),
        'Value currentMonth is unchanged from actions.changeMonth'
    );

    const initialYear = component.get( 'currentYear' );
    component.send( 'changeYear', 1 );
    assert.equal(
        initialYear,
        component.get( 'currentYear' ),
        'Value currentYear is unchanged from actions.changeYear'
    );

    component.send( 'setMonth', initialMonth + 1 );
    assert.equal(
        initialMonth,
        component.get( 'currentMonth' ),
        'Value currentMonth is unchanged from actions.setMonth'
    );

    const initialViewMode = component.get( 'viewMode' );
    component.send( 'setView', 'something' );
    assert.equal(
        initialViewMode,
        component.get( 'viewMode' ),
        'Value viewMode is unchanged from actions.setView'
    );

    component.send( 'setYear', initialYear + 1 );
    assert.equal(
        initialYear,
        component.get( 'currentYear' ),
        'Value currentYear is unchanged from actions.setYear'
    );
});

test( 'Clicking a day with a valid content value sends data', function( assert ) {
    const testDay = 1;
    const testMonth = 1;
    const testYear = 2015;
    const testDate = new Date( testYear, testMonth - 1, testDay );

    this.subject({
        action: 'test',
        content: [ { date: testDate } ],
        currentMonth: testMonth,
        currentYear: testYear,

        targetObject: {
            test: dateContent => {
                assert.equal(
                    dateContent[ 0 ].date,
                    testDate,
                    'Date content received'
                );
            }
        }
    });

    this.$( '.active.day' ).trigger( 'click' );
});

test( 'changeDecade action works', function( assert ) {
    const component = this.subject({ currentYear: 2015 });

    assert.equal(
        component.get( 'decadeStart' ),
        2010,
        'Initial decadeStart is expected value'
    );

    assert.equal(
        component.get( 'decadeEnd' ),
        2019,
        'Initial decadeEnd is expected value'
    );

    Ember.run( () => {
        component.send( 'changeDecade', 1 );
    });

    assert.equal(
        component.get( 'decadeStart' ),
        2020,
        'Altered decadeStart is expected value'
    );

    assert.equal(
        component.get( 'decadeEnd' ),
        2029,
        'Altered decadeEnd is expected value'
    );
});

test( 'changeMonth action works', function( assert ) {
    const component = this.subject({ currentMonth: 1 });

    assert.equal(
        component.get( 'currentMonth' ),
        1,
        'Initial currentMonth is expected value'
    );

    Ember.run( () => {
        component.send( 'changeMonth', 1 );
    });

    assert.equal(
        component.get( 'currentMonth' ),
        2,
        'Altered currentMonth is expected value'
    );
});

test( 'changeYear action works', function( assert ) {
    const component = this.subject({ currentYear: 2015 });

    assert.equal(
        component.get( 'currentYear' ),
        2015,
        'Initial currentYear is expected value'
    );

    Ember.run( () => {
        component.send( 'changeYear', 1 );
    });

    assert.equal(
        component.get( 'currentYear' ),
        2016,
        'Altered currentYear is expected value'
    );
});


test( 'Decrementing month from January causes year to decrement', function( assert ) {
    const component = this.subject({
        currentMonth: 1,
        currentYear: 2015
    });

    Ember.run( () => {
        component.send( 'changeMonth', -1 );
    });

    assert.equal(
        component.get( 'currentYear' ),
        2014,
        'currentYear is decremented'
    );
});

test( 'Incrementing month from December causes year to increment', function( assert ) {
    const component = this.subject({
        currentMonth: 12,
        currentYear: 2015
    });

    Ember.run( () => {
        component.send( 'changeMonth', 1 );
    });

    assert.equal(
        component.get( 'currentYear' ),
        2016,
        'currentYear is incremented'
    );
});

test( 'Setting dateValuePath works', function( assert ) {
    this.subject({
        content: [ { test: new Date( 2015, 0, 1 ) } ],
        currentMonth: 1,
        currentYear: 2015,
        dateValuePath: 'test'
    });

    assert.equal(
        this.$( '.active.day' ).text(),
        '1',
        'Active day is expected text value'
    );
});

test( 'Number of days in month is valid', function( assert ) {
    const component = this.subject();

    assert.ok(
        component.get( 'daysInMonth' ) > 0,
        'Days in current month is a non-zero number'
    );
});

test( 'Decade range is correctly based on currentYear', function( assert ) {
    const component = this.subject({ currentYear: 2023 });

    assert.equal(
        component.get( 'decadeStart' ),
        2020,
        'decadeStart is expected value'
    );

    assert.equal(
        component.get( 'decadeEnd' ),
        2029,
        'decadeEnd is expected value'
    );
});

test( 'Months for year view are generated validly', function( assert ) {
    const component = this.subject();

    assert.equal(
        component.get( 'monthsInYearView' ).length,
        12,
        'Twelve months are created'
    );
});

test( 'View mode is settable to "days"', function( assert ) {
    const component = this.subject({ viewMode: 'days' });

    assert.ok(
        component.get( 'viewingDays' ),
        'viewingDays is true when viewMode = "days"'
    );
});

test( 'View mode is settable to "months"', function( assert ) {
    const component = this.subject({ viewMode: 'months' });

    assert.ok(
        component.get( 'viewingMonths' ),
        'viewingMonths is true when viewMode = "months"'
    );
});

test( 'View mode is settable to "years"', function( assert ) {
    const component = this.subject({ viewMode: 'years' });

    assert.ok(
        component.get( 'viewingYears' ),
        'viewingYears is true when viewMode = "years"'
    );
});

test( 'Weeks for month view are assembled correctly', function( assert ) {
    const component = this.subject();

    assert.ok(
        component.get( 'weeksInMonthView' ).length > 0,
        'A number of weeks were generated greater than zero'
    );
});

test( 'Years for decade view are assembled correctly', function( assert ) {
    const component = this.subject();

    assert.equal(
        component.get( 'yearsInDecadeView' ).length,
        12,
        'Twelve years were generated for the decade view'
    );
});
