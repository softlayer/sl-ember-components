import Ember from 'ember';

/**
 * @module components
 * @class sl-date-range-picker
 */
export default Ember.Component.extend({

    /**
     * Class names for the date-range-picker component
     * @property {array} classNames
     */
    classNames: [ 'sl-date-range-picker' ],

    /**
     * The earliest selectable endDate, based on minDate and
     * current startDateValue
     * @property {date|string} earliestEndDate
     * @default null
     */
    earliestEndDate: function () {
        var minDate = this.get( 'minDate' ),
            startDateValue = this.get( 'startDateValue' );

        if ( startDateValue ) {
            return startDateValue;
        }

        if ( minDate ) {
            return minDate;
        }

        return null;
    }.property( 'minDate', 'startDateValue' ),

    /**
     * The value for the endDate input
     * @property {string} endDateValue
     * @default null
     */
    endDateValue: null,

    /**
     * The string format for date values
     * @property {string} format
     * @default "mm/dd/yyyy"
     */
    format: 'mm/dd/yyyy',

    /**
     * The latest selectable startDate, based on maxDate and
     * current endDateValue
     * @property {date|string} latestStartDate
     * @default null
     */
    latestStartDate: function () {
        var endDateValue = this.get( 'endDateValue' ),
            maxDate = this.get( 'maxDate' );

        if ( endDateValue ) {
            return endDateValue;
        }

        if ( maxDate ) {
            return maxDate;
        }

        return null;
    }.property( 'endDateValue', 'maxDate' ),

    /**
     * The last valid date for the date range
     * @property {date|string} endDate
     * @default null
     */
    maxDate: null,

    /**
     * The earliest date selectable in the range
     * @property {date|string} minDate
     * @default null
     */
    minDate: null,

    /**
     * Set up a transition that moves focus to the endDate input when the
     * startDate input is changed
     * @method setupFocusTransition
     */
    setupFocusTransition: function () {
        var endDateInput = this.$( '.sl-daterange-end-date input' );

        this.$( '.sl-daterange-start-date input' ).on( 'change', function () {
            endDateInput.focus();
        });
    }.on( 'didInsertElement' ),

    /**
     * The value for the startDate input
     * @property {string} startDateValue
     * @default null
     */
    startDateValue: null
});
