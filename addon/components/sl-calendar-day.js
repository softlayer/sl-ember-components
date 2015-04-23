import Ember from 'ember';
import layout from '../templates/components/sl-calendar-day';

/**
 * @module components
 * @class sl-calendar-day
 * @augments Ember.Component
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    classNameBindings: [ 'active', 'new', 'old' ],

    classNames: [ 'day' ],

    layout,

    tagName: 'td',

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether the calendar day this cell represents is actively selected day
     *
     * @property {Boolean} active
     * @default false
     */
    active: false,

    /**
     * The various data representing the day (created and passed in through
     * sl-calendar)
     *
     * @property {Object} content
     * @default {}
     */
    content: {},

    /**
     * Whether the calendar day this cell represents is part of the next month
     * in the primary calendar view
     *
     * @property {Boolean} new
     * @default false
     */
    'new': false,

    /**
     * Whether the calendar day this cell represents is part of the previous
     * month in the primary calendar view
     *
     * @property {Boolean} old
     * @default false
     */
    old: false,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Function triggered by clicking a calendar day
     *
     * @function click
     * @returns {undefined}
     */
    click() {
        this.sendAction( 'action', this.get( 'content' ) );
    }

});
