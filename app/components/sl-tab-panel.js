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
            this.get( 'activePane' ).removeClass( 'active' );
            this.get( 'activeTab' ).removeClass( 'active' );

            this.set( 'activeTabName', tabName );

            this.get( 'activePane' ).addClass( 'active' );
            this.get( 'activeTab' ).addClass( 'active' );
        }
    },

    /**
     * The currently active pane element
     * @property {object} activePane
     */
    activePane: function () {
        return this.$( '.tab-pane[data-tab-name="' + this.get( 'activeTabName' ) + '"]' );
    }.property( 'activeTabName' ),

    /**
     * The currently active tab element
     * @property {object} activeTab
     */
    activeTab: function () {
        return this.$( '.tab[data-tab-name="' + this.get( 'activeTabName' ) + '"]' );
    }.property( 'activeTabName' ),

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
    classNameBindings: [ 'tabAlignmentClass' ],

    /**
     * Class names for the root element
     * @property {array} classNames
     */
    classNames: [ 'sl-tab-panel' ],

    /**
     * Method to setup the initial tabpanel tabs and panes
     * @method setup
     */
    setup: function () {
        this.get( 'activePane' ).addClass( 'active' );
        this.get( 'activeTab' ).addClass( 'active' );
    }.on( 'didInsertElement' ),

    /**
     * The class determining how to align tabs
     * @property {string} tabAlignmentClass
     */
    tabAlignmentClass: function () {
        return 'align-tabs-' + this.get( 'alignTabs' );
    }.property( 'alignTabs' )
});

Ember.Handlebars.helper( 'renderTabPane', function ( templateName, options ) {
    options.types[0] = 'STRING';
    return Ember.Handlebars.helpers.render.call( this, templateName, options );
});