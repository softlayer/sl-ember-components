/* globals alert */

import Ember from 'ember';

export default Ember.ArrayController.extend({
    actions: {
        alertRed: function() {
            alert( 'Red!' );
        },

        alertGreen: function() {
            alert( 'Green!' );
        },

        alertBlue: function() {
            alert( 'Blue!' );
        },

        alertWhite: function() {
            alert( 'White!' );
        }
    }
});
