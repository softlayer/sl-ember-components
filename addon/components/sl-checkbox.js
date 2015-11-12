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
        'checkboxType'
    ],

    /** @type {String[]} */
    classNames: [
        'sl-checkbox'
    ],

    /** @type {String} */
    dynamicTagName: null,

    /** @type {Boolean} */
    inline: false,

    /** @type {Object} */
    layout,

    /**
     * Alias to `dynamicTagName`
     *
     * @type {String}
    */
    tagName: Ember.computed.alias( 'dynamicTagName' ),

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
            this.set( 'dynamicTagName', this.get( 'inline' ) ? 'label' : 'div' );
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
