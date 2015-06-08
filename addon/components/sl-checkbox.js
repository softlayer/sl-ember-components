import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import layout from '../templates/components/sl-checkbox';

/**
 * @module
 * @augments ember/Component
 * @augments module:mixins/sl-tooltip-enabled
 */
export default Ember.Component.extend( TooltipEnabled, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    attributeBindings: [ 'checked', 'disabled' ],

    /** @type {String[]} */
    classNameBindings: [ 'disabled' ],

    /** @type {String[]} */
    classNames: [ 'checkbox', 'form-group', 'sl-checkbox' ],

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
     * Whether the input is disabled or not
     *
     * @type {Boolean}
     */
    disabled: false,

    /**
     * The input's label text
     *
     * @type {?String}
     */
    label: null,

    /**
     * The input's name property value
     *
     * @type {?String}
     */
    name: null

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
