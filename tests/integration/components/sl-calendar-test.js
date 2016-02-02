import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { skip } from 'qunit';
import sinon from 'sinon';

const multipleTestContent = Ember.A([
    {
        startDate: moment( [ 2022, 8, 12 ] ),
        title: 'Event 1 Today!'
    },
    {
        startDate: moment( [ 2022, 8, 12 ] ),
        title: 'Event 2 Today!'
    },
    {
        startDate: moment( [ 2022, 8, 17 ] ),
        title: 'Event 3 Today!'
    },
    {
        startDate: moment( [ 2022, 8, 20 ] ),
        title: 'Event 1 Another Day!'
    }
]);

moduleForComponent( 'sl-calendar', 'Integration | Component | sl calendar', {
    integration: true
});

test( 'Default rendered state', function( assert ) {
    this.render( hbs`
        {{sl-calendar}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sl-ember-components' ),
        'Has class "sl-ember-components"'
    );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'calendar' ),
        'Has class "calendar"'
    );

    assert.ok(
        this.$( '>:first-child' ).find( '> div:first-child' ).hasClass( 'calendar-days' ),
        'First child of component has class "calendar-days"'
    );

    assert.ok(
        this.$( '>:first-child' ).find( '.calendar-days > table:first-child' ).hasClass( 'calendar-controls' ),
        'Controls are visible'
    );
});

test( 'Next and Previous buttons have appropriate classes', function( assert ) {
    this.render( hbs`
        {{sl-calendar}}
    ` );

    const hasButtonClasses = function( button ) {
        let hasClasses = true;

        if ( !button.hasClass( 'btn' ) ) {
            hasClasses = false;
        }

        if ( !button.hasClass( 'btn-xs' ) ) {
            hasClasses = false;
        }

        if ( !button.hasClass( 'btn-default' ) ) {
            hasClasses = false;
        }

        return hasClasses;
    };

    assert.ok(
        hasButtonClasses( this.$( '>:first-child' ).find( '.calendar-controls button' ).first() ),
        'day view previous button has "btn", "btn-xs", and "btn-default" classes'
    );

    assert.ok(
        this.$( '>:first-child' ).find( '.calendar-controls button' ).first().find( 'span' ).hasClass( 'sl-icon-previous' ),
        'day view previous button has span with "sl-icon-previous" class'
    );

    assert.ok(
        hasButtonClasses( this.$( '>:first-child' ).find( '.calendar-controls button' ).last() ),
        'day view next button has "btn", "btn-xs", and "btn-default" classes'
    );

    assert.ok(
        this.$( '>:first-child' ).find( '.calendar-controls button' ).last().find( 'span' ).hasClass( 'sl-icon-next' ),
        'day view previous button has span with "sl-icon-next" class'
    );

    this.$( '>:first-child' ).find( '.calendar-controls a' ).click();

    assert.ok(
        hasButtonClasses( this.$( '>:first-child' ).find( '.calendar-controls button' ).first() ),
        'month view previous button has "btn", "btn-xs", and "btn-default" classes'
    );

    assert.ok(
        this.$( '>:first-child' ).find( '.calendar-controls button' ).first().find( 'span' ).hasClass( 'sl-icon-previous' ),
        'month view previous button has span with "sl-icon-previous" class'
    );

    assert.ok(
        hasButtonClasses( this.$( '>:first-child' ).find( '.calendar-controls button' ).last() ),
        'month view next button has "btn", "btn-xs", and "btn-default" classes'
    );

    assert.ok(
        this.$( '>:first-child' ).find( '.calendar-controls button' ).last().find( 'span' ).hasClass( 'sl-icon-next' ),
        'month view previous button has span with "sl-icon-next" class'
    );

    this.$( '>:first-child' ).find( '.calendar-controls a' ).click();

    assert.ok(
        hasButtonClasses( this.$( '>:first-child' ).find( '.calendar-controls button' ).first() ),
        'year view previous button has "btn", "btn-xs", and "btn-default" classes'
    );

    assert.ok(
        this.$( '>:first-child' ).find( '.calendar-controls button' ).first().find( 'span' ).hasClass( 'sl-icon-previous' ),
        'year view previous button has span with "sl-icon-previous" class'
    );

    assert.ok(
        hasButtonClasses( this.$( '>:first-child' ).find( '.calendar-controls button' ).last() ),
        'year view next button has "btn", "btn-xs", and "btn-default" classes'
    );

    assert.ok(
        this.$( '>:first-child' ).find( '.calendar-controls button' ).last().find( 'span' ).hasClass( 'sl-icon-next' ),
        'year view previous button has span with "sl-icon-next" class'
    );
});

test( 'Controls are not available when showControls is false', function( assert ) {
    this.render( hbs`
        {{sl-calendar showControls=false}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.calendar-controls' ).length,
        0,
        'calendar controls not available when showControls is false'
    );
});

test( 'Check for classes set on items outside of range in picker', function( assert ) {
    this.set( 'viewingDate', window.moment( [ 2015, 1, 1 ] ) );
    this.set( 'viewMode', 'days' );

    this.render( hbs`
        {{sl-calendar
            viewingDate=viewingDate
            viewMode=viewMode
        }}
    ` );

    let missingOld = false;
    let missingNew = false;

    // test the days

    const days = this.$( '>:first-child' ).find( '.calendar-days .day' );

    let firstReached = false;
    let lastReached = false;

    days.each( function() {
        const testDay = parseInt( $( this ).text() );

        if ( 1 === testDay ) {
            firstReached = true;
        }

        if ( !firstReached ) {
            if ( !$( this ).hasClass( 'old' ) ) {
                missingOld = true;
            }
        }

        if ( lastReached ) {
            if ( !$( this ).hasClass( 'new' ) ) {
                missingNew = true;
            }
        }

        if ( 31 === testDay && firstReached ) {
            lastReached = true;
        }
    });

    assert.notOk(
        missingOld,
        'All days prior to the first have class "old"'
    );

    assert.notOk(
        missingNew,
        'All days after the 31st have class "new"'
    );

    // test the years

    this.set( 'viewMode', 'years' );

    const startYear = 2010;
    const endYear = 2019;

    const years = this.$( '>:first-child' ).find( 'td.year' );

    missingOld = false;
    missingNew = false;

    years.each( function() {
        const testYear = parseInt( $( this ).text() );

        if ( testYear > endYear ) {
            if ( !$( this ).hasClass( 'new' ) ) {
                missingNew = true;
            }
        }

        if ( testYear < startYear ) {
            if ( !$( this ).hasClass( 'old' ) ) {
                missingOld = true;
            }
        }
    });

    assert.notOk(
        missingOld,
        'Years prior to range have class "old"'
    );

    assert.notOk(
        missingNew,
        'Years after selected ranged have class "new"'
    );
});

test( 'Setting viewingDate modifies the view correctly', function( assert ) {
    this.set( 'viewingDate', window.moment( [ 2025, 3, 1 ] ) );

    this.render( hbs`
        {{sl-calendar viewingDate=viewingDate}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.calendar-controls a' ).text().trim(),
        'April 2025',
        'Current month and year are set correctly in the view'
    );
});

test( 'selectedDate is set correctly', function( assert ) {
    this.set( 'selectedDate', window.moment( [ 2015, 1, 15 ] ) );
    this.set( 'viewingDate', window.moment( [ 2015, 1, 1 ] ) );

    this.render( hbs`
        {{sl-calendar
            viewingDate=viewingDate
        }}
    ` );

    assert.notOk(
        this.$( '>:first-child' ).find( 'td.selected' ).length,
        'No days are set as selected'
    );

    this.render( hbs`
        {{sl-calendar
            viewingDate=viewingDate
            selectedDate=selectedDate
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'td.selected' ).text().trim(),
        '15',
        'Proper date is set as selected'
    );
});

test( 'Setting locale to Spanish modifies the view correctly', function( assert ) {
    this.set( 'viewingDate', window.moment( [ 2022, 8, 1 ] ) );

    this.render( hbs`
        {{sl-calendar
            locale="es"
            viewingDate=viewingDate
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.calendar-controls a' ).text().trim(),
        'Septiembre 2022',
        'Current month in Spanish is set correctly in the view'
    );
});

test( 'Action fires when day is clicked', function( assert ) {
    assert.expect( 1 );

    const done = assert.async();

    this.render( hbs`
        {{sl-calendar action="testAction"}}
    ` );

    this.on( 'testAction', () => {
        assert.ok(
            true,
            'The test action was called'
        );

        done();
    });

    this.$( '>:first-child' ).find( '.today' ).click();
});

skip( 'Action passes through expected objects in content array', function( assert ) {

    assert.expect( 8 );

    const done = assert.async();

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

        done();
    });

    this.$( '>:first-child' ).find( '.active' ).click();
});

test( 'Setting viewMode modifies the view correctly', function( assert ) {
    this.set( 'selectedDate', window.moment( [ 2015, 1, 15 ] ) );
    this.set( 'viewingDate', window.moment( [ 2015, 1, 1 ] ) );
    this.set( 'viewMode', 'days' );

    this.render( hbs`
        {{sl-calendar
            selectedDate=selectedDate
            viewingDate=viewingDate
            viewMode=viewMode
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.selected' ).text().trim(),
        '15',
        '"viewMode" of days renders'
    );

    this.set( 'viewMode', 'months' );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.selected' ).text().trim(),
        'Feb',
        '"viewMode" of months renders'
    );

    this.set( 'viewMode', 'years' );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.selected' ).text().trim(),
        '2015',
        '"viewMode" of years renders'
    );
});

test( 'Navigating Forward and Backward by Month', function( assert ) {
    this.set( 'viewingDate', window.moment( [ 2015, 8, 1 ] ) );

    this.render( hbs`
        {{sl-calendar
            viewingDate=viewingDate
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.calendar-controls a' ).text().trim(),
        'September 2015',
        'The current month is set correctly'
    );

    this.$( '>:first-child' ).find( '.sl-icon-next' ).trigger( 'click' );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.calendar-controls a' ).text().trim(),
        'October 2015',
        'The next month is set correctly'
    );

    this.$( '>:first-child' ).find( '.sl-icon-previous' ).trigger( 'click' ).trigger( 'click' );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.calendar-controls a' ).text().trim(),
        'August 2015',
        'The previous month is set correctly'
    );

    this.set( 'viewingDate', window.moment( [ 2015, 11, 1 ] ) );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.calendar-controls a' ).text().trim(),
        'December 2015',
        'The month is set correctly'
    );

    this.$( '>:first-child' ).find( '.sl-icon-next' ).trigger( 'click' );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.calendar-controls a' ).text().trim(),
        'January 2016',
        'The month and year are set correctly'
    );

    this.$( '>:first-child' ).find( '.sl-icon-previous' ).trigger( 'click' );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.calendar-controls a' ).text().trim(),
        'December 2015',
        'The month and year are set correctly'
    );
});

test( 'Navigating Forward and Backward by Year', function( assert ) {
    this.set( 'viewingDate', window.moment( [ 2015, 8, 1 ] ) );
    this.set( 'viewMode', 'months' );

    this.render( hbs`
        {{sl-calendar
            viewingDate=viewingDate
            viewMode=viewMode
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.calendar-controls a' ).text().trim(),
        '2015',
        'The current year is set correctly'
    );

    this.$( '>:first-child' ).find( '.sl-icon-next' ).trigger( 'click' );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.calendar-controls a' ).text().trim(),
        '2016',
        'The next year is set correctly'
    );

    this.$( '>:first-child' ).find( '.sl-icon-previous' ).trigger( 'click' ).trigger( 'click' );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.calendar-controls a' ).text().trim(),
        '2014',
        'The previous year is set correctly'
    );
});

test( 'Navigating Forward and Backward by Decade', function( assert ) {
    this.set( 'viewingDate', window.moment( [ 2015, 8, 1 ] ) );
    this.set( 'viewMode', 'years' );

    this.render( hbs`
        {{sl-calendar
            viewingDate=viewingDate
            viewMode=viewMode
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.calendar-controls th:first-child + th' ).text().trim(),
        '2010 - 2019',
        'The current decade is set correctly'
    );

    this.$( '>:first-child' ).find( '.sl-icon-next' ).trigger( 'click' );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.calendar-controls th:first-child + th' ).text().trim(),
        '2020 - 2029',
        'The next decade is set correctly'
    );

    this.$( '>:first-child' ).find( '.sl-icon-previous' ).trigger( 'click' ).trigger( 'click' );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.calendar-controls th:first-child + th' ).text().trim(),
        '2000 - 2009',
        'The previous decade is set correctly'
    );
});

test( 'Changing viewMode by View Switcher', function( assert ) {
    this.set( 'viewingDate', window.moment( [ 2015, 8, 1 ] ) );
    this.set( 'viewMode', 'days' );

    this.render( hbs`
        {{sl-calendar
            viewingDate=viewingDate
            viewMode=viewMode
        }}
    ` );

    assert.strictEqual(
        this.get( 'viewMode' ),
        'days',
        'The current viewMode is "days"'
    );

    this.$( '>:first-child' ).find( '.calendar-controls a' ).trigger( 'click' );

    assert.strictEqual(
        this.get( 'viewMode' ),
        'months',
        'The current viewMode is "months"'
    );

    this.$( '>:first-child' ).find( '.calendar-controls a' ).trigger( 'click' );

    assert.strictEqual(
        this.get( 'viewMode' ),
        'years',
        'The current viewMode is "years"'
    );
});

test( 'Changing viewMode by Selection', function( assert ) {
    this.set( 'viewingDate', window.moment( [ 2015, 8, 1 ] ) );
    this.set( 'selectedDate', window.moment( [ 2015, 8, 1 ] ) );
    this.set( 'viewMode', 'years' );

    this.render( hbs`
        {{sl-calendar
            viewingDate=viewingDate
            selectedDate=selectedDate
            viewMode=viewMode
        }}
    ` );

    assert.strictEqual(
        this.get( 'viewMode' ),
        'years',
        'The current viewMode is "years"'
    );

    this.$( '>:first-child' ).find( 'td.selected' ).trigger( 'click' );

    assert.strictEqual(
        this.get( 'viewMode' ),
        'months',
        'The current viewMode is "months"'
    );

    this.$( '>:first-child' ).find( 'td.selected' ).trigger( 'click' );

    assert.strictEqual(
        this.get( 'viewMode' ),
        'days',
        'The current viewMode is "days"'
    );
});

test( 'All Days are Displayed in Order', function( assert ) {
    this.set( 'viewingDate', window.moment( [ 2015, 0, 1 ] ) );
    this.set( 'fixedWeekCount', false );

    this.render( hbs`
        {{sl-calendar
            fixedWeekCount=fixedWeekCount
            viewingDate=viewingDate
        }}
    ` );

    let daysString = '';

    this.$( '>:first-child' ).find( 'td.day' ).each( function() {
        daysString += $( this ).text().trim();
    });

    assert.strictEqual(
        daysString,
        '2829303112345678910111213141516171819202122232425262728293031',
        'All days listed in order for specified month as expected'
    );

    this.set( 'fixedWeekCount', true );

    daysString = '';

    this.$( '>:first-child' ).find( 'td.day' ).each( function() {
        daysString += $( this ).text().trim();
    });

    assert.strictEqual(
        daysString,
        '28293031123456789101112131415161718192021222324252627282930311234567',
        'All days listed in order for specified month when fixedWeekCount as expected'
    );
});

test( 'All Twelve Months are Displayed in Order', function( assert ) {

    this.render( hbs`
        {{sl-calendar
            viewMode="months"
        }}
    ` );

    let monthsString = '';

    this.$( '>:first-child' ).find( 'td.month' ).each( function() {
        monthsString += $( this ).text().trim();
    });

    assert.strictEqual(
        monthsString,
        'JanFebMarAprMayJunJulAugSepOctNovDec',
        'Twelve months are listed in order'
    );
});

test( 'Twelve Years are Displayed in Order', function( assert ) {
    this.set( 'viewingDate', window.moment( [ 2022, 0, 1 ] ) );

    this.render( hbs`
        {{sl-calendar
            viewMode="years"
            viewingDate=viewingDate
        }}
    ` );

    let yearsString = '';

    this.$( '>:first-child' ).find( 'td.year' ).each( function() {
        yearsString += $( this ).text().trim();
    });

    assert.strictEqual(
        yearsString,
        '201920202021202220232024202520262027202820292030',
        'Twelve years are listed in order'
    );
});

skip( 'Wai-Aria keyboard navigation', function( assert ) {
    // make sure to include moving across months and retaining focus
});
