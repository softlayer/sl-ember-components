import Ember from 'ember';
import layout from '../templates/components/sl-grid-cell';

/**
 * @module
 * @augments ember/Component
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    attributeBindings: [ 'style' ],

    /** @type {String[]} */
    classNameBindings: [
        'alignmentClass',
        'column.primary:primary-column',
        'sizeClass'
    ],

    /** @type {Object} */
    layout,

    /** @type {String} */
    tagName: 'td',

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * The column object, passed in through the sl-grid component
     *
     * @type {?Object}
     */
    column: null,

    /**
     * The row object, passed in through the sl-grid-component
     *
     * @type {?Object}
     */
    row: null,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Class name string based on align property
     *
     * @function
     * @observes content.align
     * @returns {?String}
     */
    alignmentClass: Ember.computed( 'column.align', function() {
        var align = this.get( 'column.align' );

        if ( align === 'right' ) {
            return 'text-right';
        }
    }),

    /**
     * The value for the row's content, based on column's `valuePath` setting
     *
     * @function
     * @observes column, row
     * @returns {?String}
     */
    contentValue: Ember.computed( 'column', 'row', function() {
        return Ember.get(
            this.get( 'row.model' ),
            this.get( 'column.valuePath' )
        );
    }),

    /**
     * Class name string based on size string
     *
     * @function
     * @observes column.size
     * @returns {?String}
     */
    sizeClass: Ember.computed( 'column.size', function() {
        var size = this.get( 'column.size' );

        if ( typeof size === 'string' ) {
            return 'column-' + size;
        }
    }),

    /**
     * Calculated style string based on column size
     *
     * @function
     * @observes column.size
     * @returns {Ember.String}
     */
    style: Ember.computed( 'column.size', function() {
        var size = this.get( 'column.size' );

        if ( typeof size === 'number' ) {
            return Ember.String.htmlSafe( `width: ${size}px;` );
        }
    })

});
