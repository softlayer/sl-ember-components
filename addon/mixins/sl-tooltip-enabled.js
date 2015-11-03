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
                if ( this.get( 'popover' ) && !this.get( 'title' ) ) {
                    throw new Ember.Error( '"title" property must be set' );
                }

                if ( this.get( 'title' ) && !this.get( 'popover' ) ) {
                    if ( 'string' !== Ember.typeOf( this.get( 'title' ) ) ) {
                        throw new Ember.Error( 'enableTooltip() expect the parameter "title" to be type string' );
                    }
                    this.enableTooltip();
                }

                if ( this.get( 'popover' ) && this.get( 'title' ) ) {
                    if ( 'string' !== Ember.typeOf( this.get( 'popover' ) ) &&
                         'string' !== Ember.typeOf( this.get( 'title' ) ) ) {
                        throw new Ember.Error(
                            'enablePopover() expects the parameter "popover" and "title" to be of type string'
                        );
                    }
                    this.enablePopover();
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
            this.$().popover({
                content: popover,
                placement: 'top'
            });

        // Reset title value
        } else {
            this.$().attr( 'data-original-title', this.get( 'title' ) );
            this.$().attr( 'data-content', popover );
        }
        return true;
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
            this.$().tooltip({
                container: 'body',
                title: title
            });

        // Reset title value
        } else {
            this.$().attr( 'data-original-title', title );
        }
        return true;
    }

});
