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
        change: function ( tabName ) {
            var activeTabName = this.get( 'activeTabName' );
            var collapsible = this.get( 'collapsible' );
            var self = this;

            if ( activeTabName ) {
                if ( activeTabName === tabName ) {
                    if ( collapsible ) {
                        this.setActiveTab( null );
                        this.deactivatePane( activeTabName );
                    }
                } else {
                    this.setActiveTab( tabName );
                    this.deactivatePane( activeTabName, function () {
                        self.activatePane( tabName );
                    });
                }
            } else {
                this.setActiveTab( tabName );
                this.activatePane( tabName );
            }
        },

        /**
         * Manually collapse the tab panel, usually from within a tab pane
         *
         * @method actions.collapseTabPanel
         */
        collapseTabPanel: function () {
            if ( this.get( 'collapsible' ) && !this.get( 'isCollapsed' )) {
                var activeTabName = this.get( 'activeTabName' );

                this.setActiveTab( null );
                this.deactivatePane( activeTabName );
            }
        },

        /**
         * Manually cause a tab-content height recalculation
         *
         * @method actions.updateTabPanelHeight
         */
        updateTabPanelHeight: function () {
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
    activatePane: function ( tabName, callback ) {
        var pane = this.paneFor( tabName );
        var self = this;

        if ( self.get( 'isCollapsed' )) {
            self.set( 'isCollapsed', false );
        }

        pane.fadeIn( 'fast', function () {
            pane.addClass( 'active' );

            if ( typeof callback === 'function' ) {
                callback();
            }
        });

        self.set( 'contentHeight', parseInt( pane.css( 'height' )));
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
    classNameBindings: [
        'isCollapsed:sl-tab-panel-collapsed',
        'collapsible:sl-tab-panel-collapsible',
        'tabAlignmentClass'
    ],

    /**
     * Class names for the root element
     *
     * @property {array} classNames
     */
    classNames: [ 'sl-tab-panel' ],

    /**
     * Whether all of the tabs can be closed, resulting in a collapsed panel
     *
     * @property {boolean} collapsible
     * @default false
     */
    collapsible: false,

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
    deactivatePane: function ( tabName, callback ) {
        var activeTabName = this.get( 'activeTabName' );
        var collapse = !activeTabName && this.get( 'collapsible' );
        var pane = this.paneFor( tabName );
        var self = this;

        pane.fadeOut( 'fast', function () {
            if ( collapse ) {
                Ember.run( function () {
                    self.set( 'isCollapsed', true );
                });
            }

            pane.removeClass( 'active' );

            if ( typeof callback === 'function' ) {
                callback();
            }
        });

        if ( collapse ) {
            this.set( 'contentHeight', 0 );
        }
    },

    /**
     * Whether the tab panel is totally collapsed (all tab panes closed)
     *
     * @property {boolean} isCollapsed
     * @default true
     */
    isCollapsed: true,

    /**
     * Get the tab-panel's tab-pane for the specified tabName
     *
     * @method paneFor
     * @param {string} tabName - The name of the tab to get the pane for
     */
    paneFor: function ( tabName ) {
        return this.$( '.tab-pane[data-tab-name="' + tabName + '"]' );
    },

    /**
     * Update the internal active tab name and handle tabs' statuses
     *
     * @method setActiveTab
     * @param {string} tabName - The name of the tab to switch state to
     */
    setActiveTab: function ( tabName ) {
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
    setupTabs: function () {
        var collapsible = this.get( 'collapsible' );
        var initialTabName = this.get( 'initialTabName' );
        var tabName;
        var tabs = [];

        if ( !initialTabName && !collapsible ) {
            initialTabName = this.$( '.tab-pane:first' ).attr( 'data-tab-name' );
        }

        if ( initialTabName ) {
            this.setActiveTab( initialTabName );
            this.activatePane( initialTabName );
        } else {
            this.updateContentHeight();
        }

        this.$( '.tab-pane' ).each( function () {
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
    tabAlignmentClass: function () {
        return 'sl-align-tabs-' + this.get( 'alignTabs' );
    }.property( 'alignTabs' ),

    /**
     * Get the tab with the specified tabName
     *
     * @method tabFor
     * @param {string} tabName - The name for the tab to get
     * @returns {element}
     */
    tabFor: function ( tabName ) {
        return this.$( '.tab[data-tab-name="' + tabName + '"]' );
    },

    /**
     * Sets the tab-content div height based on current contentHeight value
     *
     * @method updateContentHeight
     */
    updateContentHeight: function () {
        this.$( '.tab-content' ).height( this.get( 'contentHeight' ));
    }.observes( 'contentHeight' )
});
