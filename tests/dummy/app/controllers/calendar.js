import Ember from 'ember';
/* global alert */

export default Ember.ArrayController.extend({
    actions: {
        alertLabel: function ( dateObjects ) {
            alert( dateObjects.objectAt( 0 ).label );
        }
    }
});