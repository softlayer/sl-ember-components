import Ember from 'ember';
import layout from '../templates/components/sl-radio';

/**
 * @module components
 * @class  sl-radio
 */
export default Ember.Component.extend({ layout,

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * HTML tag name for the root element
     *
     * @property {Ember.String} tagName
     * @default  "div"
     */
    tagName: 'div',

    /**
     * Attribute bindings for the root element
     *
     * @property {Ember.Array} attributeBindings
     */
    attributeBindings: [ 'disabled' ],

    /**
     * Class names for the root element
     *
     * @property {Ember.Array} classNames
     */
    classNames: [ 'sl-radio' ],

    /**
     * Class name bindings for the root element
     *
     * @property {Ember.Array} classNameBindings
     */
    classNameBindings: [ 'disabled', 'radioType' ],

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether the component is in the disabled state or not
     *
     * @property {boolean} disabled
     * @default  false
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
     * @returns  {Ember.String}
     */
    radioType: Ember.computed( 'inline', function() {
        return this.get( 'inline' ) ? 'radio-inline' : 'radio';
    })
});
