import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        logLabel( dateObjects ) {
            window.console.log( dateObjects );
        }
    }
});
