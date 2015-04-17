/* globals alert */

import Ember from 'ember';

export default Ember.ObjectController.extend({

    actions: {

        sendAlert() {
            alert( this.get( 'model.name' ) );
        },

        sendLog() {
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
