import Ember from 'ember';

/**
 * @module components
 * @class  sl-radio
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * HTML tag name for the root element
     *
     * @property {string} tagName
     * @default  "div"
     */
    tagName: 'div',

    /**
     * Class names for the root element
     *
     * @property {array} classNames
     */
    classNames: [ 'radio', 'sl-radio' ],

    /**
     * Class name bindings for the root element
     *
     * @property {array} classNameBindings
     */
    classNameBindings: [ 'disabled' ],

    // -------------------------------------------------------------------------
    // Actions

    /**
     * Component actions hash
     *
     * @property {object} actions
     */
    actions: {

        /**
         * Trigger a change of value for a parent sl-radio-group component
         *
         * @function actions.change
         */
        change: function( value ) {
            this.$().closest( '.sl-radio-group' ).trigger( 'sl-radio-group.changeValue', value );
        }
    },

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * ID attribute for the radio input
     *
     * @property {string} inputId
     */
    inputId: function() {
        return this.get( 'elementId' ) + '-input';
    }.property( 'elementId' ),

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Type of radio button; "radio-inline" when inline, "radio" default
     *
     * @property {string} radioType
     * @default  "radio"
     */
    radioType: function() {
        return this.get( 'inline' ) ? 'radio-inline' : 'radio';
    }.property( 'inline' )

    // -------------------------------------------------------------------------
    // Private Methods

});
