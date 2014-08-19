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
        sortColumn: function( column ){
            this.triggerAction({
                action: 'sortColumn',
                actionContext: column
            });
        },
        changePerPage: function( perPage ){
            this.triggerAction({
                action: 'changePerPage',
                actionContext: perPage
            });
        },
        changePage: function( page ){
            this.triggerAction({
                action: 'changePage',
                actionContext: page
            });
        },
        reload: function(){
            this.triggerAction({
                action: 'reload'
            });
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

    columns: Ember.computed.alias( 'grid.columns' ),
    options: Ember.computed.alias( 'grid.options' ),
    translations: Ember.computed.alias( 'grid.translations' ),
    
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

    columnCount: function(){
        return this.get( 'columns.length' ) +
            ( this.get( 'columns.length' ) - this.get( 'columns' ).filterBy( 'noColumnResize' ).length )+
            ( this.get( 'options.rowExpander' ) ? 1 : 0 )+
            ( this.get( 'options.actionsColumn' ) ? 1 : 0 );
    }.property( 'columns.length')
});
