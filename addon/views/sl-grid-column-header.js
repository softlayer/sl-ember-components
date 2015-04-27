import Ember from 'ember';
import SlGridCellView from './sl-grid-cell';

/**
 * @module views
 * @class sl-grid-column-header
 * @augments views/sl-grid-cell
 */
export default SlGridCellView.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    attributeBindings: [ 'style' ],

    classNameBindings: [ 'content.sortable:sortable-column', 'sortedClass' ],

    tagName: 'th',

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    click() {
        if ( this.get( 'content.sortable' ) === true ) {
            this.triggerAction({
                action        : 'sortColumn',
                actionContext : this.get( 'content' ),
                target        : this.get( 'parentController' )
            });
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
     * @observes content.sortAscending
     * @returns {?String}
     */
    sortedClass: Ember.computed( 'content.sortAscending', function() {
        var sortAscending = this.get( 'content.sortAscending' );

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
     * @observes content.sortAscending
     * @returns {String}
     */
    sortIconClass: Ember.computed( 'content.sortAscending', function() {
        var sortAscending = this.get( 'content.sortAscending' ),
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
