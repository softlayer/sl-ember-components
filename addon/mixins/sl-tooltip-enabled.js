import Ember from 'ember';

/**
 * @module
 * @augments ember/Mixin
 */
export default Ember.Mixin.create({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    attributeBindings: [
        'data-toggle',
        'title'
    ],

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * 'data-toggle' attribute for use in template binding
     *
     * @type {?Boolean}
     */
    'data-toggle': null,

    /**
     * Title attribute
     *
     * Used as attribute in template binding by popover
     * Used as "data-original-title" attribute by tooltip
     *
     * @type {?String}
     */
    title: null,

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Enable the tooltip functionality, based on component's `popover` attribute
     *
     * @function
     * @returns {undefined}
     */
    enable: Ember.observer(
        'popover',
        'title',
        Ember.on(
            'didInsertElement',
            function() {
                Ember.assert(
                    'observer/tooltip.enable() expects the parameter "title" to be provided',
                    this.get( 'title' )
                );
                if ( this.get( 'popover' ) ) {
                    this.enablePopover();
                } else if ( this.get( 'title' ) ) {
                    this.enableTooltip();
                }
            }
        )
    ),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Enable popover
     *
     * @private
     * @function
     * @returns {undefined}
     */
    enablePopover() {
        Ember.assert(
            'method/enablePopover() expects the parameter "popover" to be a string',
            'string' === Ember.typeOf ( this.get( 'popover' ) )
        );

        let popover = this.get( 'popover' );

        // First-time rendering
        if ( 'undefined' === Ember.typeOf( this.$().attr( 'data-original-title' ) ) ) {
            this.set( 'data-toggle', 'popover' );

            this.$().popover({
                content: popover,
                placement: 'top'
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
     * @function
     * @returns {undefined}
     */
    enableTooltip() {
        Ember.assert(
            'method/enableTooltip() expects the parameter "title" to be a string',
            'string' === Ember.typeOf ( this.get( 'title' ) )
        );

        let title = this.get( 'title' );

        // First-time rendering
        if ( 'undefined' === Ember.typeOf( this.$().attr( 'data-original-title' ) ) ) {
            this.set( 'data-toggle', 'tooltip' );

            this.$().tooltip({
                container: 'body',
                title: title
            });

        // Reset title value
        } else {
            this.$().attr( 'data-original-title', title );
        }
    }

});
