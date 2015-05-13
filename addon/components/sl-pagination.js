import Ember from 'ember';
import layout from '../templates/components/sl-pagination';

/**
 * @module components
 * @class sl-pagination
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    classNames: [ 'pagination', 'sl-pagination' ],

    layout,

    tagName: 'ul',

    // -------------------------------------------------------------------------
    // Actions

    actions: {

        /**
         * Progress forward one page
         *
         * @function actions.nextPage
         * @returns {undefined}
         */
        nextPage() {
            this.changePageBy( 1 );
        },

        /**
         * Progress back one page
         *
         * @function actions.previousPage
         * @returns {undefined}
         */
        previousPage() {
            this.changePageBy( -1 );
        }

    },
    
    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether the pagination is in a busy/working state
     *
     * @property {Boolean} busy
     * @default false
     */
    busy: false,

    /**
     * The current page number
     *
     * @property {Number} currentPage
     * @default 1
     */
    currentPage: 1,

    /**
     * The total number of pages
     *
     * @property {?Number} totalPages
     * @default null
     */
    totalPages: null,

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Whether the current page is the first page
     *
     * @function onFirstPage
     * @observes currentPage
     * @returns {Boolean}
     */
    onFirstPage: Ember.computed( 'currentPage', function() {
        return this.get( 'currentPage' ) === 1;
    }),

    /**
     * Whether the current page is the last page
     *
     * @function onLastPage
     * @observes currentPage, totalPages
     * @returns {Boolean}
     */
    onLastPage: Ember.computed( 'currentPage', 'totalPages', function() {
        return this.get( 'currentPage' ) === this.get( 'totalPages' );
    }),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Change the current page number
     *
     * @function changePageBy
     * @param {Number} pageMod - The integer to increment the currentPage by
     * @returns {undefined}
     */
    changePageBy: function( pageMod ) {
        if ( this.get( 'busy' ) ) {
            return;
        }

        var newCurrentPage = this.get( 'currentPage' ) + pageMod;

        if ( newCurrentPage > -1 && newCurrentPage <= this.get( 'totalPages' ) ) {
            this.set( 'currentPage', newCurrentPage );

            if ( this.get( 'changePage' ) ) {
                this.sendAction( 'changePage', newCurrentPage );
            }
        }
    }

});
