import Ember from 'ember';
import ClassPrefix from '../mixins/class-prefix';
import layout from '../templates/components/sl-tab-panel';
import containsValue from '../utils/containsValue';
import warn from '../utils/warn';

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
export default Ember.Component.extend( ClassPrefix, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    classNameBindings: [
        'tabAlignmentClass'
    ],

    /** @type {Object} */
    layout,

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    /**
     * didInsertElement event hook
     *
     * @function
     * @returns {undefined}
     */
    didInsertElement: function() {
        this._super( ...arguments );
        this.setupTabs();
    },

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
     * Component class that will be prefixed with base component class
     *
     * @type {String}
     */
    componentClass: 'tab-panel',

    /**
     * The name of the tab to open when the component is first rendered
     *
     * @type {?String}
     */
    initialTabName: null,

    // -------------------------------------------------------------------------
    // Observers

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
     * Sets up the initial tab, and parses the content of the tab panel to
     * determine tab labels and names.
     *
     * @private
     * @function
     * @returns {undefined}
     */
    setupTabs: function() {
        Ember.run.scheduleOnce( 'afterRender', this, function() {
            const initialTabName = this.getInitialTabName();
            this.createTabs();
            this.$( '> .tab-content > .tab-pane' ).filter(
                '[data-tab-name=' + initialTabName + ']'
            ).addClass( 'active' );
        });
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
