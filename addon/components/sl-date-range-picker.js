import Ember from 'ember';
import ComponentInputId from '../mixins/sl-component-input-id';
import Namespace from '../mixins/sl-namespace';
import layout from '../templates/components/sl-date-range-picker';
import { warn } from '../utils/all';

/**
 * @module
 * @augments ember/Component
 * @augments module:mixins/sl-component-input-id
 * @augments module:mixins/sl-namespace
 */
export default Ember.Component.extend( ComponentInputId, Namespace, {

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
     * Check passed parameters on initialization
     *
     * @function
     * @returns {undefined}
     */
    initialize: Ember.on(
        'init',
        function() {
            const minDate = this.get( 'minDate' );
            const startDateValue = this.get( 'startDateValue' );
            const endDateValue = this.get( 'endDateValue' );
            const maxDate = this.get( 'maxDate' );
            const minDateMoment = window.moment( new Date( minDate ) );
            const startDateValueMoment = window.moment( new Date( startDateValue ) );
            const endDateValueMoment = window.moment( new Date( endDateValue ) );
            const maxDateMoment = window.moment( new Date( maxDate ) );

            // essentially does maxDate - minDate
            if ( minDate &&
                 maxDate &&
                 maxDateMoment.diff( minDateMoment ) < 0 ) {
                this.set( 'maxDate', null );
                warn( '"maxDate" must be greater than "minDate". "maxDate" has been set to "null"' );
            }

            if ( minDate &&
                 startDateValue &&
                 startDateValueMoment.diff( minDateMoment ) < 0 ) {
                this.set( 'startDateValue', this.get( 'minDate' ) );
                warn( '"startDateValue" must be greater than "minDate". "startDateValue" has been set to "minDate"' );
            }

            if ( startDateValue &&
                 maxDate &&
                 maxDateMoment.diff( startDateValueMoment ) < 0 ) {
                this.set( 'startDateValue', this.get( 'minDate' ) );
                warn( '"maxDate" must be greater than "startDateValue". "startDateValue" has been set to "minDate"' );
            }

            if ( endDateValue &&
                 maxDate &&
                 maxDateMoment.diff( endDateValueMoment ) < 0 ) {
                this.set( 'endDateValue', this.get( 'maxDate' ) );
                warn( '"maxDate" must be greater than "endDateValue". "endDateValue" has been set to "maxDate"' );
            }

            if ( startDateValue &&
                 endDateValue &&
                 endDateValueMoment.diff( startDateValueMoment ) < 0 ) {
                this.set( 'endDateValue', this.get( 'null' ) );
                warn( '"endDateValue" must be greater than "startDateValue". "endDateValue" has been set to "null"' );
            }
        }
    ),

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
            this.get( 'startDateInput' ).on( this.namespaceEvent( 'changeDate' ), () => {
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
            this.get( 'startDateInput' ).off( this.namespaceEvent( 'changeDate' ) );
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
