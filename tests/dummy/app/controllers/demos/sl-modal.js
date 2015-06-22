import Ember from 'ember';

export default Ember.Controller.extend({
    modalService: Ember.inject.service( 'modal' ),
    actions: {
        openModal: function () {

            this.get( 'modalService' ).find('demo').show();
        }
    },

    showModal: false
});
