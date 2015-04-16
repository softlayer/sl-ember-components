import Ember from 'ember';
import InputBased from '../mixins/sl-input-based';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import layout from '../templates/components/sl-textarea';

/**
 * @module components
 * @class  sl-textarea
 */
export default Ember.Component.extend( InputBased, TooltipEnabled, { layout,

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * Class names for the component
     *
     * @property {Ember.Array} classNames
     */
    classNames: [ 'form-group', 'sl-textarea' ],

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * The `autofocus` HTML attribute value
     *
     * @property {boolean} autofocus
     * @default  false
     */
    autofocus: false,

    /**
     * The `selectionDirection` HTML attribute value
     *
     * Accepted values are either "forward" (default), "backward", or "none".
     *
     * @property {string} selectionDirection
     * @default  "forward"
     */
    selectionDirection: 'forward',

    /**
     * The `selectionEnd` HTML attribute value
     *
     * @property {number|string} selectionEnd
     * @default  null
     */
    selectionEnd: null,

    /**
     * The `selectionStart` HTML attribute value
     *
     * @property {number|string} selectionStart
     * @default  null
     */
    selectionStart: null,

    /**
     * The `spellcheck` HTML attribute value
     *
     * Accepted values are true, false, "default" (default), "true", or "false".
     *
     * @property {boolean|string} spellcheck
     * @default  "default"
     */
    spellcheck: 'default',

    /**
     * The `wrap` HTML attribute value
     *
     * Accepted values are "soft" (default), or "hard".
     *
     * @property {string} wrap
     * @default  "soft"
     */
    wrap: 'soft'

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
