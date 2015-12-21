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
     * initialize
     *
     * @function
     * @returns {undefined}
     */
    init: function() {
        this._super( ...arguments );
        this.setInputId();
    },

    /**
     * Set unique inputId that will be set on label and input element
     *
     * @function
     * @returns {undefined}
     */
    setInputId: function() {
        if ( !this.get( 'inputId' ) ) {
            this.set( 'inputId', this.get( 'elementId' ) + '-input' );
        }
    }

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

});
