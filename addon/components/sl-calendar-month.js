import Ember from 'ember';

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
        'active:selected'
    ],

    /** @type {String[]} */
    classNames: [
        'month'
    ],

    /** @type {String} */
    tagName: 'td',

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
     * The number of the month (1-12)
     *
     * @type {?Number}
     */
    month: null

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
