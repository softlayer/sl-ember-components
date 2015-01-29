import Ember from 'ember';

/**
 * @module views
 * @class  sl-split-grid-row
 */
export default Ember.View.extend( Ember.ViewTargetActionSupport, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * The HTML tag name for the view element
     *
     * @property {string} tagName
     * @default  "tr"
     */
    tagName: 'tr',

    /**
     * Class name bindings for the view element
     *
     * @property {array} classNameBindings
     */
    classNameBindings: [ 'content.active:active' ],

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    /**
     * Handle the click event for the row
     *
     * @function click
     * @param    {event} event - The raw click event
     * @returns  {void}
     */
    click: function( event ) {
        if ( this.$( event.target ).closest( '.sl-drop-button' ).length < 1 ) {
            this.triggerAction({
                action        : 'openDetailsPane',
                actionContext : this.get( 'content' ),
                target        : this.get( 'parentController' )
            });
        }
    },

    // -------------------------------------------------------------------------
    // Properties

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
