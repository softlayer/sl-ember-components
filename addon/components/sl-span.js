import Ember from 'ember';
import ComponentClassPrefix from '../mixins/sl-component-class-prefix';
import layout from '../templates/components/sl-span';

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
        'inverse',
        'loading:sl-loading'
    ],

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
     * Component class that will be prefixed
     * with base component class
     *
     * @type {String}
     */
    componentClass: 'span',

    /**
     * Whether "inverse" class should be applied (only for sl-loading in this context)
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
