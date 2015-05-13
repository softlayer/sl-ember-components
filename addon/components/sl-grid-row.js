import Ember from 'ember';

/**
 * @module components
 * @class sl-grid-row
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    classNameBindings: [ 'row.active:active' ],

    tagName: 'tr',

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

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
     * @property {?Object} row
     * @default null
     */
    row: null

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
