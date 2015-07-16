import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        openModal: function() {
            this.set( 'showModal', true );
        }
    },

    showModal: false
});
