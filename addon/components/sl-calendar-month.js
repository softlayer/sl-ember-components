import Ember from 'ember';
import layout from '../templates/components/sl-calendar-month';

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
    classNameBindings: [
        'active'
    ],

    /** @type {Object} */
    layout,

    /** @type {String} */
    tagName: 'span',

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    /**
     * @function
     * @returns {undefined}
     */
    click() {
        this.sendAction( 'action', this.get( 'month' ) );
    },

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether the month that this component represents is selected by the
     * overall calendar component
     *
     * @type {Boolean}
     */
    active: false,

    /**
     * The locale string to use for moment dates
     *
     * @type {String}
     */
    locale: 'en',

    /**
     * The number of the month (1-12)
     *
     * @type {?Number}
     */
    month: null,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * The short string name of the represented month
     *
     * @function
     * @returns {String}
     */
    shortName: Ember.computed(
        'month',
        function() {
            return window.moment([ 1, this.get( 'month' ) - 1 ])
                .locale( this.get( 'locale' ) )
                .format( 'MMM' );
        }
    )

});
