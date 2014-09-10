import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';

/**
 * @module components
 * @class sl-alert
 */
export default Ember.Component.extend( TooltipEnabled, {

    /**
     * Array of attribute bindings for the alert's div
     * @property {array} attributeBindings
     */
    attributeBindings: [ 'role' ],

    /**
     * Array of class name bindings for the alert's div
     * @property {array} classNameBindings
     */
    classNameBindings: [ 'themeClassName', 'dismissable:alert-dismissable' ],

    /**
     * Array of class names for the alert's div
     * @property {array} classNames
     */
    classNames: [ 'alert', 'sl-alert' ],

    /**
     * Whether to make the alert dismissable or not
     * @property {boolean} dismissable
     * @default false
     */
    dismissable: false,

    /**
     * The role attribute for the alert's div
     * @property {string} role
     * @default "alert"
     */
    role: 'alert',

    /**
     * The Bootstrap "theme" style to apply to the alert
     * @property {string} theme
     * @default "info"
     */
    theme: 'info',

    /**
     * The generated Bootstrap "theme" style class for the alert
     * @property {string} themeClassName
     * @default "alert-info"
     */
    themeClassName: function () {
        return 'alert-' + this.get( 'theme' );
    }.property( 'theme' )
});
