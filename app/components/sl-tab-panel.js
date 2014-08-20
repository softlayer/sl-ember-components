import Ember from 'ember';

/**
 * @module components
 * @class sl-tabpanel
 */
export default Ember.Component.extend({

    /**
     * Object of action functions
     * @property {object} actions
     */
    actions: {

        /**
         * Action to trigger when a tab is clicked
         * @method change
         * @param {string} tabName - The name of the tab to change into
         */
        change: function ( tabName ) {
            if ( this.get( 'collapsible' ) && this.get( 'activeTabName' ) === tabName ) {
                this.set( 'activeTabName', null );
            } else {
                this.set( 'activeTabName', tabName );
            }
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

    /**
     * Whether the tab panel is totally collapsed (all tab panes closed)
     * @property {boolean} isCollapsed
     */
    isCollapsed: function () {
        return this.get( 'collapsible' ) && this.get( 'activeTabName' ) === null;
    }.property( 'activeTabName', 'collapsible' ),

    /**
     * Handles the setup of the initial tab panel state
     * @method setupInitialTab
     */
    setupInitialTab: function () {
        if ( !this.get( 'collapsible' ) && !this.get( 'activeTabName' )) {
            this.set( 'activeTabName', this.$( '.tab:first' ).attr( 'data-tab-name' ));
        }

        this.updateActiveTab();
    }.on( 'didInsertElement' ),

    /**
     * The class determining how to align tabs
     * @property {string} tabAlignmentClass
     */
    tabAlignmentClass: function () {
        return 'sl-align-tabs-' + this.get( 'alignTabs' );
    }.property( 'alignTabs' ),

    /**
     * Unsets and sets the opened/closed panels
     * @method updateActiveTab
     */
    updateActiveTab: function () {
        var activeTabName = this.get( 'activeTabName' );
        var activeSelector = '[data-tab-name="' + activeTabName + '"]';

        // Close any currently-open tab pane
        this.$( '.tab-pane.active' ).removeClass( 'active' );
        this.$( '.tab.active' ).removeClass( 'active' );

        if ( activeTabName !== null ) {
            this.$( '.tab' + activeSelector ).tab( 'show' );
            this.$( '.tab-pane' + activeSelector ).addClass( 'active' );
        }
    }.observes( 'activeTabName', 'collapsible' )
});

Ember.Handlebars.helper( 'renderTabPane', function ( templateName, options ) {
    options.types[0] = 'STRING';
    return Ember.Handlebars.helpers.render.call( this, templateName, options );
});
