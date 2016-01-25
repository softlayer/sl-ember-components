import Ember from 'ember';
import ComponentClassPrefix from '../mixins/sl-component-class-prefix';
import layout from '../templates/components/sl-pagination';

/**
 * @module
 * @augments ember/Component
 */
export default Ember.Component.extend( ComponentClassPrefix, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    classNames: [
        'pagination'
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
         * Jump to a specific page
         *
         * @function actions:gotoPage
         * @returns {undefined}
         */
        gotoPage( page ) {
            this.gotoPage( page );
        },

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
     * Component class that will be prefixed with base component class
     *
     * @type {String}
     */
    componentClass: 'pagination',

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

    /**
     * Array of simple objects representing the pages
     *
     * @function
     * @returns {Array}
     */
    range: Ember.computed(
        'currentPage',
        'totalPages',
        function() {
            const pages = [];
            const totalPages = this.get( 'totalPages' );
            const currentPage = this.get( 'currentPage' );

            for( let i = 1; i <= totalPages; i++ ) {
                pages.push({
                    index: i,
                    active: i === currentPage
                });
            }

            return pages;
        }
    ),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Change the current page number by a delta
     *
     * @function
     * @param {Number} pageMod - The integer to increment the currentPage by
     * @returns {undefined}
     */
    changePageBy( pageMod ) {
        const newCurrentPage = this.get( 'currentPage' ) + pageMod;

        this.gotoPage( newCurrentPage );
    },

    /**
     * Change to a specific page number
     *
     * @function
     * @param {Number} page - The page number to jump to
     * @returns {undefined}
     */
    gotoPage( page ) {
        if ( this.get( 'busy' ) ) {
            return;
        }

        if ( page > this.get( 'totalPages' ) || page < 1 ) {
            return;
        }

        this.set( 'currentPage', page );

        if ( this.get( 'changePage' ) ) {
            this.sendAction( 'changePage', page );
        }
    }

});
