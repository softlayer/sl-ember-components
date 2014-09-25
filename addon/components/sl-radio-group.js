import Ember from 'ember';
import InputBased from '../mixins/sl-input-based';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';

/**
 * @module components
 * @class sl-radio-group
 */
export default Ember.Component.extend( InputBased, TooltipEnabled, {

    /**
     * Component actions hash
     *
     * @property {object} actions
     */
    actions: {

        /**
         * Action to take when a radio button has been changed
         *
         * @method actions.change
         * @param {mixed} value - The value of the radio input that triggered change
         */
        change: function( value ) {
            this.set( 'value', value );
        }
    },

    /**
     * Attribute bindings for the component's root element
     *
     * @property {array} attributeBindings
     */
    attributeBindings: [ 'disabled' ],

    /**
     * Class names for the containing element
     *
     * @property {array} classNames
     */
    classNames: [ 'form-group', 'sl-radio-group' ],

    /**
     * Whether the radio buttons should be put inline together
     *
     * @property {boolean} inline
     * @default false
     */
    inline: false,

    /**
     * The currently selected radio input
     *
     * @property {object} selectedInput
     */
    selectedInput: function() {
        return this.$( 'input[value="' + this.get( 'value' ) + '"]' );
    }.property( 'value' ),

    /**
     * HTML tag name for the component's root element
     *
     * @property {string} tagName
     * @default "fieldset"
     */
    tagName: 'fieldset',

    /**
     * Selects the radio input with the current value
     *
     * @method updateSelection
     */
    updateSelection: function() {
        this.get( 'selectedInput' ).prop( 'checked', true );
    }.observes( 'value' ).on( 'didInsertElement' )
});
