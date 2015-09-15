import Ember from 'ember';
import InputBased from '../mixins/sl-input-based';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import layout from '../templates/components/sl-textarea';

/**
 * Valid values for `selectionDirection` property
 *
 * @memberof module:components/sl-textarea
 * @enum {String}
 */
export const Direction = Object.freeze({
    BACKWARD: 'backward',
    FORWARD: 'forward',
    NONE: 'none'
});

/**
 * Valid values for `spellcheck` property
 *
 * @memberof module:components/sl-textarea
 * @enum {Boolean|String}
 */
export const Spellcheck = {
    DEFAULT: 'default',
    FALSE: false,
    TRUE: true
};

/**
 * Valid values for `wrap` property
 *
 * @memberof module:components/sl-textarea
 * @enum {String}
 */
export const Wrap = {
    HARD: 'hard',
    SOFT: 'soft'
};

/**
 * @module
 * @augments ember/Component
 * @augments module:mixins/sl-input-based
 * @augments module:mixins/sl-tooltip-based
 */
export default Ember.Component.extend( InputBased, TooltipEnabled, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    classNames: [
        'form-group',
        'sl-textarea'
    ],

    /** @type {Object} */
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
     * @type {Boolean}
     */
    autofocus: false,

    /**
     * The `selectionDirection` HTML attribute value
     *
     * Accepted values are either "forward" (default), "backward", or "none".
     *
     * @type {Direction}
     */
    selectionDirection: Direction.FORWARD,

    /**
     * The `selectionEnd` HTML attribute value
     *
     * @type {?Number|String}
     */
    selectionEnd: null,

    /**
     * The `selectionStart` HTML attribute value
     *
     * @type {?Number|String}
     */
    selectionStart: null,

    /**
     * The `spellcheck` HTML attribute value
     *
     * Accepted values are true, false, "default" (default), "true", or "false".
     *
     * @type {Spellcheck}
     */
    spellcheck: Spellcheck.Direction,

    /**
     * The bound value of the textarea
     *
     * @type {?String}
     */
    value: null,

    /**
     * The `wrap` HTML attribute value
     *
     * Accepted values are "soft" (default), or "hard".
     *
     * @type {Wrap}
     */
    wrap: Wrap.SOFT

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
