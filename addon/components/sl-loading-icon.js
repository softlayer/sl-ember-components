import Ember from 'ember';

/**
 * @module components
 * @class sl-loading-icon
 * @augments Ember.Component
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    classNameBindings: [ 'inverse:sl-loading-icon-light:sl-loading-icon-dark' ],

    classNames: [ 'sl-loading-icon' ],

    tagName: 'span',

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether to use the inverse (lighter colored) icon
     *
     * @property {Boolean} inverse
     * @default false
     */
    inverse: false

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
