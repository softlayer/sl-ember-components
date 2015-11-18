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
    classNameBindings: [
        'row.active:active'
    ],

    /** @type {String[]} */
    classNames: [
        'sl-grid-row'
    ],

    /** @type {String} */
    tagName: 'tr',

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    /**
     * @function
     * @param {Event} event - The raw click event
     * @returns {undefined}
     */
    click( event ) {
        if ( this.$( event.target ).closest( '.sl-drop-button' ).length < 1 ) {
            this.sendAction( 'rowClick', this.get( 'row' ) );
        }
    },

    // -------------------------------------------------------------------------
    // Properties

    /**
     * The row record model instance
     *
     * @type {?Object}
     */
    row: null

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
