import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import layout from '../templates/components/sl-drop-button';

/**
 * @module components
 * @class sl-drop-button
 * @augments Ember.Component
 * @mixes sl-tooltip-enabled
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
     * @property {String} align
     * @default "left"
     */
    align: 'left',

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
     * The string name of the style theme for the button
     *
     * @property {String} theme
     * @default "default"
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
     * @returns {Boolean}
     */
    rightAligned: Ember.computed( 'align', function() {
        return this.get( 'align' ) === 'right';
    }),

    /**
     * The class value for the drop-button based on the current "theme"
     *
     * @function themeClass
     * @observes theme
     * @returns {String}
     */
    themeClass: Ember.computed( 'theme', function() {
        return 'dropdown-' + this.get( 'theme' );
    })

});
