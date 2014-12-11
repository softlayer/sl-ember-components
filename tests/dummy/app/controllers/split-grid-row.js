import Ember from 'ember';

export default Ember.ObjectController.extend({

    actions: {
        alertRecord: function() {
            alert( this.get( 'model' ) );
        },

        logRecord: function() {
            console.log( this.get( 'model' ) );
        }
    },

    fullName: function() {
        return this.get( 'firstName' ) + ' ' + this.get( 'lastName' );
    }.property( 'firstName', 'lastName' )

});
