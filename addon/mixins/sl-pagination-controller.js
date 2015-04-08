import Ember from 'ember';

/**
 * @module mixins
 * @class  sl-pagination-controller
 */
export default Ember.Mixin.create({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    // -------------------------------------------------------------------------
    // Actions

    /**
     * Controller actions hash
     *
     * @property {Ember.Object} actions
     */
    actions: {

        /**
         * Change current page to the specified page
         *
         * @function actions.changePage
         * @param    {number} page - The page number to change to
         * @returns  {void}
         */
        changePage( page ) {
            var currentPage = this.get( 'currentPage' ),
                nextPage,
                prevPage,
                totalPages;

            totalPages = Math.ceil(
                this.get( 'metaData.total' ) / this.get( 'itemCountPerPage' )
            );

            switch( page ) {
                case 'first':
                    currentPage = 1;
                    break;

                case 'prev':
                    prevPage = currentPage - 1;
                    currentPage = prevPage > 0 ? prevPage : 1;
                    break;

                case 'next':
                    nextPage = currentPage + 1;
                    currentPage = nextPage <= totalPages ? nextPage : totalPages;
                    break;

                case 'last':
                    currentPage = totalPages;
                    break;

                case 'currentPageInput':
                /* falls through */
                default:
                    page = parseInt( page );
                    currentPage = isNaN( page ) ? 1 : page;
            }

            this.set( 'currentPage', currentPage );
        },

        /**
         * Change the "per page" record limit
         *
         * @function actions.changePerPage
         * @param    {number} perPage - The number of records to limit to per page
         * @returns  {void}
         */
        changePerPage( perPage ) {
            perPage = parseInt( perPage );
            perPage = isNaN( perPage ) ? this.get( 'perPageOptions.firstObject' ) : perPage;
            this.set( 'itemCountPerPage', perPage );
        }
    },

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * The current page number
     *
     * @property {number} currentPage
     * @default  1
     */
    currentPage: 1,

    /**
     * Options for the "per page" resource limit number
     *
     * @property {Ember.Array} perPageOptions
     */
    perPageOptions: [ 25, 50, 100 ],

    /**
     * Accepted controller query parameters
     *
     * @property {Ember.array} queryParams
     */
    queryParams: [ 'currentPage', 'itemCountPerPage' ],

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Reloads the model when currentPage changes
     *
     * @function currentPageObserver
     * @observes currentPage
     * @returns  {void}
     */
    currentPageObserver: Ember.observer( 'currentPage', function() {
        Ember.run.once( this, this.reloadModel );
    }),

    /**
     * Reloads the model when itemCountPerPage changes
     *
     * @function itemCountPerPageObserver
     * @observes itemCountPerPage
     * @returns  {void}
     */
    itemCountPerPageObserver: Ember.observer( 'itemCountPerPage', function() {
        this.set( 'currentPage', 1 );
        Ember.run.once( this, this.reloadModel );
    }),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Override this method with your own to handle loading of a model, using the
     * currentPage and itemCountPerPage member variables
     *
     * @function reloadModel
     * @throws  {Ember.assert}
     * @returns {void}
     */
    reloadModel() {
        Ember.assert( 'SL-Ember-Components:Pagination controller mixin: You must implement reloadModel in your controller.', false );
    },

    /**
     * Paging data for the grid to pass to its pagination controls
     *
     * @function pagingData
     * @observes currentPage, itemCountPerPage, metaData, perPageOptions
     * @returns  {Ember.Object} Pagination data
     */
    pagingData: Ember.computed(
        'currentPage', 'itemCountPerPage', 'metaData', 'perPageOptions',
        function() {
            var pageNumber = this.get( 'currentPage' ) - 1,
                pageCount  = this.getWithDefault( 'metaData.pageCount', null ),
                total      = this.getWithDefault( 'metaData.total', null ),
                perPage    = this.get( 'itemCountPerPage' ),
                totalPages = this.getWithDefault( 'metaData.totalPages', 1 ),
                firstRow   = pageNumber * perPage + 1;

            return {
                pageFirstRow     : firstRow,
                pageLastRow      : firstRow + pageCount - 1,
                totalRows        : total,
                totalPages       : totalPages,
                perPageOptions   : this.get( 'perPageOptions' ),
                itemCountPerPage : this.get( 'itemCountPerPage' ),
                currentPage      : this.get( 'currentPage' ),
                modelNames       : this.get( 'metaData.modelNames' )
            };
        }
    )

});
