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
    attributeBindings: [
        'ariaSelected:aria-selected',
        'tabIndex'
    ],

    /** @type {String[]} */
    classNameBindings: [
        'active:selected',
        'new',
        'old',
        'isToday:today',
        'restricted:disabled',
        'hasEvents'
    ],

    /** @type {String[]} */
    classNames: [
        'day'
    ],

    /** @type {String} */
    tagName: 'td',

    // -------------------------------------------------------------------------
    // Actions

    /** @type {Object} */
    actions: {},

    // -------------------------------------------------------------------------
    // Events

    /**
     * Send the click event up to sl-calendar
     *
     * @returns {undefined}
     */
    click() {
        const events = this.get( 'events' );
        const date = this.get( 'date' );

        this.sendAction( 'action', date, events );
    },

    /**
     * Focus this date on insert.
     * Needed for keyboard navigation across months.
     *
     * @returns {undefined}
     */
    didInsertElement() {
        this._super( ...arguments );

        this.focus();
    },

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether the calendar day this cell represents is actively selected
     *
     * @type {Boolean}
     */
    active: false,

    /**
     * The role attribute to apply
     *
     * @private
     * @type {String}
     */
    ariaRole: 'gridcell',

    /**
     * The specific moment date that this cell represents
     *
     * @type {?moment}
     */
    date: null,

    /**
     * An array of events bound to the date this cell represents
     *
     * @type {Object[]}
     */
    events: [],

    /**
     * Whether this day is currently focused by keyboard navigation
     *
     * @type {Boolean}
     */
    focused: false,

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

    /**
     * Whether the calendar day this cell represents is restricted by parent
     * calendar's selectConstraint
     *
     * @type {Boolean}
     */
    restricted: false,

    // -------------------------------------------------------------------------
    // Observers

    /**
     * When tabIndex changes, check if we should apply focus.
     *
     * @function
     * @returns {undefined}
     */
    focus: Ember.observer(
        'tabIndex',
        function() {
            if ( this.get( 'focused' ) ) {
                Ember.run.scheduleOnce( 'afterRender', this, function() {
                    this.$().get( 0 ).focus();
                });
            }
        }
    ),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Sets aria-selected attribute when active state is true.
     *
     * @function
     * @returns {?Boolean}
     */
    ariaSelected: Ember.computed(
        'active',
        function() {
            const active = this.get( 'active' );
            return active ? active : null;
        }
    ),

    /**
     * Whether there are events bound to this date.
     *
     * @function
     * @returns {Boolean}
     */
    hasEvents: Ember.computed(
        'events',
        function() {
            return !Ember.isEmpty( this.get( 'events' ) );
        }
    ),

    /**
     * Calculate if this day is today's date.
     *
     * @function
     * @returns {Boolean}
     */
    isToday: Ember.computed(
        'date',
        function() {
            return window.moment().isSame( this.get( 'date' ), 'day' );
        }
    ),

    /**
     * Sets tabIndex attribute based on focused property.
     *
     * @function
     * @returns {Number}
     */
    tabIndex: Ember.computed(
        'focused',
        function() {
            return this.get( 'focused' ) ? 0 : -1;
        }
    )

});
