import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';

/**
 * @module components
 * @class sl-progressbar
 */
export default Ember.Component.extend( TooltipEnabled, {

    /**
     * Whether to animate the progress bar or not
     * @property {boolean} active
     * @default false
     */
    active: false,

    /**
     * Bindings for the progress bar component
     * @property {array} classNameBindings
     */
    classNameBindings: [ 'isLowPercentage:sl-progress-bar-low-percentage' ],

    /**
     * Class names for the containing element
     * @property {array} classNames
     */
    classNames: [ 'progress', 'sl-progress-bar' ],

    /**
     * Whether the progress value is below a certain level
     * @property {boolean} isLowPercentage
     */
    isLowPercentage: function () {
        return this.get( 'value' ) < 50;
    }.property( 'value' ),

    /**
     * Whether to display a text value over the progress
     * @property {boolean} label
     * @default false
     */
    label: false,

    /**
     * Inline style string for progress bar element
     * @property {string} styleString
     */
    styleString: function () {
        return 'width: ' + this.get( 'value' ) + '%;';
    }.property( 'value' ),

    /**
     * The Bootstrap "theme" style name
     * @property {string} theme
     * @default "default"
     */
    theme: 'default',

    /**
     * Element-specific class name for the Bootstrap "theme" style
     * @property {string} themeClassName
     * @default "progress-bar-default"
     */
    themeClassName: function () {
        return 'progress-bar-' + this.get( 'theme' );
    }.property( 'theme' ),

    /**
     * The progress value as an integer (out of 100)
     * @property {number} value
     * @default 0
    */
    value: 0
});
