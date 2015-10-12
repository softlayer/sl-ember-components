import Ember from 'ember';
import InputBased from '../mixins/sl-input-based';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import layout from '../templates/components/sl-checkbox';

/**
 * @module
 * @augments ember/Component
 * @augments module:mixins/sl-tooltip-enabled
 */
export default Ember.Component.extend( InputBased, TooltipEnabled, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    classNames: [
        'checkbox',
        'form-group',
        'sl-checkbox'
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
     * Whether the input is checked or not
     *
     * @type {Boolean}
     */
    checked: false,

    /**
     * The input's label text
     *
     * @type {?String}
     */
    label: null

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
