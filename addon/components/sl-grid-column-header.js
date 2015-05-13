import Ember from 'ember';
import SlGridCell from './sl-grid-cell';
import layout from '../templates/components/sl-grid-header-column';

/**
 * @module components
 * @class sl-grid-column-header
 */
export default SlGridCell.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    attributeBindings: [ 'style' ],

    classNameBindings: [ 'column.sortable:sortable-column', 'sortedClass' ],

    layout,

    tagName: 'th',

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

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
     * @function sortedClass
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
     * @function sortIconClass
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
