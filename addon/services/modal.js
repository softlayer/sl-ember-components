import Ember from 'ember';

/**
 * @module
 */
export default Ember.Service.extend({

    /**
    * @type {Object}
    */
    modals: {},

    /**
    * @function
    * @param {String} name - The unique name of the component to find
    * @returns {?ember/Component}
    */
    find( name ) {
       return this.get( `modals.${name}` );
    },

    /**
     * Register a modal component by name
     *
     * @function
     * @returns {undefined}
     */
    register( modal, name ) {
        let indexName = `modals.${name}`;

        if ( !this.get( indexName ) ) {
            this.set( `modals.${name}`, modal );
        }
    },

    /**
     * Unregister a modal component, by name
     *
     * @function
     * @returns {undefined}
     * */
    unregister( name ) {
        this.set( `modals.${name}` );
    }
});
