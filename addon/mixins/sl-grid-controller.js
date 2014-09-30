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
        },

        reload: function(){
            this.reloadModel( true );
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
        },
        
        reorderColumn: function( oldIndex, newIndex ){
            this.reorderColumn( oldIndex, newIndex );            
        },

        toggleFilter: function(){
            this.toggleProperty( 'showFilterPanel' );
        }

    },

    arrangedContent: function(){
        var filterProperties = this.get( 'filterProperties' ),
            arrangedContent = this._super();
        
        return filterProperties.reduce( function( previousValues, filterProperty ){
            var filterRegex = new RegExp( '.*'+filterProperty.value+'.*' );

            if( filterProperty.keyArray ){
                return previousValues.filter( function( item ) {
                    return item.get( filterProperty.key ).contains( filterProperty.value );
                });
            }
            return previousValues.filter( function( item ){
                return filterRegex.test( item.get( filterProperty.key ) );
            }); 
                                         
        }, arrangedContent );

    }.property( 'content', 
                'sortProperties.@each', 'sortAscending', 
                'currentPage', 'itemCountPerPage', 
                'filterProperties.@each' ),

    sortProperties: function(){
        return this.getWithDefault( 'columns', [] ).filterBy( 'isSorted' ).mapBy( 'key' );
    }.property( 'columns.@each.isSorted' ),

    sortAscending: function(){
        return this.getWithDefault( 'columns', [] ).findBy( 'isSorted' ).get( 'sortAscending' );
    }.property( 'columns.@each.sortAscending' ),

    filterProperties: Ember.A(),

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
    
    isLoading: Ember.computed.alias( 'model.isPending' ),
    
    columnCount: function(){
        return this.get( 'columns.length' ) +
            ( this.get( 'columns.length' ) - this.get( 'columns' ).filterBy( 'noColumnResize' ).length )+
            ( this.get( 'options.rowExpander' ) ? 1 : 0 )+
            ( this.get( 'options.actionsColumn' ) ? 1 : 0 );
    }.property( 'columns.length'),

    totalWidthHints: function(){
        var columns = this.get( 'columns' ),
            totalWidthHints = 0;

        columns.forEach( function( col ){
            totalWidthHints += col.getWithDefault( 'widthHint', 1 );
        });

        return totalWidthHints;
    }.property( 'columns.@each.widthHint' ),

    reorderColumn: function( oldIndex, newIndex ){
        var columns = this.get( 'columns' ),
        elementToMove;
       
        columns.arrayContentWillChange( oldIndex, 1);
        elementToMove = columns.splice( oldIndex, 1)[0];
        columns.arrayContentDidChange( oldIndex, 1);

        columns.arrayContentWillChange( newIndex, 0, 1 );
        columns.splice( newIndex, 0, elementToMove );
        columns.arrayContentDidChange( newIndex, 0, 1 );

        this.saveApplicationState();
    },
 
    resetColumns: function(){
        var gridColumnDefs = this.get( 'gridDefinition.columns' ),
            tmpColumns = Ember.A([]);
        
        gridColumnDefs.forEach( function( columnDef ){
           tmpColumns.pushObject( Ember.Object.create( columnDef ) );
        }, this );
        
        this.set( 'columns', tmpColumns );

        this.saveApplicationState();
    },

    columnWidthObserver: function(){
        Ember.run.debounce( this, this.saveApplicationState, 500 ); 
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
    reloadModel: function( fromServer ){

        var modelName = this.get( 'modelName' ),
            model;

        model = this.store.find( modelName, { reload: fromServer } );

        this.set( 'model', model );

        model.then( function(){
            this.set( 'metaData', this.store.metadataFor( modelName ) );
        }.bind( this ) );
    }
});
