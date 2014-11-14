import Ember from 'ember';

/**
 * @module mixins
 * @class  sl-grid-controller
 */
export default Ember.Mixin.create( Ember.Evented, {


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
            Ember.assert( 'column is sortable', Ember.get( column, 'sortable' ) );
            if ( column.get( 'isSorted' ) ) {
                column.toggleProperty( 'sortAscending' );
            } else {
                this.get( 'columns' ).setEach( 'isSorted', false );
                column.set( 'isSorted', true );
                column.set( 'sortAscending', column.getWithDefault( 'sortAscending', true ) );
            }
            //make sure cp recomputes, stupid sortable mixin...
            this.get( 'sortAscending' );
            
            this.trigger( 'gridStateChanged' );
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

            this.trigger( 'gridStateChanged' );
        }
    },

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

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
     * Call on controller initialization
     *
     * @function initialize
     * @observes "init" event
     * @returns  {void}
     */
    initialize: function() {
        this.loadGridDefinition();
    }.on( 'init' ),

    /**
     * Run when columns' widths are changed
     *
     * @function observeColumnWidths
     * @observes columns.@each.width
     * @returns  {void}
     */
    onColumnWidthsChange: function() {
        Ember.run.debounce( this, 'trigger', 'gridStateChanged', 500 );
    }.observes( 'columns.@each.width' ),

    /**
     * Run when itemCountPerPage is changed
     *
     * @function observeItemCountPerPage
     * @observes itemCountPerPage
     * @returns  {void}
     */
    onItemCountPerPageChange: function() {
        this.trigger( 'gridStateChanged' );
    }.observes( 'itemCountPerPage' ),

    // -------------------------------------------------------------------------
    // Methods

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
            'sl-grid-controller: you must define the `gridDefintion` property on your controller.',
            false
        );
    }.property(),

    /**
     * Loads the grid definition
     *
     * Override this function if you want to do any localstorage persistence
     *
     * @function loadGridDefinition
     * @return {void}
     */
    loadGridDefinition: function(){
        var definitions = this.get( 'gridDefinition' ),
            grid = Ember.Object.create(),
            columns = Ember.get( definitions, 'columns' ),
            options = Ember.get( definitions, 'options' );

        Ember.assert( 'Grid definition requires a `columns` array', 
            Ember.typeOf( columns  ) === 'array'  &&
            columns.length );

        Ember.assert( 'Grid definition requires a `options` object', 
            Ember.typeOf( options  ) === 'object' );        

         Ember.keys( definitions ).forEach( function( key ) {
            var definition = Ember.get( definitions, key ),
                setting;
                

            switch( Ember.typeOf( definition ) ) {
                case 'object':
                case 'instance':
                    // Need to make a copy of the definition so we don't
                    // corrupt the original.
                    setting = Ember.Object.create( definition );
                    break;

                case 'array':
                    setting = Ember.A([]);

                    // We will only add elements that exist on the definition
                    definition.forEach( function( item ) {
                        Ember.assert( 'Items in arrays on the `definition` must be objects',
                            Ember.typeOf( item ) === 'object' || Ember.typeOf( item ) === 'object' );

                        setting.pushObject( Ember.Object.create( item ) );
                    });

                    break;

                default:
                    setting = definition;

            }
            Ember.set( grid, key, setting );
        });
        this.set( 'grid',  grid );  
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

        Ember.assert( 'oldIndex exists', oldIndex < columns.length );
        Ember.assert( 'newIndex exists', newIndex < columns.length );

        columns.arrayContentWillChange( oldIndex, 1 );
        elementToMove = columns.splice( oldIndex, 1 )[ 0 ];
        columns.arrayContentDidChange( oldIndex, 1 );

        columns.arrayContentWillChange( newIndex, 0, 1 );
        columns.splice( newIndex, 0, elementToMove );
        columns.arrayContentDidChange( newIndex, 0, 1 );

        this.trigger( 'gridStateChanged' );
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
        this.trigger( 'gridStateChanged' );
    },

    /**
     * Indicator for if the currently sorted column is in ascending order
     *
     * @function sortAscending
     * @observes columns.@each.sortAscending
     * @returns  {boolean}
     */
    sortAscending: function() {
        var sortedColumn = this.getWithDefault( 'columns', [] ).findBy( 'isSorted' );

        return sortedColumn ? sortedColumn.get( 'sortAscending' ) : undefined;
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
