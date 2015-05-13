import Ember from 'ember';
import layout from '../templates/components/sl-radio';

/**
 * @module components
 * @class sl-radio
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    attributeBindings: [ 'disabled' ],

    classNameBindings: [ 'disabled', 'radioType' ],

    classNames: [ 'sl-radio' ],

    layout,

    tagName: 'div',

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether the component is in the disabled state or not
     *
     * @property {Boolean} disabled
     * @default false
     */
    disabled: false,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Type of radio button; "radio-inline" when inline, "radio" default
     *
     * @function radioType
     * @observes inline
     * @returns {String}
     */
    radioType: Ember.computed( 'inline', function() {
        return this.get( 'inline' ) ? 'radio-inline' : 'radio';
    })

});
