import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        sendAlert() {
            window.alert( this.get( 'model.name' ) );
        },

        sendLog() {
            window.console.log( 'Model name:', this.get( 'model.name' ) );
        }
    },

    rowActions: Ember.A([
        {
            action: 'sendAlert',
            label: 'Alert'
        }, {
            action: 'sendLog',
            label: 'Log'
        }
    ])
});
