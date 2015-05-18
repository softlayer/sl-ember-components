import Ember from 'ember';
import InputBased from '../mixins/sl-input-based';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import layout from '../templates/components/sl-textarea';

/**
 * Valid values for `selectionDirection` property
 *
 * @name module:components/sl-textarea.DIRECTION
 * @enum {String}
 */
export const DIRECTION = {
    BACKWARD : 'backward',
    FORWARD  : 'forward',
    NONE     : 'none'
};

/**
 * Valid values for `spellcheck` property
 *
 * @name module:components/sl-textarea.SPELLCHECK
 * @enum {Boolean|String}
 */
export const SPELLCHECK = {
    DEFAULT : 'default',
    FALSE   : false,
    TRUE    : true
};

/**
 * Valid values for `wrap` property
 *
 * @name module:components/sl-textarea.WRAP
 * @enum {String}
 */
export const WRAP = {
    HARD : 'hard',
    SOFT : 'soft'
};

/**
 * @module
 * @augments Ember/Component
 * @mixes sl-ember-components/mixins/sl-input-based
 * @mixes sl-ember-components/mixins/sl-tooltip-based
 */
export default Ember.Component.extend( InputBased, TooltipEnabled, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    classNames: [ 'form-group', 'sl-textarea' ],

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
     * @type {DIRECTION}
     */
    selectionDirection: DIRECTION.FORWARD,

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
     * @type {SPELLCHECK}
     */
    spellcheck: SPELLCHECK.DIRECTION,

    /**
     * The `wrap` HTML attribute value
     *
     * Accepted values are "soft" (default), or "hard".
     *
     * @type {WRAP}
     */
    wrap: WRAP.SOFT

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
