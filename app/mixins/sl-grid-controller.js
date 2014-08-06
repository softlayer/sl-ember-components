import Ember from 'ember';

export default Ember.Mixin.create({
    
    initializer: function(){
        this.loadUserPreferences();
        Ember.run.once( this, 'reloadModel');
    
    }.on( 'init' ),

    actions: {
        
        reload: function(){
            this.reloadModel();
        },
        toggleColumnVisibility: function( columnName ){
            console.log( 'device controller mixin - toggle column:', columnName );
            this.get( 'columns' ).findBy( 'key', columnName ).toggleProperty( 'hidden' );
        },
        resetColumns: function(){
            console.log( 'device controller mixin - reset columns' );
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
