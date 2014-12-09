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

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

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



});
