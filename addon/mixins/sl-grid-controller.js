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
        reorderColumn( oldIndex, newIndex ) {
            this.reorderColumn( oldIndex, newIndex );
        },

        /**
         * Trigger resetting of all columns to their default positions
         *
         * @function actions.resetColumns
         * @returns  {void}
         */
        resetColumns() {
            this.resetColumns();
        },

        /**
         * Sort the specified column
         *
         * @function actions.sortColumn
         * @param   {Ember.Object} column - The column to sort
         * @returns {void}
         */
        sortColumn( column ) {
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
        toggleColumnVisibility( columnName ) {
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
    initialize: Ember.on( 'init', function() {
        this.loadGridDefinition();
    }),

    /**
     * Run when columns' widths are changed
     *
     * @function observeColumnWidths
     * @observes columns.@each.width
     * @returns  {void}
     */
    onColumnWidthsChange: Ember.observer( 'columns.@each.width', function() {
        Ember.run.debounce( this, 'trigger', 'gridStateChanged', 500 );
    }),

    /**
     * Run when itemCountPerPage is changed
     *
     * @function observeItemCountPerPage
     * @observes itemCountPerPage
     * @returns  {void}
     */
    onItemCountPerPageChange: Ember.observer( 'itemCountPerPage', function() {
        this.trigger( 'gridStateChanged' );
    }),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * The effective total number of columns
     *
     * @property columnCount
     * @observes columns.length
     * @returns  {number}
     */
    columnCount: Ember.computed.alias( 'columns.length' ),

    /**
     * The number of visible columns - used for layout
     *
     * @property visibleColumns
     * @observes columns.@each.hidden
     * @return {number}
     */
     visibleColumns: Ember.computed( 'columns.@each.hidden', function() {
        return this.get( 'columns' ).rejectBy( 'hidden' ).length;
     }),

    /**
     * Placeholder for a grid's definition object
     *
     * @function gridDefinition
     * @default  {function} empty
     * @returns  {Ember.Object}
     */
    gridDefinition: null,

    /**
     * Loads the grid definition
     *
     * Override this function if you want to do any localstorage persistence
     *
     * @function loadGridDefinition
     * @return {void}
     */
    loadGridDefinition() {
        var definitions = this.get( 'gridDefinition' ),
            grid        = Ember.Object.create(),
            columns     = Ember.get( definitions, 'columns' ),
            options     = Ember.get( definitions, 'options' );

        Ember.assert(
            'Grid definition requires a `columns` array',
            Ember.typeOf( columns  ) === 'array' && columns.length
        );

        Ember.assert(
            'Grid definition requires a `options` object',
            Ember.typeOf( options ) === 'object'
        );

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
                    setting = [];

                    // We will only add elements that exist on the definition
                    definition.forEach( function( item ) {
                        Ember.assert(
                            'Items in arrays on the `definition` must be objects',
                            Ember.typeOf( item ) === 'object' || Ember.typeOf( item ) === 'object'
                        );

                        setting.push( Ember.Object.create( item ) );
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
    reorderColumn( oldIndex, newIndex ) {
        var columns = Ember.A( this.get( 'columns' ) ),
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
    resetColumns() {
        var gridColumnDefs = this.get( 'gridDefinition.columns' ),
            tmpColumns     = [];

        gridColumnDefs.forEach( function( columnDef ) {
           tmpColumns.push( Ember.Object.create( columnDef ) );
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
    sortAscending: Ember.computed( 'columns.@each.sortAscending', function() {
        var sortedColumn = Ember.A(
            Ember.A(
                this.getWithDefault( 'columns', [] )
            ).findBy( 'isSorted' )
        );

        if ( sortedColumn.get( 'sortAscending' ) ) {
            return sortedColumn;
        }
    }),

    /**
     * Mapped array of properties
     *
     * @function sortProperties
     * @observes columns.@each.isSorted
     * @returns  {Ember.Array}
     */
    sortProperties: Ember.computed( 'columns.@each.isSorted', function() {
        return Ember.A(
            Ember.A(
                Ember.A(
                    this.getWithDefault( 'columns', [] )
                ).filterBy( 'isSorted' )
            ).mapBy( 'key' )
        );
    }),

    /**
     * An array of total fixed width values
     *
     * @function totalFixedWidths
     * @observes columns.@each.fixedWidth
     * @returns  {Ember.Array}
     */
    totalFixedWidths: Ember.computed( 'columns.@each.fixedWidth', function() {
        return Ember.A( this.get( 'columns' ) ).reduce( function( prev, item ) {
            return prev + parseInt( item.getWithDefault( 'fixedWidth', 0 ) );
        }, 0 );
    }),

    /**
     * Total number of width hints
     *
     * @function totalWidthHints
     * @observes columns.@each.widthHint
     * @returns  {number}
     */
    totalWidthHints: Ember.computed( 'columns.@each.widthHint', function() {
        var columns = this.get( 'columns' ),
            totalWidthHints = 0;

        columns.forEach( function( col ) {
            totalWidthHints += col.getWithDefault( 'widthHint', 1 );
        });

        return totalWidthHints;
    })
});
