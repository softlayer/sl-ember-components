import Ember from 'ember';
import TooltipEnabled from '../mixins/tooltip-enabled';

/**
 * @module components
 * @class sl-grid
 */
export default Ember.Component.extend( TooltipEnabled, {
inserted:function(){
	console.log('sl-grid:',this);
}.on('didInsertElement'),
    /**
     * Object of action functions
     * @property {object} actions
     */
    actions: {
        /**
         * Action triggered by clicking a column header
         * @method clickColumnHeader
         * @param {object} column
         */
        clickColumnHeader: function ( column ) {
            if ( column.name === this.get( 'sortColumn' )) {
                this.toggle( 'sortAscending' );
            } else {
                this.set( 'sortColumn', column.name );
                this.set( 'sortAscending', true );
            }
        },
        
        changePage: function( page ){
            this.get( 'targetObject' ).send( 'changePage', page );
        }
    },

    /**
     * Class names for the component
     * @property {array} classNames
     */
    classNames: [ 'sl-grid' ],

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
     * indicates whether the promise proxy has fulfilled yet
     * @return {Boolean} [description]
     */
    isLoading: function(){
        if( this.get( 'rows.model.isPending' ) ){
            return true;
        }

        return false;

    }.property( 'rows.model.isPending' ),

    /**
     * properties for paging info and actions
     * @return {object} 
     */
    pagingData: function(){
        var pageNumber = this.get( 'currentPage')-1,
            perPage = this.get( 'itemCountPerPage' ),
            metadata = this.get( 'metaData' ),
            totalPages = this.getWithDefault( 'metaData.totalPages', 1),
            firstRow = pageNumber * perPage + 1;

        return metadata ? {
            pageFirstRow: firstRow,
            pageLastRow: firstRow + metadata.pageCount -1,
            totalRows: metadata.totalCount,
            totalPages: totalPages,
            modelNames: metadata.modelNames
        } : null;
    }.property( 'metaData' ),

    firstLinkDisabled: Ember.computed.equal( 'currentPage', 1 ),

    prevLinkDisabled: Ember.computed.equal( 'currentPage', 1 ),

    nextLinkDisabled: Ember.computed.equal( 'currentPage', 'pagingData.totalPages' ),

    lastLinkDisabled: Ember.computed.equal( 'currentPage', 'pagingData.totalPages' ),

    currentPageInput: Ember.computed.oneWay( 'currentPage' ),

    perPageOptions: Ember.A([                
        25,
        50,
        100
    ]),

    columnCount: function(){
        return this.get( 'columns.length' ) +
            ( this.get( 'columns.length' ) - this.get( 'columns' ).mapBy( 'noColumnResize' ).length )+
            ( this.get( 'options.rowExpander' ) ? 1 : 0 )+
            ( this.get( 'options.actionsColumn' ) ? 1 : 0 );
    }.property( 'columns.length')
});
