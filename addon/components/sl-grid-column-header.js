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
    attributeBindings: [ 'style' ],

    /** @type {String[]} */
    classNameBindings: [
        'column.sortable:sortable-column',
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
        if ( this.get( 'column.sortable' ) === true ) {
            this.sendAction( 'sortColumn', this.get( 'column' ) );
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
     * @observes column.sortAscending
     * @returns {?String}
     */
    sortedClass: Ember.computed( 'column.sortAscending', function() {
        var sortAscending = this.get( 'column.sortAscending' );

        if ( typeof sorted === 'boolean' ) {
            return 'column-' + (
                sortAscending === true ? 'ascending' : 'descending'
            );
        }
    }),

    /**
     * Class name string for the icon on a sortable column
     *
     * @function
     * @observes column.sortAscending
     * @returns {String}
     */
    sortIconClass: Ember.computed( 'column.sortAscending', function() {
        var sortAscending = this.get( 'column.sortAscending' ),
            iconClass;

        if ( sortAscending === true ) {
            iconClass = 'fa-sort-asc';
        } else if ( sortAscending === false ) {
            iconClass = 'fa-sort-desc';
        } else {
            iconClass = 'fa-sort';
        }

        return iconClass;
    })

});
