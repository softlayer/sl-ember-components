import Ember from 'ember';
import InputBased from '../mixins/sl-input-based';
import layout from '../templates/components/sl-radio';

/**
 * @module
 * @augments ember/Component
 * @augments module:mixins/sl-input-based
 */
export default Ember.Component.extend( InputBased, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    classNameBindings: [
        'inline:radio-inline'
    ],

    /** @type {String[]} */
    classNames: [
        'sl-radio',
        'radio'
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
     * Text label for the component
     *
     * @type {?String}
     */
    label: null,

    /**
     * Bound value for the radio button
     *
     * @type {?String}
     */
    value: null

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
