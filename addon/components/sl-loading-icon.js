import Ember from 'ember';

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
        'inverse:loading-icon-light:loading-icon-dark'
    ],

    /** @type {String[]} */
    classNames: [
        'loading-icon',
        'sl-ember-components'
    ],

    /** @type {String} */
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
     * @type {Boolean}
     */
    inverse: false

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
