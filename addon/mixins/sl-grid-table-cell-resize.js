import Ember from 'ember';

/**
 * @module mixins
 * @class  sl-grid-table-cell-resize
 */
export default Ember.Mixin.create({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * Bindings for the base element's attributes
     *
     * @property {Ember.Array} attributeBindings
     */
    attributeBindings: [ 'style' ],

    /**
     * Class name bindings for root element
     *
     * @property {Ember.Array} classNameBindings
     */
    classNameBindings: [ 'isHighlighted:columnHighlight' ],
    
    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Grid table column global hash
     *
     * @property {Ember.Object} global
     */
    global: {
        isResizing: false
    },

    /**
     * Whether the column is highlighted
     *
     * @property {boolean} isHighlighted
     * @default  false
     */
    isHighlighted: Ember.computed.alias( 'column.highlight' ),

    /**
     * Starting x offset
     *
     * @property {number} startX
     * @default  0
     */
    startX: 0,


    // -------------------------------------------------------------------------
    // Observers

    /**
     * Setup listeners for mouse events
     *
     * @function setupBoundListeners
     * @observes "didInsertElement" event
     * @returns  {void}
     */
    setupBoundListeners: function() {
        var self = this;

        if( ! this.get( 'column.resizable' ) ){
            return;
        }

        this.set( 'mouseDownListener', function( event ) {

            if ( !self.get( 'disabled' ) ) {
                
                self.$().off( 'mousemove', self.mouseMoveListenerHighlight );
                self.$().off( 'mouseleave', self.mouseLeaveListenerHighlight );

                Ember.$( 'body' ).addClass( 'resizing' )
                    .on( 'mouseleave', self.mouseLeaveListenerResize )
                    .on( 'mousemove', self.mouseMoveListenerResize )
                    .on( 'mouseup', self.mouseUpListener );

                self.setProperties({
                    'global.isResizing' : true,
                    startWidth          : self.$().width(),
                    startX              : event.pageX
                });
            }
        });

        this.set( 'mouseLeaveListenerHighlight', function() {
            if ( !self.get( 'global.isResizing' ) ) {
                self.set( 'column.highlight', false );
            }
        });

        this.set( 'mouseLeaveListenerResize', function() {
            Ember.$( 'body' ).removeClass( 'resizing' )
                .off( 'mouseleave', self.mouseLeaveListenerResize )
                .off( 'mousemove', self.mouseMoveListenerResize )
                .off( 'mouseup',  self.mouseUpListener );

            self.setProperties({
                'column.width'      : self.get( 'startWidth'),
                'column.highlight'  : false,
                'global.isResizing' : false
            });
        
            self.$().on( 'mousemove', self.mouseMoveListenerHighlight );
            self.$().on( 'mouseleave', self.mouseLeaveListenerHighlight );

            //browser will revert to user selection, this will clear it
            Ember.run.next( this, function(){ 
                window.getSelection().removeAllRanges();
            });
        });

        this.set( 'mouseUpListener', function() {
            Ember.$( 'body' ).removeClass( 'resizing' )
                .off( 'mouseleave', self.mouseLeaveListenerResize )
                .off( 'mousemove', self.mouseMoveListenerResize )
                .off( 'mouseup', self.mouseUpListener );

            self.$().on( 'mousemove', self.mouseMoveListenerHighlight );
            self.$().on( 'mouseleave', self.mouseLeaveListenerHighlight );

            self.setProperties({
                'column.highlight'  : false,
                'global.isResizing' : false
            });
        });

        this.set( 'mouseMoveListenerHighlight', function( event ){
            var offset = self.$().offset(),
                offsetLeft = offset.left,
                outerWidth = self.$().outerWidth(),
                rightBorder = offsetLeft + outerWidth,
                resizeZone = rightBorder - 8,
                mouseX = event.pageX;
            
            if( self.get( 'global.isResizing') ){
                return;
            }

            if( self.get( 'column.highlight' ) && 
                 ( mouseX < resizeZone || mouseX > rightBorder) ) {

                self.set( 'column.highlight', false );

            } else if ( !self.get( 'global.isResizing' ) && 
                 ( mouseX >= resizeZone && mouseX <= rightBorder) ) {

                self.set( 'column.highlight', true );
            }
        });

        this.set( 'mouseMoveListenerResize', function( event ) {
            var startWidth = self.get( 'startWidth' ),
                widthDelta = event.pageX - self.get( 'startX' ),
                finalWidth = startWidth + widthDelta,
                minWidth   = self.getWithDefault( 'column.minWidth', 20 );

            self.set( 'column.width', Math.max( minWidth, finalWidth ) );

            return false;
        });
        
        this.$().on( 'mousedown', this.mouseDownListener );
        this.$().on( 'mousemove', this.mouseMoveListenerHighlight );
        this.$().on( 'mouseleave', this.mouseLeaveListenerHighlight );


    }.on( 'didInsertElement' )

    // -------------------------------------------------------------------------
    // Methods
});
