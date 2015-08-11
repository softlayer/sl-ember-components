import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import layout from '../templates/components/sl-drop-button';
import { containsValue, warn } from '../utils/all';
import {
    Size as ButtonSize,
    Theme as ButtonTheme
} from './sl-button';

/**
 * Values for the sl-drop-button's `align` property
 *
 * @memberof module:components/sl-drop-button
 * @enum {String}
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
export default Ember.Component.extend( TooltipEnabled, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    classNameBindings: [
        'themeClass'
    ],

    /** @type {String[]} */
    classNames: [
        'btn-group',
        'dropdown',
        'sl-drop-button'
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
    iconClass: 'caret',

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
    ),

    /**
     * The class value for the drop-button based on the current "theme"
     *
     * @function
     * @throws {ember.assert} Thrown when supplied `theme` is not a value
     *         defined in enum ButtonTheme
     * @returns {String}
     */
    themeClass: Ember.computed(
        'theme',
        function() {
            const theme = this.get( 'theme' );

            if ( !containsValue( theme, ButtonTheme ) ) {
                warn( `Invalid sl-drop-button theme value "${theme}"` );
            }

            return `dropdown-${theme}`;
        }
    )

});
