import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import ComponentClassPrefix from '../mixins/sl-component-class-prefix';
import layout from '../templates/components/sl-progress-bar';
import containsValue from '../utils/containsValue';
import warn from '../utils/warn';

/**
 * Valid Bootstrap theme class names for progress bars
 *
 * @memberof module:addon/components/sl-progress-bar
 * @enum {String}
 * @property DANGER 'danger'
 * @property DEFAULT 'default'
 * @property INFO 'info'
 * @property SUCCESS 'success'
 * @property WARNING 'warning'
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
export default Ember.Component.extend( ComponentClassPrefix, TooltipEnabled, {

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
        'progress'
    ],

    /** @type {Object} */
    layout,

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    /**
     * willInsertElement event hook
     *
     * @returns {undefined}
     */
    willInsertElement() {
        this._super( ...arguments );
        this.setCssWidth();
    },

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether to animate the progress bar or not
     *
     * @type {Boolean}
     */
    animated: false,

    /**
     * Component class that will be prefixed with base component class
     *
     * @type {String}
     */
    componentClass: 'progress-bar',

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

    /**
     * Update the width on the progress bar when value updates
     *
     * @function
     * @returns {undefined}
     */
    setWidth: Ember.observer(
        'value',
        function() {
            this.setCssWidth();
        }
    ),

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
     * Dynamically sets the width on the style of the progress bar
     *
     * @returns {undefined}
     */
    setCssWidth() {
        this.$( 'div' ).css( 'width', this.get( 'value' ) + '%' );
    },

    /**
     * Element-specific class name for the Bootstrap "theme" style
     *
     * @function
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
