import Ember from 'ember';
import layout from '../templates/components/sl-date-range-picker';

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
    classNames: [ 'sl-date-range-picker' ],

    /** @type {Object} */
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
     * @type {?String}
     */
    endDateValue: null,

    /**
     * The string format for date values
     *
     * @type {String}
     */
    format: 'mm/dd/yyyy',

    /**
     * Bound value of Start Date input element's id
     *
     * @type {?String}
     */
    inputElementId: null,

    /**
     * The last valid date for the date range
     *
     * @type {?Date|String}
     */
    maxDate: null,

    /**
     * The earliest date selectable in the range
     *
     * @type {?Date|String}
     */
    minDate: null,

    /**
     * The value for the startDate input
     *
     * @type {?String}
     */
    startDateValue: null,

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Set up a transition that moves focus to the endDate input when the
     * startDate input is changed
     *
     * @function
     * @listens didInsertElement
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
     * @function
     * @listens willClearRender
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
     * @function
     * @returns {?Date|String} Defaults to null
     */
    earliestEndDate: Ember.computed( 'minDate', 'startDateValue', function() {
        var minDate = this.get( 'minDate' ),
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
     * @function
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
