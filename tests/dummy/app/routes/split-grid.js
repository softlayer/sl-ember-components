import Ember from 'ember';

export default Ember.Route.extend({

    model: function() {
        return Ember.$.getJSON( '/fake-records-1-50.json' );
    }

});
