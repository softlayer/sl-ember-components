import Ember from 'ember';

export default Ember.Controller.extend({
    modalService: Ember.inject.service( 'modal' ),
    actions: {
        openModal: function ( modalName ) {

            this.get( 'modalService' ).find('')
        }
    },

    showModal: false
});