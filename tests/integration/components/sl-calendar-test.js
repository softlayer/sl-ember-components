import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { skip } from 'qunit';
import sinon from 'sinon';

const testContent = Ember.A([
    {
        date: new Date( 2022, 8, 17 ),
        label: 'Today!'
    }
]);

const multipleTestContent = Ember.A([
    {
        date: new Date( 2022, 8, 17 ),
        label: 'Event 1 Today!'
    },
    {
        date: new Date( 2022, 8, 17 ),
        label: 'Event 2 Today!'
    },
    {
        date: new Date( 2022, 8, 17 ),
        label: 'Event 3 Today!'
    },
    {
        date: new Date( 2022, 8, 20 ),
        label: 'Event 1 Another Day!'
    }
]);

moduleForComponent( 'sl-calendar', 'Integration | Component | sl calendar', {
    integration: true
});

test( 'Setting currentYear and currentMonth modifies the view correctly', function( assert ) {

    const currentYear = 2025;
    this.set( 'currentYear', currentYear );

    this.set( 'currentMonth', 1 );

    this.render( hbs`
        {{sl-calendar
            currentYear=currentYear
            currentMonth=currentMonth
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        'January ' + currentYear,
        'Current month and year are set correctly in the view'
    );
});

skip( 'Setting dateValuePath modifies the view correctly', function( assert ) {

    const modifiedValuePath = Ember.A([
        {
            modifiedDatePath: new Date( 2022, 8, 17 ),
            label: 'Today!'
        }
    ]);

    this.set( 'currentYear', 2022 );

    this.set( 'currentMonth', 9 );

    this.set( 'content', modifiedValuePath );

    this.render( hbs`
        {{sl-calendar
            content=content
            dateValuePath="modifiedDatePath"
            currentYear=currentYear
            currentMonth=currentMonth
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.active' ).text().trim(),
        17,
        'Active day is set correctly'
    );
});

skip( 'Active day is set correctly', function( assert ) {

    this.set( 'currentYear', 2022 );

    this.set( 'currentMonth', 9 );

    this.set( 'content', Ember.A() );

    this.render( hbs`
        {{sl-calendar
            content=content
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.active' ).text().trim(),
        '',
        'No active day is set'
    );

    this.set( 'content', testContent );

    this.render( hbs`
        {{sl-calendar
            content=content
            currentYear=currentYear
            currentMonth=currentMonth
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.active' ).text().trim(),
        17,
        'Active day is set correctly'
    );

    this.set( 'content', multipleTestContent );

    this.render( hbs`
        {{sl-calendar
            content=content
            currentYear=currentYear
            currentMonth=currentMonth
        }}
    ` );

    const active = this.$( '>:first-child' ).find( '.active' );

    assert.strictEqual(
        active.length,
        2,
        'There are two unique dates assigned the .active class'
    );

    assert.strictEqual(
        active[ 0 ].innerHTML,
        '17',
        'First unique date instance is correct'
    );

    assert.strictEqual(
        active[ 1 ].innerHTML,
        '20',
        'Second unique date instance is correct'
    );
});

test( 'Setting locale to Spanish modifies the view correctly', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    this.set( 'currentMonth', 9 );

    this.render( hbs`
        {{sl-calendar
            locale="es"
            currentYear=currentYear
            currentMonth=currentMonth
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        'Septiembre ' + currentYear,
        'Current month in Spanish is set correctly in the view'
    );
});

test( 'Action fires when day is clicked', function( assert ) {

    assert.expect( 1 );

    this.set( 'currentYear', 2022 );

    this.set( 'currentMonth', 9 );

    this.set( 'content', testContent );

    this.render( hbs`
        {{sl-calendar
            action="testAction"
            content=content
            currentYear=currentYear
            currentMonth=currentMonth
        }}
    ` );

    this.on( 'testAction', () => {
        assert.ok(
            true,
            'The test action was called'
        );
    });

    this.$( '>:first-child' ).find( '.active' ).click();
});

skip( 'Action passes through expected objects in content array', function( assert ) {

    assert.expect( 8 );

    this.set( 'currentYear', 2022 );

    this.set( 'currentMonth', 9 );

    this.set( 'content', multipleTestContent );

    this.render( hbs`
        {{sl-calendar
            action="testAction"
            content=content
            currentYear=currentYear
            currentMonth=currentMonth
        }}
    ` );

    this.on( 'testAction', ( dateContent ) => {

        // This group of asserts verifies the multiple events on Sep. 17th
        if ( 'Event 1 Today!' === dateContent[ 0 ].label ) {
            assert.strictEqual(
                dateContent[ 0 ].date.toString(),
                'Sat Sep 17 2022 00:00:00 GMT-0500 (CDT)',
                'The date property was passed through'
            );

            assert.strictEqual(
                dateContent[ 0 ].label,
                'Event 1 Today!',
                'The label property was passed through'
            );

            assert.strictEqual(
                dateContent[ 1 ].date.toString(),
                'Sat Sep 17 2022 00:00:00 GMT-0500 (CDT)',
                'The date property was passed through'
            );

            assert.strictEqual(
                dateContent[ 1 ].label,
                'Event 2 Today!',
                'The label property was passed through'
            );

            assert.strictEqual(
                dateContent[ 2 ].date.toString(),
                'Sat Sep 17 2022 00:00:00 GMT-0500 (CDT)',
                'The date property was passed through'
            );

            assert.strictEqual(
                dateContent[ 2 ].label,
                'Event 3 Today!',
                'The label property was passed through'
            );
        // This group of asserts verifies the event on Sep. 20th
        } else {
            assert.strictEqual(
                dateContent[ 0 ].date.toString(),
                'Tue Sep 20 2022 00:00:00 GMT-0500 (CDT)',
                'The date property was passed through'
            );

            assert.strictEqual(
                dateContent[ 0 ].label,
                'Event 1 Another Day!',
                'The label property was passed through'
            );
        }
    });

    this.$( '>:first-child' ).find( '.active' ).click();
});

skip( 'Setting viewMode modifies the view correctly', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    this.set( 'currentMonth', 9 );

    this.set( 'content', testContent );

    this.render( hbs`
        {{sl-calendar
            content=content
        }}
    ` );

    assert.ok(
        this.$( '>:first-child' ),
        '"viewMode" of days renders'
    );

    this.render( hbs`
        {{sl-calendar
            content=content
            viewMode="months"
        }}
    ` );

    assert.ok(
        this.$( '>:first-child' ),
        '"viewMode" of months renders'
    );

    this.render( hbs`
        {{sl-calendar
            content=content
            viewMode="years"
        }}
    ` );

    assert.ok(
        this.$( '>:first-child' ),
        '"viewMode" of years renders'
    );

    this.render( hbs`
        {{sl-calendar
            content=content
            currentYear=currentYear
            currentMonth=currentMonth
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        'September ' + currentYear,
        'The current month and year are set correctly'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.active' ).text().trim(),
        17,
        'The current day is set correctly'
    );

    this.render( hbs`
        {{sl-calendar
            content=content
            viewMode="months"
            currentYear=currentYear
            currentMonth=currentMonth
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        currentYear.toString(),
        'The current year is set correctly'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.active' ).text().trim(),
        'Sep',
        'The current month is set correctly'
    );

    this.render( hbs`
        {{sl-calendar
            content=content
            viewMode="years"
            currentYear=currentYear
            currentMonth=currentMonth
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        '2020-2029',
        'The year range is set correctly'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.active' ).text().trim(),
        currentYear.toString(),
        'The current year is set correctly'
    );
});

test( 'Navigating Forward by Month', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    this.set( 'currentMonth', 9 );

    this.render( hbs`
        {{sl-calendar
            currentYear=currentYear
            currentMonth=currentMonth
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        'September ' + currentYear,
        'The current month is set correctly'
    );

    this.$( '>:first-child' ).find( '.next' ).click();

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        'October ' + currentYear,
        'The next month is set correctly'
    );
});

test( 'Navigating Backward by Month', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    this.set( 'currentMonth', 9 );

    this.render( hbs`
        {{sl-calendar
            currentYear=currentYear
            currentMonth=currentMonth
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        'September ' + currentYear,
        'The current month is set correctly'
    );

    this.$( '>:first-child' ).find( '.prev' ).click();

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        'August ' + currentYear,
        'The previous month is set correctly'
    );
});

test( 'Navigating Forward by Year', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    this.render( hbs`
        {{sl-calendar
            currentYear=currentYear
            viewMode="months"
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        currentYear.toString(),
        'The current year is set correctly'
    );

    this.$( '>:first-child' ).find( '.next' ).click();

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        (currentYear + 1).toString(),
        'The next year is set correctly'
    );
});

test( 'Navigating Backward by Year', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    this.render( hbs`
        {{sl-calendar
            currentYear=currentYear
            viewMode="months"
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        currentYear.toString(),
        'The current year is set correctly'
    );

    this.$( '>:first-child' ).find( '.prev' ).click();

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        (currentYear - 1).toString(),
        'The previous year is set correctly'
    );
});

test( 'Navigating Forward by Decade', function( assert ) {

    this.set( 'currentYear', 2022 );

    this.render( hbs`
        {{sl-calendar
            currentYear=currentYear
            viewMode="years"
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        '2020-2029',
        'The current Decade is set correctly'
    );

    this.$( '>:first-child' ).find( '.next' ).click();

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        '2030-2039',
        'The next Decade is set correctly'
    );
});

test( 'Navigating Backward by Decade', function( assert ) {

    this.set( 'currentYear', 2022 );

    this.render( hbs`
        {{sl-calendar
            currentYear=currentYear
            viewMode="years"
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        '2020-2029',
        'The current Decade is set correctly'
    );

    this.$( '>:first-child' ).find( '.prev' ).click();

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        '2010-2019',
        'The previous Decade is set correctly'
    );
});

test( 'When Locked, interacting with the view is not Possible', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    this.set( 'currentMonth', 8 );

    this.render( hbs`
        {{sl-calendar}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).hasClass( 'sl-calendar-locked' ),
        false,
        'Default rendered component does not have class "sl-calendar-locked"'
    );

    this.render( hbs`
        {{sl-calendar
            locked=true
            currentYear=currentYear
            currentMonth=currentMonth
        }}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sl-calendar-locked' ),
        'Locked, rendered component has class "sl-calendar-locked"'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        'August ' + currentYear,
        'The current month is set correctly'
    );

    this.$( '>:first-child' ).find( '.next' ).click();

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        'August ' + currentYear,
        'The next month is set correctly'
    );

    this.$( '>:first-child' ).find( '.next' ).click();

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        'August ' + currentYear,
        'The next month is set correctly'
    );

    this.$( '>:first-child' ).find( '.datepicker-switch' ).click();

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        'August ' + currentYear,
        'The next month is set correctly'
    );
});

test( 'Navigating from Month to Year', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    this.set( 'currentMonth', 9 );

    this.render( hbs`
        {{sl-calendar
            currentYear=currentYear
            currentMonth=currentMonth
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        'September ' + currentYear,
        'The current month is set correctly'
    );

    this.$( '>:first-child' ).find( '.datepicker-switch' ).click();

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        currentYear.toString(),
        'The current year is set correctly'
    );
});

test( 'Navigating from Year to Month', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    this.set( 'currentMonth', 9 );

    this.set( 'content', testContent );

    this.render( hbs`
        {{sl-calendar
            content=content
            currentYear=currentYear
            currentMonth=currentMonth
            viewMode="months"
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        currentYear.toString(),
        'The current year is set correctly'
    );

    this.$( '>:first-child' ).find( '.active' ).click();

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        'September ' + currentYear,
        'The current month is set correctly'
    );
});

test( 'Navigating from Year to Decade', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    this.render( hbs`
        {{sl-calendar
            currentYear=currentYear
            viewMode="months"
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        currentYear.toString(),
        'The current year is set correctly'
    );

    this.$( '>:first-child' ).find( '.datepicker-switch' ).click();

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        '2020-2029',
        'The current decade is set correctly'
    );
});

test( 'Navigating from Decade to Year', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    this.set( 'content', testContent );

    this.render( hbs`
        {{sl-calendar
            content=content
            currentYear=currentYear
            viewMode="years"
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        '2020-2029',
        'The current decade is set correctly'
    );

    this.$( '>:first-child' ).find( '.active' ).click();

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        currentYear.toString(),
        'The current year is set correctly'
    );
});

test( 'Navigating Forward by Month Crosses to Next Year', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    this.set( 'currentMonth', 12 );

    this.render( hbs`
        {{sl-calendar
            currentYear=currentYear
            currentMonth=currentMonth
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        'December ' + currentYear,
        'The current month is set correctly'
    );

    this.$( '>:first-child' ).find( '.next' ).click();

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        'January ' + ( currentYear + 1 ),
        'The next month is in the next year'
    );
});

test( 'Navigating Backward by Month Crosses to Previous Year', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    this.set( 'currentMonth', 1 );

    this.render( hbs`
        {{sl-calendar
            currentYear=currentYear
            currentMonth=currentMonth
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        'January ' + currentYear,
        'The current month is set correctly'
    );

    this.$( '>:first-child' ).find( '.prev' ).click();

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        'December ' + ( currentYear - 1 ),
        'The previous month is in the previous year'
    );
});

test( 'All Twelve Months are Displayed in Order', function( assert ) {

    this.render( hbs`
        {{sl-calendar
            viewMode="months"
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'span' ).text().trim(),
        'JanFebMarAprMayJunJulAugSepOctNovDec',
        'Twelve months are listed in order'
    );
});

test( 'Twelve Years are Displayed in Order', function( assert ) {

    this.set( 'currentYear', 2022 );

    this.render( hbs`
        {{sl-calendar
            viewMode="years"
            currentYear=currentYear
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'span' ).text().trim(),
        '201920202021202220232024202520262027202820292030',
        'Twelve years are listed in order'
    );
});

// -------------------------------------------------------------------------
// Start of Dual Component Tests

test( 'Dual instance: Action fires when day is clicked', function( assert ) {

    const testAction1 = sinon.spy();
    const testAction2 = sinon.spy();

    this.set( 'currentYear1', 2035 );
    this.set( 'currentMonth1', 1 );

    this.set( 'currentYear2', 2022 );
    this.set( 'currentMonth2', 9 );

    this.set( 'content', testContent );

    this.render( hbs`
        {{sl-calendar
            action="testAction1"
            content=content
            currentYear=currentYear1
            currentMonth=currentMonth1
        }}
        {{sl-calendar
            action="testAction2"
            content=content
            currentYear=currentYear2
            currentMonth=currentMonth2
        }}
    ` );

    this.on( 'testAction1', testAction1 );
    this.on( 'testAction2', testAction2 );

    this.$( '>:nth-child(2)' ).find( '.active' ).click();

    assert.notOk(
        testAction1.called,
        'Component instance one: did not fire an action'
    );

    assert.ok(
        testAction2.called,
        'Component instance two: fired an action'
    );
});

test( 'Dual instance: Navigating Forward by Month', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear1', currentYear );
    this.set( 'currentYear2', currentYear );

    const currentMonth = 9;
    this.set( 'currentMonth1', currentMonth );
    this.set( 'currentMonth2', currentMonth );

    this.render( hbs`
        {{sl-calendar
            currentMonth=currentMonth1
            currentYear=currentYear1
        }}
        {{sl-calendar
            currentMonth=currentMonth2
            currentYear=currentYear2
        }}
    ` );

    this.$( '>:nth-child(2)' ).find( '.next' ).click();

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        'September ' + currentYear,
        'Component instance one: current month has not changed'
    );

    assert.strictEqual(
        this.$( '>:nth-child(2)' ).find( '.datepicker-switch' ).text().trim(),
        'October ' + currentYear,
        'Component instance two: Current month advances one month'
    );
});

test( 'Dual instance: Navigating Backward by Month', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear1', currentYear );
    this.set( 'currentYear2', currentYear );

    const currentMonth = 9;
    this.set( 'currentMonth1', currentMonth );
    this.set( 'currentMonth2', currentMonth );

    this.render( hbs`
        {{sl-calendar
            currentMonth=currentMonth1
            currentYear=currentYear1
        }}
        {{sl-calendar
            currentMonth=currentMonth2
            currentYear=currentYear2
        }}
    ` );

    this.$( '>:nth-child(2)' ).find( '.prev' ).click();

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        'September ' + currentYear,
        'Component instance one: current month has not changed'
    );

    assert.strictEqual(
        this.$( '>:nth-child(2)' ).find( '.datepicker-switch' ).text().trim(),
        'August ' + currentYear,
        'Component instance two: Current month adjusts to previous month'
    );
});

test( 'Dual instance: Navigating Forward by Year', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear1', currentYear );
    this.set( 'currentYear2', currentYear );

    this.render( hbs`
        {{sl-calendar
            currentYear=currentYear1
            viewMode="months"
        }}
        {{sl-calendar
            currentYear=currentYear2
            viewMode="months"
        }}
    ` );

    this.$( '>:nth-child(2)' ).find( '.next' ).click();

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        currentYear.toString(),
        'Component instance one: year did not change'
    );

    assert.strictEqual(
        this.$( '>:nth-child(2)' ).find( '.datepicker-switch' ).text().trim(),
        ( currentYear + 1 ).toString(),
        'Component instance two: year advances by one year'
    );
});

test( 'Dual instance: Navigating Backward by Year', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear1', currentYear );
    this.set( 'currentYear2', currentYear );

    this.render( hbs`
        {{sl-calendar
            currentYear=currentYear1
            viewMode="months"
        }}
        {{sl-calendar
            currentYear=currentYear2
            viewMode="months"
        }}
    ` );

    this.$( '>:nth-child(2)' ).find( '.prev' ).click();

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        currentYear.toString(),
        'Component instance one: year did not change'
    );

    assert.strictEqual(
        this.$( '>:nth-child(2)' ).find( '.datepicker-switch' ).text().trim(),
        ( currentYear - 1 ).toString(),
        'Component instance two: year adjusts to previous year'
    );
});

test( 'Dual instance: Navigating Forward by Decade', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear1', currentYear );
    this.set( 'currentYear2', currentYear );

    this.render( hbs`
        {{sl-calendar
            currentYear=currentYear1
            viewMode="years"
        }}
        {{sl-calendar
            currentYear=currentYear2
            viewMode="years"
        }}
    ` );

    this.$( '>:nth-child(2)' ).find( '.next' ).click();

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        '2020-2029',
        'Component instance one: decade did not change'
    );

    assert.strictEqual(
        this.$( '>:nth-child(2)' ).find( '.datepicker-switch' ).text().trim(),
        '2030-2039',
        'Component instance two: next decade is set correctly'
    );
});

test( 'Dual instance: Navigating Backward by Decade', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear1', currentYear );
    this.set( 'currentYear2', currentYear );

    this.render( hbs`
        {{sl-calendar
            currentYear=currentYear1
            viewMode="years"
        }}
        {{sl-calendar
            currentYear=currentYear2
            viewMode="years"
        }}
    ` );

    this.$( '>:nth-child(2)' ).find( '.prev' ).click();

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        '2020-2029',
        'Component instance one: decade did not change'
    );

    assert.strictEqual(
        this.$( '>:nth-child(2)' ).find( '.datepicker-switch' ).text().trim(),
        '2010-2019',
        'Component instance two: decade is set to the previous decade'
    );
});

test( 'Dual instance: Navigating from Month to Year', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear1', currentYear );
    this.set( 'currentYear2', currentYear );

    const currentMonth = 9;
    this.set( 'currentMonth1', currentMonth );
    this.set( 'currentMonth2', currentMonth );

    this.render( hbs`
        {{sl-calendar
            currentYear=currentYear1
            currentMonth=currentMonth1
        }}
        {{sl-calendar
            currentYear=currentYear2
            currentMonth=currentMonth2
        }}
    ` );

    this.$( '>:nth-child(2)' ).find( '.datepicker-switch' ).click();

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        'September ' + currentYear,
        'Component instance one: current month did not change'
    );

    assert.strictEqual(
        this.$( '>:nth-child(2)' ).find( '.datepicker-switch' ).text().trim(),
        currentYear.toString(),
        'Component instance two: current year is set correctly'
    );
});

test( 'Dual instance: Navigating from Year to Month', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear1', currentYear );
    this.set( 'currentYear2', currentYear );

    const currentMonth = 9;
    this.set( 'currentMonth1', currentMonth );
    this.set( 'currentMonth2', currentMonth );

    this.set( 'content', testContent );

    this.render( hbs`
        {{sl-calendar
            content=content
            currentYear=currentYear1
            currentMonth=currentMonth1
            viewMode="months"
        }}
        {{sl-calendar
            content=content
            currentYear=currentYear2
            currentMonth=currentMonth2
            viewMode="months"
        }}
    ` );

    this.$( '>:nth-child(2)' ).find( '.active' ).click();

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        currentYear.toString(),
        'Component instance one: current year did not change'
    );

    assert.strictEqual(
        this.$( '>:nth-child(2)' ).find( '.datepicker-switch' ).text().trim(),
        'September ' + currentYear,
        'Component instance two: current month is set correctly'
    );
});

test( 'Dual instance: Navigating from Year to Decade', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear1', currentYear );
    this.set( 'currentYear2', currentYear );

    this.render( hbs`
        {{sl-calendar
            currentYear=currentYear1
            viewMode="months"
        }}
        {{sl-calendar
            currentYear=currentYear2
            viewMode="months"
        }}
    ` );

    this.$( '>:nth-child(2)' ).find( '.datepicker-switch' ).click();

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        currentYear.toString(),
        'Component instance one: current year did not change'
    );

    assert.strictEqual(
        this.$( '>:nth-child(2)' ).find( '.datepicker-switch' ).text().trim(),
        '2020-2029',
        'Component instance two: current decade is set correctly'
    );
});

test( 'Dual instance: Navigating from Decade to Year', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear1', currentYear );
    this.set( 'currentYear2', currentYear );

    this.set( 'content', testContent );

    this.render( hbs`
        {{sl-calendar
            content=content
            currentYear=currentYear1
            viewMode="years"
        }}
        {{sl-calendar
            content=content
            currentYear=currentYear2
            viewMode="years"
        }}
    ` );

    this.$( '>:nth-child(2)' ).find( '.active' ).click();

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        '2020-2029',
        'Component instance two: current decade did not change'
    );

    assert.strictEqual(
        this.$( '>:nth-child(2)' ).find( '.datepicker-switch' ).text().trim(),
        currentYear.toString(),
        'Component instance two: current year is set correctly'
    );
});

test( 'Dual instance: Navigating Forward by Month Crosses to Next Year', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear1', currentYear );
    this.set( 'currentYear2', currentYear );

    const currentMonth = 12;
    this.set( 'currentMonth1', currentMonth );
    this.set( 'currentMonth2', currentMonth );

    this.render( hbs`
        {{sl-calendar
            currentYear=currentYear1
            currentMonth=currentMonth1
        }}
        {{sl-calendar
            currentYear=currentYear2
            currentMonth=currentMonth2
        }}
    ` );

    this.$( '>:nth-child(2)' ).find( '.next' ).click();

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        'December ' + currentYear,
        'Component instance one: current month did not change'
    );

    assert.strictEqual(
        this.$( '>:nth-child(2)' ).find( '.datepicker-switch' ).text().trim(),
        'January ' + ( currentYear + 1 ),
        'Component instance two: next month is in the next year'
    );
});

test( 'Dual instance: Navigating Backward by Month Crosses to Previous Year', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear1', currentYear );
    this.set( 'currentYear2', currentYear );

    const currentMonth = 1;
    this.set( 'currentMonth1', currentMonth );
    this.set( 'currentMonth2', currentMonth );

    this.render( hbs`
        {{sl-calendar
            currentYear=currentYear1
            currentMonth=currentMonth1
        }}
        {{sl-calendar
            currentYear=currentYear2
            currentMonth=currentMonth2
        }}
    ` );

    this.$( '>:nth-child(2)' ).find( '.prev' ).click();

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.datepicker-switch' ).text().trim(),
        'January ' + currentYear,
        'Component instance one: current month did not change'
    );

    assert.strictEqual(
        this.$( '>:nth-child(2)' ).find( '.datepicker-switch' ).text().trim(),
        'December ' + ( currentYear - 1 ),
        'Component instance two: previous month is in the previous year'
    );
});
