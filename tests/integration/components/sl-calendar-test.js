import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

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

    this.set( 'content', testContent );

    this.render( hbs`
        {{sl-calendar
            action='testAction'
            content=content
            currentYear=currentYear
            currentMonth=currentMonth
        }}
    ` );

    assert.equal(
        this.$( '.sl-calendar .datepicker-switch' ).text().trim(),
        'January ' + currentYear,
        'Current month and year are set correctly in the view'
    );
});

test( 'Setting dateValuePath modifies the view correctly', function( assert ) {

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
            action='testAction'
            content=content
            dateValuePath='modifiedDatePath'
            currentYear=currentYear
            currentMonth=currentMonth
        }}
    ` );

    assert.equal(
        this.$( '.sl-calendar .active' ).text().trim(),
        17,
        'Active day is set correctly'
    );
});

test( 'Active day is set correctly', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    const currentMonth = 9;
    this.set( 'currentMonth', currentMonth );

    const emptyContent = Ember.A( [ {} ] );
    this.set( 'content', emptyContent );

    this.render( hbs`
        {{sl-calendar
            action='testAction'
            content=content
        }}
    ` );

    assert.equal(
        this.$( '.sl-calendar .active' ).text().trim(),
        '',
        'No active day is set'
    );

    this.set( 'content', testContent );

    this.render( hbs`
        {{sl-calendar
            action='testAction'
            content=content
            currentYear=currentYear
            currentMonth=currentMonth
        }}
    ` );

    assert.equal(
        this.$( '.sl-calendar .active' ).text().trim(),
        17,
        'Active day is set correctly'
    );

    this.set( 'content', multipleTestContent );

    this.render( hbs`
        {{sl-calendar
            action='testAction'
            content=content
            currentYear=currentYear
            currentMonth=currentMonth
        }}
    ` );

    const active = this.$( '.sl-calendar .active' );

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

    this.set( 'content', testContent );

    this.render( hbs`
        {{sl-calendar
            action='testAction'
            content=content
            locale='es'
            currentYear=currentYear
            currentMonth=currentMonth
        }}
    ` );

    assert.equal(
        this.$( '.sl-calendar .datepicker-switch' ).text().trim(),
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
            action='testAction'
            content=content
            currentYear=currentYear
            currentMonth=currentMonth
        }}
    ` );

    this.on( 'testAction', () => {
        assert.ok( 'The test action was called' );
    });

    this.$( '.sl-calendar .active' ).click();
});

test( 'Action passes through expected objects in content array', function( assert ) {

    assert.expect( 8 );

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    const currentMonth = 9;
    this.set( 'currentMonth', currentMonth );

    this.set( 'content', multipleTestContent );

    this.render( hbs`
        {{sl-calendar
            action='testAction'
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

    this.$( '.sl-calendar .active' ).click();
});

test( 'Setting viewMode modifies the view correctly', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    const currentMonth = 9;
    this.set( 'currentMonth', currentMonth );

    this.set( 'content', testContent );

    this.render( hbs`
        {{sl-calendar
            action='testAction'
            content=content
            viewMode="months"
            currentYear=currentYear
            currentMonth=currentMonth
        }}
    ` );

    assert.equal(
        this.$( '.sl-calendar .datepicker-switch' ).text().trim(),
        currentYear,
        'The current year is set correctly'
    );

    assert.equal(
        this.$( '.sl-calendar .active' ).text().trim(),
        'Sep',
        'The current month is set correctly'
    );

    this.render( hbs`
        {{sl-calendar
            action='testAction'
            content=content
            viewMode="years"
            currentYear=currentYear
            currentMonth=currentMonth
        }}
    ` );

    assert.equal(
        this.$( '.sl-calendar .datepicker-switch' ).text().trim(),
        '2020-2029',
        'The year range is set correctly'
    );

    assert.equal(
        this.$( '.sl-calendar .active' ).text().trim(),
        currentYear,
        'The current year is set correctly'
    );
});

test( 'Navigating Forward by Month', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    const currentMonth = 9;
    this.set( 'currentMonth', currentMonth );

    this.set( 'content', testContent );

    this.render( hbs`
        {{sl-calendar
            action='testAction'
            content=content
            currentYear=currentYear
            currentMonth=currentMonth
        }}
    ` );

    assert.equal(
        this.$( '.sl-calendar .datepicker-switch' ).text().trim(),
        'September ' + currentYear,
        'The current month is set correctly'
    );

    this.$( '.sl-calendar .next' ).click();

    assert.equal(
        this.$( '.sl-calendar .datepicker-switch' ).text().trim(),
        'October ' + currentYear,
        'The next month is set correctly'
    );
});

test( 'Navigating Backward by Month', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    const currentMonth = 9;
    this.set( 'currentMonth', currentMonth );

    this.set( 'content', testContent );

    this.render( hbs`
        {{sl-calendar
            action='testAction'
            content=content
            currentYear=currentYear
            currentMonth=currentMonth
        }}
    ` );

    assert.equal(
        this.$( '.sl-calendar .datepicker-switch' ).text().trim(),
        'September ' + currentYear,
        'The current month is set correctly'
    );

    this.$( '.sl-calendar .prev' ).click();

    assert.equal(
        this.$( '.sl-calendar .datepicker-switch' ).text().trim(),
        'August ' + currentYear,
        'The previous month is set correctly'
    );
});

test( 'Navigating Forward by Year', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    const currentMonth = 9;
    this.set( 'currentMonth', currentMonth );

    this.set( 'content', testContent );

    this.render( hbs`
        {{sl-calendar
            action='testAction'
            content=content
            currentYear=currentYear
            currentMonth=currentMonth
            viewMode="months"
        }}
    ` );

    assert.equal(
        this.$( '.sl-calendar .datepicker-switch' ).text().trim(),
        currentYear,
        'The current year is set correctly'
    );

    this.$( '.sl-calendar .next' ).click();

    assert.equal(
        this.$( '.sl-calendar .datepicker-switch' ).text().trim(),
        currentYear + 1,
        'The next year is set correctly'
    );
});

test( 'Navigating Backward by Year', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    const currentMonth = 9;
    this.set( 'currentMonth', currentMonth );

    this.set( 'content', testContent );

    this.render( hbs`
        {{sl-calendar
            action='testAction'
            content=content
            currentYear=currentYear
            currentMonth=currentMonth
            viewMode="months"
        }}
    ` );

    assert.equal(
        this.$( '.sl-calendar .datepicker-switch' ).text().trim(),
        currentYear,
        'The current year is set correctly'
    );

    this.$( '.sl-calendar .prev' ).click();

    assert.equal(
        this.$( '.sl-calendar .datepicker-switch' ).text().trim(),
        currentYear - 1,
        'The previous year is set correctly'
    );
});

test( 'Navigating Forward by Decade', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    const currentMonth = 9;
    this.set( 'currentMonth', currentMonth );

    this.set( 'content', testContent );

    this.render( hbs`
        {{sl-calendar
            action='testAction'
            content=content
            currentYear=currentYear
            currentMonth=currentMonth
            viewMode="years"
        }}
    ` );

    assert.equal(
        this.$( '.sl-calendar .datepicker-switch' ).text().trim(),
        '2020-2029',
        'The current Decade is set correctly'
    );

    this.$( '.sl-calendar .next' ).click();

    assert.equal(
        this.$( '.sl-calendar .datepicker-switch' ).text().trim(),
        '2030-2039',
        'The next Decade is set correctly'
    );
});

test( 'Navigating Backward by Decade', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    const currentMonth = 9;
    this.set( 'currentMonth', currentMonth );

    this.set( 'content', testContent );

    this.render( hbs`
        {{sl-calendar
            action='testAction'
            content=content
            currentYear=currentYear
            currentMonth=currentMonth
            viewMode="years"
        }}
    ` );

    assert.equal(
        this.$( '.sl-calendar .datepicker-switch' ).text().trim(),
        '2020-2029',
        'The current Decade is set correctly'
    );

    this.$( '.sl-calendar .prev' ).click();

    assert.equal(
        this.$( '.sl-calendar .datepicker-switch' ).text().trim(),
        '2010-2019',
        'The previous Decade is set correctly'
    );
});

test( 'When Locked, interacting with the view is not Possible', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    const currentMonth = 8;
    this.set( 'currentMonth', currentMonth );

    this.set( 'content', testContent );

    this.render( hbs`
        {{sl-calendar
            action='testAction'
            content=content
            currentYear=currentYear
            currentMonth=currentMonth
        }}
    ` );

    assert.strictEqual(
        this.$().hasClass( 'sl-calendar-locked' ),
        false,
        'Default rendered component does not have class "sl-calendar-locked"'
    );

    this.render( hbs`
        {{sl-calendar
            action='testAction'
            content=content
            locked=true
            currentYear=currentYear
            currentMonth=currentMonth
        }}
    ` );

    assert.ok(
        this.$( '.sl-calendar' ).hasClass( 'sl-calendar-locked' ),
        'Locked, rendered component has class "sl-calendar-locked"'
    );

    assert.equal(
        this.$( '.sl-calendar .datepicker-switch' ).text().trim(),
        'August ' + currentYear,
        'The current month is set correctly'
    );

    this.$( '.sl-calendar .next' ).click();

    assert.equal(
        this.$( '.sl-calendar .datepicker-switch' ).text().trim(),
        'August ' + currentYear,
        'The next month is set correctly'
    );

    this.$( '.sl-calendar .prev' ).click();

    assert.equal(
        this.$( '.sl-calendar .datepicker-switch' ).text().trim(),
        'August ' + currentYear,
        'The next month is set correctly'
    );

    this.$( '.sl-calendar .datepicker-switch' ).click();

    assert.equal(
        this.$( '.sl-calendar .datepicker-switch' ).text().trim(),
        'August ' + currentYear,
        'The next month is set correctly'
    );
});

test( 'Navigating from Month to Year', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    const currentMonth = 9;
    this.set( 'currentMonth', currentMonth );

    this.set( 'content', testContent );

    this.render( hbs`
        {{sl-calendar
            action='testAction'
            content=content
            currentYear=currentYear
            currentMonth=currentMonth
        }}
    ` );

    assert.equal(
        this.$( '.sl-calendar .datepicker-switch' ).text().trim(),
        'September ' + currentYear,
        'The current month is set correctly'
    );

    this.$( '.sl-calendar .datepicker-switch' ).click();

    assert.equal(
        this.$( '.sl-calendar .datepicker-switch' ).text().trim(),
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
            action='testAction'
            content=content
            currentYear=currentYear
            currentMonth=currentMonth
            viewMode="months"
        }}
    ` );

    assert.equal(
        this.$( '.sl-calendar .datepicker-switch' ).text().trim(),
        currentYear,
        'The current year is set correctly'
    );

    this.$( '.sl-calendar .active' ).click();

    assert.equal(
        this.$( '.sl-calendar .datepicker-switch' ).text().trim(),
        'September ' + currentYear,
        'The current month is set correctly'
    );
});

test( 'Navigating from Year to Decade to Month', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    const currentMonth = 9;
    this.set( 'currentMonth', currentMonth );

    this.set( 'content', testContent );

    this.render( hbs`
        {{sl-calendar
            action='testAction'
            content=content
            currentYear=currentYear
            currentMonth=currentMonth
            viewMode="months"
        }}
    ` );

    assert.equal(
        this.$( '.sl-calendar .datepicker-switch' ).text().trim(),
        currentYear,
        'The current year is set correctly'
    );

    this.$( '.sl-calendar .datepicker-switch' ).click();

    assert.equal(
        this.$( '.sl-calendar .datepicker-switch' ).text().trim(),
        '2020-2029',
        'The current decade is set correctly'
    );
});

test( 'Navigating from Decade to Year', function( assert ) {

    const currentYear = 2022;
    this.set( 'currentYear', currentYear );

    const currentMonth = 9;
    this.set( 'currentMonth', currentMonth );

    this.set( 'content', testContent );

    this.render( hbs`
        {{sl-calendar
            action='testAction'
            content=content
            currentYear=currentYear
            currentMonth=currentMonth
            viewMode="years"
        }}
    ` );

    assert.equal(
        this.$( '.sl-calendar .datepicker-switch' ).text().trim(),
        '2020-2029',
        'The current decade is set correctly'
    );

    this.$( '.sl-calendar .active' ).click();

    assert.equal(
        this.$( '.sl-calendar .datepicker-switch' ).text().trim(),
        currentYear,
        'The current year is set correctly'
    );
});
