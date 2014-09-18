import Ember from 'ember';

/**
 * @module components
 * @class sl-tab-pane
 */
export default Ember.Component.extend({

    /**
     * Bindings for HTML attributes on the tab pane
     *
     * @property {array} attributeBindings
     */
    attributeBindings: [ 'data-tab-label', 'data-tab-name' ],

    /**
     * Class name values for the tab pane component
     *
     * @property {array} classNames
     */
    classNames: [ 'sl-tab-pane', 'tab-pane' ],

    /**
     * Label text for the displayed tab name
     *
     * @property {string} data-tab-label
     */
    'data-tab-label': Ember.computed.alias( 'label' ),

    /**
     * Text for internal tab identification
     *
     * @property {string} data-tab-name
     */
    'data-tab-name': Ember.computed.alias( 'name' ),

    /**
     * HTML tag for tab-pane component
     *
     * @property {string} tagName
     * @default "div"
     */
    tagName: 'div'
});
