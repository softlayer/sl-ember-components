import Ember from 'ember';

/**
 * @module components
 * @class sl-tab-panel
 */
export default Ember.Component.extend({

    /**
     * Object of action functions
     *
     * @property {object} actions
     */
    actions: {

        /**
         * Action to trigger when a tab is clicked
         *
         * @method actions.change
         * @param {string} tabName - The name of the tab to change into
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
         * @method actions.updateTabPanelHeight
         */
        updateTabPanelHeight: function() {
            this.set( 'contentHeight', parseInt( this.paneFor( this.get( 'activeTabName' )).css( 'height' )));
        }
    },

    /**
     * Activate a tab pane, animating the transition
     *
     * @method activatePane
     * @param {string} tabName - The name of the tab to activate
     * @param {function} callback - Function to call once the pane is activated
     */
    activatePane: function( tabName, callback ) {
        var pane = this.paneFor( tabName );

        pane.fadeIn( 'fast', function() {
            pane.addClass( 'active' );

            if ( typeof callback === 'function' ) {
                callback();
            }
        });

        this.set( 'contentHeight', parseInt( pane.css( 'height' )));
    },

    /**
     * The currently active tab name
     *
     * @property {string} activeTabName
     * @default null
     */
    activeTabName: null,

    /**
     * Determines the alignment of tabs at the top of the panel,
     * "left" or "right"
     *
     * @property {string} alignTabs
     * @default "left"
     */
    alignTabs: 'left',

    /**
     * Class name bindings for the containing element
     *
     * @property {array} classNameBindings
     */
    classNameBindings: [ 'tabAlignmentClass' ],

    /**
     * Class names for the root element
     *
     * @property {array} classNames
     */
    classNames: [ 'sl-tab-panel' ],

    /**
     * The height of the tab-content in pixels
     *
     * @property {number} contentHeight
     * @default 0
     */
    contentHeight: 0,

    /**
     * Deactivate a tab pane, animating the transition
     *
     * @method deactivatePane
     * @param {string} tabName - The name of the tab to deactivate
     * @param {function} callback - Function called when the pane is deactivated
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
     * @method paneFor
     * @param {string} tabName - The name of the tab to get the pane for
     */
    paneFor: function( tabName ) {
        return this.$( '.tab-pane[data-tab-name="' + tabName + '"]' );
    },

    /**
     * Update the internal active tab name and handle tabs' statuses
     *
     * @method setActiveTab
     * @param {string} tabName - The name of the tab to switch state to
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
     * Sets up the initial tab, and parses the content of the tab panel to
     * determine tab labels and names.
     *
     * @method setupTabs
     */
    setupTabs: function() {
        var initialTabName = this.get( 'initialTabName' ),
            self = this,
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
     * The class determining how to align tabs
     *
     * @property {string} tabAlignmentClass
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
    },

    /**
     * Sets the tab-content div height based on current contentHeight value
     *
     * @method updateContentHeight
     */
    updateContentHeight: function() {
        this.$( '.tab-content' ).height( this.get( 'contentHeight' ));
    }.observes( 'contentHeight' )
});
