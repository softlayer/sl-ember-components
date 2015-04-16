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
    enable: Ember.observer( 'popover', 'title',
        Ember.on( 'didInsertElement', function() {
            if ( this.get( 'popover' ) ) {
                this.enablePopover();
            } else if ( this.get( 'title' ) ) {
                this.enableTooltip();
            }
        })
    ),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Enable popover
     *
     * @private
     * @function enablePopover
     * @returns  {void}
     */
    enablePopover() {
        var popover = this.get( 'popover' );

        // First-time rendering
        if ( 'undefined' === typeof this.$().attr( 'data-original-title' ) ) {
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
    enableTooltip() {
        var title = this.get( 'title' );

        // First-time rendering
        if ( 'undefined' === typeof this.$().attr( 'data-original-title' ) ) {
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
