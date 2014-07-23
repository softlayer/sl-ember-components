import Ember from 'ember';
import TooltipEnabled from '../mixins/tooltip-enabled';

/**
 * @module components
 * @class sl-radiogroup
 */
export default Ember.Component.extend( TooltipEnabled, {

    /**
     * Object of action functions
     * @property {object} actions
     */
    actions: {

        /**
         * Action to take when a radio button has been changed
         * @method change
         * @param {mixed} value - The value of the radio input that triggered change
         */
        change: function ( value ) {
            this.set( 'value', value );
        }
    },

    /**
     * Class names for the containing element
     * @property {array} classNames
     */
    classNames: [ 'form-group', 'sl-radiogroup' ],

    /**
     * Whether the radio buttons should be put inline together
     * @property {boolean} inline
     * @default false
     */
    inline: false,

    /**
     * The currently selected radio input
     * @property {object} selectedInput
     */
    selectedInput: function () {
        return this.$( 'input[value="' + this.get( 'value' ) + '"]' );
    }.property( 'value' ),

    /**
     * Selects the radio input with the current value
     * @method updateSelection
     */
    updateSelection: function () {
        this.get( 'selectedInput' ).prop( 'checked', true );
    }.observes( 'value' ).on( 'didInsertElement' )
});
