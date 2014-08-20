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
            if ( this.get( 'activeTabName' ) !== tabName ) {
                this.set( 'activeTabName', tabName );
            } else {
                this.set( 'activeTabName', null );
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
    classNameBindings: [ 'tabAlignmentClass' ],

    /**
     * Class names for the root element
     * @property {array} classNames
     */
    classNames: [ 'sl-tab-panel' ],

    /**
     * The class determining how to align tabs
     * @property {string} tabAlignmentClass
     */
    tabAlignmentClass: function () {
        return 'align-tabs-' + this.get( 'alignTabs' );
    }.property( 'alignTabs' ),

    /**
     *
     */
    updateActiveTab: function () {
        var activeTabName = this.get( 'activeTabName' );

        this.$( '.tab.active' ).removeClass( 'active' );
        this.$( '.tab-pane.active' ).removeClass( 'active' );

        if ( activeTabName !== null ) {
            var activeSelector = '[data-tab-name="' + activeTabName + '"]';

            this.$( '.tab' + activeSelector ).tab( 'show' );
            this.$( '.tab-pane' + activeSelector ).addClass( 'active' );
        }
    }.observes( 'activeTabName' ).on( 'didInsertElement' )
});

Ember.Handlebars.helper( 'renderTabPane', function ( templateName, options ) {
    options.types[0] = 'STRING';
    return Ember.Handlebars.helpers.render.call( this, templateName, options );
});
