import Ember from 'ember';
import ClassPrefix from '../mixins/class-prefix';
import InputBased from '../mixins/sl-input-based';
import layout from '../templates/components/sl-radio';

/**
 * @module
 * @augments ember/Component
 * @augments module:mixins/sl-input-based
 */
export default Ember.Component.extend( ClassPrefix, InputBased, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    classNameBindings: [
        'radioType',
        'inline::form-group'
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
     * Component class that will be prefixed with base component class
     *
     * @type {String}
     */
    componentClass: 'radio',

    /**
     * Whether to show the component in-line
     *
     * @type {Boolean}
     */
    inline: false,

    /**
     * Text label for the component
     *
     * @type {?String}
     */
    label: null,

    /**
     * Bound value for the radio button
     *
     * @type {?String}
     */
    value: null,

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
     * Type of radio button; "radio-inline" when inline, "radio" default
     *
     * @function
     * @returns {String}
     */
    radioType: Ember.computed(
        'inline',
        function() {
            return this.get( 'inline' ) ? 'radio-inline' : 'radio';
        }
    )

});
