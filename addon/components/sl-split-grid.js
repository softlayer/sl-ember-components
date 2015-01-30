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
     * @property {Ember.String} tagName
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
        'detailPaneOpen:details-open',
        'isLoading:sl-loading',
        'pendingData:pending-data'
    ],

    // -------------------------------------------------------------------------
    // Actions

    /**
     * Component actions hash
     *
     * @property {Ember.Object} actions
     */
    actions: {

        /**
         * Close the detail-pane
         *
         * @function actions.closeDetailPane
         * @returns  {void}
         */
        closeDetailPane: function() {
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
         * @param    {Ember.Object} row - The object that the clicked row represents
         * @returns  {void}
         */
        openDetailPane: function( row ) {
            var activeRecord = this.get( 'activeRecord' );

            if ( activeRecord ) {
                Ember.set( activeRecord, 'active', false );
            }

            Ember.set( row, 'active', true );
            this.set( 'activeRecord', row );

            this.set( 'detailPaneOpen', true );

            if ( this.get( 'autoHeight' ) ) {
                Ember.run.next( this.updateDetailContentHeight.bind( this ) );
            }
        },

        /**
         * Toggle sorting of the selected column, and send the "sortAction"
         * bound action the column and direction to sort
         *
         * @function actions.sortColumn
         * @param    {Ember.Object} column - The column definition for the triggered header's column
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
            this.toggleProperty( 'filterOpen' );

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
     * @property {Ember.String} actionsButtonLabel
     * @default  "Actions"
     */
    actionsButtonLabel: 'Actions',

    /**
     * The row record that is currently active in the detail pane
     *
     * @property {Ember.Object} activeRecord
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
     * The path of a template to use for the detail-pane footer
     *
     * @property {Ember.String} detailFooterPath
     * @default  null
     */
    detailFooterPath: null,

    /**
     * The path of a template to use for the detail-pane header
     *
     * @property {Ember.String} detailHeaderPath
     * @default  null
     */
    detailHeaderPath: null,

    /**
     * Indicates when the details pane is open
     *
     * @property {boolean} detailsPaneOpen
     * @default  false
     */
    detailPaneOpen: false,

    /**
     * The full path of the detail controller/template/view to render
     *
     * The controller matching this name also drives the data for the detail's
     * footer template and header template.
     *
     * @property {Ember.String} detailPath
     * @default  null
     */
    detailPath: null,

    /**
     * Indicates when the filter pane is open
     *
     * @property {boolean} filterOpen
     * @default  false
     */
    filterOpen: false,

    /**
     * The path of the controller/template/view to use for the filter panel
     *
     * @property {Ember.String} filterPath
     * @default  null
     */
    filterPath: null,

    /**
     * The text to display on the filter panel toggle button
     *
     * @property {Ember.String} filterText
     * @default  "Filter"
     */
    filterText: 'Filter',

    /**
     * The path for the template to use for the footer of the list pane
     *
     * @property {Ember.String} listFooterPath
     * @default  null
     */
    footerPath: null,

    /**
     * The path for the template to use for the header of the split grid
     *
     * @property {Ember.String} headerPath
     * @default  null
     */
    headerPath: null,

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
     * Whether to show the column for the rows' action drop-buttons
     *
     * @property {boolean} showActions
     * @default  false
     */
    showActions: false,

    /**
     * Whether to show the filter button and filter-pane
     *
     * @property {boolean} showFilter
     * @default  false
     */
    showFilter: false,

    /**
     * The title of the column that is currently being sorted
     *
     * @property {Ember.Object} sortedColumnTitle
     * @default  null
     */
    sortedColumnTitle: null,

    /**
     * The direction the currently sorted column is being sorted in
     *
     * Value is either "ascending" or "descending".
     *
     * @property {Ember.String} sortedDirection
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

            //if ( this.$( '.list-pane section '))
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
        if ( this.get( 'autoHeight' ) === true ) {
            Ember.$( window ).on( 'resize', this.updateContentHeight.bind( this ) );
            this.updateContentHeight();
        } else {
            this.resizeDetailContent();
            this.resizeListContent();
        }
    }.on( 'didInsertElement' ),

    /**
     *
     */
    setupTemplates: function() {
        var root = this.get( 'templateData.view.renderedName' ).replace( '.', '/' ) + '/';

        this.setProperties({
            detailFooterPath : root + 'detail-footer',
            detailHeaderPath : root + 'detail-header',
            detailPath       : root + 'detail',
            filterPath       : root + 'filter',
            footerPath       : root + 'footer',
            headerPath       : root + 'header'
        })
    }.on( 'init' ),

    // -------------------------------------------------------------------------
    // Methods

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
     * @returns  {Ember.Object} - The definition for the currently sorted column
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
        var viewportHeight     = Ember.$( window ).innerHeight(),
            topPosition        = this.$().position().top,
            gridHeaderHeight   = parseInt( this.$( '.grid-header' ).css( 'height' ) ),
            detailHeaderHeight = parseInt( this.$( '.detail-pane header' ).css( 'height' ) ),
            detailFooterHeight = parseInt( this.$( '.detail-pane footer' ).css( 'height' ) ) || 0,
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
        var viewportHeight   = Ember.$( window ).innerHeight(),
            topPosition      = this.$().position().top,
            gridHeaderHeight = parseInt( this.$( '.grid-header' ).css( 'height' ) ),
            listHeaderHeight = parseInt( this.$( '.list-pane .column-headers' ).css( 'height' ) ),
            listFooterHeight = parseInt( this.$( '.list-pane footer' ).css( 'height' ) ),
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
