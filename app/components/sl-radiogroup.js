import Ember from 'ember';
import InputBased from '../mixins/input-based';
import TooltipEnabled from '../mixins/tooltip-enabled';

/**
 * @module components
 * @class sl-radiogroup
 */
export default Ember.Component.extend( InputBased, TooltipEnabled, {

    /**
     * Object of action functions
     * @property {Object} actions
     */
    actions: {

        /**
         * Action to take when a radio button has been changed
         * @method actions.change
         * @param {mixed} value - The value of the radio input that triggered change
         */
        change: function ( value ) {
            this.set( 'value', value );
        }
    },

    /**
     * Attribute bindings for the component's root element
     * @property {Array} attributeBindings
     */
    attributeBindings: [ 'disabled' ],

    /**
     * Class names for the containing element
     * @property {Array} classNames
     */
    classNames: [ 'form-group', 'sl-radiogroup' ],

    /**
     * Whether the radio buttons should be put inline together
     * @property {Boolean} inline
     * @default false
     */
    inline: false,

    /**
     * The currently selected radio input
     * @property {Object} selectedInput
     */
    selectedInput: function () {
        return this.$( 'input[value="' + this.get( 'value' ) + '"]' );
    }.property( 'value' ),

    /**
     * HTML tag name for the component's root element
     * @property {String} tagName
     * @default "fieldset"
     */
    tagName: 'fieldset',

    /**
     * Selects the radio input with the current value
     * @method updateSelection
     */
    updateSelection: function () {
        this.get( 'selectedInput' ).prop( 'checked', true );
    }.observes( 'value' ).on( 'didInsertElement' )
});
