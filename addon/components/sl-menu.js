import Ember from 'ember';
import StreamEnabled from 'ember-stream/mixins/stream-enabled';
import layout from '../templates/components/sl-menu';
import { warn } from '../utils/all';

/**
 * @module
 * @augments ember/Component
 * @augments ember-stream/mixins/stream-enabled
 */
export default Ember.Component.extend( StreamEnabled, {

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

    /**
     * mouseMove event handler
     *
     * @function
     * returns {undefined}
     */
    mouseMove() {
        this.clearSelections();
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
     * The array of menu items
     *
     * @type {?Object[]}
     */
    items: null,

    /**
     * An array of objects containing data about the selected states
     *
     * @private
     * @type {?ember/Array}
     */
    selections: null,

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
     * Initialize any computed properties that need setup
     *
     * @function
     * @returns {undefined}
     */
    initialize: Ember.on(
        'init',
        function() {
            this.set( 'selections', new Ember.A() );
        }
    ),

    /**
     * Setup the stream actions bindings
     *
     * @function
     * @returns {undefined}
     */
    setupStreamActions: Ember.on(
        'init',
        function() {
            const stream = this.get( 'stream' );

            if ( !stream ) {
                return;
            }

            stream.on( 'doAction', () => {
                this.doAction();
            });

            stream.on( 'hideAll', () => {
                this.hideAll();
            });

            stream.on( 'select', ( index ) => {
                this.select( index );
            });

            stream.on( 'selectDown', () => {
                this.selectDown();
            });

            stream.on( 'selectLeft', () => {
                this.selectLeft();
            });

            stream.on( 'selectNext', () => {
                this.selectNext();
            });

            stream.on( 'selectParent', () => {
                this.selectParent();
            });

            stream.on( 'selectPrevious', () => {
                this.selectPrevious();
            });

            stream.on( 'selectRight', () => {
                this.selectRight();
            });

            stream.on( 'selectSubMenu', () => {
                this.selectSubMenu();
            });

            stream.on( 'selectUp', () => {
                this.selectUp();
            });

            stream.on( 'showAll', () => {
                this.showAll();
            });
        }
    ),

    /**
     * Retrieve the currently selected item
     *
     * @function
     * @returns {?Object}
     */
    selectedItem: Ember.computed(
        'selections.@each.item',
        function() {
            const lastItem = this.get( 'selections.lastObject.item' );

            return lastItem ? lastItem : null;
        }
    ),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Clear the `selections` data
     *
     * @function
     * @returns {undefined}
     */
    clearSelections() {
        const selections = this.get( 'selections' );

        selections.forEach( ( selection ) => {
            Ember.set( selection.item, 'selected', false );
        });

        this.set( 'selections', new Ember.A() );
    },

    /**
     * Perform the currently selected item's `action`
     *
     * @function
     * @returns {undefined}
     */
    doAction() {
        const selectedItem = this.get( 'selectedItem' );

        if ( selectedItem ) {
            const action = Ember.get( selectedItem, 'action' );

            if ( action ) {
                this.sendAction( 'action', action, Ember.get( selectedItem, 'data' ) );
            }
        }
    },

    /**
     * Hide all the menu's sub-menus
     *
     * @function
     * @returns {undefined}
     */
    hideAll() {
        this.set( 'showingAll', false );
        this.clearSelections();
    },

    /**
     * Select an item by its index in the current selection context
     *
     * @function
     * @param {Number} index - The index of the item to select
     * @throws {ember/Error}
     * @returns {undefined}
     */
    select( index ) {
        if ( this.get( 'showingAll' ) ) {
            this.hideAll();
        }

        const selections = this.get( 'selections' );
        const selectionsLength = selections.length;
        let item;

        if ( selectionsLength > 0 ) {
            const selection = selections.objectAt( selectionsLength - 1 );

            if ( !selection ) {
                throw new Ember.Error( 'Current selection is undefined' );
            }

            const contextItems = selectionsLength > 1 ?
                Ember.get( selection, 'items' ) :
                this.get( 'items' );

            const currentItem = Ember.get( selection, 'item' );

            if ( !currentItem ) {
                throw new Ember.Error( 'Current item is undefined' );
            }

            item = contextItems.objectAt( index );

            if ( !item ) {
                return;
            }

            Ember.set( currentItem, 'selected', false );
            Ember.set( item, 'selected', true );
            Ember.setProperties( selection, { index, item });
        } else {
            const items = this.get( 'items' );

            if ( !items ) {
                throw new Ember.Error( 'Component `items` is undefined' );
            }

            if ( items.length > 0 && index < items.length ) {
                item = items[ index ];

                Ember.set( item, 'selected', true );
                selections.pushObject({ index, item, items });
            }
        }
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
     * @returns {undefined}
     */
    selectDown() {
        const selectionsLength = this.get( 'selections' ).length;

        if ( 1 === selectionsLength ) {
            this.selectSubMenu();
        } else if ( selectionsLength > 1 ) {
            this.selectNext();
        } else {
            this.select( 0 );
        }
    },

    /**
     * Select a menu item in the "left" direction
     *
     * At the top-level of the menu, "left" corresponds to selecting the
     * previous sibling menu item.
     * Inside a sub-menu, "left" corresponds to parsing back to the parent item
     *
     * @function
     * @returns {undefined}
     */
    selectLeft() {
        const selectionsLength = this.get( 'selections' ).length;

        if ( 1 === selectionsLength || this.get( 'showingAll' ) ) {
            this.selectPrevious();
        } else if ( selectionsLength > 1 ) {
            this.selectParent();
        }
    },

    /**
     * Select the next sibling in the current context
     *
     * @function
     * @throws {ember/Error}
     * @returns {undefined}
     */
    selectNext() {
        const selections = this.get( 'selections' );

        // Select the first item from `items` if nothing is currently selected
        if ( selections.length < 1 ) {
            if ( this.get( 'showingAll' ) ) {
                this.hideAll();
            }

            this.select( 0 );
            return;
        }

        const selection = selections.objectAt( selections.length - 1 );
        const currentItems = Ember.get( selection, 'items' );

        if ( !currentItems ) {
            throw new Ember.Error( 'Current selection items are undefined' );
        }

        const currentIndex = Ember.get( selection, 'index' );

        if ( 'number' !== Ember.typeOf( currentIndex ) ) {
            throw new Ember.Error( 'Current index is not valid' );
        }

        // Select the "show all" option if we're on the last context item at the
        // top level, and the `allowShowAll` is enabled
        if (
            1 === selections.length &&
            currentItems.length - 1 === currentIndex &&
            this.get( 'allowShowAll' )
        ) {
            this.clearSelections();
            this.showAll();
            return;
        }

        const currentItem = Ember.get( selection, 'item' );

        if ( !currentItem ) {
            throw new Ember.Error( 'Current item is undefined' );
        }

        let newIndex = currentIndex + 1;

        if ( newIndex >= currentItems.length ) {
            newIndex -= currentItems.length;
        }

        const item = currentItems[ newIndex ];

        if ( !item ) {
            throw new Ember.Error( `Item with index ${newIndex} is undefined` );
        }

        Ember.set( currentItem, 'selected', false );
        Ember.set( item, 'selected', true );

        Ember.setProperties( selection, {
            index: newIndex,
            item
        });
    },

    /**
     * Select the parent menu from the current context
     *
     * @function
     * @throws {ember/Error}
     * @returns {undefined}
     */
    selectParent() {
        const selections = this.get( 'selections' );

        if ( selections.length <= 1 ) {
            warn( '`selectParent` triggered with no parent context' );
        }

        const currentItem = Ember.get( selections.popObject(), 'item' );

        if ( !currentItem ) {
            throw new Ember.Error( 'Invalid last menu item' );
        }

        Ember.set( currentItem, 'selected', false );
    },

    /**
     * Select the previous sibling in the current context
     *
     * @function
     * @throws {ember/Error}
     * @returns {undefined}
     */
    selectPrevious() {
        const selections = this.get( 'selections' );

        // Check if we're at the top-level context
        if ( selections.length < 1 ) {
            // Trigger "show all" if allowed to
            if ( this.get( 'allowShowAll' ) && !this.get( 'showingAll' ) ) {
                this.showAll();
            } else {
                // Otherwise, select the last item in the context
                this.hideAll();
                this.select( this.get( 'items' ).length - 1 );
            }

            return;
        }

        const selection = selections.objectAt( selections.length - 1 );
        const currentItems = Ember.get( selection, 'items' );

        if ( !currentItems ) {
            throw new Ember.Error( 'Current items are undefined' );
        }

        // Select the "show all" option when at the beginning of the top-level
        // and `allowShowAll` is enabled
        if (
            1 === selections.length &&
            0 === selection.index &&
            this.get( 'allowShowAll' )
        ) {
            this.clearSelections();
            this.showAll();
            return;
        }

        if ( currentItems.length < 2 ) {
            warn( '`selectPrevious` triggered with no siblings in context' );
            return;
        }

        const currentIndex = Ember.get( selection, 'index' );

        if ( 'number' !== Ember.typeOf( currentIndex ) ) {
            throw new Ember.Error( 'Current index is not valid' );
        }

        const currentItem = Ember.get( selection, 'item' );

        if ( !currentItem ) {
            throw new Ember.Error( 'Current item is undefined' );
        }

        let newIndex = currentIndex - 1;

        if ( newIndex < 0 ) {
            newIndex += currentItems.length;
        }

        const item = currentItems[ newIndex ];

        if ( !item ) {
            throw new Ember.Error( `Item with index ${newIndex} is undefined` );
        }

        Ember.set( currentItem, 'selected', false );
        Ember.set( item, 'selected', true );

        Ember.setProperties( selection, {
            index: newIndex,
            item
        });
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
     * @throws {ember/Error}
     * @returns {undefined}
     */
    selectRight() {
        const selections = this.get( 'selections' );

        if ( 1 === selections.length || this.get( 'showingAll' ) ) {
            this.selectNext();
        } else if ( selections.length > 1 ) {
            this.selectSubMenu();
        }
    },

    /**
     * Select the sub-menu in the current context
     *
     * @function
     * @throws {ember/Error}
     * @returns {undefined}
     */
    selectSubMenu() {
        const selections = this.get( 'selections' );

        if ( selections.length < 1 ) {
            return;
        }

        const selection = selections.get( selections.length - 1 );

        if ( !selection ) {
            throw new Ember.Error( 'Last item of `selection` is invalid' );
        }

        const currentItem = Ember.get( selection, 'item' );

        if ( !currentItem ) {
            throw new Ember.Error( 'Last selection menu item is invalid' );
        }

        const items = Ember.get( currentItem, 'items' );

        if ( !items ) {
            return;
        }

        const index = 0;
        const item = items[ index ];

        if ( !item ) {
            throw new Ember.Error( 'First item in selected sub-menu is undefined' );
        }

        Ember.set( item, 'selected', true );

        selections.pushObject({
            index,
            item,
            items
        });
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
     * @throws {ember/Error}
     * @returns {undefined}
     */
    selectUp() {
        const selections = this.get( 'selections' );
        const selectionsLength = selections.length;

        // Do nothing if there is no parent context
        if ( selectionsLength < 2 ) {
            return;
        }

        // Check if the selection is in a first-level sub-menu
        if ( 2 === selectionsLength ) {
            const selection = selections.get( 1 );

            if ( 0 === Ember.get( selection, 'index' ) ) {
                this.selectParent();
                return;
            }
        }

        // In any other sub-menu level, cycle through siblings
        this.selectPrevious();
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
