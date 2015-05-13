import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import layout from '../templates/components/sl-alert';

/**
 * Bootstrap theme names for alert components
 *
 * @enum {String} THEME
 */
export const THEME = {
    DANGER  : 'danger',
    INFO    : 'info',
    SUCCESS : 'success',
    WARNING : 'warning'
};

/**
 * @module components
 * @class sl-alert
 */
export default Ember.Component.extend( TooltipEnabled, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    ariaRole: 'alert',

    classNameBindings: [ 'themeClassName', 'dismissable:alert-dismissable' ],

    classNames: [ 'alert', 'sl-alert' ],

    layout,

    // -------------------------------------------------------------------------
    // Actions

    actions: {

        /**
         * Trigger a bound "dismiss" action when the alert is dismissed
         *
         * @function actions.dismiss
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
     * @property {Boolean} dismissable
     * @default false
     */
    dismissable: false,

    /**
     * The Bootstrap "theme" style to apply to the alert
     *
     * @property {THEME} theme
     * @default THEME.INFO
     */
    theme: THEME.INFO,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * The generated Bootstrap "theme" style class for the alert
     *
     * @function themeClassName
     * @observes theme
     * @returns {String} Defaults to "alert-info"
     */
    themeClassName: Ember.computed( 'theme', function() {
        var theme = this.get( 'theme' );

        Ember.assert(
            'Error: Invalid theme string',
            Object.keys( THEME ).map( ( key ) => THEME[ key ] ).indexOf( theme ) > -1
        );

        return `alert-${theme}`;
    })

});
