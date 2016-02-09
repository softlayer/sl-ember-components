import Ember from 'ember';
import ComponentClassPrefix from '../mixins/class-prefix';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import layout from '../templates/components/sl-drop-button';
import {
    Size as ButtonSize,
    Theme as ButtonTheme
} from './sl-button';

/**
 * Values for the sl-drop-button's `align` property
 *
 * @memberof module:addon/components/sl-drop-button
 * @enum {String}
 * @property LEFT 'left'
 * @property RIGHT 'right'
 */
export const Align = Object.freeze({
    LEFT: 'left',
    RIGHT: 'right'
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
    classNames: [
        'btn-group'
    ],

    /** @type {Object} */
    layout,

    // -------------------------------------------------------------------------
    // Actions

    /** @type {Object} */
    actions: {

        /**
         * Used to trigger specific option-bound action
         *
         * @function actions:click
         * @param {String} action - Action to trigger
         * @returns {undefined}
         */
        click( action ) {
            this.triggerAction({ action });
        }

    },

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Dropdown menu alignment; either "left" or "right"
     *
     * @type {Align}
     */
    align: Align.LEFT,

    /**
     * Component class that will be prefixed with base class
     *
     * @type {String}
     */
    componentClass: 'drop-button',

    /**
     * Array of dropdown options
     *
     * @type {?Object[]}
     */
    content: null,

    /**
     * Class string for the button's icon
     *
     * @type {String}
     */
    iconClass: 'sl-icon-dropdown',

    /**
     * Text string used for labeling the drop-button
     *
     * @type {?String}
     */
    label: null,

    /**
     * The size of the button
     *
     * @type {module:components/sl-button.Size}
     */
    size: ButtonSize.MEDIUM,

    /**
     * The theme style name
     *
     * @type {module:components/sl-button.Theme}
     */
    theme: ButtonTheme.DEFAULT,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Whether the current "align" property is "right"
     *
     * @function
     * @returns {Boolean}
     */
    rightAligned: Ember.computed(
        'align',
        function() {
            return this.get( 'align' ) === Align.RIGHT;
        }
    )

});
