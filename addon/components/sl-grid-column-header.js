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
    attributeBindings: [
        'style'
    ],

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
     * @returns {String|undefined}
     */
    sortedClass: Ember.computed(
        'column.sortAscending',
        'column.sortable',
        function() {
            if ( !this.get( 'column.sortable' ) ) {
                return;
            }

            var sortAscending = this.get( 'column.sortAscending' );

            if ( Ember.typeOf( sortAscending ) === 'boolean' ) {
                return 'column-' + (
                    sortAscending ? 'ascending': 'descending'
                );
            }
        }
    ),

    /**
     * Class name string for the icon on a sortable column
     *
     * @function
     * @returns {String}
     */
    sortIconClass: Ember.computed(
        'column.sortAscending',
        'column.sortable',
        function() {
            if ( !this.get( 'column.sortable' ) ) {
                return;
            }

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
        }
    )

});
