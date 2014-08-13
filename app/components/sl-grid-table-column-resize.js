import Ember from 'ember';

export default Ember.Component.extend({
    classNames: [ 'sl-grid-table-column-resize' ],
    classNameBindings: [ 'isHighlighted:columnHighlight' ],

    isHighlighted: Ember.computed.alias( 'column.highlight' ),

    changeTag: function(){
        if( this.get( 'header' ) ){
            this.set( 'tagName', 'th' );
        }
    }.on('init'),

    tagName: 'td',

    startX: 0,

    global: {
        isResizing: false
    },

    mouseEnter: function(){
        if( ! this.get( 'global.isResizing' ) ){
            this.set( 'column.highlight', true );
        }
    },

    mouseLeave: function(){
        if( ! this.get( 'global.isResizing' ) ){
            this.set( 'column.highlight', false );
        }
    },
    mouseDown: function(e){
        var tag = this.get( 'tagName' );

        if( ! this.get( 'disabled' ) ) {
            this.set( 'global.isResizing', true );
            $('body').addClass('resizing');
            $('body').on( 'mousemove', this.mouseMoveListener );
            $('body').on( 'mouseup', this.mouseUpListener );

            this.set('startX', e.pageX);
            this.set('startWidth',  $( this.$().prevAll(tag)[0] ).width());

        }
    },

    setUpBoundListeners: function(){
        this.set( 'mouseUpListener', Ember.run.bind( this, function(){
            $('body').removeClass('resizing');
            $('body').off( 'mousemove', this.mouseMoveListener );
            $('body').off( 'mouseup', this.mouseUpListener );
            this.set( 'column.highlight', false );
            this.set( 'global.isResizing', false );
        }));
        
        this.set( 'mouseMoveListener', Ember.run.bind( this, function( e ){
            var startWidth = this.get( 'startWidth' ),
                widthDelta = e.pageX - this.get('startX'),
                finalWidth = startWidth + widthDelta,
                minWidth = this.getWithDefault( 'column.minWidth', 20 );

            if( finalWidth < minWidth ){
                finalWidth = minWidth;
            }
            this.set( 'column.width', finalWidth );
            return false;
        }));
    }.on( 'init' )
});
