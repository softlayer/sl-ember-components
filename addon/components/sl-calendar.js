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

    attributeBindings: [
        'tabIndex'
    ],

    /** @type {String[]} */
    classNameBindings: [
        'locked:sl-calendar-locked'
    ],

    /** @type {String[]} */
    classNames: [
        'sl-ember-components',
        'calendar'
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

            this.incrementProperty( 'showingYear', 10 * decadeMod );
        },

        /**
         * Change the currently-viewed month by incrementing or decrementing
         * the showingMonth (and showingYear if needed)
         *
         * @function actions:changeMonth
         * @param {Number} monthMod - A number to adjust the showingMonth by
         *        (positive to increment, negative to decrement). The
         *        showingYear is adjusted as needed.
         * @returns {undefined}
         */
        changeMonth( monthMod ) {
            const newMonth = ( this.get( 'viewingDate' ).month() + 1 ) + monthMod;

            this.setMonth( newMonth );/*
            if ( this.get( 'locked' ) ) {
                return;
            }

            const viewingDate = this.get( 'viewingDate' );

            this.set( 'viewingDate', window.moment( viewingDate ).add( monthMod, 'months' ) );*/
        },

        /**
         * Change the currently-viewed year by increment or decrementing the
         * showingYear
         *
         * @function actions:changeYear
         * @param {Number} yearMod - A number to adjust the showingYear by
         *        (positive to increment, negative to decrement)
         * @returns {undefined}
         */
        changeYear( yearMod ) {
            const newYear = this.get( 'viewingDate' ).year() + yearMod;

            this.setYear( newYear );/*

            if ( this.get( 'locked' ) ) {
                return;
            }

            const viewingDate = this.get( 'viewingDate' );

            this.set( 'viewingDate', window.moment( viewingDate ).add( yearMod, 'years' ) );*/
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

        selectDate( date, data ) {
            this.setDate( date );

            this.sendAction( 'action', date, data );
        },

        /**
         * Set the current month and change view mode to that month
         *
         * @function actions:selectMonth
         * @param {Number} month - The number of the month to change view to
         * @returns {undefined}
         */
        selectMonth( month ) {
            this.setMonth( month );
            this.send( 'setView', 'days' );
        },

        /**
         * Set the current year and change the view mode to that year
         *
         * @function actions:selectYear
         * @param {Number} year - The year to set to the current value
         * @returns {undefined}
         */
        selectYear( year ) {
            this.setYear( year );
            this.send( 'setView', 'months' );
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
            this.$().focus();
        }
    },

    // -------------------------------------------------------------------------
    // Events

    focusIn() {
        this._super( ...arguments );

        console.log( 'calendar focus in' );
        this.set( 'hasFocus', true );
    },

    focusOut() {
        this._super( ...arguments );

        console.log( 'calendar focus out' );
        this.set( 'hasFocus', false );
    },

    keyDown( event ) {
        this._super( ...arguments );

        // handle wai-aria here
        // https://www.w3.org/TR/2009/WD-wai-aria-practices-20090224/#datepicker
        // https://web.archive.org/web/20130127091925/http://codetalks.org/source/widgets/datepicker/datepicker.sample.html

        const viewingDate = window.moment( this.get( 'viewingDate' ) );

        let timePeriod;

        switch ( event.keyCode ) {
            case 38: // up arrow
                this.set( 'viewingDate', viewingDate.subtract( 1, 'weeks' ) );
                break;

            case 40: // down arrow
                this.set( 'viewingDate', viewingDate.add( 1, 'weeks' ) );
                break;

            case 37: // left arrow
                this.set( 'viewingDate', viewingDate.subtract( 1, 'days' ) );
                break;

            case 39: // right arrow
                this.set( 'viewingDate', viewingDate.add( 1, 'days' ) );
                break;

            case 33: // page up
                timePeriod = 'months';
                if ( event.shiftKey ) {
                    timePeriod = 'years';
                }
                this.set( 'viewingDate', viewingDate.subtract( 1, timePeriod ) );
                break;

            case 34: // page down
                timePeriod = 'months';
                if ( event.shiftKey ) {
                    timePeriod = 'years';
                }
                this.set( 'viewingDate', viewingDate.add( 1, timePeriod ) );
                break;

            case 35: // end
                timePeriod = 'month';
                if ( event.ctrlKey ) {
                    timePeriod = 'year';
                }
                this.set( 'viewingDate', viewingDate.endOf( timePeriod ) );
                break;

            case 36: // home
                timePeriod = 'month';
                if ( event.ctrlKey ) {
                    timePeriod = 'year';
                }
                this.set( 'viewingDate', viewingDate.startOf( timePeriod ) );
                break;

            case 32: // space

            case 13: // enter
                this.set( 'selectedDate', viewingDate );
                break;

            default:
                return true;
        }

        // disallow default key event
        return false;
    },

    /**
     * Initialize default property values
     *
     * @returns {undefined}
     */
    init() {
        this._super( ...arguments );

        const today = window.moment();
        const selectConstraint = this.get( 'selectConstraint' );

        this.set( 'today', today );

        if ( !this.get( 'viewingDate' ) ) {
            this.set( 'viewingDate', today );
        }

        for ( let i in selectConstraint ) {
            selectConstraint[ i ] = window.moment( selectConstraint[i] );
            if ( !selectConstraint[ i ].isValid ) {
                // throw an error or warning here
            }
        }
        this.set( 'selectConstraint', selectConstraint );
        console.log( selectConstraint );
/*
        const viewingDate = this.get( 'viewingDate' );

        if ( !this.get( 'showingMonth' ) ) {
            this.set( 'showingMonth', viewingDate.month() + 1 );
        }

        if ( !this.get( 'showingYear' ) ) {
            this.set( 'showingYear', viewingDate.year() );
        }*/
    },

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
    //showingMonth: null,

    /**
     * The currently selected/viewed year
     *
     * @type {?Number}
     */
    //showingYear: null,

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

    today: null,

    fixedWeekCount: true,

    viewingDate: null,

    selectedDate: null,

    focusable: true,

    hasFocus: false,

    selectConstraint: {
        start: null,
        end: null
    },

    /**
     * The current view mode for the calendar
     *
     * @type {String}
     */
    viewMode: 'days',

    // -------------------------------------------------------------------------
    // Observers

    fubar: Ember.observer(
        'viewingDate',
        function() {
            console.log( this.get('viewingDate') );
        }
    ),

    // -------------------------------------------------------------------------
    // Methods

    setDate( date ) {
        this.set( 'selectedDate', window.moment( date ) );
        this.set( 'viewingDate', window.moment( date ) );
    },

    setMonth( month ) {
        if ( this.get( 'locked' ) ) {
            return;
        }

        console.log( 'setmonth', month );

        const viewingDate = this.get( 'viewingDate' );

        this.set( 'viewingDate', window.moment( viewingDate ).month( month - 1 ) );
    },

    setYear( year ) {
        if ( this.get( 'locked' ) ) {
            return;
        }

        const viewingDate = this.get( 'viewingDate' );

        this.set( 'viewingDate', window.moment( viewingDate ).year( year ) );
    },

    showingMonth: Ember.computed(
        'viewingDate',
        function() {
            return this.get( 'viewingDate' ).month() + 1;
        }
    ),

    showingYear: Ember.computed(
        'viewingDate',
        function() {
            return this.get( 'viewingDate' ).year();
        }
    ),

    tabIndex: Ember.computed(
        'focusable',
        function() {
            return this.get( 'focusable' ) ? 0 : -1;
        }
    ),

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
    showingMonthString: Ember.computed(
        'showingMonth',
        'locale',
        function() {
            return window.moment([
                2015,
                this.get( 'showingMonth' ) - 1
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
        'showingMonth',
        'showingYear',
        function() {
            return window.moment([
                this.get( 'showingYear' ),
                this.get( 'showingMonth' ) - 1
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
        'showingYear',
        function() {
            const showingYear = this.get( 'showingYear' );

            return showingYear - ( showingYear % 10 );
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
        'showingYear',
        'selectedDate',
        'locale',
        function() {
            const showingYear = this.get( 'showingYear' );
            const selectedDate = this.get( 'selectedDate' );
            const m = window.moment().locale( this.get( 'locale' ) );
            const monthNames = window.moment.monthsShort();
            const months = Ember.A();
            let monthCount = 1;

            for ( let rowCount = 1; rowCount <= 3; rowCount++ ) {
                const row = Ember.A();

                for ( let colCount = 1; colCount <= 4; colCount++ ) {
                    let isActive = false;

                    if ( selectedDate ) {
                        isActive = ( selectedDate.month() + 1 ) === monthCount && selectedDate.year() === showingYear;
                    }

                    row.push({
                        active: isActive,
                        monthName: monthNames[ monthCount - 1 ],
                        month: monthCount
                    });

                    monthCount++;
                }

                months.push( row );
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

            let weekdays = window.moment.weekdaysMin();

            for ( let i = m.localeData().firstDayOfWeek(); i > 0; i-- ) {
                weekdays.push( weekdays.shift() );
            }

            return weekdays;
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
        'showingMonth',
        'showingYear',
        'selectedDate',
        'fixedWeekCount',
        'locale',
        'viewingDate',
        'selectConstraint',
        function() {
            const weeks = Ember.A();

            const showingMonth = this.get( 'showingMonth' );
            const selectedDate = this.get( 'selectedDate' );
            const viewingDate = this.get( 'viewingDate' );
            const selectConstraint = this.get( 'selectConstraint' );

            let firstOfMonth = window.moment( '01-' + showingMonth + '-' + this.get( 'showingYear' ), 'DD-MM-YYYY' ).locale( this.get( 'locale' ) );
            let firstDayOfWeek = firstOfMonth.localeData().firstDayOfWeek();
            let nextDayToShow = window.moment( firstOfMonth ).subtract( firstOfMonth.day(), 'days' );

            // support firstDayOfWeek via locale
            nextDayToShow.add( firstDayOfWeek, 'days' );

            // if the first day of the week has shifted the first onto last week
            if ( nextDayToShow.date() < 6 && nextDayToShow.date() !== 1 ) {
                nextDayToShow.subtract( 7, 'days' );
            }

            let weeksToShow = 6;

            if ( !this.get( 'fixedWeekCount' ) ) {
                weeksToShow = window.moment( firstOfMonth ).add( 1, 'months' ).subtract( 1, 'days' ).diff( nextDayToShow, 'weeks' ) + 1;
            }

            for ( let i = 1; i <= weeksToShow; i++ ) {
                const days = Ember.A();

                for ( let k = 0; k < 7; k++ ) {
                    let isActive = false;
                    let inNextMonth = nextDayToShow.isAfter( viewingDate, 'month' );//month() === showingMonth;
                    let inPrevMonth = nextDayToShow.isBefore( viewingDate, 'month' );//.month() === showingMonth - 2;
                    let isRestricted = false;

                    /*if ( showingMonth === 1 && nextDayToShow.month() === 11 ) {
                        inPrevMonth = true;
                    }*/

                    if ( selectedDate ) {
                        isActive = nextDayToShow.isSame( selectedDate, 'day' );
                    }

                    if ( selectConstraint.start ) {
                        if ( nextDayToShow.isBefore( selectConstraint.start ) ) {
                            isRestricted = true;
                        }
                    }

                    if ( selectConstraint.end ) {
                        if ( nextDayToShow.isAfter( selectConstraint.end ) ) {
                            isRestricted = true;
                        }
                    }

                    const day = {
                        date: window.moment( nextDayToShow ),
                        day: nextDayToShow.date(),
                        old: inPrevMonth,
                        new: inNextMonth,
                        focused: nextDayToShow.isSame( viewingDate, 'day' ) && this.get( 'hasFocus' ),
                        active: isActive,
                        restricted: isRestricted
                    };
                    days.push( day );
                    nextDayToShow.add( 1, 'days' );
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
        'decadeEnd',
        'decadeStart',
        'selectedDate',
        function() {
            const decadeStart = this.get( 'decadeStart' );
            const decadeEnd = this.get( 'decadeEnd' );
            const selectedDate = this.get( 'selectedDate' );
            const years = Ember.A();
            let yearCount = decadeStart - 1;

            for ( let rowCount = 1; rowCount <= 3; rowCount++ ) {
                const row = Ember.A();

                for ( let colCount = 1; colCount <= 4; colCount++ ) {
                    let isActive = false;

                    if ( selectedDate ) {
                        isActive = yearCount === selectedDate.year();
                    }

                    row.push({
                        active: isActive,
                        'new': yearCount > decadeEnd,
                        old: yearCount < decadeStart,
                        year: yearCount
                    });

                    yearCount++;
                }

                years.push( row );
            }

            return years;
        }
    )

});
