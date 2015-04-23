import Ember from 'ember';
import layout from '../templates/components/sl-date-range-picker';

/**
 * @module components
 * @class sl-date-range-picker
 * @augments Ember.Component
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    classNames: [ 'sl-date-range-picker' ],

    layout,

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * The value for the endDate input
     *
     * @property {?String} endDateValue
     * @default null
     */
    endDateValue: null,

    /**
     * The string format for date values
     *
     * @property {String} format
     * @default "mm/dd/yyyy"
     */
    format: 'mm/dd/yyyy',

    /**
     * Bound value of Start Date input element's id
     *
     * @property {?String} inputElementId
     * @default null
     */
    inputElementId: null,

    /**
     * The last valid date for the date range
     *
     * @property {?Date|String} endDate
     * @default null
     */
    maxDate: null,

    /**
     * The earliest date selectable in the range
     *
     * @property {?Date|String} minDate
     * @default null
     */
    minDate: null,

    /**
     * The value for the startDate input
     *
     * @property {?String} startDateValue
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
     * @observes "didInsertElement" event
     * @returns {undefined}
     */
    setupFocusTransition: Ember.on( 'didInsertElement', function() {
        var endDateInput = this.$( '.sl-daterange-end-date input' );

        this.$( '.sl-daterange-start-date input' ).on( 'change', function() {
            endDateInput.focus();
        });
    }),

    /**
     * Remove events
     *
     * @function unregisterEvents
     * @observes "willClearRender" event
     * @returns {undefined}
     */
    unregisterEvents: Ember.on( 'willClearRender', function() {
        this.$( '.sl-daterange-start-date input' ).off();
    }),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * The earliest selectable endDate, based on minDate and
     * current startDateValue
     *
     * @function earliestEndDate
     * @observes minDate, startDateValue
     * @returns {?Date|String} Defaults to null
     */
    earliestEndDate: Ember.computed( 'minDate', 'startDateValue', function() {
        var minDate        = this.get( 'minDate' ),
            startDateValue = this.get( 'startDateValue' );

        if ( startDateValue ) {
            return startDateValue;
        }

        if ( minDate ) {
            return minDate;
        }

        return null;
    }),

    /**
     * The latest selectable startDate, based on maxDate and
     * current endDateValue
     *
     * @function latestStartDate
     * @observes endDateValue, maxDate
     * @returns {Date|String} Defaults to null
     */
    latestStartDate: Ember.computed( 'endDateValue', 'maxDate', function() {
        var endDateValue = this.get( 'endDateValue' ),
            maxDate = this.get( 'maxDate' );

        if ( endDateValue ) {
            return endDateValue;
        }

        if ( maxDate ) {
            return maxDate;
        }

        return null;
    })

});
