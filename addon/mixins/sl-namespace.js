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
    // Methods

    /**
     * Namespace component events by elementId
     *
     * @function
     * @returns {String}
     */
    namespaceEvent( eventName ) {
        return `${ eventName }.${ this.get( 'elementId' ) }`;
    }
});
