import Ember from 'ember';
import layout from '../templates/components/sl-tab-panel';
import { containsValue, warn } from '../utils/all';

/**
 * Valid `align` property values
 *
 * @memberof module:addon/components/sl-tab-panel
 * @enum {String}
 * @property LEFT 'left'
 * @property RIGHT 'right'
 */
export const Alignment = Object.freeze({
    LEFT: 'left',
    RIGHT: 'right'
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
        'tabAlignmentClass'
    ],

    /** @type {String[]} */
    classNames: [
        'sl-tab-panel'
    ],

    /** @type {Object} */
    layout,

    // -------------------------------------------------------------------------
    // Actions

    /** @type {Object} */
    actions: {

        /**
         * Action to trigger when a tab is clicked
         *
         * @function actions:change
         * @param {String} tabName - The name of the tab to change into
         * @returns {undefined}
         */
        change( tabName ) {
            const activeTabName = this.get( 'activeTabName' );

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
     * @type {?String}
     */
    activeTabName: null,

    /**
     * Determines the alignment of tabs at the top of the panel,
     * "left" or "right"
     *
     * @type {Alignment}
     */
    alignTabs: Alignment.LEFT,

    /**
     * The height of the tab-content in pixels
     *
     * @type {Number}
     */
    contentHeight: 0,

    /**
     * The name of the tab to open when the component is first rendered
     *
     * @type {?String}
     */
    initialTabName: null,

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Sets up the initial tab, and parses the content of the tab panel to
     * determine tab labels and names.
     *
     * @function
     * @returns {undefined}
     */
    setupTabs: Ember.on(
        'didInsertElement',
        function() {
            Ember.run.scheduleOnce( 'afterRender', this, function() {
                const initialTabName = this.getInitialTabName();
                const tabs = this.getTabs( initialTabName );

                this.setActiveTab( initialTabName );
                this.activatePane( initialTabName );
                this.set( 'tabs', tabs );
            });
        }
    ),

    /**
     * Sets the tab-content div height based on current contentHeight value
     *
     * @function
     * @returns {undefined}
     */
    updateContentHeight: Ember.observer(
        'contentHeight',
        function() {
            this.$( '.tab-content' ).height( this.get( 'contentHeight' ) );
        }
    ),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * @typedef TabsDefinition
     * @type {Object}
     * @property {Boolean} active - Whether the tab is active
     * @property {String} label - Tab label
     * @property {String} name - Tab name
     */

    /**
     * Creates an array of tab objects with tab properties
     *
     * @function
     * @returns {Array.<TabsDefinition>}
     */
    getTabs() {
        const tabs = Ember.A();
        const panes = this.$( '.tab-pane' );
        const initialTabName = this.getInitialTabName();

        panes.each( function() {
            const tabName = this.getAttribute( 'data-tab-name' );

            tabs.push({
                active: tabName === initialTabName,
                label: this.getAttribute( 'data-tab-label' ),
                name: tabName
            });
        });

        return tabs;
    },

    /**
     * Get initial tab name
     *
     * @function
     * @returns {String}
     */
    getInitialTabName() {
        let tabName = this.get( 'initialTabName' );

        if ( Ember.isEmpty( tabName ) ) {
            tabName = this.$( '.tab-pane:first' ).attr( 'data-tab-name' );
        }

        return tabName;
    },

    /**
     * Activate a tab pane, animating the transition
     *
     * @function
     * @param {String} tabName - The name of the tab to activate
     * @returns {undefined}
     */
    activatePane( tabName ) {
        const pane = this.paneFor( tabName );

        pane.fadeIn( 'fast', function() {
            pane.addClass( 'active' );
        });

        this.set( 'activeTabName', tabName );
        this.set( 'contentHeight', parseInt( pane.css( 'height' ) ) );
    },

    /**
     * Deactivate a tab pane, animating the transition
     *
     * @function
     * @param {Function} callback - Function called when the pane is deactivated
     * @returns {undefined}
     */
    deactivatePane( callback ) {
        const pane = this.paneFor( this.get( 'activeTabName' ) );

        pane.fadeOut( 'fast', function() {
            pane.removeClass( 'active' );

            if ( 'function' === Ember.typeOf( callback ) ) {
                callback();
            }
        });
    },

    /**
     * Get the tab-panel's tab-pane for the specified tabName
     *
     * @function
     * @param {String} tabName - The name of the tab to get the pane for
     * @returns {jQuery.Object}
     */
    paneFor( tabName ) {
        return this.$( `.tab-pane[data-tab-name="${tabName}"]` );
    },

    /**
     * Update the internal active tab name and handle tabs' statuses
     *
     * @function
     * @param {String} tabName - The name of the tab to switch state to
     * @returns {undefined}
     */
    setActiveTab( tabName ) {
        const activeTabName = this.get( 'activeTabName' );

        this.tabFor( activeTabName ).removeClass( 'active' );
        this.tabFor( tabName ).addClass( 'active' );
    },

    /**
     * The class determining how to align tabs
     *
     * @function
     * @returns {?String}
     */
    tabAlignmentClass: Ember.computed(
        'alignTabs',
        function() {
            const alignTabs = this.get( 'alignTabs' );

            if ( !containsValue( alignTabs, Alignment ) ) {
                warn( `Invalid alignTabs property value "${alignTabs}"` );

                return null;
            }

            return `sl-align-tabs-${alignTabs}`;
        }
    ),

    /**
     * Get the tab with the specified tabName
     *
     * @function
     * @param {String} tabName - The name for the tab to get
     * @returns {jQuery.Object} DOM Element
     */
    tabFor( tabName ) {
        return this.$( '.tab[data-tab-name="' + tabName + '"]' );
    }

});
