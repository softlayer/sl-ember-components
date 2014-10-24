import Ember from 'ember';

/**
 * @module components
 * @class  sl-tab-pane
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * HTML tag for tab-pane component
     *
     * @property {Ember.String} tagName
     * @default "div"
     */
    tagName: 'div',

    /**
     * Bindings for HTML attributes on the tab pane
     *
     * @property {Ember.Array} attributeBindings
     */
    attributeBindings: [ 'data-tab-label', 'data-tab-name' ],

    /**
     * Class name values for the tab pane component
     *
     * @property {Ember.Array} classNames
     */
    classNames: [ 'sl-tab-pane', 'tab-pane' ],

    // -------------------------------------------------------------------------
    // Actions

    /**
     * Component actions hash
     *
     * @property {Ember.Object} actions
     */
    actions: {

        /**
         * Action to trigger collapse of parent tab-panel
         *
         * @function actions.collapseTabPanel
         * @returns  {void}
         */
        collapseTabPanel: function() {
            this.$().closest( '.sl-tab-panel' ).trigger( 'sl-tab-panel.collapse' );
        },

        /**
         * Action to trigger parent tab-panel content height recalculation
         *
         * @function actions.updateContentHeight
         * @returns  {void}
         */
        updateContentHeight: function() {
            this.$().closest( '.sl-tab-panel' ).trigger( 'sl-tab-panel.resize' );
        }
    },

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Label text for the displayed tab name
     *
     * @property {Ember.String} data-tab-label
     */
    'data-tab-label': Ember.computed.alias( 'label' ),

    /**
     * Text for internal tab identification
     *
     * @property {Ember.String} data-tab-name
     */
    'data-tab-name': Ember.computed.alias( 'name' ),

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
