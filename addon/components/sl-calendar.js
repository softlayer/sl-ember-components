import Ember from 'ember';
import layout from '../templates/components/sl-calendar';

/**
 * Valid view types for the sl-calendar component
 *
 * @memberof module:addon/components/sl-calendar
 * @enum {String}
 * @property {String} DAYS 'days',
 * @property {String} MONTHS 'months',
 * @property {String} YEARS 'years'
 */
export const View = Object.freeze({
    DAYS: 'days',
    MONTHS: 'months',
    YEARS: 'years'
});

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
    attributeBindings: [
        'tabIndex'
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
         * the viewedDate by ten years at a time
         *
         * @function actions:changeDecade
         * @param {Number} decadeMod - A number to adjust the viewedDate year by
         *        (positive to increment, negative to decrement)
         * @returns {undefined}
         */
        changeDecade( decadeMod ) {
            const newYear = this.get( 'viewingDate' ).year() + ( 10 * decadeMod );
            this.setYear( newYear );
        },

        /**
         * Change the currently-viewed month by incrementing or decrementing
         * the viewedDate by one month at a time
         *
         * @function actions:changeMonth
         * @param {Number} monthMod - A number to adjust the viewedDate month by
         *        (positive to increment, negative to decrement).
         * @returns {undefined}
         */
        changeMonth( monthMod ) {
            const newMonth = ( this.get( 'viewingDate' ).month() + 1 ) + monthMod;

            this.setMonth( newMonth );
        },

        /**
         * Change the currently-viewed year by incrementing or decrementing
         * the viewedDate by one year at a time
         *
         * @function actions:changeYear
         * @param {Number} yearMod - A number to adjust the viewedDate year by
         *        (positive to increment, negative to decrement)
         * @returns {undefined}
         */
        changeYear( yearMod ) {
            const newYear = this.get( 'viewingDate' ).year() + yearMod;

            this.setYear( newYear );
        },

        /**
         * Action to trigger component's bound action and pass back events
         * associated with the clicked date
         *
         * @function actions:selectDate
         * @param {Object} date - Moment date object representing the clicked
         *        date
         * @param {Array} events - Collection of event objects associated with
         *        the clicked date
         * @returns {undefined}
         */
        selectDate( date, events ) {
            const isValid = this.setDate( date );

            if ( isValid ) {
                this.sendAction( 'action', date, events );
            }
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
         * @param {Number} year - The year to change the view to
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
            this.set( 'viewMode', view );
            this.$().focus();
        }
    },

    // -------------------------------------------------------------------------
    // Events

    /**
     * Track focus on the component
     *
     * @returns {undefined}
     */
    focusIn() {
        this._super( ...arguments );

        this.set( 'hasFocus', true );
    },

    /**
     * Track focus on the component
     *
     * @returns {undefined}
     */
    focusOut() {
        this._super( ...arguments );

        this.set( 'hasFocus', false );
    },

    /**
     * Capture keyDown events for WAI-ARIA
     *
     * @returns {undefined}
     */
    keyDown( event ) {
        this._super( ...arguments );

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
                this.setDate( viewingDate );
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

        if ( !this.get( 'viewingDate' ) ) {
            this.set( 'viewingDate', today );
        }

        /*for ( let constraint in selectConstraint ) {
            selectConstraint[ constraint ] = window.moment( selectConstraint[ constraint ] );
            if ( !selectConstraint[ constraint ].isValid ) {
                // throw an error or warning here
            }
        }
        this.set( 'selectConstraint', selectConstraint );*/

        this.applyEvents();
    },

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Array of events to represent on the calendar
     *
     * @type {Object[]}
     */
    events: [],

    /**
     * Whether to always show six weeks or a minimum of weeks.
     *
     * @type {Boolean}
     */
    fixedWeekCount: false,

    /**
     * Whether to allow the calendar to receive focus.
     * Required for keyboard navigation.
     *
     * @type {Boolean}
     */
    focusable: true,

    /**
     * Whether the calendar currently has focus.
     *
     * @type {Boolean}
     */
    hasFocus: false,

    /**
     * The locale string to use for moment date values
     *
     * @type {String}
     */
    locale: 'en',

    /**
     * Constraints to enforce against selection of dates.
     * An object of start and end Moment properties.
     *
     * @type {Object}
     */
    selectConstraint: {
        start: null,
        end: null
    },

    /**
     * The currently selected date.
     *
     * @type {moment}
     */
    selectedDate: null,

    /**
     * Whether to show controls for changing the view.
     *
     * @type {Boolean}
     */
    showControls: true,

    /**
     * The currently shown month number.
     * Helps determine if the calendar should be re-rendered.
     *
     * @private
     * @type {?Number}
     */
    showingMonth: null,

    /**
     * The currently viewed date.
     * Determines what month and year to display.
     *
     * @type {moment}
     */
    viewingDate: null,

    /**
     * The current view mode for the calendar
     *
     * @type {String}
     */
    viewMode: View.DAYS,

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Keeps the day sub components up to date with the currently selected date.
     *
     * @function
     * @returns {undefined}
     */
    activeDateChange: Ember.observer(
        'selectedDate',
        function() {
            const selectedDate = this.get( 'selectedDate' );
            const weeksInMonthView = this.get( 'weeksInMonthView' );

            for ( let week = 0; week < weeksInMonthView.length; week++ ) {
                for ( let day = 0; day < weeksInMonthView[ week ].length; day++ ) {
                    if ( Ember.get( weeksInMonthView[ week ][ day ], 'active' ) ) {
                        Ember.set( weeksInMonthView[ week ][ day ], 'active', false );
                    }

                    if ( selectedDate.isSame( Ember.get( weeksInMonthView[ week ][ day ], 'date' ), 'day' ) ) {
                        Ember.set( weeksInMonthView[ week ][ day ], 'active', true );
                    }
                }
            }
        }
    ),

    /**
     * Keeps the day sub components up to date with the events array.
     *
     * @function
     * @returns {undefined}
     */
    applyEvents: Ember.observer(
        'events',
        'weeksInMonthView',
        function() {
            const events = this.get( 'events' );
            const viewingDate = this.get( 'viewingDate' );
            const weeksInMonthView = this.get( 'weeksInMonthView' );
            const eventsPerDay = [];

            eventsLoop:
            for ( let event = 0; event < events.length; event++ ) {
                const currentEvent = events[ event ];
                if ( currentEvent.startDate.isAfter( viewingDate, 'month' ) ) {
                    continue;
                }

                if ( currentEvent.endDate ) {
                    if ( currentEvent.endDate.isBefore( viewingDate, 'month' ) ) {
                        continue;
                    }
                }

                for ( let day = 0; day < eventsPerDay.length; day++ ) {
                    if ( currentEvent.startDate.isSame( eventsPerDay[ day ].date ) ) {
                        eventsPerDay[ day ].events.push( currentEvent );
                        continue eventsLoop;
                    }
                }

                eventsPerDay.push( {
                    date: currentEvent.startDate,
                    events: [ currentEvent ]
                });
            }

            for ( let week = 0; week < weeksInMonthView.length; week++ ) {
                daysLoop:
                for ( let day = 0; day < weeksInMonthView[ week ].length; day++ ) {
                    const date = Ember.get( weeksInMonthView[ week ][ day ], 'date' );

                    for ( let eventDay = 0; eventDay < eventsPerDay.length; eventDay++ ) {
                        if ( date.isSame( eventsPerDay[ eventDay ].date, 'day' ) ) {
                            Ember.set( weeksInMonthView[ week ][ day ], 'events', eventsPerDay[ eventDay ].events );
                            continue daysLoop;
                        }
                    }
                    Ember.set( weeksInMonthView[ week ][ day ], 'events', null );
                }
            }
        }
    ),

    /**
     * Keeps the day sub components up to date with the currently viewed date.
     *
     * @function
     * @returns {undefined}
     */
    focusedDateChange: Ember.observer(
        'viewingDate',
        function() {
            const viewingDate = this.get( 'viewingDate' );
            const weeksInMonthView = this.get( 'weeksInMonthView' );

            for ( let week = 0; week < weeksInMonthView.length; week++ ) {
                for ( let day = 0; day < weeksInMonthView[ week ].length; day++ ) {
                    if ( Ember.get( weeksInMonthView[ week ][ day ], 'focused' ) ) {
                        Ember.set( weeksInMonthView[ week ][ day ], 'focused', false );
                    }

                    if ( viewingDate.isSame( Ember.get( weeksInMonthView[ week ][ day ], 'date' ), 'day' ) ) {
                        Ember.set( weeksInMonthView[ week ][ day ], 'focused', true );
                    }
                }
            }
        }
    ),

    /**
     * Updates the showingMonth property to track when the calendar switches month.
     *
     * @function
     * @returns {undefined}
     */
    updateShowingMonth: Ember.observer(
        'viewingDate',
        function() {
            this.set( 'showingMonth', this.get( 'viewingDate' ).month() );
        }
    ),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Locale and viewMode based string title for the calendar
     *
     * @function
     * @returns {String}
     */
    calendarTitle: Ember.computed(
        'viewingDate',
        'locale',
        'viewMode',
        function() {
            const viewMode = this.get( 'viewMode' );
            const locale = this.get( 'locale' );
            const viewingDate = this.get( 'viewingDate' ).locale( locale );
            let title = '';

            switch( viewMode ) {
                case View.DAYS:
                    title = viewingDate.format( 'MMMM YYYY' );
                    break;
                case View.MONTHS:
                    title = viewingDate.format( 'YYYY' );
                    break;
                case View.YEARS:
                    const decadeMod = viewingDate.year() % 10;
                    title = viewingDate.subtract( decadeMod, 'years' ).format( 'YYYY' );
                    title += ' - ' + viewingDate.add( 9, 'years' ).format( 'YYYY' );
                    break;
            }
            return title;
        }
    ),

    /**
     * Get an array of objects representing months in the year view
     *
     * Each item contains the following values:
     * - {Boolean} active - Whether the month is currently selected
     * - {Number} month - The month number in the year (1-12)
     * - {String} monthName - The localized string representation of the month
     *
     * @function
     * @returns {Object[]}
     */
    monthsInYearView: Ember.computed(
        'viewingDate',
        'selectedDate',
        'locale',
        function() {
            const showingYear = this.get( 'viewingDate' ).year();
            const selectedDate = this.get( 'selectedDate' );

            window.moment().locale( this.get( 'locale' ) );

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
     * Sets the viewingDate to the specified date.
     *
     * @param {moment} date - the date to set
     * @returns {Boolean} - true if date passes constraint check
     */
    setDate( date ) {
        const selectConstraint = this.get( 'selectConstraint' );

        if ( selectConstraint.start ) {
            if ( date.isBefore( selectConstraint.start ) ) {
                console.log( 'start' );
                return false;
            }
        }

        if ( selectConstraint.end ) {
            if ( date.isAfter( selectConstraint.end ) ) {
                console.log( 'end' );
                return false;
            }
        }

        this.set( 'selectedDate', window.moment( date ) );
        this.set( 'viewingDate', window.moment( date ) );
        return true;
    },

    /**
     * Sets the viewingDate to the specified month.
     *
     * @param {Number} month - the month to set
     * @returns {undefined}
     */
    setMonth( month ) {
        const viewingDate = this.get( 'viewingDate' );

        this.set( 'viewingDate', window.moment( viewingDate ).month( month - 1 ) );
    },

    /**
     * Sets the viewingDate to the specified year.
     *
     * @param {Number} year - the year to set
     * @returns {undefined}
     */
    setYear( year ) {
        const viewingDate = this.get( 'viewingDate' );

        this.set( 'viewingDate', window.moment( viewingDate ).year( year ) );
    },

    /**
     * An array of abbreviated, formatted day names of each week day
     *
     * @function
     * @returns {Array}
     */
    shortWeekDayNames: Ember.computed(
        'locale',
        function() {
            const m = window.moment().locale( this.get( 'locale' ) );

            const weekdays = window.moment.weekdaysMin();

            for ( let i = m.localeData().firstDayOfWeek(); i > 0; i-- ) {
                weekdays.push( weekdays.shift() );
            }

            return weekdays;
        }
    ),

    /**
     * Sets tabIndex attribute based on focusable property.
     *
     * @function
     * @returns {Number}
     */
    tabIndex: Ember.computed(
        'focusable',
        function() {
            return this.get( 'focusable' ) ? 0 : -1;
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
            return View.DAYS === this.get( 'viewMode' );
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
            return View.MONTHS === this.get( 'viewMode' );
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
            return View.YEARS === this.get( 'viewMode' );
        }
    ),

    /**
     * An array of objects representing weeks and days in the month view
     *
     * Each day object contains the following values:
     * - {Boolean} active - Whether the day is currently selected
     * - {Array} events - Collection of event items occurring on this date
     * - {Number} dayName - The day number of the month (1-31)
     * - {Object} date - A moment object representing the date
     * - {Boolean} new - Whether the day occurs in the next month
     * - {Boolean} old - Whether the day occurs in the previous month
     * - {Boolean} focused - Whether the day is currently focused
     * - {Boolean} restricted - Whether the day is outside of the selectConstraint
     *
     * @function
     * @returns {ember.Array}
     */
    weeksInMonthView: Ember.computed(
        'fixedWeekCount',
        'locale',
        'selectConstraint',
        'showingMonth',
        'viewingDays',
        function() {
            const weeks = Ember.A();

            const selectedDate = this.get( 'selectedDate' );
            const viewingDate = this.get( 'viewingDate' );
            const showingMonth = viewingDate.month() + 1;
            const showingYear = viewingDate.year();
            const selectConstraint = this.get( 'selectConstraint' );

            const firstOfMonth = window.moment( '01-' + showingMonth + '-' + showingYear, 'DD-MM-YYYY' ).locale(
                this.get( 'locale' )
            );
            const firstDayOfWeek = firstOfMonth.localeData().firstDayOfWeek();
            const nextDayToShow = window.moment( firstOfMonth ).subtract( firstOfMonth.day(), 'days' );

            // support firstDayOfWeek via locale
            nextDayToShow.add( firstDayOfWeek, 'days' );

            // if the first day of the week has shifted the first onto last week
            if ( nextDayToShow.date() < 6 && nextDayToShow.date() !== 1 ) {
                nextDayToShow.subtract( 7, 'days' );
            }

            let weeksToShow = 6;

            if ( !this.get( 'fixedWeekCount' ) ) {
                weeksToShow = window.moment( firstOfMonth ).add(
                    1,
                    'months'
                ).subtract( 1, 'days' ).diff( nextDayToShow, 'weeks' ) + 1;
            }

            for ( let i = 1; i <= weeksToShow; i++ ) {
                const days = Ember.A();

                for ( let k = 0; k < 7; k++ ) {
                    let isActive = false;
                    const inNextMonth = nextDayToShow.isAfter( viewingDate, 'month' );
                    const inPrevMonth = nextDayToShow.isBefore( viewingDate, 'month' );
                    let isRestricted = false;

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
                        dayName: nextDayToShow.date(),
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
     * - {Boolean} active - Whether the selected date is in the year
     * - {Boolean} new - Whether this year is in the next decade range
     * - {Boolean} old - Whether this year is in the previous decade range
     * - {Number} year - The year number
     *
     * @function
     * @returns {Object[]}
     */
    yearsInDecadeView: Ember.computed(
        'viewingDate',
        'selectedDate',
        function() {
            const viewingDate = this.get( 'viewingDate' );
            const decadeStart = viewingDate.year() - ( viewingDate.year() % 10 );
            const decadeEnd = decadeStart + 9;
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
