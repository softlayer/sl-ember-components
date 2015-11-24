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
        'detailComponent:hasDetails'
    ],

    /** @type {String[]} */
    classNames: [
        'grid',
        'sl-ember-components'
    ],

    /** @type {Object} */
    layout,

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
            if ( !this.get( 'detailPaneOpen' ) ) {
                return;
            }

            this.set( 'detailPaneOpen', false );
            Ember.run.next( this, () => {
                this.resetFixedHeaderWidths();
            });
        },

        /**
         * Deselect the currently selected row
         *
         * Will also close the details pane since nothing will be selected.
         *
         * @function
         * @returns {undefined}
         */
        deselectRow() {
            const activeRow = this.get( 'activeRow' );
            if ( activeRow ) {
                Ember.set( activeRow, 'active', false );
                this.set( 'activeRow', null );
            }

            this.send( 'closeDetailPane' );
        },

        /**
         * Handles drop button selection
         *
         * @function actions:dropButtonSelect
         * @param {Object} row - An object representing the row on which the drop button was selected
         * @param {String} actionName - The action to be sent
         * @returns {undefined}
         */
        dropButtonSelect( row, actionName ) {
            this.sendAction( actionName, row );
        },

        /**
         * Open the detail-pane
         *
         * @function
         * @returns {undefined}
         */
        openDetailPane() {
            if ( this.get( 'detailPaneOpen' ) || !this.get( 'detailComponent' ) || !this.get( 'activeRow' ) ) {
                return;
            }

            this.set( 'detailPaneOpen', true );

            Ember.run.next( this, () => {
                this.resetFixedHeaderWidths();
            });
        },

        /**
         * Handle a list item's row click
         *
         * If an action is bound to the `rowClick` property, then it will be
         * called when this is triggered. Otherwise, the row will be selected and
         * the detail-pane will be opened for the triggering row's model record,
         * unless no detailPath is defined.
         *
         * @function actions:rowClick
         * @param {Object} row - The instance of the sl-grid-row component
         * @returns {undefined}
         */
        rowClick( row ) {
            if ( this.get( 'rowClick' ) ) {
                this.sendAction( 'rowClick', row );
            } else if ( this.get( 'detailComponent' ) ) {
                this.send( 'selectRow', row );
                this.send( 'openDetailPane' );
            }
        },

        /**
         * Select a row and possibly open the detail panel
         *
         * @function
         * @param {Object} row - An object representing the row to make active
         * @returns {undefined}
         */
        selectRow( row ) {
            const activeRow = this.get( 'activeRow' );

            if ( activeRow ) {
                if ( activeRow === row ) {
                    this.send( 'deselectRow' );
                    return;
                }
                Ember.set( activeRow, 'active', false );
            }

            Ember.set( row, 'active', true );
            this.set( 'activeRow', row );
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
                    Ember.set( sortedColumn, 'sortAscending', null );
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
     * The row that is currently active in the detail pane
     *
     * @type {?Object}
     */
    activeRow: null,

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
     * The name of the component to render for the detail-pane footer
     *
     * @type {?String}
     */
    detailFooterComponent: null,

    /**
     * The name of the component to render for the detail-pane header
     *
     * @type {?String}
     */
    detailHeaderComponent: null,

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
     * Whether or not the table headers should be fixed
     *
     * @type {Boolean}
     */
    fixedHeader: false,

    /**
     * The path for the template to use for the footer of the list pane
     *
     * @type {?String}
     */
    footerPath: null,

    /**
     * The height of the overall grid component
     *
     * This height will be passed through to the component.
     * You may set it to any CSS measurement/value.
     *
     * @type {Number|String}
     */
    height: '',

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

    /**
     * The sort direction represented as boolean (true: asc; false: desc)
     *
     * @type {Boolean}
     */
    sortDirection: null,

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Decides if the grid footer should be included on the page
     *
     * @function
     * @returns {Boolean}
     */
    displayFooter: Ember.observer(
        'footerPath',
        'showPagination',
        function() {
            return this.get( 'footerPath' ) || this.get( 'showPagination' );
        }
    ),

    /**
     * Does cleanup for internal state when content length has changed
     *
     * @function
     * @returns {undefined}
     */
    handleNewContent: Ember.observer(
        'content.[]',
        function() {
            this.set( 'loading', false );

            if ( !this.get( 'hasMoreData' ) ) {
                this.disableContinuousPaging();
            }
        }
    ),

    /**
     * Cleanup bound events
     *
     * @function
     * @returns {undefined}
     */
    clearEvents: Ember.on(
        'willClearRender',
        function() {
            Ember.$( window ).off( this.namespaceEvent( 'resize' ) );
            this.disableContinuousPaging();
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
     * Setup fixed position table header
     *
     * Also creates a window resize event to ensure grid acts fluid.
     *
     * @function
     * @returns {undefined}
     */
    setupFixedHeader: Ember.on(
        'didInsertElement',
        function() {
            if ( this.get( 'fixedHeader' ) ) {
                this.resetFixedHeaderWidths();
                Ember.$( window ).on( this.namespaceEvent( 'resize' ), () => {
                    this.resetFixedHeaderWidths();
                });
            }
        }
    ),

    /**
     * Setup height of the grid table
     *
     * Also creates a window resize event to ensure grid acts fluid.
     *
     * @function
     * @returns {undefined}
     */
    setupCalculatedHeight: Ember.on(
        'didInsertElement',
        function() {
            this.updateHeight();
            Ember.$( window ).on( this.namespaceEvent( 'resize' ), () => {
                this.updateHeight();
            });
        }
    ),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Namespace event per instance
     *
     * @function
     * @param {String} - event name
     * @returns {String}
     */
    namespaceEvent( eventName ) {
        return `${ eventName }.${ this.get( 'elementId' ) }`;
    },

    /**
     * Assign widths to the column headers based on their natural layout
     *
     * Table headers must be fixed with for fixed positioning to work.
     *
     * @function
     * @returns {undefined}
     */
    resetFixedHeaderWidths() {
        if ( !this.get( 'fixedHeader' ) ) {
            return;
        }

        const context = this;
        const table = this.$( '> div > table' );
        table.removeClass( 'fixed-header' );
        table.find( 'thead th' ).width( '' );
        table.find( 'thead th' ).width( function() {
            return context.$( this ).width();
        });
        table.addClass( 'fixed-header' );
    },

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

            return Boolean( !this.get( 'continuous' ) && totalPages && totalPages > 1 );
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

            return null;
        }
    ),

    /**
     * The total number of pages of bound content, based on pageSize
     *
     * @function
     * @returns {?Number}
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

            return null;
        }
    ),

    /**
     * Disables the scroll event handling for continuous paging
     *
     * @function
     * @returns {undefined}
     */
    disableContinuousPaging() {
        this.$( '> header + div' ).off( this.namespaceEvent( 'scroll' ) );
    },

    /**
     * Enables the scroll event handling for continuous paging
     *
     * @function
     * @returns {undefined}
     */
    enableContinuousPaging() {
        this.$( '> div > table' ).parent().on( this.namespaceEvent( 'scroll' ), ( event ) => {
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
            const contentLength = this.get( 'content.length' );
            const totalCount = this.get( 'totalCount' );

            if ( contentLength && totalCount ) {
                return contentLength < totalCount;
            }

            return false;
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
            const nextPageScrollPoint = this.$( '> div > table' ).parent()[ 0 ]
                .scrollHeight;

            this.setProperties({
                'loading': true,
                nextPageScrollPoint
            });

            this.sendAction( 'requestData' );
        }
    },

    /**
     * Assigns the table part of the grid a calculated height
     *
     * This will not be needed in the future, but right now we don't have enough
     * control over what can exist in the header and footer.
     *
     * @function
     * @returns {undefined}
     */
    updateHeight() {
        const height = this.get( 'height' );
        let total = 0;

        this.$().css( 'height', height );

        if ( !parseInt( height ) ) {
            return;
        }

        this.$( '> :not(div)' ).each( function() {
            total += $( this ).height();
        });
        this.$( '> div:not(.panel)' ).height( this.$().height() - total );
    }

});
