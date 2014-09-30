import Ember from 'ember';

/**
 * @module mixins
 * @class sl-pagination-controller
 */
export default Ember.Mixin.create({

    /**
     * Controller actions hash
     *
     * @property {object} actions
     */
    actions: {

        /**
         * Change current page to the specified page
         *
         * @method actions.changePage
         */
        changePage: function( page ) {
            var currentPage = this.get( 'currentPage' ),
                nextPage,
                prevPage,
                totalPages,
                validNextPage,
                validPrevPage;

            totalPages = Math.ceil(
                this.get( 'metaData.total' ) / this.get( 'itemCountPerPage' )
            );

            switch( page ) {
                case 'first':
                    return this.set( 'currentPage', 1 );

                case 'prev':
                    validPrevPage = currentPage - 1;
                    validPrevPage = prevPage > 0;
                    return this.set( 'currentPage', validPrevPage ? validPrevPage : 1 );

                case 'next':
                    nextPage = ( currentPage + 1 );
                    validNextPage = nextPage <= totalPages;
                    return this.set( 'currentPage',  validNextPage ? nextPage : totalPages );

                case 'last':
                    return this.set( 'currentPage', totalPages );

                case 'currentPageInput':
                /* falls through */
                default:
                    page = parseInt( page );
                    page = isNaN( page ) ? 1 : page;
                    return this.set( 'currentPage', page );
            }
        },

        /**
         * Change the "per page" record limit
         *
         * @method actions.changePerPage
         */
        changePerPage: function( perPage ) {
            perPage = parseInt( perPage );
            perPage = isNaN( perPage ) ? this.get( 'perPageOptions.firstObject' ) : perPage;
            this.set( 'itemCountPerPage', perPage );
        }
    },

    /**
     * An arranged copy of the content
     *
     * @property {mixed} arrangedContent
     */
    arrangedContent: function() {
        var self        = this,
            content     = this._super(),
            currentPage = parseInt( this.get( 'currentPage' ) ),
            itemCount   = parseInt( this.get( 'itemCountPerPage' ) ),
            start       = ( currentPage - 1 ) * itemCount,
            end         = start + itemCount;

        if ( content.then && ( !content.isFulfilled && !content.isRejected ) ) {
            content.then( function() {
                self.notifyPropertyChange( 'content' );
            });
        }

        return content.slice( start, end );
    }.property(
        'content',
        'currentPage',
        'filterProperties.@each',
        'itemCountPerPage',
        'sortAscending',
        'sortProperties.@each'
    ),

    /**
     * The current page number
     *
     * @property {number} currentPage
     * @default 1
     */
    currentPage: 1,

    /**
     * Paging data for the grid to pass to its pagination controls
     *
     * @property {object} pagingData
     */
    pagingData: function() {
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
    }.property(
        'currentPage',
        'itemCountPerPage',
        'metaData',
        'perPageOptions'
    ),

    /**
     * Options for the "per page" resource limit number
     *
     * @property {array} perPageOptions
     */
    perPageOptions: Ember.A([ 25, 50, 100 ]),

    /**
     * Accepted controller query parameters
     *
     * @property {array} queryParams
     */
    queryParams: [ 'currentPage', 'itemCountPerPage' ],

    /**
     * Reset the current page number when the itemCountPerPage is changed
     *
     * @method resetCurrentPage
     */
    resetCurrentPage: function() {
        this.set( 'currentPage', 1 );
    }.observes( 'itemCountPerPage' ),

    /**
     * Update metaData properties when relevant values is changed
     *
     * @method setupMetaData
     */
    updateMetaData: function() {
        var total       = parseInt( this.get( 'metaData.total' )),
            itemCount   = parseInt( this.get( 'itemCountPerPage' )),
            currentPage = parseInt( this.get( 'currentPage' )),
            start       = ( currentPage - 1 ) * itemCount,
            end         = start + itemCount,
            pageCount   = ( start + end ) < total ? itemCount : total - start;

        this.setProperties({
            'metaData.pageCount': pageCount,
            'metaData.totalPages': Math.ceil( total / itemCount )
        });
    }.observes( 'currentPage', 'itemCountPerPage', 'metaData' )

});
