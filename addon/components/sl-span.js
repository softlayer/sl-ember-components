import Ember from 'ember';

/**
 * @module components
 * @class  sl-span
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

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
     * @property {Boolean} inverse
     * @default false
     */
    inverse: false,

    /**
     * Whether to show the loading icon or content
     *
     * @property {Boolean} loading
     * @default false
     */
    loading: false

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
