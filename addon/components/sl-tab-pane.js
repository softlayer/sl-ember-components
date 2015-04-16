import Ember from 'ember';
import layout from '../templates/components/sl-tab-pane';

/**
 * @module components
 * @class  sl-tab-pane
 */
export default Ember.Component.extend({ layout,

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
