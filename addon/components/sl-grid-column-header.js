import Ember from 'ember';
import SlGridCell from './sl-grid-cell';
import layout from '../templates/components/sl-grid-column-header';

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
        'column.sortable:sortable-column',
        'sortedClass',
        'column.extraClass'
    ],

    /** @type {String[]} */
    classNames: [
        'sl-grid-column-header'
    ],

    /** @type {Object} */
    layout,

    /** @type {String} */
    tagName: 'th',

    /**
     * The column record
     *
     * @type {?Object}
     */
    column: null,

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    /**
     * @function
     * @returns {undefined}
     */
    click() {
        if ( true === this.get( 'column.sortable' ) ) {
            this.sendAction( 'onClick', this.get( 'column' ) );
        }
    },

    // -------------------------------------------------------------------------
    // Properties

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
        'column.sortAscending',
        'column.sortable',
        function() {
            if ( !this.get( 'column.sortable' ) ) {
                return null;
            }

            const sortAscending = this.get( 'column.sortAscending' );
            let className = null;

            if ( 'boolean' === Ember.typeOf( sortAscending ) ) {
                className = 'column-' + (
                    sortAscending ? 'ascending' : 'descending'
                );
            }

            return className;
        }
    )

});
