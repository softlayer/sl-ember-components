import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import layout from '../templates/components/sl-progress-bar';

/**
 * @module components
 * @class  sl-progress-bar
*/
export default Ember.Component.extend( TooltipEnabled, { layout,

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * Class names for the root element
     *
     * @property {Ember.Array} classNames
     */
    classNames: [ 'progress', 'sl-progress-bar' ],

    /**
     * Class name bindings for the root element
     *
     * @property {Ember.Array} classNameBindings
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
     * @property {boolean} animated
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
     * Whether to style the progress bar with stripes
     *
     * @property {boolean} striped
     * @default  false
     */
    striped: false,

    /**
     * The Bootstrap "theme" style name
     *
     * @property {Ember.String} theme
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
     * @function isLowPercentage
     * @observes value
     * @returns  {boolean}
     */
    isLowPercentage: Ember.computed( 'value', function() {
        return this.get( 'value' ) < 50;
    }),

    /**
     * Inline style string for progress bar element
     *
     * @function styleString
     * @observes value
     * @returns  {Ember.String}
     */
    styleString: Ember.computed( 'value', function() {
        return 'width: ' + this.get( 'value' ) + '%;';
    }),

    /**
     * Element-specific class name for the Bootstrap "theme" style
     *
     * @function themeClassName
     * @observes theme
     * @returns  {Ember.String}
     */
    themeClassName: Ember.computed( 'theme', function() {
        return 'progress-bar-' + this.get( 'theme' );
    })

});
