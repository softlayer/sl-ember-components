import Ember from 'ember';
import ComponentInputId from '../mixins/sl-component-input-id';
import InputBased from '../mixins/sl-input-based';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import layout from '../templates/components/sl-textarea';

/**
 * Valid values for `selectionDirection` property
 *
 * @memberof module:addon/components/sl-textarea
 * @enum {String}
 * @property BACKWARD 'backward'
 * @property FORWARD 'forward'
 * @property NONE 'none'
 */
export const Direction = Object.freeze({
    BACKWARD: 'backward',
    FORWARD: 'forward',
    NONE: 'none'
});

/**
 * Valid values for `wrap` property
 *
 * @memberof module:addon/components/sl-textarea
 * @enum {String}
 * @property HARD 'hard'
 * @property SOFT 'soft'
 */
export const Wrap = {
    HARD: 'hard',
    SOFT: 'soft'
};

/**
 * @module
 * @augments ember/Component
 * @augments module:mixins/sl-component-input-id
 * @augments module:mixins/sl-input-based
 * @augments module:mixins/sl-tooltip-based
 */
export default Ember.Component.extend( InputBased, TooltipEnabled, ComponentInputId, {

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
     * @type {Boolean}
     */
    spellcheck: false,

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
