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
        reorderColumn: function( column, newIndex ){
            var columns = this.get( 'columns' ),
                oldIndex = columns.indexOf( column ),
                el = this.get( 'gridTable' ).$(),
                elPos = el.position(),
                left = elPos.left,
                top = elPos.top,
                width = el.outerWidth(),
                height = el.outerHeight() ;

            columns.splice( newIndex, 0, columns.splice( oldIndex, 1)[0] );
            this.notifyPropertyChange( 'columns' );
            this.get( 'shadowMask' ).setMask( top, left, width, height );
            this.set( 'showShadowMask', true );
            Ember.run.once( this, this.get( 'gridTable' ).rerender );
            //Ember.run.later( this, function(){ this.set( 'showShadowMask', false ); }, 3000 );
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
    }.property( 'columns.length'),
    
    didInsertElement: function(){
        console.log( 'sl-grid inserted' );
    },

    mask: Ember.View.extend({
        viewName: 'shadowMask',
        tagName: 'div',
        classNames: [ 'shadow-mask' ],
        attributeBindings: [ 'style' ],
        style: '',
        display: Ember.computed.alias( 'parentView.showShadowMask' ),
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        
        styleObserver: function(){
            var width = 'width: '+this.get( 'width' )+'px;',
                height = 'height: '+this.get( 'height' )+'px;',
                left = 'left: '+this.get( 'left' )+';',
                top = 'top: '+this.get( 'top' )+';',
                string = this.get( 'display' ) ?  'display:block;'+width+height+left+top  : '';

            this.set( 'style', string );
        }.observes( 'display', 'top', 'left', 'width', 'height' ),
        
        setMask: function( top, left, width, height ){
            this.set( 'top', top );
            this.set( 'left', left );
            this.set( 'width', width );
            this.set( 'height', height );
        },

        didInsertElement: function(){
            console.log( 'mask inserted' );
        }
    }),

    table: Ember.View.extend({
        viewName: 'gridTable',
        tagName: 'table',
        classNameBindings: [ 'isRerendering:rerendering' ],
        classNames: [ 'table', 'table-stripped' ],
        didInsertElement: function(){
            console.log( 'table inserted' );
            this.get( 'parentView' ).set( 'showShadowMask', false );
        }
    })
});
