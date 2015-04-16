import Ember from 'ember';
import layout from '../templates/components/sl-grid-table-header';

/**
 * @module components
 * @class  sl-grid-table-header
 */
export default Ember.Component.extend({ layout,

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * HTML tag to use for base element
     *
     * @property {Ember.String} tagName
     * @default  "th"
     */
    tagName: 'th',

    /**
     * The base element's class names
     *
     * @property {Ember.Array} classNames
     */
    classNames: [ 'sl-grid-table-header' ],

    /**
     * Class name bindings for the root element
     *
     * @property {Ember.Array} classNameBindings
     */
    classNameBindings: [ 'cssThClass' ],

    /**
     * Bindings for the base element's attributes
     *
     * @property {Ember.Array} attributeBindings
     */
    attributeBindings: [ 'style' ],

    // -------------------------------------------------------------------------
    // Actions

    /**
     * Component actions hash
     *
     * @property {Ember.Object} actions
     */
    actions: {

        /**
         * Fire primary action when a column is sorted.
         *
         * @function actions.sortColumn
         * @param    {string} key - The key for the sorted column
         * @returns  {void}
         */
        sortColumn( key ) {
            this.sendAction( 'action', key );
        }
    },

    // -------------------------------------------------------------------------
    // Events

    /**
     * Setup mouse events when the mouseDown is triggered
     *
     * @function mouseDown
     * @returns  {void}
     */
    mouseDown() {
        if ( !this.get( 'disabled' ) && this.getWithDefault( 'column.movable', true ) ) {
            Ember.$( 'body' )
                .on( 'mousemove', this.mouseMoveListener )
                .on( 'mouseup', this.mouseUpListener )
                .on( 'mouseleave', this.mouseLeaveListener );
        }
    },

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Inline style string for the base element
     *
     * @property {Ember.String} style
     * @default  ""
     */
    style: '',

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Update the style string when the width of the column changes
     *
     * If we try to make the style a computed property then we will get render
     * errors from Ember before the view is inserted into the DOM.
     *
     * @function columnWidthObserver
     * @observes didInsertElement event, column.width
     * @returns  {void}
     */
    columnWidthObserver: Ember.observer(
        'column.width', 'column.fixedWidth',
        Ember.on( 'didInsertElement', function() {
            var width = this.get( 'column.width' ),
                fixedWidth = this.get( 'column.fixedWidth' ),
                finalWidth = fixedWidth || width,
                tableWidth,
                totalHintingWidth,
                totalWidthHints,
                totalFixedWidth,
                widthHint;


            if ( finalWidth ) {
                this.set( 'style', Ember.String.htmlSafe(
                    'width:' + finalWidth + 'px;'
                ));
                return;
            }

            tableWidth      = this.$().parents( 'table.sl-grid' ).width();
            totalWidthHints = this.get( 'totalWidthHints' );
            totalFixedWidth = this.get( 'totalFixedWidths' );
            widthHint       = this.getWithDefault( 'column.widthHint', 1 );

            totalHintingWidth = tableWidth - totalFixedWidth;

            width = Math.floor( ( totalHintingWidth / totalWidthHints ) * widthHint );

            this.set( 'style', Ember.String.htmlSafe(
                'width:' + width + 'px;'
            ));
        })
    ),

    /**
     * Removes any listeners that may have been set up
     *
     * @function removeBoundEventListeners
     * @observes "willClearRender" event
     * @returns  {void}
     */
    removeBoundEventListeners: Ember.on( 'willClearRender', function() {
        Ember.$( 'body' )
            .off( 'mouseleave', this.mouseLeaveListener )
            .off( 'mousemove', this.mouseMoveListener )
            .off( 'mouseup', this.mouseUpListener );
    }),

    /**
     * Setup listeners for bound actions
     *
     * @function setupBoundListeners
     * @observes didInsertElement event
     * @returns  {void}
     */
    setupBoundListeners: Ember.on( 'didInsertElement', function() {
        this.set( 'mouseUpListener', () => {
            var hlReorderCol = this.get( 'hlReorderCol' ),
                newIndex     = this.get( 'newIndex' ),
                oldIndex     = this.get( 'oldIndex' ),
                reorderCol   = this.get( 'reorderCol' );

            if ( reorderCol ) {
                reorderCol.remove();
                this.set( 'reorderCol', null );
            }

            if ( hlReorderCol ) {
                hlReorderCol.remove();
                this.set( 'hlReorderCol', null );
            }

            Ember.$( 'body' ).removeClass( 'reordering' )
                .off( 'mouseleave', this.mouseLeaveListener )
                .off( 'mousemove', this.mouseMoveListener )
                .off( 'mouseup', this.mouseUpListener );

            if ( newIndex !== oldIndex ) {
                this.triggerAction({
                    action        : 'reorderColumn',
                    actionContext : [ oldIndex, newIndex ]
                });
            }
        });

        this.set( 'mouseMoveListener', event => {
            var reorderCol = this.get( 'reorderCol' );

            if ( !reorderCol ) {
                //do setup
                Ember.$( 'body' ).addClass( 'reordering' );

                reorderCol = Ember.$( '<div class="reordering"></div>' );
                reorderCol.text( this.$()[ 0 ].textContent );
                reorderCol.css({
                    top     : this.$().offset().top + 'px',
                    left    : this.$().offset().left + 'px',
                    padding : this.$().css( 'padding' ),
                    width   : this.$().width() + 'px',
                    height  : this.$().parents( 'table' ).outerHeight() + 'px',
                    font    : this.$().css( 'font' )
                });

                reorderCol.appendTo( Ember.$( 'body' ) );

                this.set( 'reorderCol', reorderCol );
                this.set( 'oldIndex', this.getCurrentColumnIndex() );
                this.set( 'newIndex', this.get( 'oldIndex' ) );
                this.set( 'oldPosition', this.getPosition( reorderCol ) );
                this.set( 'minPosition', '');
                this.set( 'maxPosition', '');

            }

            reorderCol.offset({ left: event.pageX });
            this._setNewColumnIndex();

            return false;
        });

        this.set( 'mouseLeaveListener', () => {
            var hlReorderCol = this.get( 'hlReorderCol' ),
                reorderCol   = this.get( 'reorderCol' );

            if ( reorderCol ) {
                reorderCol.remove();
                this.set( 'reorderCol', null );
            }

            if ( hlReorderCol ) {
                hlReorderCol.remove();
                this.set( 'hlReorderCol', null );
            }

            Ember.$( 'body' ).removeClass( 'reordering' )
                .off( 'mouseleave', this.mouseLeaveListener )
                .off( 'mousemove', this.mouseMoveListener )
                .off( 'mouseup', this.mouseUpListener );

            Ember.run.next( this, function(){
                window.getSelection().removeAllRanges();
            });

        });

        if ( this.get( 'column.sortable' ) ) {
            // Prevent links from becoming 'dragged' elements during
            // column reordering
            this.$('a').on( 'dragstart', function() { return false; } );
        }
    }),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Get the index of the currently sorted column
     *
     * @function getCurrentColumnIndex
     * @returns  {number} The index of the column
     */
    getCurrentColumnIndex() {
        return this.$().parent().children( 'th.sl-grid-table-header' ).index( this.$() );
    },

    /**
     * Get the position of the specified element
     *
     * @function getPosition
     * @param    {object} element - The element to get the position of
     * @returns  {Ember.Object}
     */
    getPosition( element ) {
        var leftOffset = Ember.$( element ).offset().left,
            width = Ember.$( element ).outerWidth(),
            rightOffset = leftOffset + width;

        return {
            id   : element.id,
            width: width,
            left : leftOffset,
            right: rightOffset
        };
    },

    /**
     * While dragging a column, this function is called to calculate the target
     * column position and highlight it.  This function will prevent columns from
     * being dragged past 'unmovable' columns on the ends.
     *
     * @function setNewColumnIndex
     * @returns  {void}
     */
    _setNewColumnIndex() {
        var reorderCol  = this.get( 'reorderCol' ),
            currentLeft = reorderCol.offset().left,
            currentWidth= reorderCol.outerWidth(),
            currentRight= currentLeft + currentWidth,
            id          = this.get( 'elementId' ),
            lastIndex   = this.get( 'newIndex' ),
            headers,
            offsets,
            availableOffsets,
            currentIndex;

        // Get all siblings and offsets
        headers = this.$().parent().children( 'th.sl-grid-table-header' );

        /* jshint unused: false */
        offsets = headers.map( ( index, el ) => {
            if ( el.id === id ) {
                return this.get( 'oldPosition' );
            }
            return this.getPosition( el );
        });

        // Filter
        availableOffsets = offsets.filter( ( index, el ) => {
            return this.getWithDefault( 'columns.' + index + '.movable', true );
        });

        if ( currentLeft < availableOffsets[ 0 ].left ) {
            currentLeft = availableOffsets[ 0 ].left;
            reorderCol.offset({ left: currentLeft });
        }

        if ( currentLeft > availableOffsets[ availableOffsets.length - 1 ].left ) {
            currentLeft = availableOffsets[ availableOffsets.length  - 1 ].left;
            reorderCol.offset({ left: currentLeft });
        }

        currentIndex = Array.prototype.slice.call( offsets ).reduce( ( prev, el, index ) => {
            return currentLeft >= el.left ? index : prev;
        }, 0 );

        if ( lastIndex !== currentIndex ) {
            let hlReorderCol = this.get( 'hlReorderCol' );

            if ( hlReorderCol ) {
                hlReorderCol.remove();
            }

            hlReorderCol = Ember.$( '<div class="reordering">&nbsp;</div>' );
            hlReorderCol.css({
                top    : this.$().offset().top + 'px',
                left   : offsets[ currentIndex ].left + 'px',
                width  : '8px',
                height : this.$().parents( 'table' ).outerHeight() + 'px',
            });
            hlReorderCol.appendTo( Ember.$( 'body' ));
            this.set( 'hlReorderCol', hlReorderCol );
        }

        this.set( 'newIndex', currentIndex );
    },

    /**
     * Add CSS classes if this column is being sorted on
     *
     * @function sortClasses
     * @observes column.isSorted, column.sortAscending
     * @returns  {Ember.String}
     */
    sortClasses: Ember.computed(
        'column.isSorted', 'column.sortAscending', function() {
            var isSorted    = this.get( 'column.isSorted' ),
                classString = '';

            if ( isSorted ) {
                classString = 'fa ' + ( this.get( 'column.sortAscending' ) ? 'fa-chevron-up' : 'fa-chevron-down' );
            }

            return classString;
        }
    )

});
