import Ember from 'ember';
import layout from '../templates/components/sl-menu';

function error( message ) {
    window.console.error( message );
    return false;
}

/**
 * @module
 * @augments ember/Component
 * @augments ember/Evented
 */
export default Ember.Component.extend({

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
     * @private
     * @type {ember/Service}
     */
    eventService: Ember.inject.service( 'sl-event' ),

    /**
     * A definition object outlining the event bindings this component should be
     * listening for
     *
     * Relevant event names include:
     * - hideAll
     * - select (accepts an id argument)
     * - selectDown
     * - selectNext
     * - selectPrevious
     * - selectUp
     * - showAll
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
     * An of objects containing data about the selected states
     *
     * @private
     * @type {ember/NativeArray}
     */
    selections: Ember.A(),

    /**
     * Whether to show all the menu's sub-items
     *
     * @private
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
            let events = this.get( 'events' );

            if ( events.hasOwnProperty( 'hideAll' ) ) {
                this.listenOnService( events.hideAll, this.hideAll );
            }

            if ( events.hasOwnProperty( 'select' ) ) {
                this.listenOnService( events.select, this.select );
            }

            if ( events.hasOwnProperty( 'selectDown' ) ) {
                this.listenOnService( events.selectDown, this.selectDown );
            }

            if ( events.hasOwnProperty( 'selectLeft' ) ) {
                this.listenOnService( events.selectLeft, this.selectLeft );
            }

            if ( events.hasOwnProperty( 'selectNext' ) ) {
                this.listenOnService( events.selectNext, this.selectNext );
            }

            if ( events.hasOwnProperty( 'selectPrevious' ) ) {
                this.listenOnService(
                    events.selectPrevious,
                    this.selectPrevious
                );
            }

            if ( events.hasOwnProperty( 'selectRight' ) ) {
                this.listenOnService( events.selectRight, this.selectRight );
            }

            if ( events.hasOwnProperty( 'selectSubMenu' ) ) {
                this.listenOnService( events.selectSubMenu, this.selectSubMenu );
            }

            if ( events.hasOwnProperty( 'selectUp' ) ) {
                this.listenOnService( events.selectUp, this.selectUp );
            }

            if ( events.hasOwnProperty( 'showAll' ) ) {
                this.listenOnService( events.showAll, this.showAll );
            }
        }
    ),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Clear the `selection` data
     *
     * @function
     * @returns {Boolean} - Whether any valid action was taken successfully
     * @returns {Boolean} - True unless an error state is detected
     */
    clearSelection() {
        let selections = this.get( 'selections' );

        for ( let selection of selections ) {
            Ember.set( selection.item, 'selected', false );
        }

        this.set( 'selection', null );

        return true;
    },

    /**
     * Hide all the menu's sub-menus
     *
     * @function
     * @returns {undefined}
     */
    hideAll() {
        this.clearSelection();
        this.set( 'showingAll', false );
    },

    /**
     * Attach listener on eventService and setup event-triggered binding
     *
     * @function
     * @param {String} eventName - The name of the event to listen for
     * @param {Function} handler - A function to call when the event is triggered
     * @returns {undefined}
     */
    listenOnService( eventName, handler ) {
        this.get( 'eventService' ).listen( eventName, this );
        this.on( eventName, handler );
    },

    /**
     * Select an item by its index in the current selection context
     *
     * @function
     * @param {Number} index - The index of the item to select
     * @returns {Boolean} - Whether any valid action was taken successfully
     * @returns {Boolean} - True unless an error state is detected
     */
    select( index ) {
        let selections = this.get( 'selections' );
        let selectionsLength = selections.length;

        if ( selectionsLength > 0 ) {
            let currentSelection = selections.objectAt( selectionsLength - 1 );

            if ( !currentSelection ) {
                return error( 'Current selection is undefined' );
            }

            let currentItems = Ember.get( currentSelection, 'items' );

            if ( !currentItems ) {
                return error( 'Current items array is undefined' );
            }

            let currentItem = Ember.get( currentSelection, 'item' );

            if ( !currentItem ) {
                return error( 'Current item is undefined' );
            }

            let item = currentItems.objectAt( index );

            if ( !item ) {
                return error( `Item at index ${index} is undefined` );
            }

            Ember.set( currentItem, 'selected', false );
            Ember.set( item, 'selected', true );
            Ember.setProperties( currentSelection, {
                index,
                item
            });
        } else {
            let items = this.get( 'items' );

            if ( !items ) {
                return error( 'Component `items` is undefined' );
            }

            if ( items.length > 0 ) {
                let item = items.get( 0 );

                Ember.set( item, 'selected', true );

                selections.pushObject({
                    index: 0,
                    item,
                    items
                });
            }
        }

        return true;
    },

    /**
     * Select a menu item in the "down" direction
     *
     * At the top-level of the menu, "down" corresponds to opening and selecting
     * the first child in its sub-menu.
     * Inside a sub-menu, "down" corresponds to selecting the next sibling
     * menu item.
     *
     * @function
     * @returns {Boolean} - True unless an error state is detected
     */
    selectDown() {
        let selectionsLength = this.get( 'selections' ).length;

        if ( selectionsLength === 1 ) {
            return this.selectSubMenu();
        }

        if ( selectionsLength > 1 ) {
            return this.selectNext();
        }

        return this.select( 0 );
    },

    /**
     * Select a menu item in the "left" direction
     *
     * At the top-level of the menu, "left" corresponds to selecting the previous
     * sibling menu item.
     * Inside a sub-menu, "left" corresponds to parsing back to the parent item
     *
     * @function
     * @returns {Boolean} - Whether any valid action was taken successfully
     * @returns {Boolean} - True unless an error state is detected
     */
    selectLeft() {
        let selectionsLength = this.get( 'selections' ).length;

        if ( selectionsLength === 1 ) {
            return this.selectPrevious();
        }

        if ( selectionsLength > 1 ) {
            return this.selectParent();
        }

        return true;
    },

    /**
     * Select the next sibling in the current context
     *
     * @function
     * @returns {Boolean} - Whether any valid action was taken successfully
     * @returns {Boolean} - True unless an error state is detected
     */
    selectNext() {
        let selections = this.get( 'selections' );

        if ( selections.length < 1 ) {
            return true;
        }

        let selection = selections.objectAt( selections.length - 1 );
        let currentItems = Ember.get( selection, 'items' );

        if ( !currentItems ) {
            return error( 'Current items are undefined' );
        }

        if ( currentItems.length < 2 ) {
            return true;
        }

        let currentIndex = Ember.get( selection, 'index' );

        if ( Ember.typeOf( currentIndex ) !== 'number' ) {
            return error( 'Current index is not valid' );
        }

        let currentItem = Ember.get( selection, 'item' );

        if ( !currentItem ) {
            return error( 'Current item is undefined' );
        }

        let newIndex = currentIndex + 1;

        if ( newIndex >= currentItems.length ) {
            newIndex -= currentItems.length;
        }

        let item = currentItems.get( newIndex );

        if ( !item ) {
            return error( `Item with index ${newIndex} is undefined` );
        }

        Ember.set( currentItem, 'selected', false );
        Ember.set( item, 'selected', true );

        Ember.setProperties( selection, {
            index: newIndex,
            item
        });

        return true;
    },

    /**
     * Select the parent menu from the current context
     *
     * @function
     * @returns {Boolean} - True unless an error state is detected
     */
    selectParent() {
        let selections = this.get( 'selections' );

        if ( selections.length <= 1 ) {
            return true;
        }

        let currentItem = Ember.get( selections.popObject(), 'item' );

        if ( !currentItem ) {
            return error( 'Invalid last menu item' );
        }

        Ember.set( currentItem, 'selected', false );

        return true;
    },

    /**
     * Select the previous sibling in the current context
     *
     * @function
     * @returns {Boolean} - True unless an error state is detected
     */
    selectPrevious() {
        let selections = this.get( 'selections' );

        if ( selections.length < 1 ) {
            return true;
        }

        let selection = selections.objectAt( selections.length - 1 );
        let currentItems = Ember.get( selection, 'items' );

        if ( !currentItems ) {
            return error( 'Current items are undefined' );
        }

        if ( currentItems.length < 2 ) {
            return true;
        }

        let currentIndex = Ember.get( selection, 'index' );

        if ( Ember.typeOf( currentIndex ) !== 'number' ) {
            return error( 'Current index is not valid' );
        }

        let currentItem = Ember.get( selection, 'item' );

        if ( !currentItem ) {
            return error( 'Current item is undefined' );
        }

        let newIndex = currentIndex - 1;

        if ( newIndex < 0 ) {
            newIndex += currentItems.length;
        }

        let item = currentItems.get( newIndex );

        if ( !item ) {
            return error( `Item with index ${newIndex} is undefined` );
        }

        Ember.set( currentItem, 'selected', false );
        Ember.set( item, 'selected', true );

        Ember.setProperties( selection, {
            index: newIndex,
            item
        });

        return true;
    },

    /**
     * Select a menu item in the "right" direction
     *
     * When at the top-level of the menu, "right" corresponds to the next
     * sibling item.
     * When inside a sub-menu, "right" corresponds to entering its sub-menu, if
     * it has one.
     *
     * @function
     * @returns {Boolean} - True unless an error state is detected
     */
    selectRight() {
        let selections = this.get( 'selections' );

        if ( selections.length === 1 ) {
            return this.selectNext();
        }

        if ( selections.length > 1 ) {
            return this.selectSubMenu();
        }

        return true;
    },

    /**
     * Select the sub-menu in the current context
     *
     * @function
     * @returns {Boolean} - True unless an error state is detected
     */
    selectSubMenu() {
        let selections = this.get( 'selections' );

        if ( selections.length < 1 ) {
            return true;
        }

        let selection = selections.get( selections.length - 1 );

        if ( !selection ) {
            return error( 'Last item of `selection` is invalid' );
        }

        let currentItem = Ember.get( selection, 'item' );

        if ( !currentItem ) {
            return error( 'Last selection menu item is invalid' );
        }

        let items = Ember.get( currentItem, 'items' );

        if ( !items ) {
            return true;
        }

        let index = 0;
        let item = items.get( 0 );

        if ( !item ) {
            return error( 'First item in selected sub-menu is undefined' );
        }

        Ember.set( item, 'selected', true );

        selections.pushObject({
            index,
            item,
            items
        });

        return true;
    },

    /**
     * Select a menu item in the "up" direction
     *
     * When at the top level, "up" corresponds to no action.
     * When in the first sub-menu and on the first item, "up" corresponds to
     * selecting the top level.
     * When in any other sub-menu, "up" corresponds to selecting the previous
     * sibling menu item.
     *
     * @function
     * @returns {Boolean} - True unless an error state is detected
     */
    selectUp() {
        let selections = this.get( 'selections' );
        let selectionsLength = selections.length;

        if ( selectionsLength < 1 ) {
            return true;
        }

        if ( selectionsLength === 2 ) {
            let selection = selections.get( 1 );

            if ( Ember.get( selection, 'index' ) === 0 ) {
                return this.selectParent();
            }
        }

        return this.selectPrevious();
    },

    /**
     * Trigger the showAll menu-item
     *
     * @function
     * @returns {undefined}
     */
    showAll() {
        this.set( 'showingAll', true );
    }

});
