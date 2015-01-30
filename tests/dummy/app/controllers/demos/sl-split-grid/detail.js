/* globals alert */
import Ember from 'ember';

export default Ember.ObjectController.extend({

    actions: {

        sendAlert: function() {
            alert( this.get( 'model.name' ) );
        },

        sendLog: function() {
            console.log( this.get( 'model.name' ) );
        }
    },

    rowActions: [
        {
            action : 'sendAlert',
            label  : 'Alert'
        }, {
            action : 'sendLog',
            label  : 'Log'
        }
    ],

    testValue: 'Okay'

});
