import Ember from 'ember';
import SlApplicationState from './sl-application-state-controller';

/**
 * @module mixins
 * @class sl-grid-controller
 */
export default Ember.Mixin.create( SlApplicationState, {

    /**
     * Controller actions hash
     *
     * @property {object} actions
     */
    actions: {

        /**
         * Trigger reload of the model
         *
         * @method actions.reload
         */
        reload: function() {
            this.reloadModel( true );
        },

        /**
         * Reorder column *oldIndex* to *newIndex*
         *
         * @method actions.reorderColumn
         * @param {number} oldIndex - The existing index of the column to reorder
         * @param {number} newIndex - The new index number to move the column to
         */
        reorderColumn: function( oldIndex, newIndex ) {
            this.reorderColumn( oldIndex, newIndex );
        },

        /**
         * Trigger resetting of all columns to their default positions
         *
         * @method actions.resetColumns
         */
        resetColumns: function() {
            this.resetColumns();
        },

        /**
         * Sort the specified column
         *
         * @method actions.sortColumn
         * @param {object} column - The column to sort
         */
        sortColumn: function( column ) {
            if ( column.get( 'isSorted' )) {
                column.toggleProperty( 'sortAscending' );
            } else {
                this.get( 'columns' ).setEach( 'isSorted', false );
                column.set( 'isSorted', true );
                column.set( 'sortAscending', column.getWithDefault( 'sortAscending', true ));
            }
            this.saveApplicationState();
        },

        /**
         * Toggle the visibility of the column with specified column name
         *
         * @method actions.toggleColumnVisibility
         * @param {string} columnName - The name of the column to toggle
         */
        toggleColumnVisibility: function( columnName ) {
            var foundColumn =  this.get( 'columns' ).findBy( 'key', columnName );

            if ( foundColumn ){
                foundColumn.toggleProperty( 'hidden' );
            }
            this.saveApplicationState();
        },

        /**
         * Trigger toggle of filter panel visibility
         *
         * @method actions.toggleFilter
         */
        toggleFilter: function() {
            this.toggleProperty( 'showFilterPanel' );
        }
    },

    /**
     * Alias for the grid definition
     *
     * @property {mixed} applicationStateDefinition
     */
    applicationStateDefinition: Ember.computed.alias( 'gridDefinition' ),

    /**
     * Run when application state is loaded
     *
     * @method applicationStateDidLoad
     */
    applicationStateDidLoad: function() {
        this.notifyPropertyChange( 'sortProperties' );
        Ember.run.once( this, 'reloadModel' );
    }.on( 'applicationStateDidLoad' ),

    /**
     * Namespace based on the model name
     *
     * @property {string} applicationStateNamespace
     */
    applicationStateNamespace: function() {
        return this.store.pluralize( this.get( 'modelName' ));
    }.property( 'modelName' ),

    /**
     * Alias to the grid
     *
     * @property {object} applicationStateVariable
     */
    applicationStateVariable: Ember.computed.alias( 'grid' ),

    /**
     * Arranged copy of the controller's content
     *
     * @property {object} arrangedContent
     */
    arrangedContent: function() {
        var filterProperties = this.get( 'filterProperties' ),
            arrangedContent = this._super();

        return filterProperties.reduce( function( previousValues, filterProperty ) {
            var filterRegex = new RegExp( '.*' + filterProperty.value + '.*' );

            if ( filterProperty.keyArray ) {
                return previousValues.filter( function( item ) {
                    return item.get( filterProperty.key ).contains( filterProperty.value );
                });
            }

            return previousValues.filter( function( item ) {
                return filterRegex.test( item.get( filterProperty.key ));
            });
        }, arrangedContent );
    }.property(
        'content',
        'currentPage',
        'filterProperties.@each',
        'itemCountPerPage',
        'sortAscending',
        'sortProperties.@each'
    ),

    /**
     * The effective total number of columns
     *
     * @property {number} columnCount
     */
    columnCount: function() {
        return this.get( 'columns.length' ) +
            (
                this.get( 'columns.length' ) -
                this.get( 'columns' ).filterBy( 'noColumnResize' ).length
            ) +
            ( this.get( 'options.rowExpander' ) ? 1 : 0 ) +
            ( this.get( 'options.actionsColumn' ) ? 1 : 0 );
    }.property( 'columns.length'),

    /**
     * Alias to the grid's columns
     *
     * @property {array} columns
     */
    columns: Ember.computed.alias( 'grid.columns' ),

    /**
     * Properties of the filter panel
     *
     * @property {array} filterProperties
     */
    filterProperties: Ember.A(),

    /**
     * The controller's grid object
     *
     * @property {object} grid
     */
    grid: Ember.Object.create(),

    /**
     * Placeholder for a grid's definition object
     *
     * @property {object} gridDefinition
     */
    gridDefinition: function() {
        Ember.assert(
            'sl-grid-controller: you must define the `grid` property on your controller.',
            false
        );
    }.property(),

    /**
     * Call on controller initialization
     *
     * @method initialize
     */
    initialize: function() {
        this.loadApplicationState();
    }.on( 'init' ),

    /**
     * Alias to the controller's model's pending state
     *
     * @property {boolean} isLoading
     */
    isLoading: Ember.computed.alias( 'model.isPending' ),

    /**
     * Alias to the number of records shown per page
     *
     * @property {number} itemCountPerPage
     */
    itemCountPerPage: Ember.computed.alias( 'options.itemCountPerPage' ),

    /**
     * Controllers that this controller needs
     *
     * @property {array} needs
     */
    needs: [ 'user' ],

    /**
     * Run when columns' widths are changed
     *
     * @method observeColumnWidths
     */
    onColumnWidthsChange: function() {
        Ember.run.debounce( this, this.saveApplicationState, 500 );
    }.observes( 'columns.@each.width' ),

    /**
     * Run when itemCountPerPage is changed
     *
     * @method observeItemCountPerPage
     */
    onItemCountPerPageChange: function() {
        this.saveApplicationState();
    }.observes( 'itemCountPerPage' ),

    /**
     * Alias to the grid's options
     *
     * @property {object} options
     */
    options: Ember.computed.alias( 'grid.options' ),

    /**
     * reload the model for this controller with the current paging preferences
     *
     * override this function with your own model reloading logic if need be
     *
     */
    reloadModel: function( fromServer ) {
        var modelName = this.get( 'modelName' ),
            model,
            self = this;

        model = this.store.find( modelName, { reload: fromServer });

        this.set( 'model', model );

        model.then( function() {
            self.set( 'metaData', self.store.metadataFor( modelName ));
        });
    },

    /**
     * Reorder the column at *oldIndex* to *newIndex*
     *
     * @method reorderColumn
     * @param {number} oldIndex - The old (current) index of the column
     * @param {number} newIndex - What to change the column index to
     */
    reorderColumn: function( oldIndex, newIndex ) {
        var columns = this.get( 'columns' ),
            elementToMove;

        columns.arrayContentWillChange( oldIndex, 1 );
        elementToMove = columns.splice( oldIndex, 1 )[ 0 ];
        columns.arrayContentDidChange( oldIndex, 1 );

        columns.arrayContentWillChange( newIndex, 0, 1 );
        columns.splice( newIndex, 0, elementToMove );
        columns.arrayContentDidChange( newIndex, 0, 1 );

        this.saveApplicationState();
    },

    /**
     * Reset the grid's columns to their default definitions
     *
     * @method resetColumns
     */
    resetColumns: function() {
        var gridColumnDefs = this.get( 'gridDefinition.columns' ),
            tmpColumns = Ember.A([]);

        gridColumnDefs.forEach( function( columnDef ) {
           tmpColumns.pushObject( Ember.Object.create( columnDef ));
        });

        this.set( 'columns', tmpColumns );
        this.saveApplicationState();
    },

    /**
     * Indicator for if the currently sorted column is in ascending order
     *
     * @property {boolean} sortAscending
     */
    sortAscending: function() {
        return this.getWithDefault( 'columns', [] ).findBy( 'isSorted' ).get( 'sortAscending' );
    }.property( 'columns.@each.sortAscending' ),

    /**
     * Mapped array of properties
     *
     * @property {array} sortProperties
     */
    sortProperties: function() {
        return this.getWithDefault( 'columns', [] ).filterBy( 'isSorted' ).mapBy( 'key' );
    }.property( 'columns.@each.isSorted' ),

    /**
     * Total number of width hints
     *
     * @property {number} totalWidthHints
     */
    totalWidthHints: function() {
        var columns = this.get( 'columns' ),
            totalWidthHints = 0;

        columns.forEach( function( col ) {
            totalWidthHints += col.getWithDefault( 'widthHint', 1 );
        });

        return totalWidthHints;
    }.property( 'columns.@each.widthHint' )
});
