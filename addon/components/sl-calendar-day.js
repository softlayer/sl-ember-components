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

    actions: {},

    // -------------------------------------------------------------------------
    // Events

    /**
     * @function
     * @returns {undefined}
     */
    click() {
        const events = this.get( 'events' );
        const date = this.get( 'date' );

        this.sendAction( 'action', date, events );
    },

    didInsertElement() {
        this._super( ...arguments );

        this.focus();
    },

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether the calendar day this cell represents is actively selected day
     *
     * @type {Boolean}
     */
    active: false,

    ariaRole: 'gridcell',

    date: null,

    events: [],

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

    restricted: false,

    // -------------------------------------------------------------------------
    // Observers

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

    ariaSelected: Ember.computed(
        'active',
        function() {
            const active = this.get( 'active' );
            return active ? active : null;
        }
    ),

    hasEvents: Ember.computed(
        'events',
        function() {
            return !Ember.isEmpty( this.get( 'events' ) );
        }
    ),

    isToday: Ember.computed(
        'date',
        function() {
            return window.moment().isSame( this.get( 'date' ), 'day' );
        }
    ),

    tabIndex: Ember.computed(
        'focused',
        function() {
            return this.get( 'focused' ) ? 0 : null;
        }
    )

});
