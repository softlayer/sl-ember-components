import Ember from 'ember';

/**
 * @module views
 * @class  sl-grid-cell
 */
export default Ember.View.extend( Ember.ViewTargetActionSupport, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * The HTML tag name for the view
     *
     * @property {Ember.String} tagName
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
    classNameBindings: [
        'alignmentClass', 'content.primary:primary-column', 'sizeClass'
    ],

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
     * @returns  {?String}
     */
    alignmentClass: Ember.computed( 'content.align', function() {
        var align = this.get( 'content.align' );

        if ( align === 'right' ) {
            return 'text-right';
        }
    }),

    /**
     * Class name string based on size string
     *
     * @function sizeClass
     * @observes content.size
     * @returns  {?String}
     */
    sizeClass: Ember.computed( 'content.size', function() {
        var size = this.get( 'content.size' );

        if ( typeof size === 'string' ) {
            return 'column-' + size;
        }
    }),

    /**
     * Calculated style string based on column size
     *
     * @function style
     * @observes content.size
     * @returns  {Ember.String}
     */
    style: Ember.computed( 'content.size', function() {
        var size = this.get( 'content.size' );

        if ( typeof size === 'number' ) {
            return Ember.String.htmlSafe( `width: ${size}px;` );
        }
    })

});
