import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';

/** @module sl-components/components/sl-alert */
export default Ember.Component.extend( TooltipEnabled, {

    /**
     * Array of class names for the alert's div
     *
     * @property {array}       classNames
     * @type     {Ember.Array}
     */
    classNames: [ 'alert', 'sl-alert' ],

    /**
     * Array of attribute bindings for the alert's div
     *
     * @property {array}       attributeBindings
     * @type     {Ember.Array}
     */
    attributeBindings: [ 'role' ],

    /**
     * Array of class name bindings for the alert's div
     *
     * @property {array}       classNameBindings
     * @type     {Ember.Array}
     */
    classNameBindings: [ 'themeClassName', 'dismissable:alert-dismissable' ],

    /**
     * Actions for the alert component
     *
     * @property {object}       actions
     * @type     {Ember.Object}
     */
    actions: {

        /**
         * Trigger a bound "dismiss" action when the alert is dismissed
         *
         * @function actions.dismiss
         * @return   {void}
         */
        dismiss: function() {
            this.sendAction( 'dismiss' );
        }
    },

    /**
     * Whether to make the alert dismissable or not
     *
     * @property {boolean} dismissable
     * @default  false
     */
    dismissable: false,

    /**
     * The role attribute for the alert's div
     *
     * @property {string}       role
     * @type     {Ember.String}
     * @default  "alert"
     */
    role: 'alert',

    /**
     * The Bootstrap "theme" style to apply to the alert
     *
     * @property {string}       theme
     * @type     {Ember.String}
     * @default  "info"
     */
    theme: 'info',

    /**
     * The generated Bootstrap "theme" style class for the alert
     *
     * @function themeClassName
     * @return   {Ember.String}  Defaults to "alert-info"
     */
    themeClassName: function() {
        return 'alert-' + this.get( 'theme' );
    }.property( 'theme' )
});
