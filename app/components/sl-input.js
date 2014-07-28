import Ember from 'ember';
import InputBased from '../mixins/input-based';
import TooltipEnabled from '../mixins/tooltip-enabled';

/**
 * @module components
 * @class sl-input
 */
export default Ember.Component.extend( InputBased, TooltipEnabled, {

    /**
     * Object containing action functions
     */
    actions: {

        /**
         * Sends the primary bound action when `enter` is pressed
         * @method actions.enter
         */
        enter: function () {
            this.sendAction();
        }
    },

    /**
     * Class names for the containing div
     * @property {Array} classNames
     */
    classNames: [ 'form-group', 'sl-input' ],

    /**
     * ID for the actual input element
     * @property {String} inputId
     */
    inputId: function () {
        return this.get( 'elementId' ) + 'Input';
    }.property( 'elementId' ),

    /**
     * Type attribute for the containing div
     * @property {String} type
     * @default "text"
     */
    type: 'text'
});
