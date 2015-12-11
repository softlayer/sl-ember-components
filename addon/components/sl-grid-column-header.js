import Ember from 'ember';
import SlGridCell from './sl-grid-cell';
import layout from '../templates/components/sl-grid-header-column';

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
        'sortedClass',
        'extraClass'
    ],

    /** @type {String[]} */
    classNames: [
        'sl-grid-column-header'
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

    extraClass: null,

    sortable: true,

    sorted: null,

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

            if ( this.get( 'sortable' ) && sorted !== null && sorted !== undefined ) {
                className = 'column-' + (
                    'asc' === sorted ? 'ascending' : 'descending'
                );
            }

            return className;
        }
    )

});
