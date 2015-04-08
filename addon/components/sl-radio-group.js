import Ember from 'ember';
import InputBased from '../mixins/sl-input-based';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';

/**
 * @module components
 * @class  sl-radio-group
 */
export default Ember.Component.extend( InputBased, TooltipEnabled, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * HTML tag name for the component's root element
     *
     * @property {Ember.String} tagName
     * @default  "fieldset"
     */
    tagName: 'fieldset',

    /**
     * Attribute bindings for the component's root element
     *
     * @property {Ember.Array} attributeBindings
     */
    attributeBindings: [ 'disabled' ],

    /**
     * Class names for the containing element
     *
     * @property {Ember.Array} classNames
     */
    classNames: [ 'form-group', 'sl-radio-group' ],

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether the radio buttons should be disabled
     *
     * @property {boolean} disabled
     * @default  false
     */
    disabled: false,

    /**
     * Whether the radio buttons should be put inline together
     *
     * @property {boolean} inline
     * @default  null
     */
    inline: null,

    /**
     * The "name" attribute for the children radio buttons
     *
     * @property {string} name
     * @default  null
     */
    name: null,

    /**
     * Whether the radio buttons should be readonly
     *
     * @property {boolean} readonly
     * @default  false
     */
    readonly: false,

    /**
     * The component's current value property
     *
     * @property {string} value
     * @default  null
     */
    value: null,

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Initialize the group-wide options and setup child radio buttons
     *
     * @function initialize
     * @observes "didInsertElement" event
     * @returns  {void}
     */
    initialize: Ember.on( 'didInsertElement', function() {
        var name       = this.get( 'name' ),
            value      = this.get( 'value' ),
            isDisabled = this.get( 'disabled' ),
            isInline   = this.get( 'inline' ),
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
            this.$('input[name=' + name + ']:radio[value=' + value + ']').prop( 'checked', true );
        }

        // Apply change() listener to keep group value in sync with select sl-radio option
        this.$('input[name=' + name + ']:radio').change( Ember.run.bind( this, function () {
            this.set( 'value', this.$('input[name=' + name + ']:radio').filter(':checked').val() );
        }));
    }),

    /**
     * Remove events
     *
     * @function unregisterEvents
     * @observes "willClearRender" event
     * @returns  {void}
     */
    unregisterEvents: Ember.on( 'willClearRender', function() {
        this.$('input[name=' + this.get( 'name' ) + ']:radio').off();
    })
});
