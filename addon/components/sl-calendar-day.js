import Ember from 'ember';

/**
 * @module components
 * @class  sl-calendar-day
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * The HTML tag name of the component's root element
     *
     * @property {Ember.String} tagName
     * @default  "td"
     */
    tagName: 'td',

    /**
     * Class names for the component's root element
     *
     * @property {Ember.Array} classNames
     */
    classNames: [ 'day' ],

    /**
     * Class name bindings for the component
     *
     * @property {Ember.Array} classNameBindings
     */
    classNameBindings: [ 'active', 'new', 'old' ],

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    /**
     * Function triggered by clicking a calendar day
     *
     * @function click
     * @returns  {void}
     */
    click: function() {
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
     * @property {boolean} active
     * @default  false
     */
    active: false,

    /**
     * The various data representing the day (created and passed in
     * through sl-calendar)
     *
     * @property {object} content
     * @default  null
     */
    content: null,

    /**
     * Whether the calendar day this cell represents is part of the next month
     * in the primary calendar view
     *
     * @property {boolean} new
     * @default  false
     */
    'new': false,

    /**
     * Whether the calendar day this cell represents is part of the previous
     * month in the primary calendar view
     *
     * @property {boolean} old
     * @default  false
     */
    old: false

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
