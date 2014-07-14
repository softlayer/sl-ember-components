import Ember from 'ember';

export default Ember.Mixin.create({

    actions: {

        showModal: function( selector, controller, model ) {
            Ember.$( selector ).modal({
                keyboard : false,
                show     : true,
                backdrop : 'static'
            });

            if ( !Ember.isBlank( controller ) && !Ember.isBlank( model )) {
                if ( typeof controller === 'string' ) {
                    controller = this.controllerFor( controller );
                }

                controller.set( 'modalContent', model );
            }
        }

    }

});