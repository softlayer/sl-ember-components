import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import layout from '../templates/components/sl-alert';

/**
 * Bootstrap theme names for alert components
 *
 * @memberof module:components/sl-alert
 * @enum {String}
 */
const THEME = {
    DANGER: 'danger',
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning'
};
export { THEME };

/**
 * @module
 * @augments ember/Component
 * @augments module:mixins/sl-tooltip-enabled
 */
export default Ember.Component.extend( TooltipEnabled, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String} */
    ariaRole: 'alert',

    /** @type {String[]} */
    classNameBindings: [
        'themeClassName',
        'dismissable:alert-dismissable'
    ],

    /** @type {String[]} */
    classNames: [
        'alert',
        'sl-alert'
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
     * Whether to make the alert dismissable or not
     *
     * @type {Boolean}
     */
    dismissable: false,

    /**
     * The Bootstrap "theme" style to apply to the alert
     *
     * @type {THEME}
     */
    theme: THEME.INFO,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * The generated Bootstrap "theme" style class for the alert
     *
     * @function
     * @throws {ember.assert} Thrown if the supplied `theme` value is not one
     *         defined in the enum THEME
     * @returns {String} Defaults to "alert-info"
     */
    themeClassName: Ember.computed(
        'theme',
        function() {
            const theme = this.get( 'theme' );

            Ember.assert(
                'Error: Invalid theme string',
                Object.keys( THEME )
                    .map( ( key ) => THEME[ key ] )
                    .indexOf( theme ) > -1
            );

            return `alert-${theme}`;
        }
    )

});
