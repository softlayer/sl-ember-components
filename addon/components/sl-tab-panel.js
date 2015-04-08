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
     * @property {Ember.Array} classNames
     */
    classNames: [ 'sl-tab-panel' ],

    /**
     * Class name bindings for the containing element
     *
     * @property {Ember.Array} classNameBindings
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
        change( tabName ) {
            var activeTabName = this.get( 'activeTabName' );

            if ( activeTabName !== tabName ) {
                this.setActiveTab( tabName );
                this.deactivatePane( () => {
                    this.activatePane( tabName );
                });
            }
        }
    },

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * The currently active tab name
     *
     * @private
     * @property {Ember.String} activeTabName
     * @default  null
     */
    activeTabName: null,

    /**
     * Determines the alignment of tabs at the top of the panel,
     * "left" or "right"
     *
     * @property {Ember.String} alignTabs
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

    /**
     * The name of the tab to open when the component is first rendered
     *
     * @property {Ember.String} initialTabName
     * @default  null
     */
    initialTabName: null,

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
    setupTabs: Ember.on( 'didInsertElement', function() {
        var initialTabName = this.get( 'initialTabName' ),
            tabs           = Ember.A(),
            tabName;

        if ( !initialTabName ) {
            initialTabName = this.$( '.tab-pane:first' ).attr( 'data-tab-name' );
        }

        this.setActiveTab( initialTabName );
        this.activatePane( initialTabName );

        this.$( '.tab-pane' ).each( function() {
            tabName = this.getAttribute( 'data-tab-name' );

            tabs.push({
                active : tabName === initialTabName,
                label  : this.getAttribute( 'data-tab-label' ),
                name   : tabName
            });
        });

        this.set( 'tabs', tabs );
    }),

    /**
     * Sets the tab-content div height based on current contentHeight value
     *
     * @function updateContentHeight
     * @observes contentHeight
     * @returns  {void}
     */
    updateContentHeight: Ember.observer( 'contentHeight', function() {
        this.$( '.tab-content' ).height( this.get( 'contentHeight' ) );
    }),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Activate a tab pane, animating the transition
     *
     * @function activatePane
     * @param    {string} tabName - The name of the tab to activate
     * @returns  {void}
     */
    activatePane( tabName ) {
        var pane = this.paneFor( tabName );

        pane.fadeIn( 'fast', function() {
            pane.addClass( 'active' );
        });

        this.set( 'activeTabName', tabName );
        this.set( 'contentHeight', parseInt( pane.css( 'height' ) ) );
    },

    /**
     * Deactivate a tab pane, animating the transition
     *
     * @function deactivatePane
     * @param    {function} callback - Function called when the pane is deactivated
     * @returns  {void}
     */
    deactivatePane( callback ) {
        var pane = this.paneFor( this.get( 'activeTabName' ) );

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
    paneFor( tabName ) {
        return this.$( `.tab-pane[data-tab-name="${tabName}"]` );
    },

    /**
     * Update the internal active tab name and handle tabs' statuses
     *
     * @function setActiveTab
     * @param    {string} tabName - The name of the tab to switch state to
     * @returns  {void}
     */
    setActiveTab( tabName ) {
        var activeTabName = this.get( 'activeTabName' );

        this.tabFor( activeTabName ).removeClass( 'active' );
        this.tabFor( tabName ).addClass( 'active' );
    },

    /**
     * The class determining how to align tabs
     *
     * @function tabAlignmentClass
     * @returns  {Ember.String}
     */
    tabAlignmentClass: Ember.computed( 'alignTabs', function() {
        return 'sl-align-tabs-' + this.get( 'alignTabs' );
    }),

    /**
     * Get the tab with the specified tabName
     *
     * @method  tabFor
     * @param   {string} tabName - The name for the tab to get
     * @returns {object} DOM Element
     */
    tabFor( tabName ) {
        return this.$( '.tab[data-tab-name="' + tabName + '"]' );
    }

});
