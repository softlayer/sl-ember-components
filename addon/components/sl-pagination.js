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

    /**
     * didInsertElement event handler
     *
     * @function
     * @returns {undefined}
     */
    didInsertElement: function() {
        this._super( ...arguments );

        this.setupResponsivePlugin();
    },

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

    /**
     * Re-initialize the responsive plugin if total page count changes
     *
     * @function
     * @returns {undefined}
     */
    reinitializeResponsivePlugin: Ember.observer(
        'totalPages',
        function() {
            this.setupResponsivePlugin();
        }
    ),

    /**
     * Modify the active property of the currently active page object
     *
     * @function
     * @returns {undefined}
     */
    updateCurrentPage: Ember.observer(
        'currentPage',
        function() {
            const pages = this.get( 'range' );
            const currentPage = this.get( 'currentPage' );

            pages.forEach( ( page, i ) => {
                Ember.set( page, 'active', ( i + 1 === currentPage ) );
            });
        }
    ),

    /**
     * Update the responsive plugin if current page changes
     *
     * @function
     * @returns {undefined}
     */
    updateResponsivePlugin: Ember.observer(
        'currentPage',
        function() {
            Ember.run.scheduleOnce( 'afterRender', this, function() {
                this.$().twbsResponsivePagination( 'update' );
            });
        }
    ),

    /**
     * Array of simple objects representing the pages
     *
     * @function
     * @returns {Array}
     */
    range: Ember.computed(
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
    },

    /**
     * Initialize the responsive pagination jQuery plugin
     *
     * @function
     * @returns {undefined}
     */
    setupResponsivePlugin: function() {
        this.$().twbsResponsivePagination();
    }

});
