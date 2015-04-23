import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import layout from '../templates/components/sl-progress-bar';

/**
 * @module components
 * @class sl-progress-bar
 * @augments Ember.Component
 * @mixes sl-tooltip-enabled
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
     * @property {String} theme
     * @default "default"
     */
    theme: 'default',

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
        return 'progress-bar-' + this.get( 'theme' );
    })

});
