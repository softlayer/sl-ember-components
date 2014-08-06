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
                    return this.set( 'currentPage', parseInt( page ) );
            }    
        }
    },
    
    currentPage: 1,

    currentPageObserver: function(){
        this.saveUserPreferences();
        Ember.run.once( this, 'reloadModel');
    }.observes( 'currentPage' ),

    itemCountPerPage:  25,

    perPageObserver: function(){
        this.saveUserPreferences();
        this.set( 'currentPage', 1 );
        Ember.run.once( this, 'reloadModel');
    }.observes( 'itemCountPerPage' ),

});
