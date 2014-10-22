import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';

/** @module sl-components/components/sl-drop-button */
export default Ember.Component.extend( TooltipEnabled, {

    /**
     * Class names for the div element
     *
     * @property {array}       classNames
     * @type     {Ember.Array}
     */
    classNames: [ 'btn-group', 'dropdown', 'sl-drop-button' ],

    /**
     * Class attribute bindings for the button
     *
     * @property {array}       classNameBindings
     * @type     {Ember.Array}
     */
    classNameBindings: [ 'themeClass' ],

    /**
     * Component actions hash
     *
     * @property {object}       actions
     * @type     {Ember.Object}
     */
    actions: {

        /**
         * Used to trigger specific option-bound action
         *
         * @function click
         * @argument {string}  action to trigger
         * @return   {void}
         */
        click: function( action ) {
            this.triggerAction({ action: action });
        }
    },

    /**
     * Class string for the button's icon
     *
     * @property {string} iconClass
     * @type     {Ember.String}
     * @default  "caret"
     */
    iconClass: 'caret',

    /**
     * The string name of the style theme for the button
     *
     * @property {string} theme
     * @type     {Ember.String}
     * @default  "default"
     */
    theme: 'default',

    /**
     * The class value for the drop-button based on the current "theme"
     *
     * @function themeClass
     * @observes theme
     * @return   {string}
     */
    themeClass: function() {
        return 'dropdown-' + this.get( 'theme' );
    }.property( 'theme' )
});
