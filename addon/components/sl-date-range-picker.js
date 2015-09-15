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
    classNames: [
        'sl-date-range-picker'
    ],

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
     * @returns {undefined}
     */
    setupFocusTransition: Ember.on(
        'didInsertElement',
        function() {
            this.set( 'startDateInput', this.$( '.sl-daterange-start-date input' ) );
            this.set( 'endDateInput', this.$( '.sl-daterange-end-date input' ) );
            this.get( 'startDateInput' ).on( 'change', () => {
                this.get( 'endDateInput' ).trigger( 'focus' );
            });
        }
    ),

    /**
     * Remove events
     *
     * @function
     * @returns {undefined}
     */
    unregisterEvents: Ember.on(
        'willClearRender',
        function() {
            this.get( 'startDateInput' ).off();
            this.get( 'endDateInput' ).off();
        }
    ),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * The earliest selectable endDate, based on minDate and
     * current startDateValue
     *
     * @function
     * @returns {?Date|String} Defaults to null
     */
    earliestEndDate: Ember.computed(
        'minDate',
        'startDateValue',
        function() {
            const minDate = this.get( 'minDate' );
            const startDateValue = this.get( 'startDateValue' );

            if ( startDateValue ) {
                return startDateValue;
            }

            if ( minDate ) {
                return minDate;
            }

            return null;
        }
    ),

    /**
     * The latest selectable startDate, based on maxDate and
     * current endDateValue
     *
     * @function
     * @returns {Date|String} Defaults to null
     */
    latestStartDate: Ember.computed(
        'endDateValue',
        'maxDate',
        function() {
            const endDateValue = this.get( 'endDateValue' );
            const maxDate = this.get( 'maxDate' );

            if ( endDateValue ) {
                return endDateValue;
            }

            if ( maxDate ) {
                return maxDate;
            }

            return null;
        }
    )

});
