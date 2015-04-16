import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import layout from '../templates/components/sl-drop-button';

/**
 * @module components
 * @class  sl-drop-button
 */
export default Ember.Component.extend( TooltipEnabled, { layout,

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * Class names for the div element
     *
     * @property {Ember.Array} classNames
     */
    classNames: [ 'btn-group', 'dropdown', 'sl-drop-button' ],

    /**
     * Class attribute bindings for the button
     *
     * @property {Ember.Array} classNameBindings
     */
    classNameBindings: [ 'themeClass' ],

    // -------------------------------------------------------------------------
    // Actions

    /**
     * Component actions hash
     *
     * @property {Ember.Object} actions
     */
    actions: {

        /**
         * Used to trigger specific option-bound action
         *
         * @function click
         * @param    {string} action to trigger
         * @returns  {void}
         */
        click( action ) {
            this.triggerAction({ action: action });
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
     * @property {string} align
     * @default  "left"
     */
    align: 'left',

    /**
     * Class string for the button's icon
     *
     * @property {Ember.String} iconClass
     * @default  "caret"
     */
    iconClass: 'caret',

    /**
     * The string name of the style theme for the button
     *
     * @property {Ember.String} theme
     * @default  "default"
     */
    theme: 'default',

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Whether the current "align" property is "right"
     *
     * @function rightAligned
     * @observes align
     * @returns  {boolean}
     */
    rightAligned: Ember.computed( 'align', function() {
        return this.get( 'align' ) === 'right';
    }),

    /**
     * The class value for the drop-button based on the current "theme"
     *
     * @function themeClass
     * @observes theme
     * @returns  {string}
     */
    themeClass: Ember.computed( 'theme', function() {
        return 'dropdown-' + this.get( 'theme' );
    })

});
