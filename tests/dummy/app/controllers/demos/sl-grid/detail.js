/* globals alert */

import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {

        sendAlert() {
            alert( this.get( 'model.name' ) );
        },

        sendLog() {
            console.log( this.get( 'model.name' ) );
        }

    },

    rowActions: Ember.A([
        {
            action : 'sendAlert',
            label  : 'Alert'
        }, {
            action : 'sendLog',
            label  : 'Log'
        }
    ]),

    test: Ember.computed( function() {
        return Math.random();
    }),

    testValue: 'Okay'

});
