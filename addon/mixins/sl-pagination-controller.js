import Ember from 'ember';

export default Ember.Mixin.create({
    actions: {
        changePage: function( page ){
            var currentPage = this.get( 'currentPage' ),
                totalPages = this.get( 'metaData.totalPages' ),
                prevPage,
                validPrevPage,
                nextPage,
                validNextPage;

            switch( page ){
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
        changePerPage: function( perPage ){
            perPage = parseInt( perPage );
            perPage = isNaN( perPage ) ? this.get( 'perPageOptions.firstObject' ) : perPage;
            this.set( 'itemCountPerPage', perPage );
        }
    },
    
    /**
     * pagingData - holds paging data for the grid to pass to its pagination controls 
     *
     */
    pagingData: function(){
        var pageNumber = this.get( 'currentPage')-1,
            pageCount = this.getWithDefault( 'metaData.pageCount', null ),
            totalCount = this.getWithDefault( 'metaData.totalCount', null ),
            perPage = this.get( 'itemCountPerPage' ),
            totalPages = this.getWithDefault( 'metaData.totalPages', 1 ),
            firstRow = pageNumber * perPage + 1;

        return {
            pageFirstRow: firstRow,
            pageLastRow: firstRow + pageCount -1,
            totalRows: totalCount,
            totalPages: totalPages,
            perPageOptions: this.get( 'perPageOptions' ), 
            itemCountPerPage: this.get( 'itemCountPerPage' ),
            currentPage: this.get( 'currentPage' ),
            modelNames: this.get( 'metaData.modelNames' )
        };       
    }.property( 'metaData', 'perPageOptions', 'itemCountPerPage', 'currentPage' ),               

    currentPage: 1,

    currentPageObserver: function(){
        Ember.run.once( this, 'reloadModel');
    }.observes( 'currentPage' ),

    perPageOptions: Ember.A([ 25, 50, 100 ]),

    perPageObserver: function(){
        this.set( 'currentPage', 1 );
        Ember.run.once( this, 'reloadModel');
    }.observes( 'itemCountPerPage' )

});
