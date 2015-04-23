import Ember from 'ember';
import layout from '../templates/components/sl-tab-pane';

/**
 * @module components
 * @class sl-tab-pane
 * @augments Ember.Component
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    attributeBindings: [ 'data-tab-label', 'data-tab-name' ],

    classNames: [ 'sl-tab-pane', 'tab-pane' ],

    layout,

    tagName: 'div',

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * The data attribute for the tab label, used by Bootstrap
     *
     * @alias label
     */
    'data-tab-label': Ember.computed.alias( 'label' ),

    /**
     * The data attribute for the tab name, used by Bootstrap
     *
     * @alias name
     */
    'data-tab-name': Ember.computed.alias( 'name' ),

    /**
     * Label text for the displayed tab name
     * 
     * @property {?String} label
     * @default null
     */
    label: null,

    /**
     * Text for internal tab identification
     *
     * @property {?String} name
     * @default null
     */
    name: null

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
