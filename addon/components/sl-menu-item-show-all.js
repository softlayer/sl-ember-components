import Ember from 'ember';
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
        'show-all'
    ],

    /** @type {Object} */
    layout,

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    /**
     * mouseEnter event handler
     *
     * @function
     * @returns {undefined}
     */
    handleMouseEnter: Ember.on(
        'mouseEnter',
        function() {
            this.sendAction( 'onMouseEnter' );
        }
    )

    // -------------------------------------------------------------------------
    // Properties

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
