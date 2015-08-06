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
        'dataToggle:data-toggle',
        'dataTrigger:data-trigger',
        'title'
    ],

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * dataToggle property
     *
     * @type {?String}
     */
    dataToggle: null,

    /**
     * dataTrigger property
     *
     * How the tooltip/popover is triggered - click | hover | focus.
     * You may pass multiple triggers; separate them with a space.
     *
     * @type {String}
     */
    dataTrigger: null,

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
     * Enable the tooltip functionality, based on component's
     * `popover` attribute or component's `title` attribute
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
        const popover = this.get( 'popover' );
        const originalTitle = this.$().attr( 'data-original-title' );

        // First-time rendering
        if ( 'undefined' === Ember.typeOf( originalTitle ) ) {
            this.set( 'dataToggle', 'popover' );

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
        const title = this.get( 'title' );
        const originalTitle = this.$().attr( 'data-original-title' );

        // First-time rendering
        if ( 'undefined' === Ember.typeOf( originalTitle ) ) {
            this.set( 'dataToggle', 'tooltip' );

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
