import Ember from 'ember';

/**
 * @module components
 * @class sl-calendar
 */
export default Ember.Component.extend({

    /**
     * Object of actions
     * @property {Object} actions
     */
    actions: {

        /**
         * Change the currently-viewed decade by incrementing or decrementing
         * the decadeStart year number
         * @method actions.changeDecade
         * @param {Number} decadeMod - A number to adjust the decadeStart by
         * (positive to increment, negative to decrement)
         */
        changeDecade: function ( decadeMod ) {
            this.set( 'decadeStart', this.get( 'decadeStart' ) + ( 10 * decadeMod ));
        },

        /**
         * Change the currently-viewed month by incrementing or decrementing
         * the currentMonth (and currentYear if needed)
         * @method actions.changeMonth
         * @param {Number} monthMod - A number to adjust the currentMonth by
         * (positive to increment, negative to decrement). The currentYear is
         * adjusted as needed.
         */
        changeMonth: function ( monthMod ) {
            var month = this.get( 'currentMonth' ) + monthMod,
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
         * @method actions.changeYear
         * @param {Number} yearMod - A number to adjust the currentYear by
         * (positive to increment, negative to decrement)
         */
        changeYear: function ( yearMod ) {
            this.set( 'currentYear', this.get( 'currentYear' ) + yearMod );
        },

        /**
         * Action to trigger component's bound action and pass back content
         * values with dates occurring on the clicked date
         * @method actions.sendDateContent
         * @param {Array} dateContent - Collection of content objects with date
         * values of the clicked date
         */
        sendDateContent: function ( dateContent ) {
            if ( dateContent ) {
                this.sendAction( 'action', dateContent );
            }
        },

        /**
         * Set the current month and change view mode to that month
         * @method actions.setMonth
         * @param {Number} month - The number of the month to change view to
         */
        setMonth: function ( month ) {
            this.setProperties({
                currentMonth: month,
                viewMode: 'days'
            });
        },

        /**
         * Set the view mode of the calendar
         * @method actions.setView
         * @param {String} view - The view mode to switch to; "days", "months",
         * or "years"
         */
        setView: function ( view ) {
            this.set( 'viewMode', view );
        },

        /**
         * Set the current year
         * @method actions.setYear
         * @param {Number} year - The year to set to the current value
         */
        setYear: function ( year ) {
            this.setProperties({
                viewMode: 'months',
                currentYear: year
            });
        }
    },

    /**
     * Class names for the root element
     * @property {Array} classNames
     */
    classNames: [ 'sl-calendar' ],

    /**
     * Object of nested year, month, and day values, representing the dates
     * supplied by the calendar's content values
     * @property {Object} contentDates
     */
    contentDates: function () {
        var self = this,
            dates = {},
            date, year, month, day;

        this.get( 'content' ).forEach( function ( item ) {
            date = new Date( Ember.get( item, self.get( 'dateValuePath' )));
            year = date.getFullYear();
            month = date.getMonth() + 1;
            day = date.getDate();

            if ( !dates.hasOwnProperty( year )) {
                dates[ year ] = {};
            }

            if ( !dates[ year ].hasOwnProperty( month )) {
                dates[ year ][ month ] = {};
            }

            if ( !dates[ year ][ month ].hasOwnProperty( day )) {
                dates[ year ][ month ][ day ] = [];
            }

            dates[ year ][ month ][ day ].push( item );
        });

        return dates;
    }.property( 'content' ),

    /**
     * The currently selected/viewed month (1-12)
     * @property {Number} currentMonth
     */
    currentMonth: function () {
        return this.get( 'today' ).getMonth() + 1;
    }.property(),

    /**
     * Name of the currently selected/viewed month
     * @property {String} currentMonthString
     */
    currentMonthString: function () {
        switch ( this.get( 'currentMonth' )) {
            case 1: return 'January';
            case 2: return 'February';
            case 3: return 'March';
            case 4: return 'April';
            case 5: return 'May';
            case 6: return 'June';
            case 7: return 'July';
            case 8: return 'August';
            case 9: return 'September';
            case 10: return 'October';
            case 11: return 'November';
            case 12: return 'December';
        }
    }.property( 'currentMonth' ),

    /**
     * The currently selected/viewed year
     * @property {Number} currentYear
     */
    currentYear: function () {
        return this.get( 'today' ).getFullYear();
    }.property(),

    /**
     * String lookup for the date value on the content objects
     * @property {String} dateValuePath
     * @default "date"
     */
    dateValuePath: 'date',

    /**
     * The number of days in the current month
     * @property {Number} daysInMonth
     */
    daysInMonth: function () {
        return this.getDaysInMonth( this.get( 'currentMonth' ), this.get( 'currentYear' ));
    }.property( 'currentMonth', 'currentYear' ),

    /**
     * The last year in the currently selected/viewed decade
     * @property {Number} decadeEnd
     */
    decadeEnd: function () {
        return this.get( 'decadeStart' ) + 9;
    }.property( 'decadeStart' ),

    /**
     * The first year in the currently selected/viewed decade
     * @property {Number} decadeStart
     */
    decadeStart: function () {
        var currentYear = this.get( 'currentYear' );

        return currentYear - ( currentYear % 10 );
    }.property(),

    /**
     * Get the number of days in a given month
     * @method getDaysInMonth
     * @param {Number} month - The number of the month to look up (1-12)
     * @param {Number} year - The year of the month to look up
     * @returns {Number}
     */
    getDaysInMonth: function ( month, year ) {
        switch ( month ) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                return 31;
            case 4:
            case 6:
            case 9:
            case 11:
                return 30;
            case 2:
                return this.getIsLeapYear( year ) ? 29 : 30;
        }
    },

    /**
     * Check whether the supplied year is a leap year or not
     * @method getIsLeapYear
     * @param {Number} year - The year to check
     * @returns {Boolean}
     */
    getIsLeapYear: function ( year ) {
        if ( 0 === year % 400 ) { return true; }
        if ( 0 === year % 100 ) { return false; }
        if ( 0 === year % 4 )   { return true; }
        return false;
    },

    /**
     * Get an array of objects representing months in the year view. Each item
     * contains the following values:
     * - {Boolean} active - Whether a content item's date occurs on this month
     * - {Number} month - The month number in the year (1-12)
     * @property {Array} monthsInYearView
     */
    monthsInYearView: function () {
        var contentDates = this.get( 'contentDates' ),
            currentYear = this.get( 'currentYear' ),
            months = [];

        for ( var month = 1; month <= 12; month++ ) {
            months.push({
                active: contentDates.hasOwnProperty( currentYear ) && contentDates[ currentYear ].hasOwnProperty( month ),
                month: month
            });
        }

        return months;
    }.property( 'contentDates', 'currentYear' ),

    /**
     * The current date
     * @property {Date} today
     */
    today: function () {
        return new Date();
    }.property(),

    /**
     * Whether the current view is "days"
     * @property {Boolean} viewingDays
     * @default true
     */
    viewingDays: function () {
        return this.viewMode === 'days';
    }.property( 'viewMode' ),

    /**
     * Whether the current view is "months"
     * @property {Boolean} viewingMonths
     * @default false
     */
    viewingMonths: function () {
        return this.viewMode === 'months';
    }.property( 'viewMode' ),

    /**
     * Whether the current view is "years"
     * @property {Boolean} viewingYears
     * @default false
     */
    viewingYears: function () {
        return this.viewMode === 'years';
    }.property( 'viewMode' ),

    /**
     * The current view mode for the calendar
     * @property {String} viewMode
     * @default "days"
     */
    viewMode: 'days',

    /**
     * An array of objects representing weeks and days in the month view.
     * Each day object contains the following values:
     * - {Boolean} active - Whether a content item occurs on this date
     * - {Array} content - Collection of content items occurring on this date
     * - {Number} day - The day number of the month (1-31)
     * - {Boolean} new - Whether the day occurs in the next month
     * - {Boolean} old - Whether the day occurs in the previous month
     * @property {Array} weeksInMonthView
     */
    weeksInMonthView: function () {
        var contentDates = this.get( 'contentDates' ),
            currentMonth = this.get( 'currentMonth' ),
            currentYear = this.get( 'currentYear' ),
            daysInCurrentMonth = this.get( 'daysInMonth' ),
            firstWeekdayOfCurrentMonth = ( new Date( currentYear, currentMonth - 1, 1 )).getDay(),
            previousMonth, previousMonthYear, previousMonthDays,
            nextMonth, nextMonthYear,
            weeks = [],
            inNextMonth = false,
            day, days, inPreviousMonth, isActive, month, year;

        if ( currentMonth === 1 ) {
            previousMonth = 12;
            previousMonthYear = currentYear - 1;
        } else {
            previousMonth = currentMonth - 1;
            previousMonthYear = currentYear;
        }

        previousMonthDays = this.getDaysInMonth( previousMonth, previousMonthYear );

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
                    active: isActive,
                    content: isActive ? contentDates[ year ][ month ][ day ] : null,
                    day: day++,
                    new: inNextMonth,
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
    }.property( 'contentDates', 'currentMonth', 'currentYear', 'daysInMonth' ),

    /**
     * An array of objects representing years in the decade view. Each object
     * contains the following values:
     * - {Boolean} active - Whether a content item occurs on this year
     * - {Boolean} new - Whether this year is in the next decade range
     * - {Boolean} old - Whether this year is in the previous decade range
     * - {Number} year - The year number
     * @property {Array} yearsInDecadeView
     */
    yearsInDecadeView: function () {
        var contentDates = this.get( 'contentDates' ),
            decadeStart = this.get( 'decadeStart' ),
            decadeEnd = this.get( 'decadeEnd' ),
            years = [];

        for ( var year = decadeStart - 1; year <= decadeEnd + 1; year++ ) {
            years.push({
                active: contentDates.hasOwnProperty( year ),
                new: year > decadeEnd,
                old: year < decadeStart,
                year: year
            });
        }

        return years;
    }.property( 'contentDates', 'decadeEnd', 'decadeStart' )
});