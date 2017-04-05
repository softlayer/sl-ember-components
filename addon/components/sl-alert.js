import Ember from 'ember';
import ClassPrefix from '../mixins/class-prefix';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import layout from '../templates/components/sl-alert';
import containsValue from '../utils/containsValue';
import warn from '../utils/warn';

/**
 * Bootstrap theme names for alert components
 *
 * @memberof module:addon/components/sl-alert
 * @enum {String}
 * @property {String} DANGER 'danger'
 * @property {String} INFO 'info'
 * @property {String} SUCCESS 'success'
 * @property {String} WARNING 'warning'
 */
export const Theme = Object.freeze({
    DANGER: 'danger',
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning'
});

/**
 * @module
 * @augments ember/Component
 * @augments module:mixins/sl-tooltip-enabled
 */
export default Ember.Component.extend( ClassPrefix, TooltipEnabled, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String} */
    ariaRole: 'alert',

    /** @type {String[]} */
    classNameBindings: [
        'componentClassName',
        'themeClassName',
        'dismissable:alert-dismissable'
    ],

    /** @type {String[]} */
    classNames: [
        'alert'
    ],

    /** @type {Object} */
    layout,

    // -------------------------------------------------------------------------
    // Actions

    /**
     * @type {Object}
     */
    actions: {

        /**
         * Trigger a bound "dismiss" action when the alert is dismissed
         *
         * @function actions:dismiss
         * @returns {undefined}
         */
        dismiss() {
            this.sendAction( 'dismiss' );
        }

    },

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Component class that will be prefixed with base class
     *
     * @type {String}
     */
    componentClass: 'alert',

    /**
     * Whether to make the alert dismissable or not
     *
     * @type {Boolean}
     */
    dismissable: false,

    /**
     * The Bootstrap "theme" style to apply to the alert
     *
     * @type {Theme}
     */
    theme: Theme.INFO,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * The generated Bootstrap "theme" style class for the alert
     *
     * @function
     * @returns {String} Defaults to "alert-info"
     */
    themeClassName: Ember.computed(
        'theme',
        function() {
            const theme = this.get( 'theme' );

            if ( !containsValue( theme, Theme ) ) {
                warn( `Invalid theme value "${theme}"` );
            }

            return `alert-${theme}`;
        }
    )

});
