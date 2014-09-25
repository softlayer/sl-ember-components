import Ember from 'ember';

export default Ember.Mixin.create({
    queryParams: [ 'currentPage', 'itemCountPerPage' ],

    actions: {
        changePage: function( page ){
            var currentPage = this.get( 'currentPage' ),
                totalPages = Math.ceil( this.get( 'metaData.total' ) / this.get( 'itemCountPerPage' ) ),
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

    arrangedContent: function(){
        var self = this,
            content = this._super(),
            currentPage = parseInt( this.get( 'currentPage' ) ),
            itemCount = parseInt( this.get( 'itemCountPerPage' ) ),
            start = ( currentPage - 1 ) * itemCount,
            end = start + itemCount;

        if( content.then && ( !content.isFulfilled && !content.isRejected ) ){
            content.then( function(){ self.notifyPropertyChange( 'content' ); } );
        }

        return content.slice( start, end );

    }.property( 'content', 'currentPage', 'itemCountPerPage', 'sortProperties.@each', 'sortAscending' ),
    
    /**
     * pagingData - holds paging data for the grid to pass to its pagination controls 
     *
     */
    pagingData: function(){
        var pageNumber = this.get( 'currentPage')-1,
            pageCount = this.getWithDefault( 'metaData.pageCount', null ),
            total = this.getWithDefault( 'metaData.total', null ),
            perPage = this.get( 'itemCountPerPage' ),
            totalPages = this.getWithDefault( 'metaData.totalPages', 1 ),
            firstRow = pageNumber * perPage + 1;

        return {
            pageFirstRow: firstRow,
            pageLastRow: firstRow + pageCount -1,
            totalRows: total,
            totalPages: totalPages,
            perPageOptions: this.get( 'perPageOptions' ), 
            itemCountPerPage: this.get( 'itemCountPerPage' ),
            currentPage: this.get( 'currentPage' ),
            modelNames: this.get( 'metaData.modelNames' )
        };       
    }.property( 'metaData', 'perPageOptions', 'itemCountPerPage', 'currentPage' ),               

    metaDataObserver: function(){
        var total = parseInt( this.get( 'metaData.total' ) ),
            itemCount = parseInt( this.get( 'itemCountPerPage' ) ),
            currentPage = parseInt( this.get( 'currentPage' ) ),
            start = ( currentPage - 1 ) * itemCount,
            end = start + itemCount,
            pageCount =  (start + end) < total ? itemCount : total - start;

        this.setProperties({
             'metaData.totalPages': Math.ceil( total / itemCount ),
             'metaData.pageCount': pageCount 
        });


    }.observes( 'metaData', 'currentPage', 'itemCountPerPage' ),

    currentPage: 1,

    perPageOptions: Ember.A([ 25, 50, 100 ]),

    perPageObserver: function(){
        this.set( 'currentPage', 1 );
    }.observes( 'itemCountPerPage' )

});
