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

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * The value for the endDate input
     *
     * @type {?String}
     */
    //endDateValue: null,

    /**
     * The string format for date values
     *
     * @type {String}
     */
    format: null,

    /**
     * The value for the startDate input
     *
     * @type {?String}
     */
    //startDateValue: null,

    label: null,

    startDate: null,

    endDate: null,

    selectConstraint: {
        start: null,
        end: null
    },

    locale: 'en',

    startDatePlaceholder: null,

    endDatePlaceholder: null,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

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
