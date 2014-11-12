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

    /**
     * The HTML tag name of the component
     *
     * @property {Ember.String} tagname
     * @default  "span"
     */
    tagName: 'span',

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether to show the loading icon or content
     *
     * @property {boolean} isLoading
     * @default  false
     */
    isLoading: false

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
