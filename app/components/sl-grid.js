import Ember from 'ember';
import TooltipEnabled from '../mixins/tooltip-enabled';

/**
 * @module components
 * @class sl-grid
 */
export default Ember.Component.extend( TooltipEnabled, {

    /**
     * Object of action functions
     * @property {object} actions
     */
    actions: {

        /**
         * Action triggered by clicking a column header
         * @method clickColumnHeader
         * @param {object} column
         */
        clickColumnHeader: function ( column ) {
            if ( column.name === this.get( 'sortColumn' )) {
                this.toggle( 'sortAscending' );
            } else {
                this.set( 'sortColumn', column.name );
                this.set( 'sortAscending', true );
            }
        }
    },

    /**
     * Class names for the component
     * @property {array} classNames
     */
    classNames: [ 'sl-grid', 'table' ],

    /**
     * Current page number
     * @property {number} currentPage
     */
    currentPage: 1,

    /**
     * Whether the sorting column is sorted in ascending order
     * @property {boolean} sortAscending
     */
    sortAscending: true,

    /**
     * Name of the column that is currently selected for sorting
     * @property {string} sortColumn
     */
    sortColumn: null,

    /**
     * Total number of pages
     * @property {number} totalPages
     */
    totalPages: 1
});
