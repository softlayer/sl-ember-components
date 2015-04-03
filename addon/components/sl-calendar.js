/* global moment */

import Ember from 'ember';

/**
 * @module components
 * @class  sl-calendar-calendar
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * Class names for the root element
     *
     * @property {Ember.Array} classNames
     */
    classNames: [ 'sl-calendar' ],

    /**
     * Bindings for the component's class names
     *
     * @property {Ember.Array} classNameBindings
     */
    classNameBindings: [ 'locked:sl-calendar-locked' ],

    // -------------------------------------------------------------------------
    // Actions

    /**
     * Object of actions
     *
     * @property {Ember.Object} actions
     */
    actions: {

        /**
         * Change the currently-viewed decade by incrementing or decrementing
         * the decadeStart year number
         *
         * @function actions.changeDecade
         * @param    {number} decadeMod - A number to adjust the decadeStart by
         *           (positive to increment, negative to decrement)
         * @returns  {void}
         */
        changeDecade: function( decadeMod ) {
            if ( this.get( 'locked' ) ) {
                return;
            }

            this.incrementProperty( 'decadeStart', 10 * decadeMod );
        },

        /**
         * Change the currently-viewed month by incrementing or decrementing
         * the currentMonth (and currentYear if needed)
         *
         * @function actions.changeMonth
         * @param    {number} monthMod - A number to adjust the currentMonth by
         *           (positive to increment, negative to decrement). The
         *           currentYear is adjusted as needed.
         * @returns  {void}
         */
        changeMonth: function( monthMod ) {
            var month,
                year;

            if ( this.get( 'locked' ) ) {
                return;
            }

            month = this.get( 'currentMonth' ) + monthMod;
            year  = this.get( 'currentYear' );

            while ( month < 1 ) {
                month += 12;
                year -= 1;
            }

            while ( month > 12 ) {
                month -= 12;
                year += 1;
            }

            this.setProperties({
                currentYear  : year,
                currentMonth : month
            });
        },

        /**
         * Change the currently-viewed year by increment or decrementing the
         * currentYear
         *
         * @function actions.changeYear
         * @param    {number} yearMod - A number to adjust the currentYear by
         *           (positive to increment, negative to decrement)
         * @returns  {void}
         */
        changeYear: function( yearMod ) {
            if ( this.get( 'locked' ) ) {
                return;
            }

            this.incrementProperty( 'currentYear', yearMod );
        },

        /**
         * Action to trigger component's bound action and pass back content
         * values with dates occurring on the clicked date
         *
         * @function actions.sendDateContent
         * @param    {array} dateContent - Collection of content objects with
         *           date values of the clicked date
         * @returns  {void}
         */
        sendDateContent: function( dateContent ) {
            if ( dateContent ) {
                this.sendAction( 'action', dateContent );
            }
        },

        /**
         * Set the current month and change view mode to that month
         *
         * @function actions.setMonth
         * @param    {number} month - The number of the month to change view to
         * @returns  {void}
         */
        setMonth: function( month ) {
            if ( this.get( 'locked' ) ) {
                return;
            }

            this.setProperties({
                currentMonth : month,
                viewMode     : 'days'
            });
        },

        /**
         * Set the view mode of the calendar
         *
         * @function actions.setView
         * @param    {string} view - The view mode to switch to; "days",
         *           "months", or "years"
         * @returns  {void}
         */
        setView: function( view ) {
            if ( this.get( 'locked' ) ) {
                return;
            }

            this.set( 'viewMode', view );
        },

        /**
         * Set the current year
         *
         * @function actions.setYear
         * @param    {number} year - The year to set to the current value
         * @returns  {void}
         */
        setYear: function( year ) {
            if ( this.get( 'locked' ) ) {
                return;
            }

            this.setProperties({
                viewMode    : 'months',
                currentYear : year
            });
        }
    },

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Array of date value objects
     *
     * @property {array} content
     * @default  []
     */
    content: [],

    /**
     * The currently selected/viewed month (1-12)
     *
     * @property {number} currentMonth
     * @default  null
     */
    currentMonth: null,

    /**
     * The currently selected/viewed year
     *
     * @property {number} currentYear
     * @default  null
     */
    currentYear: null,

    /**
     * String lookup for the date value on the content objects
     *
     * @property {Ember.String} dateValuePath
     * @default  "date"
     */
    dateValuePath: 'date',

    /**
     * When true, the view mode is locked and users cannot navigate forward
     * and back
     *
     * @property {boolean} locked
     * @default  false
     */
    locked: false,

    /**
     * The current view mode for the calendar
     *
     * @property {Ember.String} viewMode
     * @default  "days"
     */
    viewMode: 'days',

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Initialize default property values
     *
     * @function initialize
     * @observes "init" event
     * @returns  {void}
     */
    initialize: function() {
        var today = new Date();

        if ( !this.get( 'currentMonth' ) ) {
            this.set( 'currentMonth', today.getMonth() + 1 );
        }

        if ( !this.get( 'currentYear' ) ) {
            this.set( 'currentYear', today.getFullYear() );
        }
    }.on( 'init' ),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Object of nested year, month, and day values, representing the dates
     * supplied by the calendar's content values
     *
     * @function contentDates
     * @observes content
     * @returns  {Ember.Object}
     */
    contentDates: function() {
        var content       = this.get( 'content' ),
            dates         = {},
            dateValuePath = this.get( 'dateValuePath' ),
            date,
            year,
            month,
            day;

        if ( content ) {
            content.forEach( function( item ) {
                date = new Date( Ember.get( item, dateValuePath ) );
                year = date.getFullYear();
                month = date.getMonth() + 1;
                day = date.getDate();

                if ( !dates.hasOwnProperty( year ) ) {
                    dates[ year ] = {};
                }

                if ( !dates[ year ].hasOwnProperty( month ) ) {
                    dates[ year ][ month ] = {};
                }

                if ( !dates[ year ][ month ].hasOwnProperty( day ) ) {
                    dates[ year ][ month ][ day ] = [];
                }

                dates[ year ][ month ][ day ].push( item );
            });
        }

        return dates;
    }.property( 'content' ),

    /**
     * Name of the currently selected/viewed month
     *
     * @function currentMonthString
     * @observes currentMonth
     * @returns  {Ember.String}
     */
    currentMonthString: function() {
        return moment([ this.get( 'currentYear' ), this.get( 'currentMonth' ) - 1 ]).format( 'MMMM' );
    }.property( 'currentMonth' ),

    /**
     * The number of days in the current month
     *
     * @function daysInMonth
     * @observes currentMonth, currentYear
     * @returns  {number}
     */
    daysInMonth: function() {
        return moment([ this.get( 'currentYear' ), this.get( 'currentMonth' ) - 1 ]).daysInMonth();
    }.property( 'currentMonth', 'currentYear' ),

    /**
     * The last year in the currently selected/viewed decade
     *
     * @function decadeEnd
     * @observes decadeStart
     * @returns  {number}
     */
    decadeEnd: function() {
        return this.get( 'decadeStart' ) + 9;
    }.property( 'decadeStart' ),

    /**
     * The first year in the currently selected/viewed decade
     *
     * @function decadeStart
     * @returns  {number}
     */
    decadeStart: function() {
        var currentYear = this.get( 'currentYear' );

        return currentYear - ( currentYear % 10 );
    }.property( 'currentYear' ),

    /**
     * Get an array of objects representing months in the year view
     *
     * Each item contains the following values:
     * - {boolean} active - Whether a content item's date occurs on this month
     * - {number}  month  - The month number in the year (1-12)
     *
     * @function monthsInYearView
     * @observes contentDates, currentYear
     * @returns  {Ember.Array}
     */
    monthsInYearView: function() {
        var contentDates = this.get( 'contentDates' ),
            currentYear  = this.get( 'currentYear' ),
            months       = [];

        for ( var month = 1; month <= 12; month++ ) {
            months.push({
                active: (
                    contentDates.hasOwnProperty( currentYear ) &&
                    contentDates[ currentYear ].hasOwnProperty( month )
                ),

                month: month
            });
        }

        return months;
    }.property( 'contentDates', 'currentYear' ),

    /**
     * The abbreviated, formatted day name of the week day
     *
     * @function shortWeekDayName
     * @returns  {Ember.String}
     */
    shortWeekDayName: function( weekday ) {
        return moment().day( weekday ).format( 'dd' );
    },

    /**
     * Whether the current view is "days"
     *
     * @function viewingDays
     * @observes viewMode
     * @returns  {boolean}
     */
    viewingDays: function() {
        return this.get( 'viewMode' ) === 'days';
    }.property( 'viewMode' ),

    /**
     * Whether the current view is "months"
     *
     * @function viewingMonths
     * @observes viewMode
     * @returns  {boolean}
     */
    viewingMonths: function() {
        return this.get( 'viewMode' ) === 'months';
    }.property( 'viewMode' ),

    /**
     * Whether the current view is "years"
     *
     * @function viewingYears
     * @observes viewMode
     * @returns  {boolean}
     */
    viewingYears: function() {
        return this.get( 'viewMode' ) === 'years';
    }.property( 'viewMode' ),

    /**
     * An array of objects representing weeks and days in the month view
     *
     * Each day object contains the following values:
     * - {boolean} active - Whether a content item occurs on this date
     * - {array} content - Collection of content items occurring on this date
     * - {number} day - The day number of the month (1-31)
     * - {boolean} new - Whether the day occurs in the next month
     * - {boolean} old - Whether the day occurs in the previous month
     *
     * @function weeksInMonthView
     * @observes contentDates, currentMonth, currentYear, daysInMonth
     * @returns  {Ember.Array}
     */
    weeksInMonthView: function() {
        var contentDates               = this.get( 'contentDates' ),
            currentMonth               = this.get( 'currentMonth' ),
            currentYear                = this.get( 'currentYear' ),
            daysInCurrentMonth         = this.get( 'daysInMonth' ),
            firstWeekdayOfCurrentMonth = ( new Date( currentYear, currentMonth - 1, 1 ) ).getDay(),
            weeks                      = [],
            inNextMonth                = false,
            previousMonth,
            previousMonthYear,
            previousMonthDays,
            nextMonth,
            nextMonthYear,
            day,
            days,
            inPreviousMonth,
            isActive,
            month,
            year;

        if ( currentMonth === 1 ) {
            previousMonth = 12;
            previousMonthYear = currentYear - 1;
        } else {
            previousMonth = currentMonth - 1;
            previousMonthYear = currentYear;
        }

        previousMonthDays = moment([ previousMonthYear, previousMonth - 1 ]).daysInMonth();

        if ( currentMonth === 12 ) {
            nextMonth = 1;
            nextMonthYear = currentYear + 1;
        } else {
            nextMonth = currentMonth + 1;
            nextMonthYear = currentYear;
        }

        if ( firstWeekdayOfCurrentMonth > 0 ) {
            inPreviousMonth = true;
            day = previousMonthDays - firstWeekdayOfCurrentMonth + 1;
            month = previousMonth;
            year = previousMonthYear;
        } else {
            inPreviousMonth = false;
            day = 1;
            month = currentMonth;
            year = currentYear;
        }

        for ( var week = 0; week < 6; week++ ) {
            days = [];

            for ( var wday = 0; wday < 7; wday++ ) {
                isActive = !inPreviousMonth && !inNextMonth &&
                    contentDates.hasOwnProperty( year ) &&
                    contentDates[ year ].hasOwnProperty( month ) &&
                    contentDates[ year ][ month ].hasOwnProperty( day );

                days.push({
                    active  : isActive,
                    content : isActive ? contentDates[ year ][ month ][ day ] : null,
                    day     : day++,
                    'new'   : inNextMonth,
                    old     : inPreviousMonth
                });

                if ( inPreviousMonth ) {
                    if ( day > previousMonthDays ) {
                        inPreviousMonth = false;
                        day = 1;
                        month = currentMonth;
                        year = currentYear;
                    }
                } else if ( day > daysInCurrentMonth ) {
                    inNextMonth = true;
                    day = 1;
                    month = nextMonth;
                    year = nextMonthYear;
                }
            }

            weeks.push( days );
        }

        return weeks;
    }.property( 'contentDates', 'currentMonth', 'currentYear', 'daysInMonth' ),

    /**
     * An array of objects representing years in the decade view
     *
     * Each object contains the following values:
     * - {boolean} active - Whether a content item occurs on this year
     * - {boolean} new - Whether this year is in the next decade range
     * - {boolean} old - Whether this year is in the previous decade range
     * - {number} year - The year number
     *
     * @function yearsInDecadeView
     * @observes contentDates, decadeEnd, decadeStart
     * @returns  {Ember.Array}
     */
    yearsInDecadeView: function() {
        var contentDates = this.get( 'contentDates' ),
            decadeStart  = this.get( 'decadeStart' ),
            decadeEnd    = this.get( 'decadeEnd' ),
            years        = [];

        for ( var year = decadeStart - 1; year <= decadeEnd + 1; year++ ) {
            years.push({
                active : contentDates.hasOwnProperty( year ),
                'new'  : year > decadeEnd,
                old    : year < decadeStart,
                year   : year
            });
        }

        return years;
    }.property( 'contentDates', 'decadeEnd', 'decadeStart' )

});
