import Ember from 'ember';

/**
 * @module components
 * @class sl-tab-panel
 */
export default Ember.Component.extend({

    /**
     * Object of action functions
     * @property {object} actions
     */
    actions: {

        /**
         * Action to trigger when a tab is clicked
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
                        self.setActiveTab( null );
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
        }
    },

    activatePane: function ( tabName, callback ) {
        var isCollapsed = this.get( 'isCollapsed' );
        var pane = this.paneFor( tabName );

        var done = function () {
            pane.addClass( 'active' );

            if ( typeof callback === 'function' ) {
                callback();
            }
        };

        if ( isCollapsed ) {
            this.set( 'isCollapsed', false );
            pane.slideDown( 'fast', done );
        } else {
            pane.fadeIn( 'fast', done );
        }
    },

    /**
     * The currently active tab name
     * @property {string} activeTabName
     * @default null
     */
    activeTabName: null,

    /**
     * Determines the alignment of tabs at the top of the panel,
     * "left" or "right"
     * @property {string} alignTabs
     * @default "left"
     */
    alignTabs: 'left',

    /**
     * Class name bindings for the containing element
     * @property {array} classNameBindings
     */
    classNameBindings: [
        'isCollapsed:sl-tab-panel-collapsed',
        'collapsible:sl-tab-panel-collapsible',
        'tabAlignmentClass'
    ],

    /**
     * Class names for the root element
     * @property {array} classNames
     */
    classNames: [ 'sl-tab-panel' ],

    /**
     * Whether all of the tabs can be closed, resulting in a collapsed panel
     * @property {boolean} collapsible
     * @default true
     */
    collapsible: true,

    deactivatePane: function ( tabName, callback ) {
        var activeTabName = this.get( 'activeTabName' );
        var pane = this.paneFor( tabName );
        var self = this;

        var done = function () {
            pane.removeClass( 'active' );

            if ( typeof callback === 'function' ) {
                callback();
            }
        };

        if ( activeTabName ) {
            pane.fadeOut( 'fast', done );
        } else if ( this.get( 'collapsible' )) {
            pane.slideUp( 'fast', function () {
                self.set( 'isCollapsed', true );
                done();
            });
        }
    },

    /**
     * Whether the tab panel is totally collapsed (all tab panes closed)
     * @property {boolean} isCollapsed
     * @default true
     */
    isCollapsed: true,

    paneFor: function ( tabName ) {
        return this.$( '.tab-pane[data-tab-name="' + tabName + '"]' );
    },

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
     * Handles the setup of the initial tab panel state
     * @method setupInitialTab
     */
    setupInitialTab: function () {
        var collapsible = this.get( 'collapsible' );
        var initialTabName = this.get( 'initialTabName' );

        if ( !initialTabName && !collapsible ) {
            initialTabName = this.$( '.tab:first' ).attr( 'data-tab-name' );
        }

        if ( initialTabName ) {
            this.setActiveTab( initialTabName );
            this.activatePane( initialTabName );
        }
    }.on( 'didInsertElement' ),

    /**
     * The class determining how to align tabs
     * @property {string} tabAlignmentClass
     */
    tabAlignmentClass: function () {
        return 'sl-align-tabs-' + this.get( 'alignTabs' );
    }.property( 'alignTabs' ),

    tabFor: function ( tabName ) {
        return this.$( '.tab[data-tab-name="' + tabName + '"]' );
    }
});

Ember.Handlebars.helper( 'renderTabPane', function ( templateName, options ) {
    options.types[0] = 'STRING';
    return Ember.Handlebars.helpers.render.call( this, templateName, options );
});
