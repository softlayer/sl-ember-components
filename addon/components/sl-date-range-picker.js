import Ember from 'ember';
import ComponentInputId from '../mixins/sl-component-input-id';
import Namespace from '../mixins/sl-namespace';
import layout from '../templates/components/sl-date-range-picker';

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

    /** @type {Object} */
    actions: {

        /**
         * Move focus to the endDate picker when startDate is selected
         *
         * @function actions:startSelected
         * @returns {undefined}
         */
        startSelected() {
            this.$( '.sl-daterange-end-date input' ).focus();
        }

    },

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * The currently selected date in the end datepicker
     *
     * @type {moment}
     */
    endDate: null,

    /**
     * The placeholder text that the end datepicker input should show
     *
     * @type {?String}
     */
    endDatePlaceholder: null,

    /**
     * The string format for date values
     *
     * @type {String}
     */
    format: null,

    /**
     * The help text below the date-range-pickers
     *
     * @type {?String}
     */
    helpText: null,

    /**
     * The label text above the date-range-pickers' input fields
     *
     * @type {?String}
     */
    label: null,

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
     * The currently selected date in the start datepicker
     *
     * @type {moment}
     */
    startDate: null,

    /**
     * The placeholder text that the start datepicker input should show
     *
     * @type {?String}
     */
    startDatePlaceholder: null,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Modification of selectConstraint for the startDate picker
     *
     * @function
     * @returns {Object}
     */
    endSelectConstraint: Ember.computed(
        'endDate',
        'selectConstraint',
        function() {
            const endDate = this.get( 'endDate' );
            const selectConstraint = this.get( 'selectConstraint' );

            return {
                start: selectConstraint.start,
                end: endDate ? endDate : selectConstraint.end
            };
        }
    ),

    /**
     * Modification of selectConstraint for the endDate picker
     *
     * @function
     * @returns {Object}
     */
    startSelectConstraint: Ember.computed(
        'startDate',
        'selectConstraint',
        function() {
            const startDate = this.get( 'startDate' );
            const selectConstraint = this.get( 'selectConstraint' );

            return {
                start: startDate ? startDate : selectConstraint.start,
                end: selectConstraint.end
            };
        }
    )

});
