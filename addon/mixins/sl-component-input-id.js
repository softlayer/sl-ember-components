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

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Set unique inputId that will be set on label and input element
     *
     * @function
     * @returns {undefined}
     */
    setInputId: Ember.on(
        'init',
        function() {
            if ( !this.get( 'inputId' ) ) {
                this.set( 'inputId', this.get( 'elementId' ) + '-input' );
            }
        }
    )

    // -------------------------------------------------------------------------
    // Methods

});
