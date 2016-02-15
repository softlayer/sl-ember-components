import Ember from 'ember';
import ClassPrefix from '../mixins/class-prefix';
import InputBased from '../mixins/sl-input-based';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import layout from '../templates/components/sl-radio-group';
import Namespace from '../mixins/sl-namespace';
import { throwRadioGroupError } from '../utils/error';
import prefix from '../utils/class-prefix';

/**
 * @module
 * @augments ember/Component
 * @augments module:mixins/sl-input-based
 * @augments module:mixins/sl-namespace
 * @augments module:mixins/sl-tooltip-enabled
 */
export default Ember.Component.extend( ClassPrefix, InputBased, Namespace, TooltipEnabled, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    attributeBindings: [
        'disabled'
    ],

    /** @type {String[]} */
    classNames: [
        'form-group'
    ],

    /** @type {Object} */
    layout,

    /** @type {String} */
    tagName: 'fieldset',

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    /**
     * didInsertElement event hook
     *
     * @returns {undefined}
     */
    didInsertElement() {
        this._super( ...arguments );
        this.initialize();
    },

    /**
     * willClearRender event hook
     *
     * @returns {undefined}
     */
    willClearRender() {
        this._super( ...arguments );
        this.unregisterEvents();
    },

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Component class that will be prefixed with base component class
     *
     * @type {String}
     */
    componentClass: 'radio-group',

    /**
     * Whether the radio buttons should be put inline together
     *
     * This value is null by default, which means that the sl-radio-group will
     * not override anything. If the `inline` value is false, the children
     * buttons will be forced to not inline, and if true, they will be forced to
     * be inline.
     *
     * @type {?Boolean}
     */
    inline: null,

    /**
     * The component's text label
     *
     * @type {?String}
     */
    label: null,

    /**
     * The component's current value property
     *
     * @type {?String}
     */
    value: null,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Initialize the group-wide options and setup child radio buttons
     *
     * @private
     * @throws {sl-ember-components/utils/error/radioGroup} Thrown if the `name` property is not set
     * @returns {undefined}
     */
    initialize() {
        const name = this.get( 'name' );

        if ( Ember.isEmpty( name ) ) {
            throwRadioGroupError( 'The name property must be set' );
        }

        const value = this.get( 'value' );
        const isDisabled = this.get( 'disabled' );
        const isInline = this.get( 'inline' );
        const radioComponentClassSelector = `.${prefix( 'radio' )}`;

        /**
         * To each sl-radio component apply...
         *
         * - Attributes: name, disabled
         * - Classes: radio, radio-inline
         */
        this.$( radioComponentClassSelector ).each( function() {
            const radio = Ember.$( this );
            const input = Ember.$( 'input', this );

            input.attr( 'name', name );

            if ( isDisabled ) {
                input.prop( 'disabled', true );
                radio.addClass( 'disabled' );
            }

            if ( true === isInline ) {
                radio.removeClass( 'radio' );
                radio.addClass( 'radio-inline' );
            }

            if ( false === isInline ) {
                radio.removeClass( 'radio-inline' );
                radio.addClass( 'radio' );
            }
        });

        // Pre-select radio button if a value is set
        if ( value ) {
            this.$( `input[name=${name}]:radio[value=${value}]` ).prop(
                'checked', true
            );
        }

        // Apply change() listener to keep group value in sync with select
        // sl-radio option
        const radios = this.$( `input[name=${name}]:radio` );
        radios.on( this.namespaceEvent( 'change' ), () => {
            this.set( 'value', radios.filter( ':checked' ).val() );
        });
    },

    /**
     * Remove events
     *
     * @private
     * @returns {undefined}
     */
    unregisterEvents() {
        this.$( `input[name=${this.get( 'name' )}]:radio` )
            .off( this.namespaceEvent( 'change' ) );
    }
});
