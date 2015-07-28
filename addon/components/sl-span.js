import Ember from 'ember';
import layout from '../templates/components/sl-span';

/**
 * @module
 * @augments ember/Component
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {Object} */
    layout,

    /** @type {String} */
    tagName: 'span',

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether the underlying loading-icon is inverse
     *
     * @type {Boolean}
     */
    inverse: false,

    /**
     * Whether to show the loading icon or content
     *
     * @type {Boolean}
     */
    loading: false,

    /**
     * The value to display once loaded/ready
     *
     * @type {?String}
     */
    value: null

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
