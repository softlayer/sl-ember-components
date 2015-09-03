import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { skip } from 'qunit';

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

    const currentMonth = 1;
    this.set( 'currentMonth', currentMonth );

    this.render( hbs`
        {{sl-calendar
            currentYear=currentYear
            currentMonth=currentMonth
        }}
    ` );

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
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

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    const currentMonth = 9;
    this.set( 'currentMonth', currentMonth );

    this.set( 'content', modifiedValuePath );

    this.render( hbs`
        {{sl-calendar
            content=content
            dateValuePath="modifiedDatePath"
            currentYear=currentYear
            currentMonth=currentMonth
        }}
    ` );

    assert.equal(
        this.$( '>:first-child .active' ).text().trim(),
        17,
        'Active day is set correctly'
    );
});

skip( 'Active day is set correctly', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    const currentMonth = 9;
    this.set( 'currentMonth', currentMonth );

    this.set( 'content', Ember.A() );

    this.render( hbs`
        {{sl-calendar
            content=content
        }}
    ` );

    assert.equal(
        this.$( '>:first-child .active' ).text().trim(),
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

    assert.equal(
        this.$( '>:first-child .active' ).text().trim(),
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

    const active = this.$( '>:first-child .active' );

    assert.equal(
        active.length,
        2,
        'There are two unique dates assigned the .active class'
    );

    assert.equal(
        active[ 0 ].innerHTML,
        '17',
        'First unique date instance is correct'
    );

    assert.equal(
        active[ 1 ].innerHTML,
        '20',
        'Second unique date instance is correct'
    );
});

test( 'Setting locale to Spanish modifies the view correctly', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    const currentMonth = 9;
    this.set( 'currentMonth', currentMonth );

    this.render( hbs`
        {{sl-calendar
            locale="es"
            currentYear=currentYear
            currentMonth=currentMonth
        }}
    ` );

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        'Septiembre ' + currentYear,
        'Current month in Spanish is set correctly in the view'
    );
});

test( 'Action fires when day is clicked', function( assert ) {

    assert.expect( 1 );

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    const currentMonth = 9;
    this.set( 'currentMonth', currentMonth );

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

    this.$( '>:first-child .active' ).click();
});

skip( 'Action passes through expected objects in content array', function( assert ) {

    assert.expect( 8 );

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    const currentMonth = 9;
    this.set( 'currentMonth', currentMonth );

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
            assert.equal(
                dateContent[ 0 ].date.toString(),
                'Sat Sep 17 2022 00:00:00 GMT-0500 (CDT)',
                'The date property was passed through'
            );

            assert.equal(
                dateContent[ 0 ].label,
                'Event 1 Today!',
                'The label property was passed through'
            );

            assert.equal(
                dateContent[ 1 ].date.toString(),
                'Sat Sep 17 2022 00:00:00 GMT-0500 (CDT)',
                'The date property was passed through'
            );

            assert.equal(
                dateContent[ 1 ].label,
                'Event 2 Today!',
                'The label property was passed through'
            );

            assert.equal(
                dateContent[ 2 ].date.toString(),
                'Sat Sep 17 2022 00:00:00 GMT-0500 (CDT)',
                'The date property was passed through'
            );

            assert.equal(
                dateContent[ 2 ].label,
                'Event 3 Today!',
                'The label property was passed through'
            );
        // This group of asserts verifies the event on Sep. 20th
        } else {
            assert.equal(
                dateContent[ 0 ].date.toString(),
                'Tue Sep 20 2022 00:00:00 GMT-0500 (CDT)',
                'The date property was passed through'
            );

            assert.equal(
                dateContent[ 0 ].label,
                'Event 1 Another Day!',
                'The label property was passed through'
            );
        }
    });

    this.$( '>:first-child .active' ).click();
});

skip( 'Setting viewMode modifies the view correctly', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    const currentMonth = 9;
    this.set( 'currentMonth', currentMonth );

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

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        'September ' + currentYear,
        'The current month and year are set correctly'
    );

    assert.equal(
        this.$( '>:first-child .active' ).text().trim(),
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

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        currentYear,
        'The current year is set correctly'
    );

    assert.equal(
        this.$( '>:first-child .active' ).text().trim(),
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

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        '2020-2029',
        'The year range is set correctly'
    );

    assert.equal(
        this.$( '>:first-child .active' ).text().trim(),
        currentYear,
        'The current year is set correctly'
    );
});

test( 'Navigating Forward by Month', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    const currentMonth = 9;
    this.set( 'currentMonth', currentMonth );

    this.render( hbs`
        {{sl-calendar
            currentYear=currentYear
            currentMonth=currentMonth
        }}
    ` );

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        'September ' + currentYear,
        'The current month is set correctly'
    );

    this.$( '>:first-child .next' ).click();

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        'October ' + currentYear,
        'The next month is set correctly'
    );
});

test( 'Navigating Backward by Month', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    const currentMonth = 9;
    this.set( 'currentMonth', currentMonth );

    this.render( hbs`
        {{sl-calendar
            currentYear=currentYear
            currentMonth=currentMonth
        }}
    ` );

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        'September ' + currentYear,
        'The current month is set correctly'
    );

    this.$( '>:first-child .prev' ).click();

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
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

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        currentYear,
        'The current year is set correctly'
    );

    this.$( '>:first-child .next' ).click();

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        currentYear + 1,
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

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        currentYear,
        'The current year is set correctly'
    );

    this.$( '>:first-child .prev' ).click();

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        currentYear - 1,
        'The previous year is set correctly'
    );
});

test( 'Navigating Forward by Decade', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    this.render( hbs`
        {{sl-calendar
            currentYear=currentYear
            viewMode="years"
        }}
    ` );

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        '2020-2029',
        'The current Decade is set correctly'
    );

    this.$( '>:first-child .next' ).click();

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        '2030-2039',
        'The next Decade is set correctly'
    );
});

test( 'Navigating Backward by Decade', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    this.render( hbs`
        {{sl-calendar
            currentYear=currentYear
            viewMode="years"
        }}
    ` );

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        '2020-2029',
        'The current Decade is set correctly'
    );

    this.$( '>:first-child .prev' ).click();

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        '2010-2019',
        'The previous Decade is set correctly'
    );
});

test( 'When Locked, interacting with the view is not Possible', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    const currentMonth = 8;
    this.set( 'currentMonth', currentMonth );

    this.render( hbs`
        {{sl-calendar}}
    ` );

    assert.strictEqual(
        this.$().hasClass( 'sl-calendar-locked' ),
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

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        'August ' + currentYear,
        'The current month is set correctly'
    );

    this.$( '>:first-child .next' ).click();

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        'August ' + currentYear,
        'The next month is set correctly'
    );

    this.$( '>:first-child .prev' ).click();

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        'August ' + currentYear,
        'The next month is set correctly'
    );

    this.$( '>:first-child .datepicker-switch' ).click();

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        'August ' + currentYear,
        'The next month is set correctly'
    );
});

test( 'Navigating from Month to Year', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    const currentMonth = 9;
    this.set( 'currentMonth', currentMonth );

    this.render( hbs`
        {{sl-calendar
            currentYear=currentYear
            currentMonth=currentMonth
        }}
    ` );

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        'September ' + currentYear,
        'The current month is set correctly'
    );

    this.$( '>:first-child .datepicker-switch' ).click();

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        currentYear,
        'The current year is set correctly'
    );
});

test( 'Navigating from Year to Month', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    const currentMonth = 9;
    this.set( 'currentMonth', currentMonth );

    this.set( 'content', testContent );

    this.render( hbs`
        {{sl-calendar
            content=content
            currentYear=currentYear
            currentMonth=currentMonth
            viewMode="months"
        }}
    ` );

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        currentYear,
        'The current year is set correctly'
    );

    this.$( '>:first-child .active' ).click();

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
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

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        currentYear,
        'The current year is set correctly'
    );

    this.$( '>:first-child .datepicker-switch' ).click();

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
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

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        '2020-2029',
        'The current decade is set correctly'
    );

    this.$( '>:first-child .active' ).click();

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        currentYear,
        'The current year is set correctly'
    );
});

test( 'Navigating Forward by Month Crosses to Next Year', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    const currentMonth = 12;
    this.set( 'currentMonth', currentMonth );

    this.render( hbs`
        {{sl-calendar
            currentYear=currentYear
            currentMonth=currentMonth
        }}
    ` );

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        'December ' + currentYear,
        'The current month is set correctly'
    );

    this.$( '>:first-child .next' ).click();

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        'January ' + ( currentYear + 1 ),
        'The next month is in the next year'
    );
});

test( 'Navigating Backward by Month Crosses to Previous Year', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    const currentMonth = 1;
    this.set( 'currentMonth', currentMonth );

    this.render( hbs`
        {{sl-calendar
            currentYear=currentYear
            currentMonth=currentMonth
        }}
    ` );

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        'January ' + currentYear,
        'The current month is set correctly'
    );

    this.$( '>:first-child .prev' ).click();

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
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

    assert.equal(
        this.$( '>:first-child .month' ).text().trim(),
        'JanFebMarAprMayJunJulAugSepOctNovDec',
        'Twelve months are listed in order'
    );
});

test( 'Twelve Years are Displayed in Order', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    this.render( hbs`
        {{sl-calendar
            viewMode="years"
            currentYear=currentYear
        }}
    ` );

    let yearsSelection = this.$( '>:first-child' ).find( 'td' ).text().trim();
    yearsSelection = yearsSelection.replace( /\s+/g, '' );

    assert.equal(
        yearsSelection,
        '201920202021202220232024202520262027202820292030',
        'Twelve years are listed in order'
    );
});

// ******************************
// Start of Dual Component Tests
// ******************************

test( 'Dual instance: Action fires when day is clicked', function( assert ) {

    const currentYear1 = 2035;
    this.set( 'currentYear1', currentYear1 );

    const currentMonth1 = 1;
    this.set( 'currentMonth1', currentMonth1 );

    const currentYear2 = 2022;
    this.set( 'currentYear2', currentYear2 );

    const currentMonth2 = 9;
    this.set( 'currentMonth2', currentMonth2 );

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

    this.on( 'testAction1', () => {
        assert.ok(
            true,
            'The test action 1 was called'
        );
    });

    this.on( 'testAction2', () => {
        assert.ok(
            true,
            'The test action 2 was called'
        );
    });

    this.$( '>:nth-child(2) .active' ).click();
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

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        'September ' + currentYear,
        'Component instance one: current month is set correctly'
    );

    assert.equal(
        this.$( '>:nth-child(2) .datepicker-switch' ).text().trim(),
        'September ' + currentYear,
        'Component instance two: current month is set correctly'
    );

    this.$( '>:nth-child(2) .next' ).click();

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        'September ' + currentYear,
        'Component instance one: current month has not changed'
    );

    assert.equal(
        this.$( '>:nth-child(2) .datepicker-switch' ).text().trim(),
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

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        'September ' + currentYear,
        'Component instance one: current month is set correctly'
    );

    assert.equal(
        this.$( '>:nth-child(2) .datepicker-switch' ).text().trim(),
        'September ' + currentYear,
        'Component instance two: current month is set correctly'
    );

    this.$( '>:nth-child(2) .prev' ).click();

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        'September ' + currentYear,
        'Component instance one: current month has not changed'
    );

    assert.equal(
        this.$( '>:nth-child(2) .datepicker-switch' ).text().trim(),
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

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        currentYear,
        'Component instance one: current year is set correctly'
    );

    assert.equal(
        this.$( '>:nth-child(2) .datepicker-switch' ).text().trim(),
        currentYear,
        'Component instance two: current year is set correctly'
    );

    this.$( '>:nth-child(2) .next' ).click();

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        currentYear,
        'Component instance one: year did not change'
    );

    assert.equal(
        this.$( '>:nth-child(2) .datepicker-switch' ).text().trim(),
        ( currentYear + 1 ),
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

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        currentYear,
        'Component instance one: current year is set correctly'
    );

    assert.equal(
        this.$( '>:nth-child(2) .datepicker-switch' ).text().trim(),
        currentYear,
        'Component instance two: current year is set correctly'
    );

    this.$( '>:nth-child(2) .prev' ).click();

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        currentYear,
        'Component instance one: year did not change'
    );

    assert.equal(
        this.$( '>:nth-child(2) .datepicker-switch' ).text().trim(),
        ( currentYear - 1 ),
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

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        '2020-2029',
        'Component instance one: current decade is set correctly'
    );

    assert.equal(
        this.$( '>:nth-child(2) .datepicker-switch' ).text().trim(),
        '2020-2029',
        'Component instance two: current decade is set correctly'
    );

    this.$( '>:nth-child(2) .next' ).click();

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        '2020-2029',
        'Component instance one: decade did not change'
    );

    assert.equal(
        this.$( '>:nth-child(2) .datepicker-switch' ).text().trim(),
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

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        '2020-2029',
        'Component instance one: current decade is set correctly'
    );

    assert.equal(
        this.$( '>:nth-child(2) .datepicker-switch' ).text().trim(),
        '2020-2029',
        'Component instance two: current decade is set correctly'
    );

    this.$( '>:nth-child(2) .prev' ).click();

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        '2020-2029',
        'Component instance one: decade did not change'
    );

    assert.equal(
        this.$( '>:nth-child(2) .datepicker-switch' ).text().trim(),
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

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        'September ' + currentYear,
        'Component instance one: current month is set correctly'
    );

    assert.equal(
        this.$( '>:nth-child(2) .datepicker-switch' ).text().trim(),
        'September ' + currentYear,
        'Component instance two: current month is set correctly'
    );

    this.$( '>:nth-child(2) .datepicker-switch' ).click();

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        'September ' + currentYear,
        'Component instance one: current month did not change'
    );

    assert.equal(
        this.$( '>:nth-child(2) .datepicker-switch' ).text().trim(),
        currentYear,
        'Component instance two: current year is set correctly'
    );
});

// ******************************
// To do:
// ******************************

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

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        currentYear,
        'Component instance one: current year is set correctly'
    );

    assert.equal(
        this.$( '>:nth-child(2) .datepicker-switch' ).text().trim(),
        currentYear,
        'Component instance two: current year is set correctly'
    );

    this.$( '>:nth-child(2) .active' ).click();

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        currentYear,
        'Component instance one: current year did not change'
    );

    assert.equal(
        this.$( '>:nth-child(2) .datepicker-switch' ).text().trim(),
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

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        currentYear,
        'Component instance one: current year is set correctly'
    );

    assert.equal(
        this.$( '>:nth-child(2) .datepicker-switch' ).text().trim(),
        currentYear,
        'Component instance two: current year is set correctly'
    );

    this.$( '>:nth-child(2) .datepicker-switch' ).click();

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        currentYear,
        'Component instance one: current year did not change'
    );

    assert.equal(
        this.$( '>:nth-child(2) .datepicker-switch' ).text().trim(),
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

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        '2020-2029',
        'Component instance one: current decade is set correctly'
    );

    assert.equal(
        this.$( '>:nth-child(2) .datepicker-switch' ).text().trim(),
        '2020-2029',
        'Component instance two: current decade is set correctly'
    );

    this.$( '>:nth-child(2) .active' ).click();

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        '2020-2029',
        'Component instance two: current decade did not change'
    );

    assert.equal(
        this.$( '>:nth-child(2) .datepicker-switch' ).text().trim(),
        currentYear,
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

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        'December ' + currentYear,
        'Component instance one: current month is set correctly'
    );

    assert.equal(
        this.$( '>:nth-child(2) .datepicker-switch' ).text().trim(),
        'December ' + currentYear,
        'Component instance two: current month is set correctly'
    );

    this.$( '>:nth-child(2) .next' ).click();

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        'December ' + currentYear,
        'Component instance one: current month did not change'
    );

    assert.equal(
        this.$( '>:nth-child(2) .datepicker-switch' ).text().trim(),
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

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        'January ' + currentYear,
        'Component instance one: current month is set correctly'
    );

    assert.equal(
        this.$( '>:nth-child(2) .datepicker-switch' ).text().trim(),
        'January ' + currentYear,
        'Component instance two: current month is set correctly'
    );

    this.$( '>:nth-child(2) .prev' ).click();

    assert.equal(
        this.$( '>:first-child .datepicker-switch' ).text().trim(),
        'January ' + currentYear,
        'Component instance one: current month did not change'
    );

    assert.equal(
        this.$( '>:nth-child(2) .datepicker-switch' ).text().trim(),
        'December ' + ( currentYear - 1 ),
        'Component instance two: previous month is in the previous year'
    );
});
