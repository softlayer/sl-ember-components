import Ember from 'ember';
import layout from '../templates/components/sl-calendar-day';

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
        'active',
        'new',
        'old',
        'isToday:today'
    ],

    /** @type {String[]} */
    classNames: [
        'day'
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
     * @function
     * @returns {undefined}
     */
    click() {
        const content = this.get( 'content' );
        const date = this.get( 'date' );

        //if ( content ) {
            this.sendAction( 'action', date, content );
        //}
    },

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether the calendar day this cell represents is actively selected day
     *
     * @type {Boolean}
     */
    active: false,

    /**
     * The various data representing the day (created and passed in through
     * sl-calendar)
     *
     * @type {?Object}
     */
    content: null,

    /**
     * Whether the calendar day this cell represents is part of the next month
     * in the primary calendar view
     *
     * @type {Boolean}
     */
    'new': false,

    /**
     * Whether the calendar day this cell represents is part of the previous
     * month in the primary calendar view
     *
     * @type {Boolean}
     */
    old: false,

    date: null,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    isToday: Ember.computed(
        'date',
        function() {
            return window.moment().isSame( this.get( 'date' ), 'day' );
        }
    )

});
