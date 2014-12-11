import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';

/**
 * @module components
 * @class  sl-drop-button
 */
export default Ember.Component.extend( TooltipEnabled, {

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
     * Class name bindings for the div element
     *
     * @property {Ember.Array} themeClass
     */
    classNameBindings: [ 'themeClass' ],

    // -------------------------------------------------------------------------
    // Actions

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
    rightAligned: function() {
        return this.get( 'align' ) === 'right';
    }.property( 'align' ),

    /**
     * The class value for the drop-button based on the current "theme"
     *
     * @function themeClass
     * @observes theme
     * @returns  {string}
     */
    themeClass: function() {
        return 'dropdown-' + this.get( 'theme' );
    }.property( 'theme' )

});
