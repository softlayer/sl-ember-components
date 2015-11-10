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
    ),

    /**
     * Class name string for the icon on a sortable column
     *
     * @function
     * @returns {?String}
     */
    sortIconClass: Ember.computed(
        'column.sortAscending',
        'column.sortable',
        function() {
            if ( !this.get( 'column.sortable' ) ) {
                return null;
            }

            const sortAscending = this.get( 'column.sortAscending' );
            let iconClass;

            if ( true === sortAscending ) {
                iconClass = 'fa-sort-asc';
            } else if ( false === sortAscending ) {
                iconClass = 'fa-sort-desc';
            } else {
                iconClass = 'fa-sort';
            }

            return iconClass;
        }
    )

});
