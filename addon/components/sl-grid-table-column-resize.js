import Ember from 'ember';

/**
 * @module components
 * @class sl-grid-table-column-resize
 */
export default Ember.Component.extend({

    /**
     * Change the root element's tagName
     *
     * @method changeTag
     */
    changeTag: function() {
        if ( this.get( 'header' )) {
            this.set( 'tagName', 'th' );
        }
    }.on( 'init' ),

    /**
     * Class names array for root element
     *
     * @property {array} classNames
     */
    classNames: [ 'sl-grid-table-column-resize' ],

    /**
     * Class name bindings for root element
     *
     * @property {array} classNameBindings
     */
    classNameBindings: [ 'isHighlighted:columnHighlight' ],

    /**
     * Grid table column global hash
     *
     * @property {object} global
     */
    global: {
        isResizing: false
    },

    /**
     * Whether the column is highlighted
     *
     * @property {boolean} isHighlighted
     * @default false
     */
    isHighlighted: Ember.computed.alias( 'column.highlight' ),

    /**
     * Action triggered when mousedown event is triggered
     *
     * @method mouseDown
     * @param {event} event - The mousedown event
     */
    mouseDown: function( event ) {
        var tag = this.get( 'tagName' );

        if ( !this.get( 'disabled' )) {
            Ember.$( 'body' ).addClass( 'resizing' )
                .on( 'mousemove', this.mouseMoveListener )
                .on( 'mouseup', this.mouseUpListener );

            this.setProperties({
                'global.isResizing': true,
                startWidth: Ember.$( this.$().prevAll( tag )[ 0 ] ).width(),
                startX: event.pageX
            });
        }
    },

    /**
     * Method triggered on mouseenter event
     *
     * @method mouseEnter
     */
    mouseEnter: function() {
        if ( !this.get( 'global.isResizing' )) {
            this.set( 'column.highlight', true );
        }
    },

    /**
     * Method triggered on mouseleave event
     *
     * @method mouseLeave
     */
    mouseLeave: function() {
        if ( !this.get( 'global.isResizing' )) {
            this.set( 'column.highlight', false );
        }
    },

    /**
     * Setup listeners for mouse events
     *
     * @method setupBoundListeners
     */
    setupBoundListeners: function() {
        var self = this;

        this.set( 'mouseUpListener', function() {
            Ember.$( 'body' ).removeClass( 'resizing' )
                .off( 'mousemove', self.mouseMoveListener )
                .off( 'mouseup', self.mouseUpListener );

            self.setProperties({
                'column.highlight': false,
                'global.isResizing': false
            });
        });

        this.set( 'mouseMoveListener', function( event ) {
            var startWidth = self.get( 'startWidth' ),
                widthDelta = event.pageX - self.get('startX'),
                finalWidth = startWidth + widthDelta,
                minWidth = self.getWithDefault( 'column.minWidth', 20 );

            self.set( 'column.width', Math.max( minWidth, finalWidth ));

            return false;
        });
    }.on( 'didInsertElement' ),

    /**
     * Starting x offset
     *
     * @property {number} startX
     */
    startX: 0,

    /**
     * HTML tag name for root element
     *
     * @property {string} tagName
     */
    tagName: 'td'
});
