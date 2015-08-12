import Ember from 'ember';
import layout from '../templates/components/sl-grid';

/**
 * Valid values for the column definitions' `align` property
 *
 * @memberof module:components/sl-grid
 * @enum {String}
 */
export const ColumnAlign = Object.freeze({
    LEFT: 'left',
    RIGHT: 'right'
});

/**
 * Valid values for the column definitions' `size` property
 *
 * @memberof module:components/sl-grid
 * @enum {String}
 */
export const ColumnSize = Object.freeze({
    LARGE: 'large',
    MEDIUM: 'medium',
    SMALL: 'small'
});

/**
 * @module
 * @augments ember/Component
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    classNameBindings: [
        'detailPaneOpen:details-open',
        'loading:sl-loading'
    ],

    /** @type {String[]} */
    classNames: [
        'sl-grid'
    ],

    /** @type {Object} */
    layout,

    /** @type {String} */
    tagName: 'div',

    // -------------------------------------------------------------------------
    // Actions

    /** @type {Object} */
    actions: {

        /**
         * Handle changing pages
         *
         * @function actions:changePage
         * @param {Number} page - The page number being changed to
         * @returns {undefined}
         */
        changePage( page ) {
            if ( this.get( 'loading' ) ) {
                return;
            }

            const limit = this.get( 'pageSize' );
            const offset = limit * ( page - 1 );

            this.set( 'loading', true );
            this.sendAction( 'requestData', limit, offset );
        },

        /**
         * Close the detail-pane
         *
         * @function
         * @returns {undefined}
         */
        closeDetailPane() {
            const activeRecord = this.get( 'activeRecord' );

            if ( activeRecord ) {
                Ember.set( activeRecord, 'active', false );
                this.set( 'activeRecord', null );
            }

            this.set( 'detailPaneOpen', false );
            this.updateHeight();
        },

        /**
         * Open the detail-pane with a specific row object
         *
         * @function
         * @param {Object} row - An object representing the row to make active
         * @returns {undefined}
         */
        openDetailPane( row ) {
            const activeRecord = this.get( 'activeRecord' );

            if ( activeRecord ) {
                Ember.set( activeRecord, 'active', false );
            }

            Ember.set( row, 'active', true );
            this.setProperties({
                activeRecord: row,
                detailPaneOpen: true
            });
            this.updateHeight();
        },

        /**
         * Handle a list item's row click
         *
         * If an action is bound to the `rowClick` property, then it will be
         * called when this is triggered. Otherwise, the detail-pane will be
         * opened for the triggering row's model record, unless no detailPath is
         * defined.
         *
         * @function actions:rowClick
         * @param {Object} row - The object that the clicked row represents
         * @returns {undefined}
         */
        rowClick( row ) {
            if ( this.get( 'rowClick' ) ) {
                this.sendAction( 'rowClick', row );
            } else if ( this.get( 'detailComponent' ) ) {
                this.send( 'openDetailPane', row );
            }
        },

        /**
         * Toggle sorting of the selected column, and send the "sortAction"
         * bound action the column and direction to sort
         *
         * @function actions:sortColumn
         * @param {Object} column - The column definition for the triggered
         *        header's column
         * @returns {undefined}
         */
        sortColumn( column ) {
            if ( this.get( 'loading' ) ) {
                return;
            }

            const columnTitle = Ember.get( column, 'title' );
            const sortedColumn = this.get( 'sortedColumn' );
            const sortedColumnTitle = this.get( 'sortedColumnTitle' );
            let sortDirection = this.get( 'sortDirection' );

            if ( sortedColumnTitle === columnTitle ) {
                sortDirection = !sortDirection;
            } else {
                if ( sortedColumn ) {
                    Ember.set( sortedColumn, 'sortAscending' );
                }

                this.set( 'sortedColumnTitle', columnTitle );
                sortDirection = true;
            }

            this.set( 'sortDirection', sortDirection );
            Ember.set( column, 'sortAscending', sortDirection );

            this.sendAction( 'sortColumn', column, sortDirection );
        },

        /**
         * Opens/closes the filter pane
         *
         * @function actions:toggleFilterPane
         * @returns {undefined}
         */
        toggleFilterPane() {
            this.toggleProperty( 'filterPaneOpen' );
            this.updateHeight();
        }
    },

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * The text label for the rows' actions buttons
     *
     * @type {String}
     */
    actionsButtonLabel: 'Actions',

    /**
     * The row record that is currently active in the detail pane
     *
     * @type {?Object}
     */
    activeRecord: null,

    /**
     * @typedef ColumnDefinition
     * @type {Object}
     * @property {ColumnAlign} [align] - Which direction to align the
     *           column's content
     * @property {Boolean} [primary] - Whether the column is always shown
     * @property {Number|ColumnSize} [size] - The width of the column; either a
     *           number of pixels, or a ColumnSize value
     * @property {Boolean} [sortable] - Whether the column is able to be sorted
     * @property {String} [template] - Template name to use for the cell value;
     *           uses the `rowController` as its controller
     * @property {String} title - The displayed title of the column
     * @property {String} [valuePath] - Name of a property to lookup on the
     *           rows to populate the cell with
     */

    /**
     * @type {ColumnDefinition[]}
     */
    columns: [],

    /**
     * @type {?Object[]}
     */
    content: null,

    /**
     * Whether the grid's data should be handled by continuous-scrolling
     *
     * When this is false (default), then the grid will have pagination enabled.
     *
     * @type {Boolean}
     */
    continuous: false,

    /**
     * The current page, valid for a non-`continuous` grid
     *
     * @type {Number}
     */
    currentPage: 1,

    /**
     * The name of the component to render for the detail pane
     *
     * @type {?String}
     */
    detailComponent: null,

    /**
     * The path of a template to use for the detail-pane footer
     *
     * @type {?String}
     */
    detailFooterPath: null,

    /**
     * The path of a template to use for the detail-pane header
     *
     * @type {?String}
     */
    detailHeaderPath: null,

    /**
     * Indicates when the detail-pane is open
     *
     * @type {Boolean}
     */
    detailPaneOpen: false,

    /**
     * The text to display on the filter panel toggle button
     *
     * @type {String}
     */
    filterButtonLabel: 'Filter',

    /**
     * Indicates when the filter pane is open
     *
     * @type {Boolean}
     */
    filterPaneOpen: false,

    /**
     * The name of a component to use for the filter panel
     *
     * @type {?String}
     */
    filterComponent: null,

    /**
     * The path for the template to use for the footer of the list pane
     *
     * @type {?String}
     */
    footerPath: null,

    /**
     * The height of the overall grid
     *
     * When the value is set to "auto" (the default), then the sl-grid will size
     * its content to take up the maximum valid vertical space for the
     * current viewport.
     *
     * @type {Number|String}
     */
    height: 'auto',

    /**
     * When true, the split-grid is in a loading state
     *
     * @type {Boolean}
     */
    loading: false,

    /**
     * The "top" value for the table scroll to request a new page at
     *
     * @type {Number}
     */
    nextPageScrollPoint: 0,

    /**
     * The number of records to request for each page
     *
     * @type {Number}
     */
    pageSize: 25,

    /**
     * The aliased grid's parent controller, used to trigger row actions
     *
     * @type {module:components/sl-grid~_parentView._controller}
     */
    rowActionContext: Ember.computed.alias( '_parentView._controller' ),

    /**
     * An array of action definitions to use for individual row actions
     *
     * Each item in this array should have the following properties:
     * - {String} action - The name of the action to trigger when this option
     *   is called
     * - {String} label - The displayed text for the option
     *
     * @type {?Object[]}
     */
    rowActions: null,

    /**
     * Bound action to call when a row is clicked
     *
     * When this value is not set, the detail pane will be opened whenever a row
     * is clicked.
     *
     * @type {?String}
     */
    rowClick: null,

    /**
     * Whether the currently sorted column is ascending or not
     *
     * @type {Boolean}
     */
    sortAscending: true,

    /**
     * The title of the column that is currently being sorted
     *
     * @type {?Object}
     */
    sortedColumnTitle: null,

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Does cleanup for internal state when content length has changed
     *
     * @function
     * @returns {undefined}
     */
    handleNewContent: Ember.observer(
        'content.@each',
        function() {
            this.set( 'loading', false );

            if ( !this.get( 'hasMoreData' ) ) {
                this.disableContinuousPaging();
            }
        }
    ),

    /**
     * Setup the viewport-based auto sizing when `height` is "auto"
     *
     * @function
     * @returns {undefined}
     */
    setupAutoHeight: Ember.on(
        'didInsertElement',
        function() {
            if ( 'auto' === this.get( 'height' ) ) {
                Ember.$( window ).bind( 'resize', () => {
                    this.updateHeight();
                });
            }
        }
    ),

    /**
     * Setup the "continuous paging" functionality, if the data set is
     * not complete
     *
     * @function
     * @returns {undefined}
     */
    setupContinuousPaging: Ember.on(
        'didInsertElement',
        function() {
            if ( this.get( 'continuous' ) && this.get( 'hasMoreData' ) ) {
                this.enableContinuousPaging();
            }
        }
    ),

    /**
     * Setup paths for the various sections within the split-grid
     *
     * @function
     * @returns {undefined}
     */
    setupTemplates: Ember.on(
        'init',
        function() {
            const renderedName = this.get( '_parentView.renderedName' );

            if ( renderedName ) {
                const registry = this.get( 'container._registry' );
                const root = renderedName.replace( '.', '/' ) + '/';
                const detailFooterPath = root + 'detail-footer';
                const detailHeaderPath = root + 'detail-header';
                const filterPath = root + 'filter';
                const footerPath = root + 'footer';

                if (
                    !this.get( 'detailFooterPath' ) &&
                    registry.resolve( 'template:' + detailFooterPath )
                ) {
                    this.set( 'detailFooterPath', detailFooterPath );
                }

                if (
                    !this.get( 'detailHeaderPath' ) &&
                    registry.resolve( 'template:' + detailHeaderPath )
                ) {
                    this.set( 'detailHeaderPath', detailHeaderPath );
                }

                if (
                    !this.get( 'filterPath' ) &&
                    registry.resolve( 'template:' + filterPath )
                ) {
                    this.set( 'filterPath', filterPath );
                }

                if (
                    !this.get( 'footerPath' ) &&
                    registry.resolve( 'template:' + footerPath )
                ) {
                    this.set( 'footerPath', footerPath );
                }
            }
        }
    ),

    /**
     * Whether to show the pagination in the list-pane footer
     *
     * @function
     * @returns {Boolean}
     */
    showPagination: Ember.computed(
        'continuous',
        'totalPages',
        function() {
            const totalPages = this.get( 'totalPages' );

            return !this.get( 'continuous' ) && totalPages && totalPages > 1;
        }
    ),

    /**
     * The currently sorted column definition
     *
     * @function
     * @returns {?Object} The definition for the currently sorted column
     */
    sortedColumn: Ember.computed(
        'columns',
        'sortedColumnTitle',
        function() {
            const sortedColumnTitle = this.get( 'sortedColumnTitle' );

            if ( sortedColumnTitle ) {
                const columns = this.get( 'columns' );

                for ( let i = 0; i < columns.length; i++ ) {
                    if (
                        Ember.get( columns[ i ], 'title' ) === sortedColumnTitle
                    ) {
                        return columns[ i ];
                    }
                }
            }
        }
    ),

    /**
     * The total number of pages of bound content, based on pageSize
     *
     * @function
     * @returns {Number|undefined}
     */
    totalPages: Ember.computed(
        'continuous',
        'pageSize',
        'totalCount',
        function() {
            if (
                !this.get( 'continuous' ) &&
                this.get( 'totalCount' ) &&
                this.get( 'pageSize' )
            ) {
                return Math.ceil(
                    this.get( 'totalCount' ) / this.get( 'pageSize' )
                );
            }
        }
    ),

    /**
     * Update the panes' heights according to `height` property value
     *
     * @function
     * @returns {undefined}
     */
    updateHeight: Ember.on(
        'didInsertElement',
        function() {
            if ( !this.$() ) {
                return;
            }

            const componentHeight = this.get( 'height' );
            const gridHeader = this.$( '.grid-header' );
            const detailHeader = this.$( '.detail-pane header' );
            const detailFooter = this.$( '.detail-pane footer' );
            const listHeader = this.$( '.list-pane .column-headers' );
            const listFooter = this.$( '.list-pane footer' );

            const detailHeaderHeight = detailHeader ?
                parseInt( detailHeader.css( 'height' ) ) : 0;

            const detailFooterHeight = detailFooter ?
                parseInt( detailFooter.css( 'height' ) ) : 0;

            const gridHeaderHeight = gridHeader ?
                parseInt( gridHeader.css( 'height' ) ) : 0;

            const listHeaderHeight = listHeader ?
                parseInt( listHeader.css( 'height' ) ) : 0;

            const listFooterHeight = listFooter ?
                parseInt( listFooter.css( 'height' ) ) : 0;

            let maxHeight = componentHeight;
            if ( 'auto' === componentHeight ) {
                maxHeight = Ember.$( window ).innerHeight() -
                    this.$().position().top;
            }

            let detailContentHeight = maxHeight - gridHeaderHeight -
                detailHeaderHeight - detailFooterHeight;

            let listContentHeight = maxHeight - gridHeaderHeight -
                listHeaderHeight - listFooterHeight;

            if ( this.get( 'filterPaneOpen' ) ) {
                const filterPaneHeight = parseInt(
                    this.$( '.filter-pane' ).css( 'height' )
                );

                detailContentHeight -= filterPaneHeight;
                listContentHeight -= filterPaneHeight;
            }

            this.$( '.detail-pane .content' ).height( detailContentHeight );
            this.$( '.list-pane .content' ).height( listContentHeight );
        }
    ),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Disables the scroll event handling for continuous paging
     *
     * @function
     * @returns {undefined}
     */
    disableContinuousPaging() {
        this.$( '.list-pane .content' ).unbind( 'scroll' );
    },

    /**
     * Enables the scroll event handling for continuous paging
     *
     * @function
     * @returns {undefined}
     */
    enableContinuousPaging() {
        this.$( '.list-pane .content' ).bind( 'scroll', ( event ) => {
            this.handleListContentScroll( event );
        });
    },

    /**
     * For `continuous` grids; callback to the list content scrolling, which is
     * responsible for determining when triggering requestData is necessary by
     * checking the scroll location of the content
     *
     * @function
     * @param {jQuery.Event} event - The scroll trigger event
     * @returns {undefined}
     */
    handleListContentScroll( event ) {
        const listContent = this.$( event.target );
        const loading = this.get( 'loading' );
        const nextPageScrollPoint = this.get( 'nextPageScrollPoint' );
        const scrollBottom = listContent.scrollTop() + listContent.height();

        if ( scrollBottom >= nextPageScrollPoint && !loading ) {
            this.requestMoreData();
        }
    },

    /**
     * Whether the content has more available data to page in
     *
     * @function
     * @returns {Boolean} - True if more content pages are available
     */
    hasMoreData: Ember.computed(
        'content.length',
        'totalCount',
        function() {
            return this.get( 'content.length' ) < this.get( 'totalCount' );
        }
    ),

    /**
     * Trigger the bound `requestData` action for more content data
     *
     * @function
     * @returns {undefined}
     */
    requestMoreData() {
        if ( this.get( 'hasMoreData' ) ) {
            const nextPageScrollPoint = this.$( '.list-pane .content' )[ 0 ]
                .scrollHeight;

            this.setProperties({
                'loading': true,
                nextPageScrollPoint
            });

            this.sendAction( 'requestData' );
        }
    }

});
