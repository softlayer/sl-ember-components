import Ember from 'ember';

/**
 * @module mixins
 * @class  sl-split-grid-column
 */
export default Ember.Mixin.create({

    /**
     * Relative size of the column
     *
     * Possible values are "auto", "tiny", "small", "medium", or "large".
     *
     * @property {string} size
     * @default  "auto"
     */
    size: 'auto',

    /**
     * Converted class name string from size string
     *
     * @property {string} sizeClass
     */
    sizeClass: function() {
        var size = this.get( 'size' );

        if ( size && size !== 'auto') {
            return 'sl-column-' + size;
        }
    }.property( 'size' )

});
