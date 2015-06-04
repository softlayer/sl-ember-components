import Ember from 'ember';
import layout from '../templates/components/sl-grid-cell';

/**
 * Valid alignment values for columns
 */
const COLUMN_ALIGN = {
    LEFT: 'left',
    RIGHT: 'right'
};
export { COLUMN_ALIGN };

/**
 * Valid size values for columns
 *
 * @memberof module:components/sl-grid-cell
 * @enum {String}
 */
const COLUMN_SIZE = {
    LARGE: 'large',
    MEDIUM: 'medium',
    SMALL: 'small'
};
export { COLUMN_SIZE };

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

    click() {
        this.sendAction( 'onClick', this.get( 'row' ) );
    },

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

        if ( !align ) {
            return;
        }

        Ember.assert(
            `Error: Invalid column align value "${align}"`,
            Object.keys( COLUMN_ALIGN ).map( ( key ) => COLUMN_ALIGN[ key ] ).indexOf( align ) > -1
        );

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
            this.get( 'row.model' ) || this.get( 'row' ),
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
            Ember.assert(
                `Error: Invalid column size value "${size}"`,
                Object.keys( COLUMN_SIZE ).map( ( key ) => COLUMN_SIZE[ key ] ).indexOf( size ) > -1
            );

            return 'column-' + size;
        }
    }),

    /**
     * Calculated style string based on column size
     *
     * @function
     * @observes column.size
     * @returns {ember/String}
     */
    style: Ember.computed( 'column.size', function() {
        var size = this.get( 'column.size' );

        if ( Ember.typeOf( size ) === 'number' ) {
            return Ember.String.htmlSafe( `width: ${size}px;` );
        }
    })

});
