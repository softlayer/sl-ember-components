import Ember from 'ember';

/**
 * @module components
 * @class sl-grid-table-header
 */
export default Ember.Component.extend({

    /**
     * Component actions hash
     *
     * @property {object} actions
     */
    actions: {

        /**
         * Fire primary action when a column is sorted.
         *
         * @method actions.sortColumn
         * @param {string} key - The key for the sorted column
         */
        sortColumn: function( key ) {
            this.sendAction( 'action', key );
        }
    },

    /**
     * Bindings for the base component's attributes
     *
     * @property {array} attributeBindings
     */
    attributeBindings: [ 'style' ],

    /**
     * The base component's class names
     *
     * @property {array} classNameBindings
     */
    classNames: [ 'sl-grid-table-header' ],

    /**
     * Update the style string when the width of the column changes. If we try
     * to make the style a computed property then we will get render errors from
     * Ember before the view is inserted into the DOM.
     *
     * @method columnWidthObserver
     */
    columnWidthObserver: function() {
        var actionsColWidth;
        var resizeColCount;
        var resizeColWidth;
        var resizeCols;
        var rowExpanderWidth;
        var tableWidth;
        var totalHintingWidth;
        var totalWidthHints;
        var width = this.get( 'column.width' );
        var widthHint;

        if ( width ) {
            this.set( 'style', width ? 'width:' + width + 'px;' : '' );
            return;
        }

        actionsColWidth = this.$().siblings( 'th.sl-grid-table-cell-actions' ).outerWidth() || 0;
        resizeCols = this.$().siblings( 'th.sl-grid-table-column-resize' );
        rowExpanderWidth = this.$().siblings( 'th.sl-grid-table-cell-row-expander' ).outerWidth() || 0;
        tableWidth = this.$().parents( 'table.sl-grid' ).width();
        totalWidthHints = this.get( 'totalWidthHints' );
        widthHint = this.getWithDefault( 'column.widthHint', 1 );

        resizeColCount = resizeCols.length;
        resizeColWidth = resizeCols.outerWidth() || 0;
        totalHintingWidth = tableWidth - rowExpanderWidth - actionsColWidth - resizeColWidth*resizeColCount;

        width = Math.floor(( totalHintingWidth / totalWidthHints ) * widthHint );

        this.set( 'style', 'width:' + width + 'px;' );
    }.observes( 'column.width' ).on( 'didInsertElement' ),

    /**
     * Get the index of the currently sorted column
     *
     * @method getCurrentColumnIndex
     * @returns {number} - The index of the column
     */
    getCurrentColumnIndex: function() {
        return this.$().parent().children( 'th.sl-grid-table-header' ).index( this.$() );
    },

    /**
     * Get the position of the specified column
     *
     * @method getPosition
     * @param {element} element - The element to get the position of
     */
    getPosition: function( element ){
        var leftOffset = Ember.$( element ).offset().left;

        return {
            id: element.id,
            left: leftOffset,
        };
    },

    /**
     * Setup mouse events when the mouseDown is triggered
     *
     * @method mouseDown
     */
    mouseDown: function() {
        if ( !this.get( 'disabled' )) {
            Ember.$( 'body' ).on( 'mousemove', this.mouseMoveListener );
            Ember.$( 'body' ).on( 'mouseup', this.mouseUpListener );
        }
    },

    /**
     * Set a new column index on the relevant column.
     *
     * @method setNewColumnIndex
     */
    setNewColumnIndex: function() {
        var currentLeft = this.get( 'reorderCol' ).offset().left;
        var headers;
        var id = this.get( 'elementId' );
        var self = this;

        // Get all siblings and offsets
        headers = this.$().parent().children( 'th.sl-grid-table-header' );

        /* jshint unused: false */
        var offsets = headers.map( function( index, el ) {
            if ( el.id === id ) {
                return this.get( 'oldPosition' );
            }

            return this.getPosition( el );
        }.bind( this ));

        var lastIndex = this.get( 'newIndex' );

        var currentIndex = Array.prototype.slice.call( offsets ).reduce( function( prev, el, index ) {
            return currentLeft > el.left ? index : prev;
        }, 0 );

        if ( lastIndex !== currentIndex ) {
            var hlReorderCol = this.get( 'hlReorderCol' );

            if ( hlReorderCol ) {
                hlReorderCol.remove();
            }

            hlReorderCol = Ember.$( '<div class="reordering">&nbsp;</div>' );
            hlReorderCol.css({
                top: this.$().offset().top + 'px',
                left: offsets[ currentIndex ].left + 'px',
                width: '8px',
                height: this.$().parents( 'table' ).outerHeight() + 'px',
            });
            hlReorderCol.appendTo( Ember.$( 'body' ));
            this.set( 'hlReorderCol', hlReorderCol );
        }
        this.set( 'newIndex', currentIndex );
    },

    /**
     * Setup listeners for bound actions.
     *
     * @method setupBoundListeners
     */
    setupBoundListeners: function() {
        this.set( 'mouseUpListener', Ember.run.bind( this, function() {
            var hlReorderCol = this.get( 'hlReorderCol' );
            var newIndex = this.get( 'newIndex' );
            var oldIndex = this.get( 'oldIndex' );
            var reorderCol = this.get( 'reorderCol' );

            if ( reorderCol ) {
                reorderCol.remove();
                this.set( 'reorderCol', null );
            }

            if ( hlReorderCol ) {
                hlReorderCol.remove();
                this.set( 'hlReorderCol', null );
            }

            Ember.$( 'body' ).removeClass( 'reordering' )
                .off( 'mousemove', this.mouseMoveListener )
                .off( 'mouseup', this.mouseUpListener );

            if ( newIndex !== oldIndex ) {
                this.triggerAction({
                    action: 'reorderColumn',
                    actionContext: [ oldIndex, newIndex ]
                });
            }
        }));

        this.set( 'mouseMoveListener', Ember.run.bind( this, function( event ) {
            var reorderCol = this.get( 'reorderCol' );

            if ( !reorderCol ) {
                Ember.$( 'body' ).addClass( 'reordering' );

                reorderCol = Ember.$( '<div class="reordering"></div>' );
                reorderCol.text( this.$()[ 0 ].textContent );
                reorderCol.css({
                    top:     this.$().offset().top + 'px',
                    left:    this.$().offset().left + 'px',
                    padding: this.$().css( 'padding' ),
                    width:   this.$().width() + 'px',
                    height:  this.$().parents( 'table' ).outerHeight() + 'px',
                    font:    this.$().css( 'font' )
                });

                reorderCol.appendTo( Ember.$( 'body' ));

                this.set( 'reorderCol', reorderCol );
                this.set( 'oldIndex', this.getCurrentColumnIndex() );
                this.set( 'newIndex', this.get( 'oldIndex' ) );
                this.set( 'oldPosition', this.getPosition( reorderCol ) );
            }

            reorderCol.offset({ left: event.pageX });
            this.setNewColumnIndex();

            return false;
        }));
    }.on( 'didInsertElement' ),

    /**
     * Add CSS classes if this column is being sorted on.
     *
     * @property {string} sortClasses
     */
    sortClasses: function() {
        var isSorted = this.get( 'column.isSorted' );

        if ( isSorted ) {
            return 'fa ' + ( this.get( 'column.sortAscending' ) ? 'fa-chevron-up' : 'fa-chevron-down' );
        }

        return '';
    }.property( 'column.isSorted', 'column.sortAscending' ),

    /**
     * Inline style string for the base component.
     *
     * @property {string} style
     */
    style: '',

    /**
     * HTML tag to use for base component.
     *
     * @property {string} tagName
     * @default "th"
     */
    tagName: 'th'

});
