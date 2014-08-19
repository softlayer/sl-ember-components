import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';

/**
 * @module components
 * @class sl-dropbutton
 */
export default Ember.Component.extend( TooltipEnabled, {

    /**
     * Object containing action functions
     * @property {object} actions
     */
    actions: {

        /**
         * Used to trigger specific option-bound action
         * @method click
         */
        click: function ( action ) {
            this.triggerAction({ action: action });
        }
    },

    /**
     * Class names for the div element
     * @property {array} classNames
     */
    classNames: [ 'btn-group', 'sl-drop-button' ],

    /**
     * Class string for the button's icon
     * @property {string} iconClass
     * @default "caret"
     */
    iconClass: 'caret'
});
