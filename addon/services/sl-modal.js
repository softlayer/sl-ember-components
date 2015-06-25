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
     * Get all open modals
     *
     * @function
     * @returns {array ember/Component}
     */
    getOpenModals() {
        let modals = this.modals;
        let openModals = [];

        for( let key in modals ) {
            let modal = modals[ key ];

            if ( modal.isOpen ) {
                openModals.push( modal );
            }
        }

        return openModals;
    },

    /**
     * Hide all registered modals
     *
     * @function
     * @returns {undefined}
     */
    hideAll() {
        let modals = this.modals;

        for ( let key in modals ) {
            let modal = modals[ key ];
            modal.hide();
        }
    },

    /**
     * Register a modal component by name
     *
     * @function
     * @returns {undefined}
     */
    register( modal, name ) {
        let registeredModal = this.find( name );

        Ember.assert(
            `Error: Component with name "${name}" has already been registered`,
            !registeredModal
        );

        this.set( `modals.${name}`, modal );
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
