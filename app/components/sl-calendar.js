import Ember from 'ember';

/**
 * @module components
 * @class sl-calendar
 */
export default Ember.Component.extend({

    actions: {
        // TODO: changeDecade

        changeMonth: function ( monthMod ) {
            var month = this.get( 'currentMonth' ) + monthMod;
            var year = this.get( 'currentYear' );

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
            this.setProperties({
                currentYear: this.get( 'currentYear' ) + yearMod,
                viewMode: 'months'
            });
        },

        // TODO: setDecade

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
                currentYear: year,
                viewMode: 'months'
            });
        }
    },

    /**
     * Class names for the root element
     * @property {array} classNames
     */
    classNames: [ 'sl-calendar' ],

    currentMonth: function () {
        var startMonth = this.get( 'startMonth' );

        if ( startMonth ) {
            return startMonth;
        }

        return this.get( 'today' ).getMonth() + 1;
    }.property(),

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
        switch ( this.get( 'currentMonth' )) {
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
                return this.isLeapYear() ? 29 : 30;
        }
    },

    didInsertElement: function () {
        console.log( this.isCurrentMonth( 7 ));
    },

    isCurrentMonth: function ( month ) {
        return this.get( 'currentMonth' ) === month;
    },

    isLeapYear: function () {
        var year = this.get( 'currentYear' );

        if ( 0 === year % 400 ) { return true; }
        if ( 0 === year % 100 ) { return false; }
        if ( 0 === year % 4 )   { return true; }
        return false;
    },

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

    viewMode: 'months'
});
