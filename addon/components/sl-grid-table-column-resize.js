import Ember from 'ember';

/** @module sl-components/components/sl-grid-table-column-resize */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * HTML tag name for root element
     *
     * @property {Ember.String} tagName
     * @default  "td"
     */
    tagName: 'td',

    /**
     * Class names array for root element
     *
     * @property {Ember.Array} classNames
     */
    classNames: [ 'sl-grid-table-column-resize' ],

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

    /**
     * Action triggered when mousedown event is triggered
     *
     * @function mouseDown
     * @param    {event} event - The mousedown event
     * @returns  {void}
     */
    mouseDown: function( event ) {
        var tag = this.get( 'tagName' );

        if ( !this.get( 'disabled' ) ) {
            Ember.$( 'body' ).addClass( 'resizing' )
                .on( 'mousemove', this.mouseMoveListener )
                .on( 'mouseup', this.mouseUpListener );

            this.setProperties({
                'global.isResizing' : true,
                startWidth          : Ember.$( this.$().prevAll( tag )[ 0 ] ).width(),
                startX              : event.pageX
            });
        }
    },

    /**
     * Method triggered on mouseenter event
     *
     * @function mouseEnter
     * @returns  {void}
     */
    mouseEnter: function() {
        if ( !this.get( 'global.isResizing' ) ) {
            this.set( 'column.highlight', true );
        }
    },

    /**
     * Method triggered on mouseleave event
     *
     * @function mouseLeave
     * @returns  {void}
     */
    mouseLeave: function() {
        if ( !this.get( 'global.isResizing' ) ) {
            this.set( 'column.highlight', false );
        }
    },

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
     * Change the root element's tagName
     *
     * @function changeTag
     * @observes "init" event
     * @returns  {void}
     */
    changeTag: function() {
        if ( this.get( 'header' ) ) {
            this.set( 'tagName', 'th' );
        }
    }.on( 'init' ),

    /**
     * Setup listeners for mouse events
     *
     * @function setupBoundListeners
     * @observes "didInsertElement" event
     * @returns  {void}
     */
    setupBoundListeners: function() {
        var self = this;

        this.set( 'mouseUpListener', function() {
            Ember.$( 'body' ).removeClass( 'resizing' )
                .off( 'mousemove', self.mouseMoveListener )
                .off( 'mouseup', self.mouseUpListener );

            self.setProperties({
                'column.highlight'  : false,
                'global.isResizing' : false
            });
        });

        this.set( 'mouseMoveListener', function( event ) {
            var startWidth = self.get( 'startWidth' ),
                widthDelta = event.pageX - self.get( 'startX' ),
                finalWidth = startWidth + widthDelta,
                minWidth   = self.getWithDefault( 'column.minWidth', 20 );

            self.set( 'column.width', Math.max( minWidth, finalWidth ) );

            return false;
        });
    }.on( 'didInsertElement' )

    // -------------------------------------------------------------------------
    // Methods

    // -------------------------------------------------------------------------
    // Private Methods

});
