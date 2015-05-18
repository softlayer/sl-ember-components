import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import layout from '../templates/components/sl-progress-bar';

/**
 * Valid Bootstrap theme class names for progress bars
 *
 * @name module:components/sl-progress-bar.THEME
 * @enum {String}
 */
export const THEME = {
    DANGER  : 'danger',
    DEFAULT : 'default',
    INFO    : 'info',
    SUCCESS : 'success',
    WARNING : 'warning'
};

/**
 * @module
 * @augments Ember/Component
 * @mixes sl-ember-components/mixins/sl-tooltip-enabled
*/
export default Ember.Component.extend( TooltipEnabled, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    classNameBindings: [ 'isLowPercentage:sl-progress-bar-low-percentage' ],

    /** @type {String[]} */
    classNames: [ 'progress', 'sl-progress-bar' ],

    /** @type {Object} */
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
     * @type {Boolean}
     */
    animated: false,

    /**
     * Whether to display a text value over the progress
     *
     * @type {Boolean}
     */
    label: false,

    /**
     * Whether to style the progress bar with stripes
     *
     * @type {Boolean}
     */
    striped: false,

    /**
     * The Bootstrap "theme" style name
     *
     * @type {THEME}
     */
    theme: THEME.DEFAULT,

    /**
     * The progress value as an integer (out of 100)
     *
     * @type {Number}
    */
    value: 0,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Whether the progress value is below a certain level
     *
     * @function
     * @observes value
     * @returns {Boolean}
     */
    isLowPercentage: Ember.computed( 'value', function() {
        return this.get( 'value' ) < 50;
    }),

    /**
     * Inline style string for progress bar element
     *
     * @function
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
     * @function
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
