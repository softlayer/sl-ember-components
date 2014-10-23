import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';

/** @module sl-components/components/sl-progress-bar */
export default Ember.Component.extend( TooltipEnabled, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * Class names for the root element
     *
     * @property {array} classNames
     */
    classNames: [ 'progress', 'sl-progress-bar' ],

    /**
     * Class name bindings for the root element
     *
     * @property {array} classNameBindings
     */
    classNameBindings: [ 'isLowPercentage:sl-progress-bar-low-percentage' ],

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether to animate the progress bar or not
     *
     * @property {boolean} active
     * @default  false
     */
    animated: false,

    /**
     * Whether to display a text value over the progress
     *
     * @property {boolean} label
     * @default  false
     */
    label: false,

    /**
     * The Bootstrap "theme" style name
     *
     * @property {string} theme
     * @default  "default"
     */
    theme: 'default',

    /**
     * The progress value as an integer (out of 100)
     *
     * @property {number} value
     * @default  0
    */
    value: 0,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Whether the progress value is below a certain level
     *
     * @property {boolean} isLowPercentage
     */
    isLowPercentage: function() {
        return this.get( 'value' ) < 50;
    }.property( 'value' ),

    /**
     * Inline style string for progress bar element
     *
     * @property {string} styleString
     */
    styleString: function() {
        return 'width: ' + this.get( 'value' ) + '%;';
    }.property( 'value' ),

    /**
     * Element-specific class name for the Bootstrap "theme" style
     *
     * @property {string} themeClassName
     * @default "progress-bar-default"
     */
    themeClassName: function() {
        return 'progress-bar-' + this.get( 'theme' );
    }.property( 'theme' ),

    // -------------------------------------------------------------------------
    // Private Methods

});
