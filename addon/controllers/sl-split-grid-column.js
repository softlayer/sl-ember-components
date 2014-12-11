import Ember from 'ember';

/**
 * @module controllers
 * @class  sl-split-grid-column
 */
export default Ember.ObjectController.extend({

    /**
     * Class name string based on align property
     *
     * @function alignmentClass
     * @observes align
     * @returns  {string}
     */
    alignmentClass: function() {
        var align = this.get( 'align' );

        if ( align === 'right' ) {
            return 'text-right';
        }
    }.property( 'align' ),

    /**
     * Class name string based on size string
     *
     * @function sizeClass
     * @observes size
     * @returns  {string}
     */
    sizeClass: function() {
        var size = this.get( 'size' );

        if ( typeof size === 'string' ) {
            return 'sl-column-' + size;
        }
    }.property( 'size' ),

    /**
     * Calculated style string based on column size
     *
     * @function style
     * @observes size
     * @returns  {string}
     */
    style: function() {
        var size = this.get( 'size' );

        if ( typeof size === 'number' ) {
            return 'width: ' + size + 'px';
        }
    }.property( 'size' )

});
