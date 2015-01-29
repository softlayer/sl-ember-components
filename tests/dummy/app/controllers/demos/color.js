import Ember from 'ember';

export default Ember.ObjectController.extend({

    actions: {

        sendAlert: function() {
            alert( 'Okay!' );
            console.log( this );
        },

        sendLog: function() {
            console.log( this );
        }
    }

});
