import Ember from 'ember';
import InputBased from '../mixins/sl-input-based';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import layout from '../templates/components/sl-checkbox';

/**
 * @module
 * @augments ember/Component
 * @augments module:mixins/sl-input-based
 * @augments module:mixins/sl-tooltip-enabled
 */
export default Ember.Component.extend( InputBased, TooltipEnabled, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    classNameBindings: [
        'checkboxType',
        'inline::form-group'
    ],

    /** @type {String[]} */
    classNames: [
        'sl-checkbox'
    ],

    /** @type {Object} */
    layout,

    /** @type {String} */
    tagName: 'div',

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether the input is checked or not
     *
     * @type {Boolean}
     */
    checked: false,

    /**
     * Whether to show the component in-line
     *
     * @type {Boolean}
     */
    inline: false,

    /**
     * The input's label text
     *
     * @type {?String}
     */
    label: null,

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Initialize any computed properties that need setup
     *
     * @function
     * @returns {undefined}
     */
    initialize: Ember.on(
        'init',
        function() {
            if ( this.get( 'inline' ) ) {
                this.set( 'tagName', 'label' );
            }
        }
    ),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Type of checkbox; "checkbox-inline" when inline, "checkbox" default
     *
     * @function
     * @returns {String}
     */
    checkboxType: Ember.computed(
        'inline',
        function() {
            return this.get( 'inline' ) ? 'checkbox-inline' : 'checkbox';
        }
    )

});
