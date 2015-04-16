import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import layout from '../templates/components/sl-checkbox';

/**
 * @module components
 * @class  sl-checkbox
 */
export default Ember.Component.extend( TooltipEnabled, { layout,

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * Attribute bindings for containing div
     *
     * @property {Ember.Array} attributeBindings
     */
    attributeBindings: [ 'checked', 'disabled' ],

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
    classNameBindings: [ 'disabled' ]

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
