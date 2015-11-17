import Ember from 'ember';
import layout from '../templates/components/sl-tab-panel';
import { containsValue, warn } from '../utils/all';

/**
 * Valid `align` property values
 *
 * @memberof module:components/sl-tab-panel
 * @enum {String}
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

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Determines the alignment of tabs at the top of the panel,
     * "left" or "right"
     *
     * @type {Alignment}
     */
    alignTabs: Alignment.LEFT,

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
                this.createTabs();
                this.$( '> .tab-content > .tab-pane' ).filter(
                        '[data-tab-name=' + initialTabName + ']'
                    ).addClass( 'active' );
            });
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
     * @property {String} link - Tab href value linking to pane
     */

    /**
     * Creates an array of tab objects with tab properties
     *
     * @function
     * @returns {undefined}
     */
    createTabs() {
        const tabs = Ember.A();
        const panes = this.$( '> .tab-content > .tab-pane' );
        const initialTabName = this.getInitialTabName();

        panes.each( function() {
            const tabName = this.getAttribute( 'data-tab-name' );

            tabs.push({
                active: tabName === initialTabName,
                label: this.getAttribute( 'data-tab-label' ),
                name: tabName,
                link: '#' + this.getAttribute( 'id' )
            });
        });

        this.set( 'tabs', tabs );
    },

    /**
     * Update the internal active tab name and handle tabs' statuses
     *
     * @function
     * @param {String} tabName - The name of the tab to switch state to
     * @returns {undefined}
     */
    getActiveTabName() {
        return this.$( '> .nav-tabs > li.active' ).attr( 'data-tab-name' );
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
            tabName = this.$( '> .tab-content > [data-tab-name]' ).first().attr( 'data-tab-name' );
        }

        return tabName;
    },

    /**
     * Update the internal active tab name and handle tabs' statuses
     *
     * @function
     * @param {String} tabName - The name of the tab to switch state to
     * @returns {undefined}
     */
    setActiveTab( tabName ) {
        this.$( '> .nav-tabs > li[data-tab-name=' + tabName + '] a' ).trigger( 'click' );
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
    )

});
