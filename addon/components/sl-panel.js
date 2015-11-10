import Ember from 'ember';
import layout from '../templates/components/sl-panel';

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
        'loading:sl-loading'
    ],

    /** @type {String[]} */
    classNames: [
        'panel',
        'panel-default',
        'sl-ember-components'
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
     * Heading text to display in the header section of the panel
     *
     * @type {?String}
     */
    heading: null,

    /**
     * When true, the panel body will be in a loading state
     *
     * @type {Boolean}
     */
    loading: false

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
