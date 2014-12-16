import Ember from 'ember';

/**
 * @module controllers
 * @class  sl-split-grid-column
 */
export default Ember.ObjectController.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    // -------------------------------------------------------------------------
    // Actions

    /**
     * A hash of object actions
     *
     * @property {object} actions
     */
    actions: {

        /**
         * Fired when a column header is clicked, handles sorting
         *
         * @function actions.columnHeaderClick
         * @returns  {void}
         */
        columnHeaderClick: function() {
            if ( this.get( 'content.sortable' ) === true ) {
                this.send( 'sortColumn', this.get( 'content' ) );
            }
        }

    },

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Class name string based on align property
     *
     * @function alignmentClass
     * @observes align
     * @returns  {string}
     */
    alignmentClass: function() {
        var align = this.get( 'content.align' );

        if ( align === 'right' ) {
            return 'text-right';
        }
    }.property( 'content.align' ),

    /**
     * Class name string based on size string
     *
     * @function sizeClass
     * @observes size
     * @returns  {string}
     */
    sizeClass: function() {
        var size = this.get( 'content.size' );

        if ( typeof size === 'string' ) {
            return 'sl-column-' + size;
        }
    }.property( 'content.size' ),

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
    }.property( 'content.sorted' ),

    /**
     * Calculated style string based on column size
     *
     * @function style
     * @observes size
     * @returns  {string}
     */
    style: function() {
        var size = this.get( 'content.size' );

        if ( typeof size === 'number' ) {
            return 'width: ' + size + 'px';
        }
    }.property( 'content.size' )

});
