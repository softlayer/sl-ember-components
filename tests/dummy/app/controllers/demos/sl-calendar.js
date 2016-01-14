import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        logLabel( date, data ) {
            window.console.log( 'logLabel: ', date, data );
        }
    }
});
