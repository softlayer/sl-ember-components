import Ember from 'ember';
import layout from '../templates/components/sl-calendar';

/**
 * @module
 * @augments ember/Component
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    classNameBindings: [
        'locked:sl-calendar-locked'
    ],

    /** @type {String[]} */
    classNames: [
        'sl-calendar'
    ],

    /** @type {Object} */
    layout,

    // -------------------------------------------------------------------------
    // Actions

    /** @type {Object} */
    actions: {

        /**
         * Change the currently-viewed decade by incrementing or decrementing
         * the decadeStart year number
         *
         * @function actions:changeDecade
         * @param {Number} decadeMod - A number to adjust the decadeStart by
         *        (positive to increment, negative to decrement)
         * @returns {undefined}
         */
        changeDecade( decadeMod ) {
            if ( this.get( 'locked' ) ) {
                return;
            }

            this.incrementProperty( 'currentYear', 10 * decadeMod );
        },

        /**
         * Change the currently-viewed month by incrementing or decrementing
         * the currentMonth (and currentYear if needed)
         *
         * @function actions:changeMonth
         * @param {Number} monthMod - A number to adjust the currentMonth by
         *        (positive to increment, negative to decrement). The
         *        currentYear is adjusted as needed.
         * @returns {undefined}
         */
        changeMonth( monthMod ) {
            let month;
            let year;

            if ( this.get( 'locked' ) ) {
                return;
            }

            month = this.get( 'currentMonth' ) + monthMod;
            year = this.get( 'currentYear' );

            while ( month < 1 ) {
                month += 12;
                year -= 1;
            }

            while ( month > 12 ) {
                month -= 12;
                year += 1;
            }

            this.setProperties({
                currentYear: year,
                currentMonth: month
            });
        },

        /**
         * Change the currently-viewed year by increment or decrementing the
         * currentYear
         *
         * @function actions:changeYear
         * @param {Number} yearMod - A number to adjust the currentYear by
         *        (positive to increment, negative to decrement)
         * @returns {undefined}
         */
        changeYear( yearMod ) {
            if ( this.get( 'locked' ) ) {
                return;
            }

            this.incrementProperty( 'currentYear', yearMod );
        },

        /**
         * Action to trigger component's bound action and pass back content
         * values with dates occurring on the clicked date
         *
         * @function actions:sendDateContent
         * @param {Array} dateContent - Collection of content objects with
         *        date values of the clicked date
         * @returns {undefined}
         */
        sendDateContent( dateContent ) {
            if ( dateContent ) {
                this.sendAction( 'action', dateContent );
            }
        },

        /**
         * Set the current month and change view mode to that month
         *
         * @function actions:setMonth
         * @param {Number} month - The number of the month to change view to
         * @returns {undefined}
         */
        setMonth( month ) {
            if ( this.get( 'locked' ) ) {
                return;
            }

            this.setProperties({
                currentMonth: month,
                viewMode: 'days'
            });
        },

        /**
         * Set the view mode of the calendar
         *
         * @function actions:setView
         * @param {String} view - The view mode to switch to; "days", "months",
         *        or "years"
         * @returns {undefined}
         */
        setView( view ) {
            if ( this.get( 'locked' ) ) {
                return;
            }

            this.set( 'viewMode', view );
        },

        /**
         * Set the current year
         *
         * @function actions:setYear
         * @param {Number} year - The year to set to the current value
         * @returns {undefined}
         */
        setYear( year ) {
            if ( this.get( 'locked' ) ) {
                return;
            }

            this.setProperties({
                viewMode: 'months',
                currentYear: year
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
     * @type {Object[]}
     */
    content: [],

    /**
     * The currently selected/viewed month (1-12)
     *
     * @type {?Number}
     */
    currentMonth: null,

    /**
     * The currently selected/viewed year
     *
     * @type {?Number}
     */
    currentYear: null,

    /**
     * String lookup for the date value on the content objects
     *
     * @type {String}
     */
    dateValuePath: 'date',

    /**
     * The locale string to use for moment date values
     *
     * @type {String}
     */
    locale: 'en',

    /**
     * When true, the view mode is locked and users cannot navigate forward
     * and back
     *
     * @type {Boolean}
     */
    locked: false,

    /**
     * The current view mode for the calendar
     *
     * @type {String}
     */
    viewMode: 'days',

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Initialize default property values
     *
     * @function
     * @returns {undefined}
     */
    initialize: Ember.on(
        'init',
        function() {
            const today = new Date();

            if ( !this.get( 'currentMonth' ) ) {
                this.set( 'currentMonth', today.getMonth() + 1 );
            }

            if ( !this.get( 'currentYear' ) ) {
                this.set( 'currentYear', today.getFullYear() );
            }
        }
    ),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Object of nested year, month, and day values, representing the dates
     * supplied by the calendar's content values
     *
     * @function
     * @returns {Object}
     */
    contentDates: Ember.computed(
        'content',
        'dateValuePath',
        function() {
            const content = this.get( 'content' );
            const dates = {};
            const dateValuePath = this.get( 'dateValuePath' );

            if ( content ) {
                content.forEach( ( item ) => {
                    const date = new Date( Ember.get( item, dateValuePath ) );
                    const year = date.getFullYear();
                    const month = date.getMonth() + 1;
                    const day = date.getDate();

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
        }
    ),

    /**
     * Name of the currently selected/viewed month
     *
     * @function
     * @returns {String}
     */
    currentMonthString: Ember.computed(
        'currentMonth',
        'currentYear',
        'locale',
        function() {
            return window.moment([
                this.get( 'currentYear' ),
                this.get( 'currentMonth' ) - 1
            ]).locale( this.get( 'locale' ) ).format( 'MMMM' );
        }
    ),

    /**
     * The number of days in the current month
     *
     * @function
     * @returns {Number}
     */
    daysInMonth: Ember.computed(
        'currentMonth',
        'currentYear',
        function() {
            return window.moment([
                this.get( 'currentYear' ),
                this.get( 'currentMonth' ) - 1
            ]).daysInMonth();
        }
    ),

    /**
     * The last year in the currently selected/viewed decade
     *
     * @function
     * @returns {Number}
     */
    decadeEnd: Ember.computed(
        'decadeStart',
        function() {
            return this.get( 'decadeStart' ) + 9;
        }
    ),

    /**
     * The first year in the currently selected/viewed decade
     *
     * @function
     * @returns {Number}
     */
    decadeStart: Ember.computed(
        'currentYear',
        function() {
            const currentYear = this.get( 'currentYear' );

            return currentYear - ( currentYear % 10 );
        }
    ),

    /**
     * Get an array of objects representing months in the year view
     *
     * Each item contains the following values:
     * - {Boolean} active - Whether a content item's date occurs on this month
     * - {Number} month - The month number in the year (1-12)
     *
     * @function
     * @returns {Object[]}
     */
    monthsInYearView: Ember.computed(
        'contentDates',
        'currentYear',
        function() {
            const contentDates = this.get( 'contentDates' );
            const currentYear = this.get( 'currentYear' );
            const months = Ember.A();

            for ( let month = 1; month <= 12; month++ ) {
                months.push({
                    active: (
                        contentDates.hasOwnProperty( currentYear ) &&
                        contentDates[ currentYear ].hasOwnProperty( month )
                    ),

                    month
                });
            }

            return months;
        }
    ),

    /**
     * An array of abbreviated, formatted day names of each week day
     *
     * @function
     * @returns {ember/Array}
     */
    shortWeekDayNames: Ember.computed(
        'locale',
        function() {
            const m = window.moment().locale( this.get( 'locale' ) );

            return Ember.A([
                m.day( 0 ).format( 'dd' ),
                m.day( 1 ).format( 'dd' ),
                m.day( 2 ).format( 'dd' ),
                m.day( 3 ).format( 'dd' ),
                m.day( 4 ).format( 'dd' ),
                m.day( 5 ).format( 'dd' ),
                m.day( 6 ).format( 'dd' )
            ]);
        }
    ),

    /**
     * Whether the current view is "days"
     *
     * @function
     * @returns {Boolean}
     */
    viewingDays: Ember.computed(
        'viewMode',
        function() {
            return 'days' === this.get( 'viewMode' );
        }
    ),

    /**
     * Whether the current view is "months"
     *
     * @function
     * @returns {Boolean}
     */
    viewingMonths: Ember.computed(
        'viewMode',
        function() {
            return 'months' === this.get( 'viewMode' );
        }
    ),

    /**
     * Whether the current view is "years"
     *
     * @function
     * @returns {Boolean}
     */
    viewingYears: Ember.computed(
        'viewMode',
        function() {
            return 'years' === this.get( 'viewMode' );
        }
    ),

    /**
     * An array of objects representing weeks and days in the month view
     *
     * Each day object contains the following values:
     * - {Boolean} active - Whether a content item occurs on this date
     * - {Array} content - Collection of content items occurring on this date
     * - {Number} day - The day number of the month (1-31)
     * - {Boolean} new - Whether the day occurs in the next month
     * - {Boolean} old - Whether the day occurs in the previous month
     *
     * @function
     * @returns {ember.Array}
     */
    weeksInMonthView: Ember.computed(
        'contentDates',
        'currentMonth',
        'currentYear',
        'daysInMonth',
        function() {
            const contentDates = this.get( 'contentDates' );
            const currentMonth = this.get( 'currentMonth' );
            const currentYear = this.get( 'currentYear' );
            const daysInCurrentMonth = this.get( 'daysInMonth' );
            const firstWeekdayOfCurrentMonth = (
                new Date( currentYear, currentMonth - 1, 1 )
            ).getDay();

            const weeks = Ember.A();
            let inNextMonth = false;

            let previousMonth;
            let previousMonthYear;
            if ( 1 === currentMonth ) {
                previousMonth = 12;
                previousMonthYear = currentYear - 1;
            } else {
                previousMonth = currentMonth - 1;
                previousMonthYear = currentYear;
            }

            const previousMonthDays = window.moment([
                previousMonthYear,
                previousMonth - 1
            ]).daysInMonth();

            let nextMonth;
            let nextMonthYear;
            if ( 12 === currentMonth ) {
                nextMonth = 1;
                nextMonthYear = currentYear + 1;
            } else {
                nextMonth = currentMonth + 1;
                nextMonthYear = currentYear;
            }

            let inPreviousMonth;
            let day;
            let month;
            let year;
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

            for ( let week = 0; week < 6; week++ ) {
                const days = Ember.A();

                for ( let wday = 0; wday < 7; wday++ ) {
                    const active = !inPreviousMonth && !inNextMonth &&
                        contentDates.hasOwnProperty( year ) &&
                        contentDates[ year ].hasOwnProperty( month ) &&
                        contentDates[ year ][ month ].hasOwnProperty( day );

                    days.push({
                        active,
                        content: active ?
                            contentDates[ year ][ month ][ day ] :
                            null,
                        day: day++,
                        'new': inNextMonth,
                        old: inPreviousMonth
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
        }
    ),

    /**
     * An array of objects representing years in the decade view
     *
     * Each object contains the following values:
     * - {Boolean} active - Whether a content item occurs on this year
     * - {Boolean} new - Whether this year is in the next decade range
     * - {Boolean} old - Whether this year is in the previous decade range
     * - {Number} year - The year number
     *
     * @function
     * @returns {Object[]}
     */
    yearsInDecadeView: Ember.computed(
        'contentDates',
        'decadeEnd',
        'decadeStart',
        function() {
            const contentDates = this.get( 'contentDates' );
            const decadeStart = this.get( 'decadeStart' );
            const decadeEnd = this.get( 'decadeEnd' );
            const years = Ember.A();

            for ( let year = decadeStart - 1; year <= decadeEnd + 1; year++ ) {
                years.push({
                    active: contentDates.hasOwnProperty( year ),
                    'new': year > decadeEnd,
                    old: year < decadeStart,
                    year
                });
            }

            return years;
        }
    )

});
