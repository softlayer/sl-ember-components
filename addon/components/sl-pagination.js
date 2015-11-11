import Ember from 'ember';
import layout from '../templates/components/sl-pagination';

/**
 * @module
 * @augments ember/Component
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    classNames: [
        'pagination',
        'sl-ember-components'
    ],

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
     * @returns {Boolean}
     */
    onFirstPage: Ember.computed(
        'currentPage',
        function() {
            return 1 === this.get( 'currentPage' );
        }
    ),

    /**
     * Whether the current page is the last page
     *
     * @function
     * @returns {Boolean}
     */
    onLastPage: Ember.computed(
        'currentPage',
        'totalPages',
        function() {
            return this.get( 'currentPage' ) === this.get( 'totalPages' );
        }
    ),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Change the current page number
     *
     * @function
     * @param {Number} pageMod - The integer to increment the currentPage by
     * @returns {undefined}
     */
    changePageBy( pageMod ) {
        if ( this.get( 'busy' ) ) {
            return;
        }

        const newCurrentPage = this.get( 'currentPage' ) + pageMod;

        if (
            newCurrentPage > 0 &&
            newCurrentPage <= this.get( 'totalPages' )
        ) {
            this.set( 'currentPage', newCurrentPage );

            if ( this.get( 'changePage' ) ) {
                this.sendAction( 'changePage', newCurrentPage );
            }
        }
    }

});
