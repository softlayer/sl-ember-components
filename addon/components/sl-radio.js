import Ember from 'ember';
import layout from '../templates/components/sl-radio';

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
        'disabled'
    ],

    /** @type {String[]} */
    classNameBindings: [
        'disabled',
        'radioType'
    ],

    /** @type {String[]} */
    classNames: [
        'sl-radio'
    ],

    /** @type {Object} */
    layout,

    /** @type {String} */
    tagName: 'div',

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Name for the component
     *
     * @type {?String}
     */
    name: null,

    /**
     * Text label for the component
     *
     * @type {?String}
     */
    label: null,

    /**
     * Whether the component is in read-only state or not
     *
     * @type {Boolean}
     */
    readonly: false,

    /**
     * Whether the component is in the disabled state or not
     *
     * @type {Boolean}
     */
    disabled: false,

    /**
     * Bound value for the radio button
     *
     * @type {?String}
     */
    value: null,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Type of radio button; "radio-inline" when inline, "radio" default
     *
     * @function
     * @returns {String}
     */
    radioType: Ember.computed(
        'inline',
        function() {
            return this.get( 'inline' ) ? 'radio-inline' : 'radio';
        }
    )

});
