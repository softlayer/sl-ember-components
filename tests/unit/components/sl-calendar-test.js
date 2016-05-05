import Ember from 'ember';
import ClassPrefix from 'sl-ember-components/mixins/class-prefix';
import { moduleForComponent, test } from 'ember-qunit';
import sinon from 'sinon';
import globalLibraries from '../../helpers/sl/synchronous/global-libraries';

const testEvents = Ember.A([
    {
        startDate: window.moment( [ 2015, 2, 12 ] ),
        title: 'Event 1 Today!'
    },
    {
        startDate: window.moment( [ 2015, 2, 12 ] ),
        title: 'Event 2 Today!'
    },
    {
        startDate: window.moment( [ 2015, 2, 17 ] ),
        title: 'Event 3 Today!'
    },
    {
        startDate: window.moment( [ 2015, 2, 20 ] ),
        title: 'Event 1 Another Day!'
    }
]);

moduleForComponent( 'sl-calendar', 'Unit | Component | sl calendar', {
    needs: [
        'component:sl-calendar-day',
        'component:sl-calendar-month',
        'component:sl-calendar-year'
    ],

    unit: true
});

test( 'Expected Mixins are present', function( assert ) {
    assert.ok(
        ClassPrefix.detect( this.subject() ),
        'ClassPrefix Mixin is present'
    );
});

test( 'Default property values are set correctly', function( assert ) {
    const component = this.subject();

    assert.deepEqual(
        component.get( 'events' ),
        [],
        'content is [] by default'
    );

    assert.notOk(
        component.get( 'fixedWeekCount' ),
        'fixedWeekCount is false by default'
    );

    assert.strictEqual(
        component.get( 'componentClass' ),
        'calendar',
        '"componentClass" property defaults to calendar'
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

    assert.deepEqual(
        component.get( 'selectConstraint' ),
        {
            start: null,
            end: null
        },
        'selectConstraint is an object with start and end properties by default'
    );

    assert.strictEqual(
        component.get( 'selectedDate' ),
        null,
        'selectedDate is null by default'
    );

    assert.strictEqual(
        component.get( 'showControls' ),
        true,
        'showControls is true by default'
    );

    assert.strictEqual(
        component.get( 'showingMonth' ),
        null,
        'showingMonth is null by default'
    );

    assert.ok(
        window.moment().isSame( component.get( 'viewingDate' ), 'day' ),
        'viewingDate is a moment object representing today by default'
    );

    assert.strictEqual(
        component.get( 'viewMode' ),
        'days',
        'viewMode is "days" by default'
    );
});

test( 'setDate method sets the viewingDate and selectedDate', function( assert ) {
    const selectConstraint = {
        start: window.moment( [ 2014, 2, 1 ] )
    };

    const component = this.subject({
        viewingDate: window.moment( [ 2015, 0, 1 ] ),
        selectConstraint: selectConstraint
    });

    const newDate = window.moment( [ 2014, 3, 3 ] );

    component.setDate( newDate );

    assert.ok(
        component.get( 'selectedDate' ).isSame( newDate, 'day' ),
        'selectedDate was set to the new date'
    );

    assert.ok(
        component.get( 'viewingDate' ).isSame( newDate, 'day' ),
        'viewingDate was set to the new date'
    );

    const tooEarlyDate = window.moment( [ 2014, 1, 1 ] );

    component.setDate( tooEarlyDate );

    assert.notOk(
        component.get( 'selectedDate' ).isSame( tooEarlyDate, 'day' ),
        'selectedDate was not set to the new date'
    );

    assert.notOk(
        component.get( 'viewingDate' ).isSame( tooEarlyDate, 'day' ),
        'viewingDate was not set to the new date'
    );
});

test( 'setMonth method modifies the viewingDate', function( assert ) {
    const component = this.subject({
        viewingDate: window.moment( [ 2015, 0, 1 ] )
    });

    const newMonth = 4;

    component.setMonth( newMonth );

    assert.strictEqual(
        component.get( 'viewingDate' ).month() + 1,
        newMonth,
        'view set to the selected month'
    );
});

test( 'setYear method modifies the viewingDate', function( assert ) {
    const component = this.subject({
        viewingDate: window.moment( [ 2015, 0, 1 ] )
    });

    const newYear = 2013;

    component.setYear( newYear );

    assert.strictEqual(
        component.get( 'viewingDate' ).year(),
        newYear,
        'view set to the selected year'
    );
});

test( 'calendar title is correctly generated for each viewMode', function( assert ) {
    const component = this.subject({
        viewingDate: window.moment( [ 2015, 2, 15 ] ),
        viewMode: 'days'
    });

    assert.strictEqual(
        component.get( 'calendarTitle' ),
        'March 2015',
        'Calendar title is correct in days view'
    );

    component.set( 'viewMode', 'months' );

    assert.strictEqual(
        component.get( 'calendarTitle' ),
        '2015',
        'Calendar title is correct in days view'
    );

    component.set( 'viewMode', 'years' );

    assert.strictEqual(
        component.get( 'calendarTitle' ),
        '2010 - 2019',
        'Calendar title is correct in days view'
    );
});

test( 'shortWeekDayNames - returns array of day names in short name format (Su, Mo, Tu...)', function( assert ) {
    const component = this.subject({});

    assert.deepEqual(
        component.get( 'shortWeekDayNames' ),
        [ 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa' ],
        'short week day names are generated correctly'
    );
});

test( 'activeDateChange - active property is set on the correct day object', function( assert ) {
    const startingSelected = window.moment( [ 2015, 0, 15 ] );

    const component = this.subject({
        viewingDate: window.moment( [ 2015, 0, 1 ] ),
        selectedDate: startingSelected
    });

    function findDay( dateNeedle ) {
        const weeksInMonthView = component.get( 'weeksInMonthView' );

        for ( let week = 0; week < weeksInMonthView.length; week++ ) {
            for ( let day = 0; day < weeksInMonthView[ week ].length; day++ ) {
                if ( weeksInMonthView[ week ][ day ].date.isSame( dateNeedle, 'day' ) ) {
                    return weeksInMonthView[ week ][ day ];
                }
            }
        }
    }

    assert.ok(
        findDay( startingSelected ).active,
        'the correct day is set to "active"'
    );

    const newSelected = window.moment( [ 2015, 1, 12 ] );

    component.set( 'viewingDate', newSelected );
    component.set( 'selectedDate', newSelected );

    assert.ok(
        findDay( newSelected ).active,
        'the correct day is set to "active"'
    );
});

test( 'applyEvents - events are set on each day object', function( assert ) {
    const component = this.subject({
        viewingDate: window.moment( [ 2015, 2, 1 ] ),
        events: testEvents
    });

    function findDay( dateNeedle ) {
        const weeksInMonthView = component.get( 'weeksInMonthView' );

        for ( let week = 0; week < weeksInMonthView.length; week++ ) {
            for ( let day = 0; day < weeksInMonthView[ week ].length; day++ ) {
                if ( weeksInMonthView[ week ][ day ].date.isSame( dateNeedle, 'day' ) ) {
                    return weeksInMonthView[ week ][ day ];
                }
            }
        }
    }

    assert.strictEqual(
        findDay( testEvents[ 0 ].startDate ).events.length,
        2,
        'event day has 3 events as expected'
    );

    assert.strictEqual(
        findDay( testEvents[ 3 ].startDate ).events.length,
        1,
        'event day has 1 event as expected'
    );
});

test( 'focusedDateChange - focused property is set on the correct day object', function( assert ) {
    const component = this.subject({
        viewingDate: window.moment( [ 2015, 0, 1 ] )
    });

    const newViewing = window.moment( [ 2015, 0, 15 ] );

    component.set( 'viewingDate', newViewing );

    function findDay( dateNeedle ) {
        const weeksInMonthView = component.get( 'weeksInMonthView' );

        for ( let week = 0; week < weeksInMonthView.length; week++ ) {
            for ( let day = 0; day < weeksInMonthView[ week ].length; day++ ) {
                if ( weeksInMonthView[ week ][ day ].date.isSame( dateNeedle, 'day' ) ) {
                    return weeksInMonthView[ week ][ day ];
                }
            }
        }
    }

    assert.ok(
        findDay( newViewing ).focused,
        'the correct day is set to "focused"'
    );
});

test( 'updateShowingMonth - showingMonth is updated', function( assert ) {
    const component = this.subject({
        viewingDate: window.moment( [ 2015, 0, 1 ] )
    });

    const newMonth = 5;

    component.set( 'viewingDate', window.moment( [ 2015, newMonth, 1 ] ) );

    assert.strictEqual(
        component.get( 'showingMonth' ),
        newMonth,
        'showingMonth updated correctly'
    );
});

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

test( 'selectDate action works', function( assert ) {
    assert.expect( 2 );

    const done = assert.async();

    const selectedDate = window.moment( [ 2015, 0, 1 ] );
    const events = [
        {
            startDate: window.moment( [ 2015, 1, 4 ] )
        }
    ];

    const component = this.subject({
        action: 'test',
        events: events,
        date: selectedDate,
        targetObject: {
            test( sentDate, sentEvents ) {
                assert.strictEqual(
                    sentDate,
                    selectedDate,
                    'date value is as expected'
                );

                assert.deepEqual(
                    sentEvents,
                    events,
                    'events are sent as expected'
                );

                done();
            }
        }
    });

    component.send( 'selectDate', selectedDate, events );
});

test( 'selectMonth action works', function( assert ) {
    const component = this.subject({
        viewingDate: window.moment( [ 2015, 0, 1 ] ),
        $: function() {
            return {
                focus: sinon.spy()
            };
        }
    });

    const newMonth = 8;

    component.send( 'selectMonth', newMonth );

    assert.strictEqual(
        component.get( 'viewMode' ),
        'days',
        'viewMode is switched to "days" when a month is selected'
    );

    assert.strictEqual(
        component.get( 'viewingDate' ).month() + 1,
        newMonth,
        'viewingDate was changed to the selected month'
    );
});

test( 'selectYear action works', function( assert ) {
    const component = this.subject({
        viewingDate: window.moment( [ 2015, 0, 1 ] ),
        $: function() {
            return {
                focus: sinon.spy()
            };
        }
    });

    const newYear = 2013;

    component.send( 'selectYear', newYear );

    assert.strictEqual(
        component.get( 'viewMode' ),
        'months',
        'viewMode is switched to "months" when a year is selected'
    );

    assert.strictEqual(
        component.get( 'viewingDate' ).year(),
        newYear,
        'viewingDate was changed to the selected year'
    );
});

test( 'setView action works', function( assert ) {
    const focusSpy = sinon.spy();

    const component = this.subject({
        viewingDate: window.moment( [ 2015, 0, 1 ] ),
        $: function() {
            return {
                focus: focusSpy
            };
        }
    });

    assert.strictEqual(
        component.get( 'viewMode' ),
        'days',
        'viewMode is "days"'
    );

    component.send( 'setView', 'months' );

    assert.strictEqual(
        component.get( 'viewMode' ),
        'months',
        'viewMode is "months"'
    );

    component.send( 'setView', 'years' );

    assert.strictEqual(
        component.get( 'viewMode' ),
        'years',
        'viewMode is "years"'
    );

    component.send( 'setView', 'days' );

    assert.strictEqual(
        component.get( 'viewMode' ),
        'days',
        'viewMode is "days"'
    );

    assert.strictEqual(
        focusSpy.callCount,
        3,
        'component was focused 3 times'
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

test( 'Weeks for month view are assembled with correct properties', function( assert ) {
    const component = this.subject({
        viewingDate: window.moment( [ 2016, 2, 1 ] ),
        selectedDate: window.moment( [ 2016, 2, 16 ] ),
        fixedWeekCount: true
    });

    const allWeeks = component.get( 'weeksInMonthView' );
    const flattenedWeeks = [];

    for ( let weekGroup = 0; weekGroup < allWeeks.length; weekGroup++ ) {
        for ( let week = 0; week < allWeeks[ weekGroup ].length; week++ ) {
            flattenedWeeks.push( allWeeks[ weekGroup ][ week ] );
        }
    }

    const firstTwo = flattenedWeeks.slice( 0, 1 );
    const lastTwo = flattenedWeeks.slice( 33 );

    assert.ok(
        firstTwo.every( ( day ) => {
            return day.old;
        }),
        'Expected days have the old property set'
    );

    assert.ok(
        lastTwo.every( ( day ) => {
            return day.new;
        }),
        'Expected days have the new property set'
    );

    assert.ok(
        flattenedWeeks[ 17 ].active,
        'Expected day has active property set'
    );
});

test( 'Months for year view are assembled correctly', function( assert ) {
    const component = this.subject({
        viewingDate: window.moment( [ 2015, 2, 1 ] ),
        selectedDate: window.moment( [ 2015, 2, 1 ] )
    });

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

    assert.ok(
        flattenedMonths[2].active,
        'Expected month is set as active'
    );
});

test( 'Years for decade view are assembled correctly', function( assert ) {
    const component = this.subject({
        viewingDate: window.moment( [ 2015, 2, 1 ] ),
        selectedDate: window.moment( [ 2015, 2, 1 ] )
    });

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

    assert.ok(
        flattenedYears[6].active,
        'Expected year is set as active'
    );
});

test( 'Observer keys are correct', function( assert ) {
    const component = this.subject();

    const activeDateChangeKeys = [
        'selectedDate'
    ];

    const applyEventsKeys = [
        'events',
        'weeksInMonthView'
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
        component.applyEvents.__ember_observes__,
        applyEventsKeys,
        'Observer keys are correct for applyEvents()'
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
