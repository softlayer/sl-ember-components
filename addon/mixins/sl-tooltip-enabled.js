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
    attributeBindings: [ 'data-toggle', 'title' ],

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * 'data-toggle' attribute for use in template binding
     *
     * @property {boolean} data-toggle
     * @default  null
     */
    'data-toggle': null,

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Enable the tooltip functionality, based on component's `title` attribute
     *
     * @function enableTooltip
     * @observes "didInsertElement" event, popover, title
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
                content   : popoverContent,
                placement : 'top'
            });
        } else {

            // Reset title value
            if ( undefined !== this.$().attr( 'data-original-title' ) ) {
                this.$().attr( 'data-original-title', title );

            // First-time rendering
            } else {

                this.set( 'data-toggle', 'tooltip' );

                this.$().tooltip({
                    container : 'body',
                    title     : title
                });
            }
        }
    }.observes( 'popover', 'title' ).on( 'didInsertElement' )

    // -------------------------------------------------------------------------
    // Methods

});
