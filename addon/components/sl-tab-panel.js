import Ember from 'ember';

/**
 * @module components
 * @class  sl-tab-panel
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * Class names for the root element
     *
     * @property {array} classNames
     */
    classNames: [ 'sl-tab-panel' ],

    /**
     * Class name bindings for the containing element
     *
     * @property {array} classNameBindings
     */
    classNameBindings: [ 'tabAlignmentClass' ],

    // -------------------------------------------------------------------------
    // Actions

    /**
     * Object of action functions
     *
     * @property {Ember.Object} actions
     */
    actions: {

        /**
         * Action to trigger when a tab is clicked
         *
         * @function actions.change
         * @param    {string} tabName - The name of the tab to change into
         * @returns  {void}
         */
        change: function( tabName ) {
            var activeTabName = this.get( 'activeTabName' ),
                self = this;

            if ( activeTabName ) {
                if ( activeTabName !== tabName ) {
                    this.setActiveTab( tabName );
                    this.deactivatePane( activeTabName, function() {
                        self.activatePane( tabName );
                    });
                }
            } else {
                this.setActiveTab( tabName );
                this.activatePane( tabName );
            }
        },

        /**
         * Manually cause a tab-content height recalculation
         *
         * @function actions.updateTabPanelHeight
         * @returns  {void}
         */
        updateTabPanelHeight: function() {
            this.set( 'contentHeight', parseInt( this.paneFor( this.get( 'activeTabName' )).css( 'height' )));
        }
    },

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * The currently active tab name
     *
     * @property {string} activeTabName
     * @default  null
     */
    activeTabName: null,

    /**
     * Determines the alignment of tabs at the top of the panel,
     * "left" or "right"
     *
     * @property {string} alignTabs
     * @default  "left"
     */
    alignTabs: 'left',

    /**
     * The height of the tab-content in pixels
     *
     * @property {number} contentHeight
     * @default  0
     */
    contentHeight: 0,

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Sets up the initial tab, and parses the content of the tab panel to
     * determine tab labels and names.
     *
     * @function setupTabs
     * @observes "didInsertElement" event
     * @returns  {void}
     */
    setupTabs: function() {
        var initialTabName = this.get( 'initialTabName' ),
            tabName,
            tabs = [];

        if ( !initialTabName ) {
            initialTabName = this.$( '.tab-pane:first' ).attr( 'data-tab-name' );
        }

        this.setActiveTab( initialTabName );
        this.activatePane( initialTabName );

        this.$( '.tab-pane' ).each( function() {
            tabName = this.getAttribute( 'data-tab-name' );

            tabs.push({
                active: tabName === initialTabName,
                label: this.getAttribute( 'data-tab-label' ),
                name: tabName
            });
        });

        this.set( 'tabs', tabs );
    }.on( 'didInsertElement' ),

    /**
     * Sets the tab-content div height based on current contentHeight value
     *
     * @method updateContentHeight
     */
    updateContentHeight: function() {
        this.$( '.tab-content' ).height( this.get( 'contentHeight' ));
    }.observes( 'contentHeight' ),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Activate a tab pane, animating the transition
     *
     * @function activatePane
     * @param    {string}   tabName - The name of the tab to activate
     * @param    {function} callback - Function to call once the pane is activated
     */
    activatePane: function( tabName, callback ) {
        var pane = this.paneFor( tabName );

        pane.fadeIn( 'fast', function() {
            pane.addClass( 'active' );

            if ( typeof callback === 'function' ) {
                callback();
            }
        });

        this.set( 'contentHeight', parseInt( pane.css( 'height' ) ) );
    },

    /**
     * Deactivate a tab pane, animating the transition
     *
     * @function deactivatePane
     * @param    {string}   tabName - The name of the tab to deactivate
     * @param    {function} callback - Function called when the pane is deactivated
     */
    deactivatePane: function( tabName, callback ) {
        var pane = this.paneFor( tabName );

        pane.fadeOut( 'fast', function() {
            pane.removeClass( 'active' );

            if ( typeof callback === 'function' ) {
                callback();
            }
        });
    },

    /**
     * Get the tab-panel's tab-pane for the specified tabName
     *
     * @function paneFor
     * @param    {string} tabName - The name of the tab to get the pane for
     * @returns  {void}
     */
    paneFor: function( tabName ) {
        return this.$( '.tab-pane[data-tab-name="' + tabName + '"]' );
    },

    /**
     * Update the internal active tab name and handle tabs' statuses
     *
     * @function setActiveTab
     * @param    {string} tabName - The name of the tab to switch state to
     * @returns  {void}
     */
    setActiveTab: function( tabName ) {
        var activeTabName = this.get( 'activeTabName' );

        if ( activeTabName ) {
            this.tabFor( activeTabName ).removeClass( 'active' );
        }

        this.set( 'activeTabName', tabName );

        if ( tabName !== null ) {
            this.tabFor( tabName ).addClass( 'active' );
        }
    },

    /**
     * The class determining how to align tabs
     *
     * @function tabAlignmentClass
     * @returns  {string}
     */
    tabAlignmentClass: function() {
        return 'sl-align-tabs-' + this.get( 'alignTabs' );
    }.property( 'alignTabs' ),

    /**
     * Get the tab with the specified tabName
     *
     * @method tabFor
     * @param {string} tabName - The name for the tab to get
     * @returns {element}
     */
    tabFor: function( tabName ) {
        return this.$( '.tab[data-tab-name="' + tabName + '"]' );
    }

});
