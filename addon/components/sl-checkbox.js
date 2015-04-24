import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import layout from '../templates/components/sl-checkbox';

/**
 * @module components
 * @class sl-checkbox
 * @augments Ember.Component
 * @mixes sl-tooltip-enabled
 */
export default Ember.Component.extend( TooltipEnabled, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    attributeBindings: [ 'checked', 'disabled' ],

    classNameBindings: [ 'disabled' ],

    classNames: [ 'checkbox', 'form-group', 'sl-checkbox' ],

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
     * @property {boolean} checked
     * @default  false
     */
    checked: false,

    /**
     * Whether the input is disabled or not
     *
     * @property {boolean} disabled
     * @default  false
     */
    disabled: false,

    /**
     * The input's label text
     *
     * @property {Ember.String} label
     * @default  null
     */
    label: null,

    /**
     * The input's name property value
     *
     * @property {Ember.String} name
     * @default  null
     */
    name: null

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
