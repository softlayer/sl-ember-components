import SlSplitGridCellView from './sl-split-grid-cell';

/**
 * @module views
 * @class  sl-split-grid-column-header
 */
export default SlSplitGridCellView.extend({

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
    click: function() {
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
    sortedClass: function() {
        var sorted = this.get( 'content.sorted' );

        if ( sorted ) {
            return 'column-' + sorted;
        }
    }.property( 'content.sorted' ),

    /**
     * Class name string for the icon on a sortable column
     *
     * @function sortIconClass
     * @observes content.sorted
     * @returns  {string}
     */
    sortIconClass: function() {
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
    }.property( 'content.sorted' )

});
