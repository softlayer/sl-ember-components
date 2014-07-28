import Ember from 'ember';

/**
 * @module components
 * @class sl-calendar
 */
export default Ember.Component.extend({

    actions: {
        changeDecade: function ( decadeMod ) {
            this.set( 'decadeStart', this.get( 'decadeStart' ) + ( 10 * decadeMod ));
        },

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

        changeYear: function ( yearMod ) {
            this.set( 'currentYear', this.get( 'currentYear' ) + yearMod );
        },

        clickDay: function ( dayContent ) {
            if ( dayContent ) {
                this.sendAction( 'action', dayContent );
            }
        },

        setMonth: function ( month ) {
            this.setProperties({
                currentMonth: month,
                viewMode: 'days'
            });
        },

        setView: function ( view ) {
            this.set( 'viewMode', view );
        },

        setYear: function ( year ) {
            this.setProperties({
                viewMode: 'months',
                currentYear: year
            });
        }
    },

    /**
     * Class names for the root element
     * @property {array} classNames
     */
    classNames: [ 'sl-calendar' ],

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

    currentMonth: function () {
        var startMonth = this.get( 'startMonth' );

        if ( startMonth ) {
            return startMonth;
        }

        return this.get( 'today' ).getMonth() + 1;
    }.property(),

    currentMonthString: function () {
        // TODO: Translate these using bootstrap-datepicker's translations
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

    currentYear: function () {
        var startYear = this.get( 'startYear' );

        if ( startYear ) {
            return startYear;
        }

        return this.get( 'today' ).getFullYear();
    }.property(),

    /**
     * String lookup for the date value on the content objects
     * @property {string} dateValuePath
     * @default "date"
     */
    dateValuePath: 'date',

    daysInMonth: function () {
        return this.getDaysInMonth( this.get( 'currentMonth' ), this.get( 'currentYear' ));
    }.property( 'currentMonth', 'currentYear' ),

    decadeEnd: function () {
        return this.get( 'decadeStart' ) + 9;
    }.property( 'decadeStart' ),

    decadeStart: function () {
        var currentYear = this.get( 'currentYear' );

        return currentYear - ( currentYear % 10 );
    }.property(),

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

    getIsLeapYear: function ( year ) {
        if ( 0 === year % 400 ) { return true; }
        if ( 0 === year % 100 ) { return false; }
        if ( 0 === year % 4 )   { return true; }
        return false;
    },

    isCurrentMonth: function ( month ) {
        return this.get( 'currentMonth' ) === month;
    }.property( 'currentMonth' ),

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

    startMonth: null,

    startYear: null,

    today: function () {
        return new Date();
    }.property(),

    viewingDays: function () {
        return this.viewMode === 'days';
    }.property( 'viewMode' ),

    viewingMonths: function () {
        return this.viewMode === 'months';
    }.property( 'viewMode' ),

    viewingYears: function () {
        return this.viewMode === 'years';
    }.property( 'viewMode' ),

    viewMode: 'days',

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