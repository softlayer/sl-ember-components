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

    /**
     * Title attribute
     *
     * Used as attribute in template binding by popover
     * Used as "data-original-title" attribute by tooltip
     *
     * @property {Ember.String} title
     * @default  null
     */
    title: null,

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Enable the tooltip functionality, based on component's `popover` attribute
     *
     * @function enableTooltip
     * @observes "didInsertElement" event, popover, title
     * @throws   {Ember.assert}
     * @returns  {void}
     */
    enable: function() {
        Ember.assert( '"title" property must be provided to use "sl-tooltip-enabled" mixin', this.get( 'title' ) );

        if ( this.get( 'popover' ) ) {
            this.enablePopover();
        } else {
            this.enableTooltip();
        }
    }.observes( 'popover', 'title' ).on( 'didInsertElement' ),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Enable popover
     *
     * @private
     * @function enablePopover
     * @returns  {void}
     */
    enablePopover: function() {
        var popover = this.get( 'popover' );

        // First-time rendering
        if ( undefined === this.$().attr( 'data-original-title' ) ) {
            this.set( 'data-toggle', 'popover' );

            this.$().popover({
                content   : popover,
                placement : 'top'
            });

        // Reset title value
        } else {
            this.$().attr( 'data-original-title', this.get( 'title' ) );
            this.$().attr( 'data-content', popover );
        }
    },

    /**
     * Enable tooltip
     *
     * @private
     * @function enableTooltip
     * @returns  {void}
     */
    enableTooltip: function() {
        var title = this.get( 'title' );

        // First-time rendering
        if ( undefined === this.$().attr( 'data-original-title' ) ) {
            this.set( 'data-toggle', 'tooltip' );

            this.$().tooltip({
                container : 'body',
                title     : title
            });

        // Reset title value
        } else {
            this.$().attr( 'data-original-title', title );
        }
    }
});
