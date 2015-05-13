import Ember from 'ember';
import layout from '../templates/components/sl-calendar-day';

/**
 * @module components
 * @class sl-calendar-day
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
    content: null,

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
    old: false

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
