import Ember from 'ember';

export default Ember.ArrayController.extend({
    actions: {
        alertLabel: function ( dateObjects ) {
            alert( dateObjects.objectAt( 0 ).label );
        }
    }
});