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

test( 'Lock mode prevents changing state', function( assert ) {
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

skip( 'currentMonthString - current month string formatted as full word (January, November, ...)', function() {
});

skip( 'contentDates - Verify dates array', function() {
});

skip( 'setYear - viewMode and currentYear set correctly', function() {
});

skip( 'setView - viewMode set correctly', function() {
});

skip( 'setMonth - currentMonth and viewMode set correctly', function() {
});

test( 'changeDecade action works', function( assert ) {
    const component = this.subject({ currentYear: 2015 });

    assert.strictEqual(
        component.get( 'decadeStart' ),
        2010,
        'Initial decadeStart is expected value'
    );

    assert.strictEqual(
        component.get( 'decadeEnd' ),
        2019,
        'Initial decadeEnd is expected value'
    );

    Ember.run( () => {
        component.send( 'changeDecade', 1 );
    });

    assert.strictEqual(
        component.get( 'decadeStart' ),
        2020,
        'Altered decadeStart is expected value'
    );

    assert.strictEqual(
        component.get( 'decadeEnd' ),
        2029,
        'Altered decadeEnd is expected value'
    );
});

test( 'changeMonth action works', function( assert ) {
    const component = this.subject({ currentMonth: 1 });

    assert.strictEqual(
        component.get( 'currentMonth' ),
        1,
        'Initial currentMonth is expected value'
    );

    Ember.run( () => {
        component.send( 'changeMonth', 1 );
    });

    assert.strictEqual(
        component.get( 'currentMonth' ),
        2,
        'Altered currentMonth is expected value'
    );
});

test( 'changeYear action works', function( assert ) {
    const component = this.subject({ currentYear: 2015 });

    assert.strictEqual(
        component.get( 'currentYear' ),
        2015,
        'Initial currentYear is expected value'
    );

    Ember.run( () => {
        component.send( 'changeYear', 1 );
    });

    assert.strictEqual(
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

    assert.strictEqual(
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

    assert.strictEqual(
        component.get( 'currentYear' ),
        2016,
        'currentYear is incremented'
    );
});

test( 'daysInMonth - Number of days in month is set correctly', function( assert ) {
    const daysInMonthStub = sinon.stub().returns( 31 );

    const momentStub = sinon.stub( window, 'moment' )
        .returns( { daysInMonth: daysInMonthStub } );

    const component = this.subject({
        currentMonth: 12,
        currentYear: 2015
    });

    assert.strictEqual(
        component.get( 'daysInMonth' ),
        31,
        '"daysInMonth" is set correctly'
    );

    assert.deepEqual(
        momentStub.args[ 0 ][ 0 ],
        [
            component.get( 'currentYear' ),
            component.get( 'currentMonth' ) - 1
        ],
        'Moment called with currentYear and currentMonth'
    );

    window.moment.restore();
});

test( 'Decade range is correctly based on currentYear', function( assert ) {
    const component = this.subject({ currentYear: 2023 });

    assert.strictEqual(
        component.get( 'decadeStart' ),
        2020,
        'decadeStart is expected value'
    );

    assert.strictEqual(
        component.get( 'decadeEnd' ),
        2029,
        'decadeEnd is expected value'
    );
});

test( 'Months for year view are generated validly', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'monthsInYearView' ).length,
        12,
        'Twelve months are created'
    );
});

skip( 'monthsInYearView - active month set correctly', function() {
    /* Expand 'Months for year view are generated validly' test to also
        check that the active month is set correctly.
    */
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

test( 'weeksInMonthView - set previousMonth when: currentMonth is anything other than 1', function( assert ) {
    const daysInMonthStub = sinon.stub().returns( 31 );

    const momentStub = sinon.stub( window, 'moment' )
        .returns( { daysInMonth: daysInMonthStub } );

    const weeksInMonthView = [
        [
            {
                'active': false,
                'content': null,
                'day': 30,
                'new': false,
                'old': true
            },
            {
                'active': false,
                'content': null,
                'day': 31,
                'new': false,
                'old': true
            },
            {
                'active': false,
                'content': null,
                'day': 1,
                'new': false,
                'old': false
            },
            {
                'active': false,
                'content': null,
                'day': 2,
                'new': false,
                'old': false
            },
            {
                'active': false,
                'content': null,
                'day': 3,
                'new': false,
                'old': false
            },
            {
                'active': false,
                'content': null,
                'day': 4,
                'new': false,
                'old': false
            },
            {
                'active': false,
                'content': null,
                'day': 5,
                'new': false,
                'old': false
            }
        ],
        [
            {
                'active': false,
                'content': null,
                'day': 6,
                'new': false,
                'old': false
            },
            {
                'active': false,
                'content': null,
                'day': 7,
                'new': false,
                'old': false
            },
            {
                'active': false,
                'content': null,
                'day': 8,
                'new': false,
                'old': false
            },
            {
                'active': false,
                'content': null,
                'day': 9,
                'new': false,
                'old': false
            },
            {
                'active': false,
                'content': null,
                'day': 10,
                'new': false,
                'old': false
            },
            {
                'active': false,
                'content': null,
                'day': 11,
                'new': false,
                'old': false
            },
            {
                'active': false,
                'content': null,
                'day': 12,
                'new': false,
                'old': false
            }
        ],
        [
            {
                'active': false,
                'content': null,
                'day': 13,
                'new': false,
                'old': false
            },
            {
                'active': false,
                'content': null,
                'day': 14,
                'new': false,
                'old': false
            },
            {
                'active': false,
                'content': null,
                'day': 15,
                'new': false,
                'old': false
            },
            {
                'active': false,
                'content': null,
                'day': 16,
                'new': false,
                'old': false
            },
            {
                'active': false,
                'content': null,
                'day': 17,
                'new': false,
                'old': false
            },
            {
                'active': false,
                'content': null,
                'day': 18,
                'new': false,
                'old': false
            },
            {
                'active': false,
                'content': null,
                'day': 19,
                'new': false,
                'old': false
            }
        ],
        [
            {
                'active': false,
                'content': null,
                'day': 20,
                'new': false,
                'old': false
            },
            {
                'active': false,
                'content': null,
                'day': 21,
                'new': false,
                'old': false
            },
            {
                'active': false,
                'content': null,
                'day': 22,
                'new': false,
                'old': false
            },
            {
                'active': false,
                'content': null,
                'day': 23,
                'new': false,
                'old': false
            },
            {
                'active': false,
                'content': null,
                'day': 24,
                'new': false,
                'old': false
            },
            {
                'active': false,
                'content': null,
                'day': 25,
                'new': false,
                'old': false
            },
            {
                'active': false,
                'content': null,
                'day': 26,
                'new': false,
                'old': false
            }
        ],
        [
            {
                'active': false,
                'content': null,
                'day': 27,
                'new': false,
                'old': false
            },
            {
                'active': false,
                'content': null,
                'day': 28,
                'new': false,
                'old': false
            },
            {
                'active': false,
                'content': null,
                'day': 29,
                'new': false,
                'old': false
            },
            {
                'active': false,
                'content': null,
                'day': 30,
                'new': false,
                'old': false
            },
            {
                'active': false,
                'content': null,
                'day': 31,
                'new': false,
                'old': false
            },
            {
                'active': false,
                'content': null,
                'day': 1,
                'new': true,
                'old': false
            },
            {
                'active': false,
                'content': null,
                'day': 2,
                'new': true,
                'old': false
            }
        ],
        [
            {
                'active': false,
                'content': null,
                'day': 3,
                'new': true,
                'old': false
            },
            {
                'active': false,
                'content': null,
                'day': 4,
                'new': true,
                'old': false
            },
            {
                'active': false,
                'content': null,
                'day': 5,
                'new': true,
                'old': false
            },
            {
                'active': false,
                'content': null,
                'day': 6,
                'new': true,
                'old': false
            },
            {
                'active': false,
                'content': null,
                'day': 7,
                'new': true,
                'old': false
            },
            {
                'active': false,
                'content': null,
                'day': 8,
                'new': true,
                'old': false
            },
            {
                'active': false,
                'content': null,
                'day': 9,
                'new': true,
                'old': false
            }
        ]
    ];

    const component = this.subject({
        currentMonth: 12,
        currentYear: 2015
    });

    assert.deepEqual(
        component.get( 'weeksInMonthView' ),
        weeksInMonthView,
        '"weeksInMonthView" is set correctly'
    );

    assert.deepEqual(
        momentStub.args[ 0 ][ 0 ],
        [
            component.get( 'currentYear' ),
            component.get( 'currentMonth' ) - 1
        ],
        'Moment called with currentYear and currentMonth'
    );

    window.moment.restore();
});

skip( 'weeksInMonthView - set previousMonth when: currentMonth equals 1', function() {
});

skip( 'weeksInMonthView - set nextMonth when: currentMonth is anything other than 12', function() {
});

skip( 'weeksInMonthView - when firstWeekdayOfCurrentMonth is 0 (Sunday)', function() {
});

skip( 'shortWeekDayNames - returns array of day names in short name format (Su, Mo, Tu...)', function() {
});

test( 'Years for decade view are assembled correctly', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'yearsInDecadeView' ).length,
        12,
        'Twelve years were generated for the decade view'
    );
});

test( 'yearsInDecadeView computed property is observing the correct properties', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.yearsInDecadeView._dependentKeys.join(),
        'contentDates,decadeEnd,decadeStart',
        'yearsInDecadeView computed property observes the correct properties'
    );
});

test( 'weeksInMonthView computed property is observing the correct properties', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.weeksInMonthView._dependentKeys.join(),
        'contentDates,currentMonth,currentYear,daysInMonth',
        'weeksInMonthView computed property observes the correct properties'
    );
});

test( 'viewingYears computed property is observing the correct properties', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.viewingYears._dependentKeys.join(),
        'viewMode',
        'viewingYears computed property observes the correct properties'
    );
});

test( 'viewingMonths computed property is observing the correct properties', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.viewingMonths._dependentKeys.join(),
        'viewMode',
        'viewingMonths computed property observes the correct properties'
    );
});

test( 'viewingDays computed property is observing the correct properties', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.viewingDays._dependentKeys.join(),
        'viewMode',
        'viewingDays computed property observes the correct properties'
    );
});

test( 'shortWeekDayNames computed property is observing the correct properties', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.shortWeekDayNames._dependentKeys.join(),
        'locale',
        'shortWeekDayNames computed property observes the correct properties'
    );
});

test( 'monthsInYearView computed property is observing the correct properties', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.monthsInYearView._dependentKeys.join(),
        'contentDates,currentYear',
        'monthsInYearView computed property observes the correct properties'
    );
});

test( 'decadeStart computed property is observing the correct properties', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.decadeStart._dependentKeys.join(),
        'currentYear',
        'decadeStart computed property observes the correct properties'
    );
});

test( 'decadeEnd computed property is observing the correct properties', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.decadeEnd._dependentKeys.join(),
        'decadeStart',
        'decadeEnd computed property observes the correct properties'
    );
});

test( 'daysInMonth computed property is observing the correct properties', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.daysInMonth._dependentKeys.join(),
        'currentMonth,currentYear',
        'daysInMonth computed property observes the correct properties'
    );
});

test( 'currentMonthString computed property is observing the correct properties', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.currentMonthString._dependentKeys.join(),
        'currentMonth,currentYear,locale',
        'currentMonthString computed property observes the correct properties'
    );
});

test( 'contentDates computed property is observing the correct properties', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.contentDates._dependentKeys.join(),
        'content,dateValuePath',
        'contentDates computed property observes the correct properties'
    );
});

