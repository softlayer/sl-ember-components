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
            let initialTabName = this.get( 'initialTabName' );
            const tabs = new Ember.A();

            if ( !initialTabName ) {
                initialTabName = this
                    .$( '.tab-pane:first' )
                    .attr( 'data-tab-name' );
            }

            this.setActiveTab( initialTabName );
            this.activatePane( initialTabName );

            this.$( '.tab-pane' ).each( function() {
                const tabName = this.getAttribute( 'data-tab-name' );

                tabs.push({
                    active: tabName === initialTabName,
                    label: this.getAttribute( 'data-tab-label' ),
                    name: tabName
                });
            });

            this.set( 'tabs', tabs );
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
     * @throws {ember.assert} Thrown if supplied `alignTabs` is a value not
     *         defined in enum Alignment
     * @returns {String}
     */
    tabAlignmentClass: Ember.computed(
        'alignTabs',
        function() {
            const alignTabs = this.get( 'alignTabs' );

            if ( !containsValue( alignTabs, Alignment ) ) {
                warn( `Invalid alignTabs property value "${alignTabs}"` );
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
