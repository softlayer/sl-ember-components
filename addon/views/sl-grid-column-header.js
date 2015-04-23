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
     * @observes content.sorted
     * @returns {?String}
     */
    sortedClass: Ember.computed( 'content.sorted', function() {
        var sorted = this.get( 'content.sorted' );

        if ( sorted ) {
            return 'column-' + sorted;
        }
    }),

    /**
     * Class name string for the icon on a sortable column
     *
     * @function sortIconClass
     * @observes content.sorted
     * @returns {?String}
     */
    sortIconClass: Ember.computed( 'content.sorted', function() {
        var sorted = this.get( 'content.sorted' ),
            iconClass;

        if ( sorted === 'ascending' ) {
            iconClass = 'fa-sort-asc';
        } else if ( sorted === 'descending' ) {
            iconClass = 'fa-sort-desc';
        } else {
            iconClass = 'fa-sort';
        }

        return iconClass;
    })

});
