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
            var foundColumn =  this.get( 'columns' ).findBy( 'key', columnName );

            if( foundColumn ){
                foundColumn.toggleProperty( 'hidden' );
            }
            this.saveUserPreferences();
        },

        resetColumns: function(){ 
            this.resetUserPreferenceColumns(); 
            this.notifyPropertyChange( 'userPreferences.columns' );
        }

    },

    userPreferences: {},
   
    columns: Ember.computed.alias( 'userPreferences.columns' ),
   
    resetUserPreferenceColumns: function(){
        var columnDefs = this.get( 'columnDefinitions' ),
            columns = columnDefs.map(function(item){return Ember.Object.create(item);});

        this.set( 'userPreferences.columns', columns );
    },
    /**
     * Load the user preferences for this model from localStorage
     */
    loadUserPreferences: function(){
        this.resetUserPreferenceColumns();
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
    sortColumn: null,
    
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
    }
});
