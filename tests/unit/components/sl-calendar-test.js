import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import sinon from 'sinon';
import { skip } from 'qunit';

moduleForComponent( 'sl-calendar', 'Unit | Component | sl calendar', {
    needs: [
        'component:sl-calendar-day',
        'component:sl-calendar-month',
        'component:sl-calendar-year'
    ],

    unit: true
});

test( 'Default property values are set correctly', function( assert ) {
    const component = this.subject();

    assert.deepEqual(
        component.get( 'content' ),
        [],
        'content is [] by default'
    );

    assert.strictEqual(
        component.get( 'dateValuePath' ),
        'date',
        'dateValuePath is "date" by default'
    );

    assert.notOk(
        component.get( 'fixedWeekCount' ),
        'fixedWeekCount is false by default'
    );

    assert.ok(
        component.get( 'focusable' ),
        'focusable is true by default'
    );

    assert.notOk(
        component.get( 'hasFocus' ),
        'hasFocus is false by default'
    );

    assert.strictEqual(
        component.get( 'locale' ),
        'en',
        'locale is "en" by default'
    );

    assert.strictEqual(
        component.get( 'locked' ),
        false,
        'locked is false by default'
    );

    /*assert.strictEqual(
        component.get( 'selectConstraint' ),
        {
            start: null,
            end: null
        },
        'selectConstraint is ? by default'
    );*/

    assert.strictEqual(
        component.get( 'selectedDate' ),
        null,
        'selectedDate is null by default'
    );

    assert.strictEqual(
        component.get( 'showingMonth' ),
        null,
        'showingMonth is null by default'
    );

    assert.strictEqual(
        component.get( 'today' ),
        null,
        'today is null by default'
    );

    assert.strictEqual(
        component.get( 'viewingDate' ),
        null,
        'viewingDate is null by default'
    );

    assert.strictEqual(
        component.get( 'viewMode' ),
        'days',
        'viewMode is "days" by default'
    );
});

skip( 'Lock mode prevents changing state', function( assert ) {
    const component = this.subject({ locked: true });

    const initialDecadeStart = component.get( 'decadeStart' );
    component.send( 'changeDecade', 1 );
    assert.strictEqual(
        initialDecadeStart,
        component.get( 'decadeStart' ),
        'Value decadeStart is unchanged from actions.changeDecade'
    );

    const initialMonth = component.get( 'currentMonth' );
    component.send( 'changeMonth', 1 );
    assert.strictEqual(
        initialMonth,
        component.get( 'currentMonth' ),
        'Value currentMonth is unchanged from actions.changeMonth'
    );

    const initialYear = component.get( 'currentYear' );
    component.send( 'changeYear', 1 );
    assert.strictEqual(
        initialYear,
        component.get( 'currentYear' ),
        'Value currentYear is unchanged from actions.changeYear'
    );

    component.send( 'setMonth', initialMonth + 1 );
    assert.strictEqual(
        initialMonth,
        component.get( 'currentMonth' ),
        'Value currentMonth is unchanged from actions.setMonth'
    );

    const initialViewMode = component.get( 'viewMode' );
    component.send( 'setView', 'something' );
    assert.strictEqual(
        initialViewMode,
        component.get( 'viewMode' ),
        'Value viewMode is unchanged from actions.setView'
    );

    component.send( 'setYear', initialYear + 1 );
    assert.strictEqual(
        initialYear,
        component.get( 'currentYear' ),
        'Value currentYear is unchanged from actions.setYear'
    );
});

skip( 'locale - Setting causes default of en (English) to be updated', function() {

});

skip( 'contentDates - Verify dates array', function() {

});

skip( 'setDate method sets the viewingDate and selectedDate', function() {

});

skip( 'setMonth method modifies the viewingDate', function() {

});

skip( 'setYear method modifies the viewingDate', function() {

});

skip( 'setView - viewMode set correctly', function() {

});

skip( 'calendar title is correctly generated for each viewMode', function() {

});

skip( 'shortWeekDayNames - returns array of day names in short name format (Su, Mo, Tu...)', function() {

});

//updateShowingMonth?
//focusedDateChange?
//activeDateChange?

test( 'changeDecade action works', function( assert ) {
    const component = this.subject({
        viewingDate: window.moment( [ 2015, 0, 1 ] )
    });

    Ember.run( () => {
        component.send( 'changeDecade', 1 );
    });

    assert.strictEqual(
        component.get( 'viewingDate' ).year(),
        2025,
        'Altered viewingDate is expected value'
    );
});

test( 'changeMonth action works', function( assert ) {
    const component = this.subject({
        viewingDate: window.moment( [ 2015, 0, 1 ] )
    });

    Ember.run( () => {
        component.send( 'changeMonth', 1 );
    });

    assert.strictEqual(
        component.get( 'viewingDate' ).month(),
        1,
        'Altered viewingDate is expected value'
    );
});

test( 'changeYear action works', function( assert ) {
    const component = this.subject({
        viewingDate: window.moment( [ 2015, 0, 1 ] )
    });

    Ember.run( () => {
        component.send( 'changeYear', 1 );
    });

    assert.strictEqual(
        component.get( 'viewingDate' ).year(),
        2016,
        'Altered viewingDate is expected value'
    );
});

test( 'Decrementing month from January causes year to decrement', function( assert ) {
    const component = this.subject({
        viewingDate: window.moment( [ 2015, 0, 1 ] )
    });

    Ember.run( () => {
        component.send( 'changeMonth', -1 );
    });

    assert.strictEqual(
        component.get( 'viewingDate' ).year(),
        2014,
        'viewingDate is the appropriate year'
    );
});

test( 'Incrementing month from December causes year to increment', function( assert ) {
    const component = this.subject({
        viewingDate: window.moment( [ 2015, 11, 1 ] )
    });

    Ember.run( () => {
        component.send( 'changeMonth', 1 );
    });

    assert.strictEqual(
        component.get( 'viewingDate' ).year(),
        2016,
        'viewingDate is the appropriate year'
    );
});

test( 'View mode is settable to "days"', function( assert ) {
    const component = this.subject({ viewMode: 'days' });

    assert.ok(
        component.get( 'viewingDays' ),
        'viewingDays is true when viewMode = "days"'
    );

    assert.notOk(
        component.get( 'viewingMonths' ),
        'viewingMonths is false when viewMode = "days"'
    );

    assert.notOk(
        component.get( 'viewingYears' ),
        'viewingYears is false when viewMode = "days"'
    );
});

test( 'View mode is settable to "months"', function( assert ) {
    const component = this.subject({ viewMode: 'months' });

    assert.ok(
        component.get( 'viewingMonths' ),
        'viewingMonths is true when viewMode = "months"'
    );

    assert.notOk(
        component.get( 'viewingDays' ),
        'viewingDays is false when viewMode = "months"'
    );

    assert.notOk(
        component.get( 'viewingYears' ),
        'viewingYears is false when viewMode = "months"'
    );
});

test( 'View mode is settable to "years"', function( assert ) {
    const component = this.subject({ viewMode: 'years' });

    assert.ok(
        component.get( 'viewingYears' ),
        'viewingYears is true when viewMode = "years"'
    );

    assert.notOk(
        component.get( 'viewingDays' ),
        'viewingDays is false when viewMode = "years"'
    );

    assert.notOk(
        component.get( 'viewingMonths' ),
        'viewingMonths is false when viewMode = "years"'
    );
});

//old/new/active?
test( 'Weeks for month view are assembled correctly', function( assert ) {
    const component = this.subject({
        viewingDate: window.moment( [ 2015, 1, 1 ] )
    });

    let allWeeks = component.get( 'weeksInMonthView' );
    let flattenedWeeks = [];

    for ( let weekGroup = 0; weekGroup < allWeeks.length; weekGroup++ ) {
        for ( let week = 0; week < allWeeks[ weekGroup ].length; week++ ) {
            flattenedWeeks.push( allWeeks[ weekGroup ][ week ] );
        }
    }

    assert.strictEqual(
        flattenedWeeks.length,
        28,
        'Twenty eight days were generated for the month view'
    );

    component.set( 'fixedWeekCount', true );

    allWeeks = component.get( 'weeksInMonthView' );
    flattenedWeeks = [];

    for ( let weekGroup = 0; weekGroup < allWeeks.length; weekGroup++ ) {
        for ( let week = 0; week < allWeeks[ weekGroup ].length; week++ ) {
            flattenedWeeks.push( allWeeks[ weekGroup ][ week ] );
        }
    }

    assert.strictEqual(
        flattenedWeeks.length,
        42,
        'Forty two days were generated for the month view'
    );
});

//active?
test( 'Months for year view are assembled correctly', function( assert ) {
    const component = this.subject();

    const allMonths = component.get( 'monthsInYearView' );
    const flattenedMonths = [];

    for ( let monthGroup = 0; monthGroup < allMonths.length; monthGroup++ ) {
        for ( let month = 0; month < allMonths[ monthGroup ].length; month++ ) {
            flattenedMonths.push( allMonths[ monthGroup ][ month ] );
        }
    }

    assert.strictEqual(
        flattenedMonths.length,
        12,
        'Twelve months were generated for the year view'
    );
});

//active?
test( 'Years for decade view are assembled correctly', function( assert ) {
    const component = this.subject();

    const allYears = component.get( 'yearsInDecadeView' );
    const flattenedYears = [];

    for ( let yearGroup = 0; yearGroup < allYears.length; yearGroup++ ) {
        for ( let year = 0; year < allYears[ yearGroup ].length; year++ ) {
            flattenedYears.push( allYears[ yearGroup ][ year ] );
        }
    }

    assert.strictEqual(
        flattenedYears.length,
        12,
        'Twelve years were generated for the decade view'
    );
});

test( 'Observer keys are correct', function( assert ) {
    const component = this.subject();

    const activeDateChangeKeys = [
        'selectedDate'
    ];

    const focusedDateChangeKeys = [
        'viewingDate'
    ];

    const updateShowingMonthKeys = [
        'viewingDate'
    ];

    assert.deepEqual(
        component.activeDateChange.__ember_observes__,
        activeDateChangeKeys,
        'Observer keys are correct for activeDateChange()'
    );

    assert.deepEqual(
        component.focusedDateChange.__ember_observes__,
        focusedDateChangeKeys,
        'Observer keys are correct for focusedDateChange()'
    );

    assert.deepEqual(
        component.updateShowingMonth.__ember_observes__,
        updateShowingMonthKeys,
        'Observer keys are correct for updateShowingMonth()'
    );
});

test( 'Dependent keys are correct', function( assert ) {
    const component = this.subject();

    const calendarTitleDependentKeys = [
        'viewingDate',
        'locale',
        'viewMode'
    ];

    const contentDatesDependentKeys = [
        'content',
        'dateValuePath'
    ];

    const monthsInYearViewDependentKeys = [
        'viewingDate',
        'selectedDate',
        'locale'
    ];

    const shortWeekDayNamesDependentKeys = [
        'locale'
    ];

    const tabIndexDependentKeys = [
        'focusable'
    ];

    const viewingDaysDependentKeys = [
        'viewMode'
    ];

    const viewingMonthsDependentKeys = [
        'viewMode'
    ];

    const viewingYearsDependentKeys = [
        'viewMode'
    ];

    const weeksInMonthViewDependentKeys = [
        'fixedWeekCount',
        'locale',
        'selectConstraint',
        'showingMonth',
        'viewingDays'
    ];

    const yearsInDecadeViewDependentKeys = [
        'viewingDate',
        'selectedDate'
    ];

    assert.deepEqual(
        component.calendarTitle._dependentKeys,
        calendarTitleDependentKeys,
        'Dependent keys are correct for calendarTitle()'
    );

    assert.deepEqual(
        component.contentDates._dependentKeys,
        contentDatesDependentKeys,
        'Dependent keys are correct for contentDates()'
    );

    assert.deepEqual(
        component.monthsInYearView._dependentKeys,
        monthsInYearViewDependentKeys,
        'Dependent keys are correct for monthsInYearView()'
    );

    assert.deepEqual(
        component.shortWeekDayNames._dependentKeys,
        shortWeekDayNamesDependentKeys,
        'Dependent keys are correct for shortWeekDayNames()'
    );

    assert.deepEqual(
        component.tabIndex._dependentKeys,
        tabIndexDependentKeys,
        'Dependent keys are correct for tabIndex()'
    );

    assert.deepEqual(
        component.viewingDays._dependentKeys,
        viewingDaysDependentKeys,
        'Dependent keys are correct for viewingDays()'
    );

    assert.deepEqual(
        component.viewingMonths._dependentKeys,
        viewingMonthsDependentKeys,
        'Dependent keys are correct for viewingMonths()'
    );

    assert.deepEqual(
        component.viewingYears._dependentKeys,
        viewingYearsDependentKeys,
        'Dependent keys are correct for viewingYears()'
    );

    assert.deepEqual(
        component.weeksInMonthView._dependentKeys,
        weeksInMonthViewDependentKeys,
        'Dependent keys are correct for weeksInMonthView()'
    );

    assert.deepEqual(
        component.yearsInDecadeView._dependentKeys,
        yearsInDecadeViewDependentKeys,
        'Dependent keys are correct for yearsInDecadeView()'
    );
});
