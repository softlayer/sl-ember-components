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

        if( ! this.get( 'column.resizable' ) ){
            return;
        }

        this.set( 'mouseDownListener', Ember.run.bind( this, function( event ) {
            //make sure the mouse has already moved to the highlight region
            if ( !this.get( 'disabled' ) &&  this.get( 'column.highlight' )) {

                this.$().off( 'mousemove', this.mouseMoveListenerHighlight );
                this.$().off( 'mouseleave', this.mouseLeaveListenerHighlight );

                Ember.$( 'body' ).addClass( 'resizing' )
                    .on( 'mouseleave', this.mouseLeaveListenerResize )
                    .on( 'mousemove', this.mouseMoveListenerResize )
                    .on( 'mouseup', this.mouseUpListener );

                this.setProperties({
                    'global.isResizing' : true,
                    startWidth          : this.$().width(),
                    startX              : event.pageX
                });
            }
        }));

        this.set( 'mouseLeaveListenerHighlight', Ember.run.bind( this, function() {
            if ( !this.get( 'global.isResizing' ) ) {
                this.set( 'column.highlight', false );
            }
        }));

        this.set( 'mouseLeaveListenerResize', Ember.run.bind( this, function() {
            Ember.$( 'body' ).removeClass( 'resizing' )
                .off( 'mouseleave', this.mouseLeaveListenerResize )
                .off( 'mousemove', this.mouseMoveListenerResize )
                .off( 'mouseup',  this.mouseUpListener );

            this.setProperties({
                'column.width'      : this.get( 'startWidth'),
                'column.highlight'  : false,
                'global.isResizing' : false
            });

            this.$().on( 'mousemove', this.mouseMoveListenerHighlight );
            this.$().on( 'mouseleave', this.mouseLeaveListenerHighlight );

            //browser will revert to user selection, this will clear it
            Ember.run.next( this, function(){
                window.getSelection().removeAllRanges();
            });
        }));

        this.set( 'mouseUpListener', Ember.run.bind( this, function() {
            Ember.$( 'body' ).removeClass( 'resizing' )
                .off( 'mouseleave', this.mouseLeaveListenerResize )
                .off( 'mousemove', this.mouseMoveListenerResize )
                .off( 'mouseup', this.mouseUpListener );

            this.$().on( 'mousemove', this.mouseMoveListenerHighlight );
            this.$().on( 'mouseleave', this.mouseLeaveListenerHighlight );

            this.setProperties({
                'column.highlight'  : false,
                'global.isResizing' : false
            });
        }));

        this.set( 'mouseMoveListenerHighlight', Ember.run.bind( this, function( event ){
            var offset = this.$().offset(),
                offsetLeft = offset.left,
                outerWidth = this.$().outerWidth(),
                rightBorder = offsetLeft + outerWidth,
                resizeZone = rightBorder - 8,
                mouseX = event.pageX;

            if( this.get( 'global.isResizing') ){
                return;
            }

            if( this.get( 'column.highlight' ) &&
                 ( mouseX < resizeZone || mouseX > rightBorder) ) {

                this.set( 'column.highlight', false );

            } else if ( !this.get( 'global.isResizing' ) &&
                 ( mouseX >= resizeZone && mouseX <= rightBorder) ) {

                this.set( 'column.highlight', true );
            }
        }));

        this.set( 'mouseMoveListenerResize', Ember.run.bind( this, function( event ) {
            var startWidth = this.get( 'startWidth' ),
                widthDelta = event.pageX - this.get( 'startX' ),
                finalWidth = startWidth + widthDelta,
                minWidth   = this.getWithDefault( 'column.minWidth', 20 );

            this.set( 'column.width', Math.max( minWidth, finalWidth ) );

            return false;
        }));

        this.$()
            .on( 'mousedown', this.mouseDownListener )
            .on( 'mousemove', this.mouseMoveListenerHighlight )
            .on( 'mouseleave', this.mouseLeaveListenerHighlight );


    }.on( 'didInsertElement' ),

    /**
     * Removes any event listeners that might have been added
     *
     * @function removeBoundEventListeners
     * @observes "willClearRender" event
     * @returns  {void}
     */
    removeBoundEventListeners: function(){
        this.$()
            .off( 'mousedown', this.mouseDownListener )
            .off( 'mousemove', this.mouseMoveListenerHighlight )
            .off( 'mouseleave', this.mouseLeaveListenerHighlight );

        //just in case
        Ember.$( 'body' )
            .off( 'mouseleave', this.mouseLeaveListenerResize )
            .off( 'mousemove', this.mouseMoveListenerResize )
            .off( 'mouseup',  this.mouseUpListener );

    }.on( 'willClearRender' )

    // -------------------------------------------------------------------------
    // Methods
});
