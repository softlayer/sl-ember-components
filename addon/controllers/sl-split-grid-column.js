import Ember from 'ember';

/**
 * @module controllers
 * @class sl-split-grid-column
 */
export default Ember.ObjectController.extend({

    /**
     * Converted class name string from size string
     *
     * @property {string} sizeClass
     */
    sizeClass: function() {
        var size = this.get( 'size' );

        if ( size ) {
            return 'sl-column-' + size;
        }
    }.property( 'size' )
});
