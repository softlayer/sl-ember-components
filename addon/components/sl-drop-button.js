import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import layout from '../templates/components/sl-drop-button';
import {
    SIZE as BUTTON_SIZE,
    THEME as BUTTON_THEME
} from './sl-button';

/**
 * Values for the sl-drop-button's `align` property
 *
 * @name module:components/sl-drop-button.ALIGN
 * @enum {String}
 */
export const ALIGN = {
    LEFT   : 'left',
    RIGHT  : 'right'
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
    classNameBindings: [ 'themeClass' ],

    /** @type {String[]} */
    classNames: [ 'btn-group', 'dropdown', 'sl-drop-button' ],

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
     * @type {ALIGN}
     */
    align: ALIGN.LEFT,

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
     * @type {sl-button.SIZE}
     */
    size: BUTTON_SIZE.MEDIUM,

    /**
     * The theme style name
     *
     * @type {sl-button.THEME}
     */
    theme: BUTTON_THEME.DEFAULT,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Whether the current "align" property is "right"
     *
     * @function
     * @observes align
     * @returns {Boolean}
     */
    rightAligned: Ember.computed( 'align', function() {
        return this.get( 'align' ) === ALIGN.RIGHT;
    }),

    /**
     * The class value for the drop-button based on the current "theme"
     *
     * @function
     * @observes theme
     * @returns {String}
     */
    themeClass: Ember.computed( 'theme', function() {
        var theme = this.get( 'theme' );

        Ember.assert(
            `Error: Invalid sl-drop-button theme value "${theme}"`,
            Object.keys( BUTTON_THEME ).map( ( key ) => BUTTON_THEME[ key ] ).indexOf( theme ) > -1
        );

        return `dropdown-${theme}`;
    })

});
