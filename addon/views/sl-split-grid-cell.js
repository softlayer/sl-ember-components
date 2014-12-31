import Ember from 'ember';

/**
 * @module views
 * @class  sl-split-grid-column
 */
export default Ember.View.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * The HTML tag name for the view
     *
     * @property {string} tagName
     * @default  "td"
     */
    tagName: 'td',

    /**
     * Attribute bindings for the view element
     *
     * @property {array} attributeBindings
     */
    attributeBindings: [ 'style' ],

    /**
     * Class name bindings for the view element
     *
     * @property {array} classNameBindings
     */
    classNameBindings: [ 'alignmentClass', 'content.primary:primary-column', 'sizeClass' ],

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Class name string based on align property
     *
     * @function alignmentClass
     * @observes content.align
     * @returns  {string}
     */
    alignmentClass: function() {
        var align = this.get( 'content.align' );

        if ( align === 'right' ) {
            return 'text-right';
        }
    }.property( 'content.align' ),

    /**
     * Class name string based on size string
     *
     * @function sizeClass
     * @observes content.size
     * @returns  {string}
     */
    sizeClass: function() {
        var size = this.get( 'content.size' );

        if ( typeof size === 'string' ) {
            return 'column-' + size;
        }
    }.property( 'content.size' ),

    /**
     * Calculated style string based on column size
     *
     * @function style
     * @observes content.size
     * @returns  {string}
     */
    style: function() {
        var size = this.get( 'content.size' );

        if ( typeof size === 'number' ) {
            return 'width: ' + size + 'px';
        }

        return 'width: auto';
    }.property( 'content.size' )

});
