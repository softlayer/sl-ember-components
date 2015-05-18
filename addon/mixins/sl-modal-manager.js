import Ember from 'ember';

/**
 * @module
 * @augments Ember/Mixin
 */
export default Ember.Mixin.create({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    // -------------------------------------------------------------------------
    // Actions

    /** @type {Object} */
    actions: {

        /**
         * Trigger showing the specified modal
         *
         * @function actions:showModal
         * @param {String} selector - The selector for the modal to show
         * @param {Object|String} controller - The controller to use for context
         *        within the modal
         * @param {Object} model - An instance of a model to pass to the
         *        controller as content data
         * @returns {undefined}
         */
        showModal( selector, controller, model ) {
            Ember.$( selector ).modal( 'show' );

            if ( !Ember.isBlank( controller ) && !Ember.isBlank( model ) ) {
                if ( typeof controller === 'string' ) {
                    controller = this.controllerFor( controller );
                }

                controller.set( 'modalContent', model );
            }
        }
    }

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
