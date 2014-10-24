import Ember from 'ember';
import SlApplicationState from './sl-application-state-controller';

/**
 * @module mixins
 * @class sl-grid-controller
 */
export default Ember.Mixin.create( SlApplicationState, {


    // -------------------------------------------------------------------------
    // Dependencies

    /**
     * Controllers that this controller needs
     *
     * @property {Ember.Array} needs
     */
    needs: [ 'user' ],

    // -------------------------------------------------------------------------
    // Attributes

    // -------------------------------------------------------------------------
    // Actions

    /**
     * Controller actions hash
     *
     * @property {Ember.Object} actions
     */
    actions: {

        /**
         * Trigger reload of the model
         *
         * @function actions.reload
         * @returns  {void}
         */
        reload: function() {
            this.reloadModel( true );
        },

        /**
         * Reorder column *oldIndex* to *newIndex*
         *
         * @function actions.reorderColumn
         * @param   {number} oldIndex - The existing index of the column to reorder
         * @param   {number} newIndex - The new index number to move the column to
         * @returns {void}
         */
        reorderColumn: function( oldIndex, newIndex ) {
            this.reorderColumn( oldIndex, newIndex );
        },

        /**
         * Trigger resetting of all columns to their default positions
         *
         * @function actions.resetColumns
         * @returns  {void}
         */
        resetColumns: function() {
            this.resetColumns();
        },

        /**
         * Sort the specified column
         *
         * @function actions.sortColumn
         * @param   {Ember.Object} column - The column to sort
         * @returns {void}
         */
        sortColumn: function( column ) {
            if ( column.get( 'isSorted' ) ) {
                column.toggleProperty( 'sortAscending' );
            } else {
                this.get( 'columns' ).setEach( 'isSorted', false );
                column.set( 'isSorted', true );
                column.set( 'sortAscending', column.getWithDefault( 'sortAscending', true ) );
            }
            this.saveApplicationState();
        },

        /**
         * Toggle the visibility of the column with specified column name
         *
         * @function actions.toggleColumnVisibility
         * @param   {Ember.String} columnName - The name of the column to toggle
         * @returns {void}
         */
        toggleColumnVisibility: function( columnName ) {
            var foundColumn = this.get( 'columns' ).findBy( 'key', columnName );

            if ( foundColumn ) {
                foundColumn.toggleProperty( 'hidden' );
            }

            this.saveApplicationState();
        },

        /**
         * Trigger toggle of filter panel visibility
         *
         * @function actions.toggleFilter
         * @returns  {void}
         */
        toggleFilter: function() {
            this.toggleProperty( 'showFilterPanel' );
        }
    },

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Alias for the grid definition
     *
     * @property {mixed} applicationStateDefinition
     */
    applicationStateDefinition: Ember.computed.alias( 'gridDefinition' ),

    /**
     * Alias to the grid
     *
     * @property {Ember.Object} applicationStateVariable
     */
    applicationStateVariable: Ember.computed.alias( 'grid' ),

    /**
     * Alias to the grid's columns
     *
     * @property {Ember.Array} columns
     */
    columns: Ember.computed.alias( 'grid.columns' ),

    /**
     * Properties of the filter panel
     *
     * @property {Ember.Array} filterProperties
     * @default  []
     */
    filterProperties: [],

    /**
     * The controller's grid object
     *
     * @property {Ember.Object} grid
     * @default  {Ember.Object} fresh instantiation
     */
    grid: Ember.Object.create(),

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
     * Alias to the grid's options
     *
     * @property {Ember.Object} options
     */
    options: Ember.computed.alias( 'grid.options' ),

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Run when application state is loaded
     *
     * @function applicationStateDidLoad
     * @observes applicationStateDidLoad
     * @returns  {void}
     */
    applicationStateDidLoad: function() {
        this.notifyPropertyChange( 'sortProperties' );
        Ember.run.once( this, 'reloadModel' );
    }.on( 'applicationStateDidLoad' ),

    /**
     * Call on controller initialization
     *
     * @function initialize
     * @observes "init" event
     * @returns  {void}
     */
    initialize: function() {
        this.loadApplicationState();
    }.on( 'init' ),

    /**
     * Run when columns' widths are changed
     *
     * @function observeColumnWidths
     * @observes columns.@each.width
     * @returns  {void}
     */
    onColumnWidthsChange: function() {
        Ember.run.debounce( this, this.saveApplicationState, 500 );
    }.observes( 'columns.@each.width' ),

    /**
     * Run when itemCountPerPage is changed
     *
     * @function observeItemCountPerPage
     * @observes itemCountPerPage
     * @returns  {void}
     */
    onItemCountPerPageChange: function() {
        this.saveApplicationState();
    }.observes( 'itemCountPerPage' ),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Namespace based on the model name
     *
     * @property applicationStateNamespace
     * @returns  {Ember.String}
     */
    applicationStateNamespace: function() {
        return this.store.pluralize( this.get( 'modelName' ) );
    }.property( 'modelName' ),

    /**
     * Arranged copy of the controller's content
     *
     * @property arrangedContent
     * @observes content, currentPage, filterProperties.@each, itemCountPerPage, sortAscending, sortProperties.@each
     * @returns  {Ember.Object}
     */
    arrangedContent: function() {
        var filterProperties = this.get( 'filterProperties' ),
            arrangedContent  = this._super();

        return filterProperties.reduce( function( previousValues, filterProperty ) {
            var filterRegex = new RegExp( '.*' + filterProperty.value + '.*' );

            if ( filterProperty.keyArray ) {
                return previousValues.filter( function( item ) {
                    return item.get( filterProperty.key ).contains( filterProperty.value );
                });
            }

            return previousValues.filter( function( item ) {
                return filterRegex.test( item.get( filterProperty.key ) );
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
     * @property columnCount
     * @observes columns.length
     * @returns  {number}
     */
    columnCount: function() {
        return this.get( 'columns.length' ) +
            (
                this.get( 'columns.length' ) -
                this.get( 'columns' ).filterBy( 'noColumnResize' ).length
            ) +
            ( this.get( 'options.rowExpander' ) ? 1 : 0 ) +
            ( this.get( 'options.actionsColumn' ) ? 1 : 0 );
    }.property( 'columns.length' ),

    /**
     * Placeholder for a grid's definition object
     *
     * @function gridDefinition
     * @default  {function} empty
     * @returns  {Ember.Object}
     */
    gridDefinition: function() {
        Ember.assert(
            'sl-grid-controller: you must define the `grid` property on your controller.',
            false
        );
    }.property(),

    /**
     * Reload the model for this controller with the current paging preferences
     *
     * Override this function with your own model reloading logic if need be
     *
     * @function reloadModel
     * @param  {} fromServer
     * @return {void}
     */
    reloadModel: function( fromServer ) {
        var modelName = this.get( 'modelName' ),
            self      = this
            model;

        model = this.store.find( modelName, { reload: fromServer } );

        this.set( 'model', model );

        model.then( function() {
            self.set( 'metaData', self.store.metadataFor( modelName ) );
        });
    },

    /**
     * Reorder the column at *oldIndex* to *newIndex*
     *
     * @function reorderColumn
     * @param   {number} oldIndex - The old (current) index of the column
     * @param   {number} newIndex - What to change the column index to
     * @returns {void}
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
     * @function resetColumns
     * @returns {void}
     */
    resetColumns: function() {
        var gridColumnDefs = this.get( 'gridDefinition.columns' ),
            tmpColumns     = [];

        gridColumnDefs.forEach( function( columnDef ) {
           tmpColumns.pushObject( Ember.Object.create( columnDef ) );
        });

        this.set( 'columns', tmpColumns );
        this.saveApplicationState();
    },

    /**
     * Indicator for if the currently sorted column is in ascending order
     *
     * @function sortAscending
     * @observes columns.@each.sortAscending
     * @returns  {boolean}
     */
    sortAscending: function() {
        return this.getWithDefault( 'columns', [] ).findBy( 'isSorted' ).get( 'sortAscending' );
    }.property( 'columns.@each.sortAscending' ),

    /**
     * Mapped array of properties
     *
     * @function sortProperties
     * @observes columns.@each.isSorted
     * @returns  {Ember.Array}
     */
    sortProperties: function() {
        return this.getWithDefault( 'columns', [] ).filterBy( 'isSorted' ).mapBy( 'key' );
    }.property( 'columns.@each.isSorted' ),

    /**
     * Total number of width hints
     *
     * @function totalWidthHints
     * @observes columns.@each.widthHint
     * @returns  {number}
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
