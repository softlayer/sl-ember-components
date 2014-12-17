import Ember from 'ember';

/**
 * @module components
 * @class  sl-split-grid
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * HTML tag name of the root element
     *
     * @property {string} tagName
     * @default  "div"
     */
    tagName: 'div',

    /**
     * Class names for the root element
     *
     * @property {array} classNames
     */
    classNames: [ 'sl-split-grid' ],

    /**
     * Class name bindings for the root element
     *
     * @property {array} classNameBindings
     */
    classNameBindings: [
        'detailsOpen:details-open',
        'isLoading:sl-loading'
    ],

    // -------------------------------------------------------------------------
    // Actions

    /**
     * Component actions hash
     *
     * @property {object} actions
     */
    actions: {

        /**
         * Close the details pane
         *
         * @function actions.closeDetailsPane
         * @returns  {void}
         */
        closeDetailsPane: function() {
            var activeRecord = this.get( 'activeRecord' );

            if ( activeRecord ) {
                Ember.set( activeRecord, 'active', false );
                this.set( 'activeRecord', null );
            }

            this.set( 'detailsOpen', false );
        },

        /**
         * Open the details pane with a specific row object
         *
         * @function actions.openDetailsPane
         * @param    {object} row - The object that the clicked row represents
         * @returns  {void}
         */
        openDetailsPane: function( row ) {
            var activeRecord = this.get( 'activeRecord' );

            if ( activeRecord ) {
                Ember.set( activeRecord, 'active', false );
            }

            Ember.set( row, 'active', true );
            this.set( 'activeRecord', row );

            this.set( 'detailsOpen', true );

            if ( this.get( 'autoHeight' ) ) {
                Ember.run.next( this.updateDetailContentHeight.bind( this ) );
            }
        },

        /**
         * Toggle sorting of the selected column, and send the "sortAction"
         * bound action the column and direction to sort
         *
         * @function actions.sortColumn
         * @param    {object} column - The column definition for the triggered header's column
         * @returns  {void}
         */
        sortColumn: function( column ) {
            var columnTitle       = Ember.get( column, 'title' ),
                sortedColumn      = this.getSortedColumn(),
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
         * @returns  {void}
         */
        toggleFilterPane: function() {
            this.set( 'filterOpen', !this.get( 'filterOpen' ) );

            if ( this.get( 'autoHeight' ) ) {
                Ember.run.next( this.updateContentHeight.bind( this ) );
            }
        }
    },

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * The text label for the rows' actions buttons
     *
     * @property {string} actionsButtonLabel
     * @default  "Actions"
     */
    actionsButtonLabel: 'Actions',

    /**
     * The width of the actions column, in pixels
     *
     * @property {number} actionsColumnWidth
     * @default  120
     */
    actionsColumnWidth: 120,

    /**
     * The row record that is currently active in the detail pane
     *
     * @property {object} activeRecord
     * @default  null
     */
    activeRecord: null,

    /**
     * Determines whether the height of the split-grid is reactive to viewport
     *
     * When true, the component's content areas will be automatically resized
     * to the available viewport height when the viewport changes.
     *
     * @property {boolean} autoHeight
     * @default  true
     */
    autoHeight: true,

    /**
     * The height of the split-grid's detail pane content, in pixels
     *
     * @property {number} detailContentHeight
     * @default  600
     */
    detailContentHeight: 600,

    /**
     * The name of the controller/template/view to use for the detail pane's footer section
     *
     * @property {string} detailFooterTemplate
     * @default  null
     */
    detailFooterTemplate: null,

    /**
     * The name of the controller/template/view to use for the detail pane's header section
     *
     * If this value is null (default), then the detail pane's header will be
     * populated by text determined by the `detailTitlePath` attribute.
     *
     * @property {string} detailHeaderTemplate
     * @default  null
     */
    detailHeaderTemplate: null,

    /**
     * The name of the controller/template/view to use for the detail pane content
     *
     * The controller matching this name also drives the data for the detail's
     * footer template and header template.
     *
     * @property {string} detailContent
     * @default  null
     */
    detailName: null,

    /**
     * Indicates when the details pane is open
     *
     * @property {boolean} detailsOpen
     * @default  false
     */
    detailsOpen: false,

    /**
     * The name of the controller/template/view to use for the filter panel
     *
     * @property {string} filterName
     * @default  null
     */
    filterName: null,

    /**
     * Indicates when the filter pane is open
     *
     * @property {boolean} filterOpen
     * @default  false
     */
    filterOpen: false,

    /**
     * The text to display on the filter panel toggle button
     *
     * @property {string} filterText
     * @default  "Filter"
     */
    filterText: 'Filter',

    /**
     * The name of the template to use for the header section of the split-grid
     *
     * This template will be rendered in the left part of the split-grid's
     * header, and effectively overrides the `title` property.
     *
     * @property {string} headerTemplate
     * @default  null
     */
    headerTemplate: null,

    /**
     * When true, the split-grid is in a loading state
     *
     * @property {boolean} isLoading
     * @default  false
     */
    isLoading: false,

    /**
     * The height of the split-grid's list pane content, in pixels
     *
     * @property {number} listContentHeight
     * @default  600
     */
    listContentHeight: 600,

    /**
     * The name of the template to use for the footer of the list pane
     *
     * @property {string} listFooterTemplate
     * @default  null
     */
    listFooterTemplate: null,

    /**
     * The "top" value for the table scroll to request a new page at
     *
     * @property {number} nextPageScrollPoint
     * @default  0
     */
    nextPageScrollPoint: 0,

    /**
     * True when a next page of data has been requested, but before it has been
     * received
     *
     * @property {boolean} pendingData
     * @default  false
     */
    pendingData: false,

    /**
     * The title of the column that is currently being sorted
     *
     * @property {object} sortedColumnTitle
     * @default  null
     */
    sortedColumnTitle: null,

    /**
     * The direction the currently sorted column is being sorted in
     *
     * Value is either "ascending" or "descending".
     *
     * @property {string} sortedDirection
     * @default  null
     */
    sortedDirection: null,

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Does cleanup for internal state when content length has changed
     *
     * @function handleNewContent
     * @observes content.length
     * @returns  {void}
     */
    handleNewContent: function() {
        this.set( 'pendingData', false );

        if ( !this.get( 'hasMorePages' ) ) {
            this.disableContinuousPaging();
        }
    }.observes( 'content.length' ),

    /**
     * Resize the split-grid's detail pane content to the set height value
     *
     * @function resizeDetailContent
     * @observes autoHeight, detailContentHeight, "didInsertElement" event
     * @returns  {void}
     */
    resizeDetailContent: function() {
        this.$( '.detail-pane .content' ).height( this.get( 'detailContentHeight' ) );
    }.observes( 'detailContentHeight' ).on( 'didInsertElement' ),

    /**
     * Resize the split-grid's list pane content to the set height value
     *
     * @function resizeListContent
     * @observes autoHeight, listContentHeight, "didInsertElement" event
     * @returns  {void}
     */
    resizeListContent: function() {
        this.$( '.list-pane .content' ).height( this.get( 'listContentHeight' ) );
    }.observes( 'listContentHeight' ).on( 'didInsertElement' ),

    /**
     * Setup the "continuous paging" functionality, if the data set is not complete
     *
     * @function setupContinuousPaging
     * @observes "didInsertElement" event
     * @returns  {void}
     */
    setupContinuousPaging: function() {
        if ( this.get( 'hasMorePages' ) ) {
            this.enableContinuousPaging();
            this.requestNextPage();
        }
    }.on( 'didInsertElement' ),

    /**
     * Setup the auto resize of content height, or set the hard-coded height in pixels
     *
     * @function setupSizes
     * @observes "didInsertElement" event
     * @returns  {void}
     */
    setupSizes: function() {
        if ( this.get( 'autoHeight' ) ) {
            Ember.$( window ).on( 'resize', this.updateContentHeight.bind( this ) );
            this.updateContentHeight();
        } else {
            this.resizeDetailContent();
            this.resizeListContent();
        }
    }.on( 'didInsertElement' ),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * The text for the actions column's `style` attribute
     *
     * @function actionsColumnStyle
     * @observes actionsColumnWidth
     * @returns  {string} - The `style` attribute for the column
     */
    actionsColumnStyle: function() {
        return 'width: ' + this.get( 'actionsColumnWidth' ) + 'px;';
    }.property( 'actionsColumnWidth' ),

    /**
     * The desired title for the detail pane, based on `detailTitlePath`
     *
     * @function detailTitle
     * @observes activeRecord, detailTitlePath
     * @returns  {void}
     */
    detailTitle: function() {
        var activeRecord = this.get( 'activeRecord' );

        if ( activeRecord ) {
            return Ember.get( activeRecord, this.get( 'detailTitlePath' ) );
        }
    }.property( 'activeRecord', 'detailTitlePath' ),

    /**
     * Disables the scroll event handling for continuous paging
     *
     * @function disableContinuousPaging
     * @returns  {void}
     */
    disableContinuousPaging: function() {
        this.$( '.list-pane .content' ).unbind( 'scroll' );
    },

    /**
     * Enables the scroll event handling for continuous paging
     *
     * @function enableContinuousPaging
     * @returns  {void}
     */
    enableContinuousPaging: function() {
        this.$( '.list-pane .content' ).bind( 'scroll', this.handleListContentScroll.bind( this ) );
    },

    /**
     * Retrieve the sorted column definition
     *
     * @function getSortedColumn
     * @returns  {object} - The definition for the currently sorted column
     */
    getSortedColumn: function() {
        var columns           = this.get( 'columns' ),
            sortedColumnTitle = this.get( 'sortedColumnTitle' );

        if ( sortedColumnTitle ) {
            for ( var i = 0; i < columns.length; i++ ) {
                if ( Ember.get( columns[ i ], 'title' ) === sortedColumnTitle ) {
                    return columns[ i ];
                }
            }
        }
    },

    /**
     * Callback to the list content scrolling, which is responsible for
     * determining when triggering nextPage is necessary by checking the
     * scroll location of the content
     *
     * @function handleListContentScroll
     * @param    {jQuery.Event} event - The scroll trigger event
     * @returns  {void}
     */
    handleListContentScroll: function( event ) {
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
     * @returns  {boolean} - True if more content pages are available
     */
    hasMorePages: function() {
        return this.get( 'content.length' ) < this.get( 'totalCount' );
    }.property( 'content.length', 'totalCount' ),

    /**
     * Trigger the bound `nextPage` action for more data
     *
     * @function requestNextPage
     * @returns  {void}
     */
    requestNextPage: function() {
        if ( this.get( 'hasMorePages' ) ) {
            this.setProperties({
                'pendingData'         : true,
                'nextPageScrollPoint' : this.$( '.list-pane .content' )[ 0 ].scrollHeight
            });

            this.sendAction( 'nextPage' );
        }
    },

    /**
     * Trigger calculation of content height for the list pane and detail pane
     *
     * @function updateContentHeight
     * @returns  {void}
     */
    updateContentHeight: function() {
        this.updateDetailContentHeight();
        this.updateListContentHeight();
    },

    /**
     * Calculate and set the content height for the detail pane
     *
     * @function updateDetailContentHeight
     * @returns  {void}
     */
    updateDetailContentHeight: function() {
        var viewportHeight      = Ember.$( window ).innerHeight(),
            topPosition         = this.$().position().top,
            gridHeaderHeight    = parseInt( this.$( '.grid-header' ).css( 'height' ) ),
            detailHeaderHeight  = parseInt( this.$( '.detail-pane header' ).css( 'height' ) ),
            detailFooterHeight  = parseInt( this.$( '.detail-pane footer' ).css( 'height' ) ),
            detailContentHeight,
            filterPaneHeight;

        detailContentHeight = viewportHeight - topPosition - gridHeaderHeight - detailHeaderHeight - detailFooterHeight;

        if ( this.get( 'filterOpen' ) ) {
            filterPaneHeight = parseInt( this.$( '.filter-pane' ).css( 'height' ) );
            detailContentHeight -= filterPaneHeight;
        }

        this.set( 'detailContentHeight', detailContentHeight );
    },

    /**
     * Calculate and set the content height for the list pane
     *
     * @function updateListContentHeight
     * @returns  {void}
     */
    updateListContentHeight: function() {
        var viewportHeight      = Ember.$( window ).innerHeight(),
            topPosition         = this.$().position().top,
            gridHeaderHeight    = parseInt( this.$( '.grid-header' ).css( 'height' ) ),
            listHeaderHeight    = parseInt( this.$( '.list-pane .column-headers' ).css( 'height' ) ),
            listFooterHeight    = parseInt( this.$( '.list-pane footer' ).css( 'height' ) ),
            filterPaneHeight,
            listContentHeight;

        listContentHeight = viewportHeight - topPosition - gridHeaderHeight - listHeaderHeight - listFooterHeight;

        if ( this.get( 'filterOpen' ) ) {
            filterPaneHeight = parseInt( this.$( '.filter-pane' ).css( 'height' ) );
            listContentHeight -= filterPaneHeight;
        }

        this.set( 'listContentHeight', listContentHeight );
    }

});
