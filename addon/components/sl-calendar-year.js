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
    classNameBindings: [
        'active:selected',
        'new',
        'old'
    ],

    /** @type {String[]} */
    classNames: [
        'year'
    ],

    /** @type {Object} */
    layout,

    /** @type {String} */
    tagName: 'td',

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    /**
     * Send the click event up to sl-calendar
     *
     * @returns {undefined}
     */
    click() {
        this.sendAction( 'action', this.get( 'year' ) );
    },

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether the year this component represents is actively selected
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
     * @type {?Number}
     */
    year: null

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
