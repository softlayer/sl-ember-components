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
 * @enum {String} ALIGN
 */
export const ALIGN = {
    LEFT   : 'left',
    RIGHT  : 'right'
};

/**
 * @module components
 * @class sl-drop-button
 */
export default Ember.Component.extend( TooltipEnabled, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    classNameBindings: [ 'themeClass' ],

    classNames: [ 'btn-group', 'dropdown', 'sl-drop-button' ],

    layout,

    // -------------------------------------------------------------------------
    // Actions

    actions: {

        /**
         * Used to trigger specific option-bound action
         *
         * @function actions.click
         * @param {String} action to trigger
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
     * Dropdown menu alignment
     *
     * Possible values are "left" or "right".
     *
     * @property {ALIGN} align
     * @default ALIGN.LEFT
     */
    align: ALIGN.LEFT,

    /**
     * Drop button options array
     *
     * @property {?Object[]} content
     * @default null
     */
    content: null,

    /**
     * Class string for the button's icon
     *
     * @property {String} iconClass
     * @default "caret"
     */
    iconClass: 'caret',

    /**
     * Text string used for labeling the drop-button
     *
     * @property {?String} label
     * @default null
     */
    label: null,

    /**
     * The size of the button
     *
     * @property {sl-button.SIZE} size
     * @default sl-button.SIZE.MEDIUM
     */
    size: BUTTON_SIZE.MEDIUM,

    /**
     * The string name of the style theme for the button
     *
     * @property {sl-button.THEME} theme
     * @default sl-button.THEME.DEFAULT
     */
    theme: BUTTON_THEME.DEFAULT,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Whether the current "align" property is "right"
     *
     * @function rightAligned
     * @observes align
     * @returns {Boolean}
     */
    rightAligned: Ember.computed( 'align', function() {
        return this.get( 'align' ) === ALIGN.RIGHT;
    }),

    /**
     * The class value for the drop-button based on the current "theme"
     *
     * @function themeClass
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
