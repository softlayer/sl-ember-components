import Ember from 'ember';

export default Ember.ArrayController.extend({
    actions: {
        alertLabel( dateObjects ) {
            window.alert( dateObjects.objectAt( 0 ).label );
        }
    }
});
