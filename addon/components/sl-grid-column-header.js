import Ember from 'ember';
import SlGridCell from './sl-grid-cell';
import layout from '../templates/components/sl-grid-column-header';

/**
 * Valid sort values for the sl-grid-column-header component
 *
 * @memberof module:addon/components/sl-grid-column-header
 * @enum {String}
 * @property {String} ASC 'asc',
 * @property {String} DESC 'desc',
 * @property {String} NULL null,
 */
export const Sort = Object.freeze({
    ASC: 'asc',
    DESC: 'desc',
    NULL: null
});

/**
 * @module
 * @augments module:components/sl-grid-cell
 */
export default SlGridCell.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    classNameBindings: [
        'sortable:sortable-column',
        'sortedClass'
    ],

    /** @type {Object} */
    layout,

    /** @type {String} */
    tagName: 'th',

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    /**
     * @function
     * @returns {undefined}
     */
    click() {
        if ( true === this.get( 'sortable' ) ) {
            this.sendAction( 'onClick', this.get( 'column' ) );
        }
    },

    // -------------------------------------------------------------------------
    // Properties

    /**
     * The column record
     *
     * @type {?Object}
     */
    column: null,

    /**
     * Whether the column is sortable
     *
     * @type {Boolean}
     */
    sortable: true,

    /**
     * The sort direction of the column
     *
     * @type {Sort}
     */
    sorted: Sort.NULL,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Class name string based on sorted property
     *
     * @function
     * @returns {?String}
     */
    sortedClass: Ember.computed(
        'sortable',
        'sorted',
        function() {
            const sorted = this.get( 'sorted' );
            let className = null;

            if ( this.get( 'sortable' ) && !Ember.isNone( sorted ) ) {
                className = 'column-' + (
                    'asc' === sorted ? 'ascending' : 'descending'
                );
            }

            return className;
        }
    )

});
