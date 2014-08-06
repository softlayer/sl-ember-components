import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';

/**
 * @module components
 * @class sl-grid
 */
export default Ember.Component.extend( TooltipEnabled, {
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
            this.sendAction( 'changePage', page );
        },

        reload: function(){
            this.sendAction( 'reload' );
        },
        
        bubbleAction: function(){
            //arguments is not an array - need to extract action and cast the rest of it
            var action = Array.prototype.shift.call(arguments),
                args = Array.prototype.map.call(arguments, function(arg){return arg;});

            this.triggerAction({
                action: action,
                actionContext: args
            });
        }
    },

    changePage: 'changePage',
    reload: 'reload',

    /**
     * Class names for the component
     * @property {array} classNames
     */
    classNames: [ 'sl-grid' ],

    
    /**
     * indicates whether the promise proxy has fulfilled yet
     * @return {Boolean} [description]
     */
    isLoading: Ember.computed.alias( 'rows.model.isPending' ),

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

    perPageOptions: Ember.A([
        25,
        50,
        100
    ]),

    columnCount: function(){
        return this.get( 'columns.length' ) +
            ( this.get( 'columns.length' ) - this.get( 'columns' ).filterBy( 'noColumnResize' ).length )+
            ( this.get( 'options.rowExpander' ) ? 1 : 0 )+
            ( this.get( 'options.actionsColumn' ) ? 1 : 0 );
    }.property( 'columns.length')
});
