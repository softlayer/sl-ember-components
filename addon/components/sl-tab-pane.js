import Ember from 'ember';
import layout from '../templates/components/sl-tab-pane';

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
    attributeBindings: [
        'data-tab-label',
        'data-tab-name'
    ],

    /** @type {String[]} */
    classNames: [
        'sl-tab-pane',
        'tab-pane'
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
     * Alias to `label`; data attribute binding for the `label` property
     *
     * @type {module:components/sl-tab-pane~label}
     */
    'data-tab-label': Ember.computed.alias( 'label' ),

    /**
     * Alias to `name`; data attribute binding for the `name` property
     *
     * @type {module:components/sl-tab-pane~name}
     */
    'data-tab-name': Ember.computed.alias( 'name' ),

    /**
     * Label text for the displayed tab name
     *
     * @type {?String}
     */
    label: null,

    /**
     * Text for internal tab identification
     *
     * @type {?String}
     */
    name: null

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
