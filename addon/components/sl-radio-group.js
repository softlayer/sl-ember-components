import Ember from 'ember';
import InputBased from '../mixins/sl-input-based';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import layout from '../templates/components/sl-radio-group';

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
    attributeBindings: [ 'disabled' ],

    /** @type {String[]} */
    classNames: [ 'form-group', 'sl-radio-group' ],

    /** @type {Object} */
    layout,

    /** @type {String} */
    tagName: 'fieldset',

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether the radio buttons should be disabled
     *
     * @type {Boolean}
     */
    disabled: false,

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
     * The "name" attribute for the children radio buttons
     *
     * Similar to the `inline` property; the default value is null, so the
     * children buttons will not be overridden. Any string value will overwrite
     * the children buttons' name property.
     *
     * @type {?String}
     */
    name: null,

    /**
     * Whether the radio buttons should be readonly
     *
     * @type {Boolean}
     */
    readonly: false,

    /**
     * The component's current value property
     *
     * @type {String}
     */
    value: null,

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Initialize the group-wide options and setup child radio buttons
     *
     * @function
     * @listens didInsertElement
     * @returns {undefined}
     */
    initialize: Ember.on( 'didInsertElement', function() {
        var name = this.get( 'name' ),
            value = this.get( 'value' ),
            isDisabled = this.get( 'disabled' ),
            isInline = this.get( 'inline' ),
            isReadonly = this.get( 'readonly' );

        Ember.assert( 'The name property must be set on the sl-radio-group component', name );

        /**
         * To each sl-radio component apply...
         *
         * - Attributes: name, disabled, readonly
         * - Classes: radio, radio-inline
         */
        this.$( '.sl-radio' ).each( function () {
            var radio = Ember.$( this ),
                input = Ember.$( 'input', this );

            input.attr( 'name', name );

            if ( isDisabled ) {
                input.prop( 'disabled', true );
                radio.addClass( 'disabled' );
            }

            if ( isReadonly ) {
                input.prop( 'readonly', true );
                radio.addClass( 'readonly' );
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
        this.$( `input[name=${name}]:radio` ).change( () => {
            this.set(
                'value',
                this.$( `input[name=${name}]:radio` ).filter( ':checked' ).val()
            );
        });
    }),

    /**
     * Remove events
     *
     * @function
     * @listens willClearRender
     * @returns {undefined}
     */
    unregisterEvents: Ember.on( 'willClearRender', function() {
        var name = this.get( 'name' );

        this.$( `input[name=${name}]:radio` ).off();
    })

});
