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
     * @listens didInsertElement
     * @returns {undefined}
     */
    enable: Ember.observer(
        'popover',
        'title',
        Ember.on(
            'didInsertElement',
            function() {
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
     * @function
     * @returns {undefined}
     */
    enablePopover() {
        var popover = this.get( 'popover' );

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
     * @function
     * @returns {undefined}
     */
    enableTooltip() {
        var title = this.get( 'title' );

        // First-time rendering
        if ( 'undefined' === typeof this.$().attr( 'data-original-title' ) ) {
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
