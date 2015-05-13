import Ember from 'ember';
import layout from '../templates/components/sl-tab-panel';

/**
 * Valid `align` property values
 *
 * @enum {String} ALIGNMENT
 */
export const ALIGNMENT = {
    LEFT  : 'left',
    RIGHT : 'right'
};

/**
 * @module components
 * @class sl-tab-panel
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    classNameBindings: [ 'tabAlignmentClass' ],

    classNames: [ 'sl-tab-panel' ],

    layout,

    // -------------------------------------------------------------------------
    // Actions

    actions: {

        /**
         * Action to trigger when a tab is clicked
         *
         * @function actions.change
         * @param {String} tabName - The name of the tab to change into
         * @returns {undefined}
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
     * @property {?String} activeTabName
     * @default null
     */
    activeTabName: null,

    /**
     * Determines the alignment of tabs at the top of the panel,
     * "left" or "right"
     *
     * @property {ALIGNMENT} alignTabs
     * @default ALIGNMENT.LEFT
     */
    alignTabs: ALIGNMENT.LEFT,

    /**
     * The height of the tab-content in pixels
     *
     * @property {Number} contentHeight
     * @default 0
     */
    contentHeight: 0,

    /**
     * The name of the tab to open when the component is first rendered
     *
     * @property {?String} initialTabName
     * @default null
     */
    initialTabName: null,

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Sets up the initial tab, and parses the content of the tab panel to
     * determine tab labels and names.
     *
     * @function setupTabs
     * @listens didInsertElement
     * @returns {undefined}
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
     * @returns {undefined}
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
     * @param {String} tabName - The name of the tab to activate
     * @returns {undefined}
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
     * @param {Function} callback - Function called when the pane is deactivated
     * @returns {undefined}
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
     * @param {String} tabName - The name of the tab to get the pane for
     * @returns {undefined}
     */
    paneFor( tabName ) {
        return this.$( `.tab-pane[data-tab-name="${tabName}"]` );
    },

    /**
     * Update the internal active tab name and handle tabs' statuses
     *
     * @function setActiveTab
     * @param {String} tabName - The name of the tab to switch state to
     * @returns {undefined}
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
     * @observes alignTabs
     * @returns {String}
     */
    tabAlignmentClass: Ember.computed( 'alignTabs', function() {
        var alignTabs = this.get( 'alignTabs' );

        Ember.assert(
            `Error: Invalid alignTabs property value "${alignTabs}"`,
            Object.keys( ALIGNMENT ).map( ( key ) => ALIGNMENT[ key ] ).indexOf( alignTabs ) > -1
        );

        return `sl-align-tabs-${alignTabs}`;
    }),

    /**
     * Get the tab with the specified tabName
     *
     * @function tabFor
     * @param {String} tabName - The name for the tab to get
     * @returns {jQuery.Object} DOM Element
     */
    tabFor( tabName ) {
        return this.$( '.tab[data-tab-name="' + tabName + '"]' );
    }

});
