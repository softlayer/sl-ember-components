import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';

/**
 * @module components
 * @class  sl-checkbox
 */
export default Ember.Component.extend( TooltipEnabled, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * Class names for containing div
     *
     * @property {Ember.Array} classNames
     */
    classNames: [ 'checkbox', 'form-group', 'sl-checkbox' ],

    /**
     * Bindings for the base component class
     *
     * @property {Ember.Array} classNameBindings
     */
    classNameBindings: [ 'disabled' ],

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
