import Ember from 'ember';

export default Ember.ArrayController.extend({
    actions: {
        alertRed() {
            window.alert( 'Red!' );
        },

        alertGreen() {
            window.alert( 'Green!' );
        },

        alertBlue() {
            window.alert( 'Blue!' );
        },

        alertWhite() {
            window.alert( 'White!' );
        }
    }
});
