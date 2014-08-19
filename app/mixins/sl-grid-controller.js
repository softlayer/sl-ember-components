import Ember from 'ember';
import SlApplicationState from './sl-application-state-controller';

export default Ember.Mixin.create( SlApplicationState, {
   
    needs: [ 'user' ],

    initializer: function(){
        this.loadApplicationState();
    }.on( 'init' ),

    actions: {
        sortColumn: function( column ){
            if( column.get( 'isSorted' ) ){
                column.toggleProperty( 'sortAscending' );
            } else {
                this.get( 'columns' ).setEach( 'isSorted', false );
                column.set('isSorted', true );
                column.set( 'sortAscending', column.getWithDefault( 'sortAscending', true ) );
            }
            this.saveApplicationState();
            this.reloadModel(); 
        },

        reload: function(){
            this.reloadModel();
        },

        toggleColumnVisibility: function( columnName ){
            var foundColumn =  this.get( 'columns' ).findBy( 'key', columnName );

            if( foundColumn ){
                foundColumn.toggleProperty( 'hidden' );
            }
            this.saveApplicationState();
        },

        resetColumns: function(){ 
            this.resetColumns(); 
        }

    },

    grid: Ember.Object.create(),

    gridDefinition: function(){
        Ember.assert('sl-grid-controller: you must define the `grid` property on your controller.',false);
    }.property(), 

    columns: Ember.computed.alias( 'grid.columns' ),

    options: Ember.computed.alias( 'grid.options' ),
    
    applicationStateVariable: Ember.computed.alias( 'grid' ),

    applicationStateDefinition: Ember.computed.alias( 'gridDefinition' ),
   
    applicationStateNamespace: function(){
        return this.store.pluralize( this.get( 'modelName' ) ); 
    }.property( 'modelName' ),

    applicationStateDidLoad: function(){
        this.notifyPropertyChange( 'sortProperties' );
        Ember.run.once( this, 'reloadModel');
    }.on( 'applicationStateDidLoad' ),
 
    resetColumns: function(){
        var gridColumnDefs = this.get( 'gridDefinition.columns' );
        
        //update each property individually so bindings dont' break triggering a bunch of re-renders
        gridColumnDefs.forEach( function( columnDef ){
            var column = this.get( 'columns' ).findBy( 'key', columnDef.key );
            //set all the defined properties back to the definition
            column.setProperties( columnDef );
            //remove all the properties not on the definition
            Ember.keys( column ).forEach( function( key ){
                if( ! columnDef.hasOwnProperty( key ) ){
                    column.set( key, undefined );
                }
            });
        }, this );

        this.saveApplicationState();
    },

    columnWidthObserver: function(){
        Ember.run.debounce( this, function(){
            this.saveApplicationState();
        }, 500 ); 
    }.observes( 'columns.@each.width' ),

    itemCountPerPage: Ember.computed.alias( 'options.itemCountPerPage' ),

    itemCountPerPageObserver: function(){
        this.saveApplicationState();
    }.observes( 'itemCountPerPage' ),

    /**
     * reload the model for this controller with the current paging preferences
     *
     * override this function with your own model reloading logic if need be
     *
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
            model,
            sortedColumn = this.get( 'columns' ).findBy( 'isSorted', true ),
            sortAscending = sortedColumn ? sortedColumn.get( 'sortAscending' ) : null;

        if( sortedColumn ){
            options.data.sort = JSON.stringify([ { property: sortedColumn.get( 'key' ), 
                direction: sortAscending ? 'ASC' : 'DESC'
            }]);
        }
        //this assumes you are using an sl-model like store that can take 
        //an options hash as a second parameter
        model = this.store.find( modelName, options );

        this.set( 'model', model );

        model.then( function(){
            this.set( 'metaData', this.store.metadataFor( modelName ) );
        }.bind( this ) );
    }
});
