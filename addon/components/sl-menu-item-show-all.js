import SlMenuItem from './sl-menu-item';
import layout from '../templates/components/sl-menu-item-show-all';

/**
 * @module
 * @augments module:components/sl-button
 */
export default SlMenuItem.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    classNames: [
        'btn',
        'btn-default'
    ],

    /** @type {Object} */
    layout,

    // -------------------------------------------------------------------------
    // Actions

        /** @type {Object} */
    actions: {

        /**
         * Click event handler
         *
         * @function actions:click
         * @returns {undefined}
         */
        click() {}

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
        this.sendAction( 'onMouseEnter' );
    }

    // -------------------------------------------------------------------------
    // Properties

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
