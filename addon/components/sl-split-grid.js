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
    classNameBindings: [ 'detailsOpen:details-open' ],

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

            if ( this.get( 'detailsOpen' ) ) {
                this.set( 'detailsOpen', false );
            }
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

            if ( !this.get( 'detailsOpen' ) ) {
                this.set( 'detailsOpen', true );
            }
        },

        /**
         * Opens/closes the filter pane
         *
         * @function actions toggleFilterPane
         * @returns  {void}
         */
        toggleFilterPane: function() {
            this.set( 'filterOpen', !this.get( 'filterOpen' ) );

            if ( this.get( 'autoHeight' ) ) {
                Ember.run.next( this.updateContentHeight.bind( this ));
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
     * @default  123
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
     * When true, the component's content areas will be automatically resized
     * to the available viewport height when the viewport changes
     *
     * @property {boolean} autoHeight
     * @default  true
     */
    autoHeight: true,

    /**
     * The height of the split-grid content areas, in pixels
     *
     * @property {number} contentHeight
     * @default  600
     */
    contentHeight: 600,

    /**
     * Indicates when the details pane is open
     *
     * @property {boolean} detailsOpen
     * @default  false
     */
    detailsOpen: false,

    /**
     * Indicates when the filter pane is open
     *
     * @property {boolean} filterOpen
     * @default  false
     */
    filterOpen: false,

    /**
     * The name of the template to use for the filter panel
     *
     * @property {string} filterTemplate
     * @default  null
     */
    filterTemplate: null,

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Resize the split-grid's content to the set height value
     *
     * @function resizeContent
     * @observes contentHeight, "didInsertElement" event
     * @returns  {void}
     */
    resizeContent: function() {
        this.$( '.content' ).height( this.get( 'contentHeight' ));
    }.observes( 'contentHeight' ).on( 'didInsertElement' ),

    /**
     * Setup the auto resize of content height
     *
     * @function setupAutoResize
     * @observes autoHeight, "didInsertElement" event
     * @returns  {void}
     */
    setupAutoResize: function() {
        if ( this.get( 'autoHeight' )) {
            Ember.$( window ).on( 'resize', this.updateContentHeight.bind( this ));
            this.updateContentHeight();
        }
    }.observes( 'autoHeight' ).on( 'didInsertElement' ),

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
        return Ember.get( this.get( 'activeRecord' ), this.get( 'detailTitlePath' ));
    }.property( 'activeRecord', 'detailTitlePath' ),

    /**
     * Calculate the possible content height, based on available viewport space
     *
     * @function updateContentHeight
     * @returns  {void}
     */
    updateContentHeight: function() {
        var viewportHeight = Ember.$( window ).innerHeight(),
            topPosition = this.$().position().top,
            gridHeaderHeight = parseInt( this.$( 'header' ).css( 'height' )),
            gridHeadHeight = parseInt( this.$( '.sl-split-grid-head' ).css( 'height' )),
            contentHeight = viewportHeight - topPosition - gridHeaderHeight - gridHeadHeight,
            filterPaneHeight;

        if ( this.get( 'filterOpen' )) {
            filterPaneHeight = parseInt( this.$( '.sl-split-grid-filter-pane' ).css( 'height' ));
            contentHeight -= filterPaneHeight;
        }

        this.set( 'contentHeight', contentHeight );
    }

});
