import Ember from 'ember';

export default Ember.ObjectController.extend({

    footerText: function() {
        return this.get( 'content.title' ) + '#' + this.get( 'content.number' );
    }.property( 'number', 'title' )

});
