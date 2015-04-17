import Ember from 'ember';
import SlGridCellView from './sl-grid-cell';

/**
 * @module views
 * @class  sl-grid-column-header
 */
export default SlGridCellView.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * The HTML tag name of the view element
     *
     * @property {string} tagName
     * @default  "th"
     */
    tagName: 'th',

    /**
     * Attribute bindings for the view element
     *
     * @property {array} attributeBindings
     */
    attributeBindings: [ 'style' ],

    /**
     * Class name bindings for the view element
     *
     * @property {array} classNameBindings
     */
    classNameBindings: [ 'content.sortable:sortable-column', 'sortedClass' ],

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    /**
     * The click event handler
     *
     * @function click
     * @returns  {void}
     */
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
     * @returns  {string}
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
     * @returns  {string}
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
