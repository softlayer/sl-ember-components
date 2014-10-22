import Ember from 'ember';

/** @module sl-components/components/sl-grid-table-column-resize */
export default Ember.Component.extend({

    /**
     * HTML tag name for root element
     *
     * @property {string}       tagName
     * @type     {Ember.String}
     * @default  "td"
     */
    tagName: 'td',

    /**
     * Class names array for root element
     *
     * @property {array}       classNames
     * @type     {Ember.Array}
     */
    classNames: [ 'sl-grid-table-column-resize' ],

    /**
     * Class name bindings for root element
     *
     * @property {array}       classNameBindings
     * @type     {Ember.Array}
     */
    classNameBindings: [ 'isHighlighted:columnHighlight' ],

    /**
     * Whether the column is highlighted
     *
     * @property {boolean} isHighlighted
     * @type     {boolean}
     * @default false
     */
    isHighlighted: Ember.computed.alias( 'column.highlight' ),

    /**
     * Grid table column global hash
     *
     * @property {object} global
     * @type     {Ember.Object}
     */
    global: {
        isResizing: false
    },

    /**
     * Starting x offset
     *
     * @property {number} startX
     * @type     {number}
     * @default  0
     */
    startX: 0,

    /**
     * Action triggered when mousedown event is triggered
     *
     * @function mouseDown
     * @argument {event} event - The mousedown event
     * @return   {void}
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
     * @return   {void}
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
     * @return   {void}
     */
    mouseLeave: function() {
        if ( !this.get( 'global.isResizing' ) ) {
            this.set( 'column.highlight', false );
        }
    },

    /**
     * Change the root element's tagName
     *
     * @function changeTag
     * @observes init event
     * @return   {void}
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
     * @observes didInsertElement event
     * @return   {void}
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
});
