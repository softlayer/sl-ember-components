import Ember from 'ember';

export default Ember.ObjectController.extend({
    style: function () {
        return 'color: ' + this.get( 'color' ) + ';';
    }.property( 'color' )
});