import Ember from 'ember';

/**
 * @module mixins
 * @class  sl-tooltip-enabled
 */
export default Ember.Mixin.create({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * Attribute bindings for the tooltip-based component
     *
     * @property {Ember.Array} attributeBindings
     */
    attributeBindings: [ 'title' ],

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Enable the tooltip functionality, based on component's `title` attribute
     *
     * @function enableTooltip
     * @observes popover, title, "didInsertElement" event
     * @returns  {void}
     */
    enableTooltip: function() {
        var popoverContent = this.get( 'popover' ),
            title          = this.get( 'title' );

        if ( !title ) {
            return;
        }

        if ( popoverContent ) {
            this.set( 'data-toggle', 'popover' );
            this.$().popover({
                content: popoverContent,
                placement: 'top'
            });
        } else {
            this.set( 'data-toggle', 'tooltip' );
            this.$().tooltip({
                container: 'body',
                title: title
            });
        }
    }.observes( 'popover', 'title' ).on( 'didInsertElement' )

    // -------------------------------------------------------------------------
    // Methods

});
