import Ember from 'ember';
import ComponentClassPrefix from '../mixins/sl-component-class-prefix';

/**
 * @module
 * @augments ember/Component
 */
export default Ember.Component.extend( ComponentClassPrefix, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    classNameBindings: [
        'inverse:loading-icon-light:loading-icon-dark'
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
     * Component class that will be prefixed with base component class
     *
     * @type {String}
     */
    componentClass: 'loading-icon',

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
