import Ember from 'ember';

/**
 * @module components
 * @class sl-radiogroup
 */
export default Ember.Component.extend({

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
     * Initializes initial radio value, run after the element is added to the DOM
     * @method didInsertElement
     */
    didInsertElement: function () {
        this.updateSelection();
    },

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
    updateSelection: Ember.observer( 'value', function () {
        this.get( 'selectedInput' ).prop( 'checked', true );
    })
});
