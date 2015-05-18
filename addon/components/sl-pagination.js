import Ember from 'ember';
import layout from '../templates/components/sl-pagination';

/**
 * @module
 * @augments Ember/Component
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    classNames: [ 'pagination', 'sl-pagination' ],

    /** @type {Object} */
    layout,

    /** @type {String} */
    tagName: 'ul',

    // -------------------------------------------------------------------------
    // Actions

    /** @type {Object} */
    actions: {

        /**
         * Progress forward one page
         *
         * @function actions:nextPage
         * @returns {undefined}
         */
        nextPage() {
            this.changePageBy( 1 );
        },

        /**
         * Progress back one page
         *
         * @function actions:previousPage
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
     * @type {Boolean}
     */
    busy: false,

    /**
     * The current page number
     *
     * @type {Number}
     */
    currentPage: 1,

    /**
     * The total number of pages
     *
     * @type {?Number}
     */
    totalPages: null,

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Whether the current page is the first page
     *
     * @function
     * @observes currentPage
     * @returns {Boolean}
     */
    onFirstPage: Ember.computed( 'currentPage', function() {
        return this.get( 'currentPage' ) === 1;
    }),

    /**
     * Whether the current page is the last page
     *
     * @function
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
     * @function
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
