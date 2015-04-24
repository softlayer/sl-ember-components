import Ember from 'ember';
import layout from '../templates/components/sl-grid';

/**
 * @module components
 * @class sl-grid
 * @augments Ember.Component
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    classNameBindings: [
        'detailPaneOpen:details-open',
        'loading:sl-loading',
        'pendingData:pending-data'
    ],

    classNames: [ 'sl-grid' ],

    layout,

    tagName: 'div',

    // -------------------------------------------------------------------------
    // Actions

    actions: {

        /**
         * Close the detail-pane
         *
         * @function actions.closeDetailPane
         * @returns {undefined}
         */
        closeDetailPane() {
            var activeRecord = this.get( 'activeRecord' );

            if ( activeRecord ) {
                Ember.set( activeRecord, 'active', false );
                this.set( 'activeRecord', null );
            }

            this.set( 'detailPaneOpen', false );
        },

        /**
         * Open the detail-pane with a specific row object
         *
         * @function actions.openDetailPane
         * @param {Object} row - The object that the clicked row represents
         * @returns {undefined}
         */
        openDetailPane( row ) {
            var activeRecord = this.get( 'activeRecord' );

            if ( activeRecord ) {
                Ember.set( activeRecord, 'active', false );
            }

            Ember.set( row, 'active', true );
            this.set( 'activeRecord', row );
            this.set( 'detailPaneOpen', true );
        },

        /**
         * 
         */
        rowClick( row ) {
            if ( this.get( 'rowClick' ) ) {
                this.sendAction( 'rowClick', row );
            } else {
                this.trigger( 'openDetailPane', row );
            }
        },

        /**
         * Toggle sorting of the selected column, and send the "sortAction"
         * bound action the column and direction to sort
         *
         * @function actions.sortColumn
         * @param {Object} column - The column definition for the triggered 
         *        header's column
         * @returns {undefined}
         */
        sortColumn( column ) {
            if ( this.get( 'loading' ) || this.get( 'pendingData' ) ) {
                return;
            }

            var columnTitle       = Ember.get( column, 'title' ),
                sortedColumn      = this.get( 'sortedColumn' ),
                sortedColumnTitle = this.get( 'sortedColumnTitle' ),
                sortedDirection   = this.get( 'sortedDirection' ),
                direction;

            if ( sortedColumnTitle === columnTitle ) {
                direction = sortedDirection === 'ascending' ? 'descending' : 'ascending';
            } else {
                if ( sortedColumn ) {
                    Ember.set( sortedColumn, 'sorted' );
                }

                this.set( 'sortedColumnTitle', columnTitle );
                direction = 'ascending';
            }

            this.set( 'sortedDirection', direction );
            Ember.set( column, 'sorted', direction );

            this.sendAction( 'sortColumn', column, direction );
        },

        /**
         * Opens/closes the filter pane
         *
         * @function actions.toggleFilterPane
         * @returns {undefined}
         */
        toggleFilterPane() {
            this.toggleProperty( 'filterPaneOpen' );
        }
    },

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * The text label for the rows' actions buttons
     *
     * @property {String} actionsButtonLabel
     * @default "Actions"
     */
    actionsButtonLabel: 'Actions',

    /**
     * The row record that is currently active in the detail pane
     *
     * @property {?Object} activeRecord
     * @default null
     */
    activeRecord: null,

    /**
     * The path of a template to use for the detail-pane footer
     *
     * @property {?String} detailFooterPath
     * @default null
     */
    detailFooterPath: null,

    /**
     * The path of a template to use for the detail-pane header
     *
     * @property {?String} detailHeaderPath
     * @default null
     */
    detailHeaderPath: null,

    /**
     * Indicates when the detail-pane is open
     *
     * @property {Boolean} detailPaneOpen
     * @default false
     */
    detailPaneOpen: false,

    /**
     * The full path of the detail controller/template/view to render
     *
     * The controller matching this name also drives the data for the detail's
     * footer template and header template.
     *
     * @property {?String} detailPath
     * @default null
     */
    detailPath: null,

    /**
     * Indicates when the filter pane is open
     *
     * @property {Boolean} filterPaneOpen
     * @default false
     */
    filterPaneOpen: false,

    /**
     * The path of the controller/template/view to use for the filter panel
     *
     * @property {?String} filterPath
     * @default null
     */
    filterPath: null,

    /**
     * The text to display on the filter panel toggle button
     *
     * @property {String} filterText
     * @default "Filter"
     */
    filterText: 'Filter',

    /**
     * The path for the template to use for the footer of the list pane
     *
     * @property {?String} listFooterPath
     * @default null
     */
    footerPath: null,

    /**
     * The height of the overall grid
     *
     * When the value is set to "auto" (the default), then the sl-grid will size
     * its content to take up the maximum valid vertical space for the
     * current viewport.
     *
     * @property {Number|String} height
     * @default "auto"
     */
    height: 'auto',

    /**
     * When true, the split-grid is in a loading state
     *
     * @property {Boolean} loading
     * @default false
     */
    loading: false,

    /**
     * The "top" value for the table scroll to request a new page at
     *
     * @property {Number} nextPageScrollPoint
     * @default 0
     */
    nextPageScrollPoint: 0,

    /**
     * True when a next page of data has been requested, but before it has been
     * received
     *
     * @property {Boolean} pendingData
     * @default false
     */
    pendingData: false,

    /**
     * Bound action to call when a row is clicked
     *
     * When this value is not set, the detail pane will be opened whenever a row
     * is clicked.
     *
     * @property {?String} rowClick
     * @default null
     */
    rowClick: null,

    /**
     * Whether to show the column for the rows' action drop-buttons
     *
     * @property {Boolean} showActions
     * @default false
     */
    showActions: false,

    /**
     * The title of the column that is currently being sorted
     *
     * @property {?Object} sortedColumnTitle
     * @default null
     */
    sortedColumnTitle: null,

    /**
     * The direction the currently sorted column is being sorted in
     *
     * Value is either "ascending" or "descending".
     *
     * @property {String} sortedDirection
     * @default "ascending"
     */
    sortedDirection: 'ascending',

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Does cleanup for internal state when content length has changed
     *
     * @function handleNewContent
     * @observes content.length
     * @returns {undefined}
     */
    handleNewContent: Ember.observer( 'content.length', function() {
        this.set( 'pendingData', false );

        if ( !this.get( 'hasMorePages' ) ) {
            this.disableContinuousPaging();
        }
    }),

    /**
     * Setup the "continuous paging" functionality, if the data set is
     * not complete
     *
     * @function setupContinuousPaging
     * @listens didInsertElement
     * @returns {undefined}
     */
    setupContinuousPaging: Ember.on( 'didInsertElement', function() {
        if ( this.get( 'hasMorePages' ) ) {
            this.enableContinuousPaging();
        }
    }),

    /**
     * Setup paths for the various sections within the split-grid
     *
     * @function setupTemplates
     * @listens init
     * @returns {undefined}
     */
    setupTemplates: Ember.on( 'init', function() {
        var renderedName = this.get( '_parentView.renderedName' );

        if ( renderedName ) {
            var registry         = this.get( 'container._registry' ),
                root             = renderedName.replace( '.', '/' ) + '/',
                detailFooterPath = root + 'detail-footer',
                detailHeaderPath = root + 'detail-header',
                detailPath       = root + 'detail',
                filterPath       = root + 'filter',
                footerPath       = root + 'footer';
            
            if ( registry.resolve( 'template:' + detailFooterPath ) ) {
                this.set( 'detailFooterPath', detailFooterPath );
            }

            if ( registry.resolve( 'template:' + detailHeaderPath ) ) {
                this.set( 'detailHeaderPath', detailHeaderPath );
            }

            if ( registry.resolve( 'template:' + detailPath ) ) {
                this.set( 'detailPath', detailPath );
            }

            if ( registry.resolve( 'template:' + filterPath ) ) {
                this.set( 'filterPath', filterPath );
            }

            if ( registry.resolve( 'template:' + footerPath ) ) {
                this.set( 'footerPath', footerPath );
            }
        }
    }),

    /**
     * The currently sorted column definition
     *
     * @function sortedColumn
     * @returns {?Object} The definition for the currently sorted column
     */
    sortedColumn: Ember.computed( 'columns', 'sortedColumnTitle', function() {
        var columns           = this.get( 'columns' ),
            sortedColumnTitle = this.get( 'sortedColumnTitle' );

        if ( sortedColumnTitle ) {
            for ( var i = 0; i < columns.length; i++ ) {
                if ( Ember.get( columns[ i ], 'title' ) === sortedColumnTitle ) {
                    return columns[ i ];
                }
            }
        }
    }),

    /**
     * Update the panes' heights according to `height` property value
     *
     * The actual sizing calculation code must be done in an Ember.run.next,
     * since some of the elements' heights will return 0 until they are visible.
     *
     * @function updateHeight
     * @listens didInsertElement
     * @observes detailsPaneOpen, filterPaneOpen, height
     * @returns {undefined}
     */
    updateHeight: Ember.observer(
        'detailsPaneOpen', 'filterPaneOpen', 'height',
        Ember.on( 'didInsertElement', function() {
            Ember.run.next( () => {
                var componentHeight  = this.get( 'height' ),
                    gridHeaderHeight = parseInt(
                        this.$( '.grid-header' ).css( 'height' )
                    ),
                    detailHeaderHeight = parseInt(
                        this.$( '.detail-pane header' ).css( 'height' )
                    ),
                    detailFooterHeight = parseInt(
                        this.$( '.detail-pane footer' ).css( 'height' )
                    ) || 0,
                    listHeaderHeight = parseInt(
                        this.$( '.list-pane .column-headers' ).css( 'height' )
                    ),
                    listFooterHeight = parseInt(
                        this.$( '.list-pane footer' ).css( 'height' )
                    ),
                    detailContentHeight,
                    filterPaneHeight,
                    listContentHeight,
                    maxHeight;
                
                if ( componentHeight === 'auto' ) {
                    maxHeight = Ember.$( window ).innerHeight() -
                        this.$().position().top;
                } else {
                    maxHeight = componentHeight;
                }

                detailContentHeight = maxHeight - gridHeaderHeight -
                    detailHeaderHeight - detailFooterHeight;

                listContentHeight = maxHeight - gridHeaderHeight - 
                    listHeaderHeight - listFooterHeight;

                if ( this.get( 'filterPaneOpen' ) ) {
                    filterPaneHeight = parseInt(
                        this.$( '.filter-pane' ).css( 'height' )
                    );
                    detailContentHeight -= filterPaneHeight;
                    listContentHeight -= filterPaneHeight;
                }

                this.$( '.detail-pane .content' ).height( detailContentHeight );
                this.$( '.list-pane .content' ).height( listContentHeight );
            });
        })
    ),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Disables the scroll event handling for continuous paging
     *
     * @function disableContinuousPaging
     * @returns {undefined}
     */
    disableContinuousPaging() {
        this.$( '.list-pane .content' ).unbind( 'scroll' );
    },

    /**
     * Enables the scroll event handling for continuous paging
     *
     * @function enableContinuousPaging
     * @returns {undefined}
     */
    enableContinuousPaging() {
        this.$( '.list-pane .content' ).bind( 'scroll',
            this.handleListContentScroll.bind( this )
        );
    },

    /**
     * Callback to the list content scrolling, which is responsible for
     * determining when triggering nextPage is necessary by checking the
     * scroll location of the content
     *
     * @function handleListContentScroll
     * @param {jQuery.Event} event - The scroll trigger event
     * @returns {undefined}
     */
    handleListContentScroll( event ) {
        var listContent  = this.$( event.target ),
            scrollBottom = listContent.scrollTop() + listContent.height();

        if ( scrollBottom >= this.get( 'nextPageScrollPoint' ) && !this.get( 'pendingData' ) ) {
            this.requestNextPage();
        }
    },

    /**
     * Whether the content has more available data to page in
     *
     * @function hasMorePages
     * @returns {Boolean} - True if more content pages are available
     */
    hasMorePages: Ember.computed( 'content.length', 'totalCount', function() {
        return this.get( 'content.length' ) < this.get( 'totalCount' );
    }),

    /**
     * Trigger the bound `nextPage` action for more data
     *
     * @function requestNextPage
     * @returns {undefined}
     */
    requestNextPage() {
        if ( this.get( 'hasMorePages' ) ) {
            this.setProperties({
                'pendingData'         : true,
                'nextPageScrollPoint' : this.$( '.list-pane .content' )[ 0 ].scrollHeight
            });

            this.sendAction( 'nextPage' );
        }
    }

});
