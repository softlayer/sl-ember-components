import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';

/**
 * @module components
 * @class sl-drop-button
 */
export default Ember.Component.extend( TooltipEnabled, {

    /**
     * Component actions hash
     *
     * @property {object} actions
     */
    actions: {

        /**
         * Used to trigger specific option-bound action
         *
         * @method click
         */
        click: function( action ) {
            this.triggerAction({ action: action });
        }
    },

    /**
     * Class attribute bindings for the button
     *
     * @property {array} classNameBindings
     */
    classNameBindings: [ 'themeClass' ],

    /**
     * Class names for the div element
     *
     * @property {array} classNames
     */
    classNames: [ 'btn-group', 'dropdown', 'sl-drop-button' ],

    /**
     * Class string for the button's icon
     *
     * @property {string} iconClass
     * @default "caret"
     */
    iconClass: 'caret',

    /**
     * The string name of the style theme for the button
     *
     * @property {string} theme
     * @default "default"
     */
    theme: 'default',

    /**
     * The class value for the drop-button based on the current "theme"
     *
     * @property {string} themeClass
     */
    themeClass: function() {
        return 'dropdown-' + this.get( 'theme' );
    }.property( 'theme' )
});
