import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import layout from '../templates/components/sl-progress-bar';

/**
 * Valid Bootstrap theme class names for progress bars
 *
 * @enum {String} THEME
 */
export const THEME = {
    DANGER  : 'danger',
    DEFAULT : 'default',
    INFO    : 'info',
    SUCCESS : 'success',
    WARNING : 'warning'
};

/**
 * @module components
 * @class sl-progress-bar
*/
export default Ember.Component.extend( TooltipEnabled, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    classNameBindings: [ 'isLowPercentage:sl-progress-bar-low-percentage' ],

    classNames: [ 'progress', 'sl-progress-bar' ],

    layout,

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether to animate the progress bar or not
     *
     * @property {Boolean} animated
     * @default false
     */
    animated: false,

    /**
     * Whether to display a text value over the progress
     *
     * @property {Boolean} label
     * @default false
     */
    label: false,

    /**
     * Whether to style the progress bar with stripes
     *
     * @property {Boolean} striped
     * @default false
     */
    striped: false,

    /**
     * The Bootstrap "theme" style name
     *
     * @property {THEME} theme
     * @default THEME.DEFAULT
     */
    theme: THEME.DEFAULT,

    /**
     * The progress value as an integer (out of 100)
     *
     * @property {Number} value
     * @default 0
    */
    value: 0,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Whether the progress value is below a certain level
     *
     * @function isLowPercentage
     * @observes value
     * @returns {Boolean}
     */
    isLowPercentage: Ember.computed( 'value', function() {
        return this.get( 'value' ) < 50;
    }),

    /**
     * Inline style string for progress bar element
     *
     * @function styleString
     * @observes value
     * @returns {Ember.String}
     */
    styleString: Ember.computed( 'value', function() {
        var value = this.get( 'value' );

        return Ember.String.htmlSafe( `width: ${value}%;` );
    }),

    /**
     * Element-specific class name for the Bootstrap "theme" style
     *
     * @function themeClassName
     * @observes theme
     * @returns {String}
     */
    themeClassName: Ember.computed( 'theme', function() {
        var theme = this.get( 'theme' );

        Ember.assert(
            `Error: Invalid theme property value "${theme}"`,
            Object.keys( THEME ).map( ( key ) => THEME[ key ] ).indexOf( theme ) > -1
        );

        return `progress-bar-${theme}`;
    })

});
