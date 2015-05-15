import Ember from 'ember';
import layout from '../templates/components/sl-calendar-day';

/** @module */

export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    classNameBindings: [ 'active', 'new', 'old' ],

    /** @type {String[]} */
    classNames: [ 'day' ],

    /** @type {Object} */
    layout,

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
        var content = this.get( 'content' );

        if ( content ) {
            this.sendAction( 'action', content );
        }
    },

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether the calendar day this cell represents is actively selected day
     *
     * @type {Boolean}
     * @default
     */
    active: false,

    /**
     * The various data representing the day (created and passed in through
     * sl-calendar)
     *
     * @type {Object}
     * @default
     */
    content: null,

    /**
     * Whether the calendar day this cell represents is part of the next month
     * in the primary calendar view
     *
     * @type {Boolean}
     * @default
     */
    'new': false,

    /**
     * Whether the calendar day this cell represents is part of the previous
     * month in the primary calendar view
     *
     * @type {Boolean}
     * @default
     */
    old: false

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
