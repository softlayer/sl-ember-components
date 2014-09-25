import Ember from 'ember';

/**
 * @module mixins
 * @class sl-modal-manager
 */
export default Ember.Mixin.create({

    /**
     * Controller actions hash
     *
     * @property {object} actions
     */
    actions: {

        /**
         * Trigger showing the specified modal
         *
         * @method actions.showModal
         * @param {string} selector - The selector for the modal to show
         * @param {controller|string} controller - The controller to use for
         *      context within the modal
         * @param {model} model - An instance of a model to pass to the
         *      controller as content data
         */
        showModal: function( selector, controller, model ) {
            Ember.$( selector ).modal( 'show' );

            if ( !Ember.isBlank( controller ) && !Ember.isBlank( model )) {
                if ( typeof controller === 'string' ) {
                    controller = this.controllerFor( controller );
                }

                controller.set( 'modalContent', model );
            }
        }
    }
});
