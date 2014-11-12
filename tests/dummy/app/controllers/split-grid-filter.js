import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {
        testFilter: function() {
            console.log( 'Split-grid filter works!' );
        }
    }

});
