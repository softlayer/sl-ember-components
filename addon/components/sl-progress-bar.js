import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import layout from '../templates/components/sl-progress-bar';
import { containsValue, warn } from '../utils/all';

/**
 * Valid Bootstrap theme class names for progress bars
 *
 * @memberof module:components/sl-progress-bar
 * @enum {String}
 */
export const Theme = Object.freeze({
    DANGER: 'danger',
    DEFAULT: 'default',
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning'
});

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

    /** @type {String[]} */
    classNameBindings: [
        'isLowPercentage:sl-progress-bar-low-percentage'
    ],

    /** @type {String[]} */
    classNames: [
        'progress',
        'sl-progress-bar'
    ],

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
     * @type {Theme}
     */
    theme: Theme.DEFAULT,

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
     * @returns {Boolean}
     */
    isLowPercentage: Ember.computed(
        'value',
        function() {
            return this.get( 'value' ) < 50;
        }
    ),

    /**
     * Inline style string for progress bar element
     *
     * @function
     * @returns {ember/String}
     */
    styleString: Ember.computed(
        'value',
        function() {
            return Ember.String.htmlSafe( `width: ${this.get( 'value' )}%;` );
        }
    ),

    /**
     * Element-specific class name for the Bootstrap "theme" style
     *
     * @function
     * @throws {ember.assert} Thrown if the supplied `theme` property value is
     *         not included in the enum Theme
     * @returns {String}
     */
    themeClassName: Ember.computed(
        'theme',
        function() {
            const theme = this.get( 'theme' );

            if ( !containsValue( theme, Theme ) ) {
                warn( `Invalid theme property value "${theme}"` );
            }

            return `progress-bar-${theme}`;
        }
    )

});
