import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import layout from '../templates/components/sl-alert';

/**
 * @module components
 * @class sl-alert
 * @augments Ember.Component
 * @mixes sl-tooltip-enabled
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
     * @property {String} theme
     * @default "info"
     */
    theme: 'info',

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
        return 'alert-' + this.get( 'theme' );
    })

});
