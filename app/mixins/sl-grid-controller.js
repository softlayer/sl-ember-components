import Ember from 'ember';

export default Ember.Mixin.create({
    init: function(){
        this.loadUserPreferences();
        Ember.run.once( this, 'reloadModel');
        this._super();
    },

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
        },
        reload: function(){
            this.reloadModel();
        }
    },

    /**
     * reload the model for this controller with the current paging preferences
     */
    reloadModel: function(){

        var modelName = this.get( 'modelName' ),
            currentPage = this.get( 'currentPage' ),
            itemCountPerPage = this.get( 'itemCountPerPage' ),
            options = {
                data: { 
                    format: 'json',
                    itemCountPerPage: itemCountPerPage,
                    page: currentPage,
                    start: ( currentPage - 1) * itemCountPerPage
                },
                reload: true
            },
            model;
        model = this.store.find( modelName, options );


        this.set( 'model', model );

        model.then( function(){
            this.set( 'metaData', this.store.metadataFor( this.get('modelName') ) );
        }.bind( this ) );
    },

    /**
     * Load the user preferences for this model from localStorage
     */
    loadUserPreferences: function(){

    },

    /**
     * Save the user preferences to localStorage
     * @return {[type]} [description]
     */
    saveUserPreferences: function(){

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
    
    /**
     * Whether the sorting column is sorted in ascending order
     * @property {boolean} sortAscending
     */
    sortAscending: true,

    /**
     * Name of the column that is currently selected for sorting
     * @property {string} sortColumn
     */
    sortColumn: null
});
