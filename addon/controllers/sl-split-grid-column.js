import Ember from 'ember';

/**
 * @module controllers
 * @class sl-split-grid-column
 */
export default Ember.ObjectController.extend({

    primaryClass: function() {
        if ( this.get( 'primary' )) {
            return 'text-primary';
        }
    }.property( 'primary' ),

    sizeClass: function() {
        var size = this.get( 'size' );

        if ( size ) {
            return 'sl-column-' + size;
        }
    }.property( 'size' )
});
