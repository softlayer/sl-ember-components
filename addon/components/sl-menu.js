import Ember from 'ember';
import layout from '../templates/components/sl-menu';

/**
 * @module
 * @augments ember/Component
 * @augments ember/Evented
 */
export default Ember.Component.extend( Ember.Evented, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    classNameBindings: [
        'showingAll:show-all'
    ],

    /** @type {String[]} */
    classNames: [
        'sl-menu'
    ],

    /** @type {Object} */
    layout,

    /** @type {String} */
    tagName: 'div',

    // -------------------------------------------------------------------------
    // Actions

    /** @type {Object} */
    actions: {

        /**
         * Handle an action from a sub-menu item
         *
         * @function actions:handleAction
         * @param {String} actionName - The name of an action to pass up to the
         *        parent controller
         * @param {*} data - Any data to also pass up to the parent controller
         * @returns {undefined}
         */
        handleAction( actionName, data ) {
            this.sendAction( 'action', actionName, data );
        },

        /**
         * Trigger hiding all of the menu's sub-menus
         *
         * @function actions:hideAll
         * @returns {undefined}
         */
        hideAll() {
            this.hideAll();
        },

        /**
         * Trigger showing all the menu's sub-menus
         *
         * @function actions:showAll
         * @returns {undefined}
         */
        showAll() {
            this.showAll();
        }
    },

    // -------------------------------------------------------------------------
    // Events

    /**
     * mouseLeave event handler
     *
     * @function
     * @returns {undefined}
     */
    mouseLeave() {
        this.send( 'hideAll' );
    },

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether to show a menu item to display all sub-menus
     *
     * @type {Boolean}
     */
    allowShowAll: false,

    /**
     * The service used to setup listening for events
     *
     * @type {ember/Service}
     */
    eventService: Ember.inject.service( 'sl-event' ),

    /**
     * A definition object outlining the event bindings this component should be
     * listening for
     *
     * @type {?Object}
     */
    events: null,

    /**
     * The array of menu items
     *
     * @type {?Object[]}
     */
    items: null,

    /**
     * Whether to show all the menu's sub-items
     *
     * @type {Boolean}
     */
    showingAll: false,

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Setup the eventService event listeners
     *
     * @function
     * @returns {undefined}
     */
    setupListeners: Ember.on(
        'init',
        function() {
            let eventService = this.get( 'eventService' );
            let events = this.get( 'events' );

            if ( events.hasOwnProperty( 'hideAll' ) ) {
                eventService.listen( events.hideAll, this );
                this.on( events.hideAll, this.hideAll );
            }

            if ( events.hasOwnProperty( 'select' ) ) {
                eventService.listen( events.select, this );
                this.on( events.select, this.select );
            }

            if ( events.hasOwnProperty( 'selectDown' ) ) {
                eventService.listen( events.selectDown, this );
                this.on( events.selectDown, this.selectDown );
            }

            if ( events.hasOwnProperty( 'selectLeft' ) ) {
                eventService.listen( events.selectLeft, this );
                this.on( events.selectLeft, this.selectLeft );
            }

            if ( events.hasOwnProperty( 'selectRight' ) ) {
                eventService.listen( events.selectRight, this );
                this.on( events.selectRight, this.selectRight );
            }

            if ( events.hasOwnProperty( 'selectUp' ) ) {
                eventService.listen( events.selectUp, this );
                this.on( events.selectUp, this.selectUp );
            }

            if ( events.hasOwnProperty( 'showAll' ) ) {
                eventService.listen( events.showAll, this );
                this.on( events.showAll, this.showAll );
            }
        }
    ),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Hide all the menu's sub-menus
     *
     * @function
     * @returns {undefined}
     */
    hideAll() {
        this.set( 'showingAll', false );
    },

    /**
     * Select a child by its index
     *
     * @function
     * @returns {undefined}
     */
    select( childNumber ) {
        console.log( 'Selecting child', childNumber );
    },

    /**
     * Select a child from the current context
     *
     * @function
     * @returns {undefined}
     */
    selectDown() {
        console.log( 'Selecting down' );
    },

    /**
     * Select a left sibling from the current context
     *
     * @function
     * @returns {undefined}
     */
    selectLeft() {
        console.log( 'Selecting left' );
    },

    /**
     * Select a right sibling from the current context
     *
     * @function
     * @returns {undefined}
     */
    selectRight() {
        console.log( 'Selecting right' );
    },

    /**
     * Select a parent from the current context
     *
     * @function
     * @returns {undefined}
     */
    selectUp() {
        console.log( 'Selecting up' );
    },

    /**
     * Trigger the showAll sub menu-item
     *
     * @function
     * @returns {undefined}
     */
    showAll() {
        this.set( 'showingAll', true );
    }

});
