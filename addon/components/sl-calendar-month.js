import Ember from 'ember';
import layout from '../templates/components/sl-calendar-month';

/** @module */

export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    classNameBindings: [ 'active' ],

    /** @type {String[]} */
    classNames: [ 'month' ],

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
     * @default
     */
    active: false,

    /**
     * The number of the month (1-12)
     *
     * @type {Number}
     * @default
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
     * @observes month
     * @returns {String}
     */
    shortName: Ember.computed( 'month', function() {
        return moment([ 1, this.get( 'month' ) - 1 ]).format( 'MMM' );
    })

});
