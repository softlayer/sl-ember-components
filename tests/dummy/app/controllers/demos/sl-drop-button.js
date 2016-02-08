import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        logRed() {
            window.console.log( 'Red!' );
        },

        logGreen() {
            window.console.log( 'Green!' );
        },

        logWhite() {
            window.console.log( 'White!' );
        }
    }
});
