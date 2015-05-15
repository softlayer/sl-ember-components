import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import layout from '../templates/components/sl-checkbox';

/**
 * @module
 * @augments Ember.Component
 * @mixes sl-ember-components/mixins/sl-tooltip-enabled
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
     * @default
     */
    checked: false,

    /**
     * Whether the input is disabled or not
     *
     * @type {Boolean}
     * @default
     */
    disabled: false,

    /**
     * The input's label text
     *
     * @type {String}
     * @default
     */
    label: null,

    /**
     * The input's name property value
     *
     * @type {String}
     * @default
     */
    name: null

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
