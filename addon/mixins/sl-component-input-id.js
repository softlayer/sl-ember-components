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

    /**
     * init event hook
     *
     * @function
     * @returns {undefined}
     */
    init: function() {
        this._super( ...arguments );
        this.setInputId();
    },

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Unique input id that a component can assign to an input
     * and a label's for attribute
     *
     * @type {?String}
     */
    inputId: null,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Set unique inputId that will be set on label and input element
     *
     * @private
     * @function
     * @returns {undefined}
     */
    setInputId: function() {
        if ( !this.get( 'inputId' ) ) {
            this.set( 'inputId', this.get( 'elementId' ) + '-input' );
        }
    }
});
