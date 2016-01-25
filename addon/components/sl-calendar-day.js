import Ember from 'ember';
//import layout from '../templates/components/sl-calendar-day';

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
        'restricted:disabled'
    ],

    /** @type {String[]} */
    classNames: [
        'day'
    ],

    /** @type {Object} */
    //layout,

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
        //if ( !this.get( 'restricted' ) ) {
            this.sendAction( 'action', date, content );
        //}
        //}
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

    focused: false,

    ariaRole: 'gridcell',

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
