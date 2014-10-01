import Ember from 'ember';

export default Ember.ObjectController.extend({
    style: function() {
        var width = this.get( 'width' );

        if ( width ) {
            return 'width: ' + this.get( 'width' ) + 'px;';
        }

        return;
    }.property( 'width' )
});
