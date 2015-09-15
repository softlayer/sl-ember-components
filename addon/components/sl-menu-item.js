import Ember from 'ember';
import layout from '../templates/components/sl-menu-item';

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
        'hasSubItems:has-sub-menu',
        'item.selected:active'
    ],

    /** @type {String[]} */
    classNames: [
        'sl-menu-item'
    ],

    /** @type {Object} */
    layout,

    /** @type {String} */
    tagName: 'li',

    // -------------------------------------------------------------------------
    // Actions

    /** @type {Object} */
    actions: {

        /**
         * Click event handler
         *
         * @function actions:clickLink
         * @returns {undefined}
         */
        clickLink() {
            const action = this.get( 'item.action' );

            if ( action ) {
                this.sendAction( 'action', action, this.get( 'item.data' ) );
            }
        },

        /**
         * Handle sub menu item actions
         *
         * @function actions:handleAction
         * @param {String} actionName - The name of an action to pass
         * @param {*} data - Any data to also pass
         * @returns {undefined}
         */
        handleAction( actionName, data ) {
            this.sendAction( 'action', actionName, data );
        }
    },

    // -------------------------------------------------------------------------
    // Events

    /**
     * mouseEnter event handler
     *
     * @function
     * @returns {undefined}
     */
    mouseEnter() {
        this.set( 'active', true );
    },

    /**
     * mouseLeave event handler
     *
     * @function
     * @returns {undefined}
     */
    mouseLeave() {
        this.set( 'active', false );
    },

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether the menu item is currently active
     *
     * @type {Boolean}
     */
    active: false,

    /**
     * The menu item object
     *
     * @type {?Object}
     */
    item: null,

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Whether or not the `item` has a sub-array of items
     *
     * @function
     * @returns {Boolean} - True if the item has sub-items
     */
    hasSubItems: Ember.computed(
        'item',
        function() {
            return !Ember.isEmpty( this.get( 'item.items' ) );
        }
    ),

    /**
     * Wrap the item's items array as an Ember.Array
     *
     * @function
     * @returns {?ember/Array}
     */
    subItems: Ember.computed(
        'item',
        function() {
            const subItems = this.get( 'item.items' );
            let items = null;

            if ( subItems ) {
                items = new Ember.A( subItems );
            }

            return items;
        }
    )

    // -------------------------------------------------------------------------
    // Methods

});
