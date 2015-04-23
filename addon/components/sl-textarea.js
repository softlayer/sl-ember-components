import Ember from 'ember';
import InputBased from '../mixins/sl-input-based';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import layout from '../templates/components/sl-textarea';

/**
 * @module components
 * @class sl-textarea
 * @augments Ember.Component
 * @mixes sl-input-based
 * @mixes sl-tooltip-enabled
 */
export default Ember.Component.extend( InputBased, TooltipEnabled, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    classNames: [ 'form-group', 'sl-textarea' ],

    layout,

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * The `autofocus` HTML attribute value
     *
     * @property {Boolean} autofocus
     * @default false
     */
    autofocus: false,

    /**
     * The `selectionDirection` HTML attribute value
     *
     * Accepted values are either "forward" (default), "backward", or "none".
     *
     * @property {String} selectionDirection
     * @default "forward"
     */
    selectionDirection: 'forward',

    /**
     * The `selectionEnd` HTML attribute value
     *
     * @property {?Number|String} selectionEnd
     * @default null
     */
    selectionEnd: null,

    /**
     * The `selectionStart` HTML attribute value
     *
     * @property {?Number|String} selectionStart
     * @default null
     */
    selectionStart: null,

    /**
     * The `spellcheck` HTML attribute value
     *
     * Accepted values are true, false, "default" (default), "true", or "false".
     *
     * @property {Boolean|String} spellcheck
     * @default "default"
     */
    spellcheck: 'default',

    /**
     * The `wrap` HTML attribute value
     *
     * Accepted values are "soft" (default), or "hard".
     *
     * @property {String} wrap
     * @default "soft"
     */
    wrap: 'soft'

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
