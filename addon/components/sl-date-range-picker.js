import Ember from 'ember';

/** @module sl-components/components/sl-date-range-picker */
export default Ember.Component.extend({

    /**
     * Class names for the date-range-picker component
     *
     * @property {array}       classNames
     * @type     {Ember.Array}
     */
    classNames: [ 'sl-date-range-picker' ],

    /**
     * The value for the endDate input
     *
     * @property {string} endDateValue
     * @type     {Ember.String}
     * @default  null
     */
    endDateValue: null,

    /**
     * The string format for date values
     *
     * @property {string} format
     * @type     {Ember.String}
     * @default  "mm/dd/yyyy"
     */
    format: 'mm/dd/yyyy',

    /**
     * The last valid date for the date range
     *
     * @property {date|string} endDate
     * @type     {date|Ember.String}
     * @default  null
     */
    maxDate: null,

    /**
     * The earliest date selectable in the range
     *
     * @property {date|string} minDate
     * @type     {date|Ember.String}
     * @default  null
     */
    minDate: null,

    /**
     * The value for the startDate input
     *
     * @property {string} startDateValue
     * @type     {Ember.String}
     * @default null
     */
    startDateValue: null,

    /**
     * Set up a transition that moves focus to the endDate input when the
     * startDate input is changed
     *
     * @function setupFocusTransition
     * @observes 'didInsertElement'
     * @return   {void}
     */
    setupFocusTransition: function() {
        var endDateInput = this.$( '.sl-daterange-end-date input' );

        this.$( '.sl-daterange-start-date input' ).on( 'change', function() {
            endDateInput.focus();
        });
    }.on( 'didInsertElement' ),

    /**
     * The earliest selectable endDate, based on minDate and
     * current startDateValue
     *
     * @function earliestEndDate
     * @observes 'minDate', 'startDateValue'
     * @return   {date|Ember.String}  Defaults to null
     */
    earliestEndDate: function() {
        var minDate        = this.get( 'minDate' ),
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
     * The latest selectable startDate, based on maxDate and
     * current endDateValue
     *
     * @property latestStartDate
     * @observes 'endDateValue', 'maxDate'
     * @return   {date|Ember.String}  Defaults to null
     */
    latestStartDate: function() {
        var endDateValue = this.get( 'endDateValue' ),
            maxDate = this.get( 'maxDate' );

        if ( endDateValue ) {
            return endDateValue;
        }

        if ( maxDate ) {
            return maxDate;
        }

        return null;
    }.property( 'endDateValue', 'maxDate' )
});
