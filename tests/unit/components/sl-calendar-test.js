import Ember from 'ember';
import ComponentClassPrefix from 'sl-ember-components/mixins/class-prefix';
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

test( 'Expected Mixins are present', function( assert ) {
    assert.ok(
        ComponentClassPrefix.detect( this.subject() ),
        'ComponentClassPrefix Mixin is present'
    );
});

test( 'Default property values are set correctly', function( assert ) {
    const component = this.subject();

    assert.deepEqual(
        component.get( 'content' ),
        [],
        'content: []'
    );

    const today = new Date();
    const month = today.getMonth() + 1;

    assert.strictEqual(
        component.get( 'componentClass' ),
        'calendar',
        '"componentClass" property defaults to calender'
    );

    assert.strictEqual(
        component.get( 'currentMonth' ),
        month,
        `currentMonth: ${month}`
    );

    const year = today.getFullYear();

    assert.strictEqual(
        component.get( 'currentYear' ),
        year,
        `currentYear: ${year}`
    );

    assert.strictEqual(
        component.get( 'dateValuePath' ),
        'date',
        'dateValuePath: "date"'
    );

    assert.strictEqual(
        component.get( 'locale' ),
        'en',
        'locale: "en"'
    );

    assert.strictEqual(
        component.get( 'locked' ),
        false,
        'locked: false'
    );

    assert.strictEqual(
        component.get( 'viewMode' ),
        'days',
        'viewMode: "days"'
    );
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

test( 'Dependent keys are correct', function( assert ) {
    const component = this.subject();

    const contentDatesDependentKeys = [
        'content',
        'dateValuePath'
    ];

    const currentMonthStringDependentKeys = [
        'currentMonth',
        'currentYear',
        'locale'
    ];

    const daysInMonthDependentKeys = [
        'currentMonth',
        'currentYear'
    ];

    const decadeEndDependentKeys = [
        'decadeStart'
    ];

    const decadeStartDependentKeys = [
        'currentYear'
    ];

    const monthsInYearViewDependentKeys = [
        'contentDates',
        'currentYear'
    ];

    const shortWeekDayNamesDependentKeys = [
        'locale'
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
        'contentDates',
        'currentMonth',
        'currentYear',
        'daysInMonth'
    ];

    const yearsInDecadeViewDependentKeys = [
        'contentDates',
        'decadeEnd',
        'decadeStart'
    ];

    assert.deepEqual(
        component.contentDates._dependentKeys,
        contentDatesDependentKeys,
        'Dependent keys are correct for contentDates()'
    );

    assert.deepEqual(
        component.currentMonthString._dependentKeys,
        currentMonthStringDependentKeys,
        'Dependent keys are correct for currentMonthString()'
    );

    assert.deepEqual(
        component.daysInMonth._dependentKeys,
        daysInMonthDependentKeys,
        'Dependent keys are correct for daysInMonth()'
    );

    assert.deepEqual(
        component.decadeEnd._dependentKeys,
        decadeEndDependentKeys,
        'Dependent keys are correct for decadeEnd()'
    );

    assert.deepEqual(
        component.decadeStart._dependentKeys,
        decadeStartDependentKeys,
        'Dependent keys are correct for decadeStart()'
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
