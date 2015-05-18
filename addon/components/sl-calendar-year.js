import Ember from 'ember';
import layout from '../templates/components/sl-calendar-year';

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
    classNameBindings: [ 'active', 'new', 'old' ],

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
        this.sendAction( 'action', this.get( 'year' ) );
    },

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether the year this component represents is the currently active year
     * of the parent calendar component
     *
     * @type {Boolean}
     */
    active: false,

    /**
     * Whether the year this component represents is in the next decade from the
     * parent calendar's current year
     *
     * @type {Boolean}
     */
    'new': false,

    /**
     * Whether the year this component represents is in the previous decade from
     * the parent calendar's current year
     *
     * @type {Boolean}
     */
    old: false,

    /**
     * The year number this component represents
     *
     * @type {Number}
     */
    year: null

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
