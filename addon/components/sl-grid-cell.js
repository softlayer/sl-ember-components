import Ember from 'ember';
import layout from '../templates/components/sl-grid-cell';
import { containsValue, warn } from '../utils/all';

/**
 * Valid alignment values for columns
 *
 * @memberof module:components/sl-grid-cell
 * @enum {String}
 */
export const ColumnAlign = Object.freeze({
    LEFT: 'left',
    RIGHT: 'right'
});

/**
 * Valid size values for columns
 *
 * @memberof module:components/sl-grid-cell
 * @enum {String}
 */
export const ColumnSize = Object.freeze({
    LARGE: 'large',
    MEDIUM: 'medium',
    SMALL: 'small'
});

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
    attributeBindings: [
        'style'
    ],

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
     * @throws {ember.assert} Thrown when supplied `align` is a value not
     *         defined in enum ColumnAlign
     * @returns {?String}
     */
    alignmentClass: Ember.computed(
        'column.align',
        function() {
            const align = this.get( 'column.align' );

            if ( !align ) {
                return null;
            }

            if ( !containsValue( align, ColumnAlign ) ) {
                warn( `Invalid column align value "${align}"` );
            }

            let alignment = null;

            if ( 'right' === align ) {
                alignment = 'text-right';
            }

            return alignment;
        }
    ),

    /**
     * The value for the row's content, based on column's `valuePath` setting
     *
     * @function
     * @returns {String|undefined}
     */
    contentValue: Ember.computed(
        'column',
        'row',
        function() {
            return Ember.get(
                this.get( 'row.model' ) || this.get( 'row' ),
                this.get( 'column.valuePath' )
            );
        }
    ),

    /**
     * Class name string based on size string
     *
     * @function
     * @throws {ember.assert} Thrown when supplied `size` value is one not
     *         defined in enum ColumnSize
     * @returns {String}
     */
    sizeClass: Ember.computed(
        'column.size',
        function() {
            const size = this.get( 'column.size' );

            let sizeString = null;

            if ( 'string' === Ember.typeOf( size ) ) {
                if ( !containsValue( size, ColumnSize ) ) {
                    warn( `Invalid column size value "${size}"` );
                }

                sizeString = 'column-' + size;
            }

            return sizeString;
        }
    ),

    /**
     * Calculated style string based on column size
     *
     * @function
     * @returns {ember/String|undefined}
     */
    style: Ember.computed(
        'column.size',
        function() {
            const size = this.get( 'column.size' );
            let value = '';

            if ( 'number' === Ember.typeOf( size ) ) {
                value = `width: ${size}px;`;
            }

            return Ember.String.htmlSafe( value );
        }
    )

});
