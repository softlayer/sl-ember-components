import Ember from 'ember';

/**
 * @module
 * @augments ember/Service
 */
export default Ember.Service.extend({

    /**
     * Object used to store modal references
     *
     * @type {Object}
     */
    modals: {},

    /**
     * Find modal by name
     *
     * @function
     * @param {String} name - The unique name of the component to find
     * @returns {ember/Component|undefined}
     */
    find( name ) {
       return this.get( `modals.${name}` );
    },


    /**
     * Register a modal component
     *
     * @function
     * @param {ember/Component} modal
     * @throws {ember.assert} Thrown if a modal with the same name has already been registered.
     * @returns {undefined}
     */
    register( modal ) {
        const name = modal.get( 'name' );

        Ember.assert(
            `Error: Component with name "${name}" has already been registered`,
            !this.find( name )
        );

        this.set( `modals.${name}`, modal );
    },

    /**
     * Unregister a modal component
     *
     * @function
     * @param {ember/Component} modal
     * @returns {undefined}
     */
    unregister( modal ) {
        const modals = this.get( 'modals' );
        const name = modal.get( 'name' );

        delete modals[ name ];
    }
});
