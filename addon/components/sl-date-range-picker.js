import Ember from 'ember';

/**
 * @module components
 * @class  sl-date-range-picker
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * Class names for the date-range-picker component
     *
     * @property {Ember.Array} classNames
     */
    classNames: [ 'sl-date-range-picker' ],

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * The value for the endDate input
     *
     * @property {Ember.String} endDateValue
     * @default  null
     */
    endDateValue: null,

    /**
     * The string format for date values
     *
     * @property {Ember.String} format
     * @default  "mm/dd/yyyy"
     */
    format: 'mm/dd/yyyy',

    /**
     * The last valid date for the date range
     *
     * @property {date|Ember.String} endDate
     * @default  null
     */
    maxDate: null,

    /**
     * The earliest date selectable in the range
     *
     * @property {date|Ember.String} minDate
     * @default  null
     */
    minDate: null,

    /**
     * The value for the startDate input
     *
     * @property {Ember.String} startDateValue
     * @default null
     */
    startDateValue: null,

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Set up a transition that moves focus to the endDate input when the
     * startDate input is changed
     *
     * @function setupFocusTransition
     * @observes 'didInsertElement' event
     * @returns  {void}
     */
    setupFocusTransition: function() {
        var endDateInput = this.$( '.sl-daterange-end-date input' );

        this.$( '.sl-daterange-start-date input' ).on( 'change', function() {
            endDateInput.focus();
        });
    }.on( 'didInsertElement' ),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * The earliest selectable endDate, based on minDate and
     * current startDateValue
     *
     * @function earliestEndDate
     * @observes minDate, startDateValue
     * @returns  {date|Ember.String}  Defaults to null
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
     * @function latestStartDate
     * @observes endDateValue, maxDate
     * @returns  {date|Ember.String}  Defaults to null
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

    // -------------------------------------------------------------------------
    // Private Methods

});
