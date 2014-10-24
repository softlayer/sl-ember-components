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
     * @default  false
     */
    inline: false,

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Initialize the group-wide options and setup child radio buttons
     *
     * @function initialize
     * @observes didInsertElement event
     * @returns  {void}
     */
    initialize: function() {
        var name       = this.get( 'name' ),
            isDisabled = this.get( 'disabled' ),
            isInline   = this.get( 'inline' ),
            isReadonly = this.get( 'readonly' ),
            self       = this;

        this.$( '.sl-radio' ).each( function () {
            var radio = Ember.$( this ),
                input = Ember.$( 'input', radio );

            if ( name ) {
                input.attr( 'name', name );
            }

            if ( isDisabled ) {
                radio.prop( 'disabled', true );
                radio.addClass( 'disabled' );
            }

            if ( isReadonly ) {
                radio.prop( 'readonly', true );
                radio.addClass( 'readonly' );
            }

            if ( isInline ) {
                radio.addClass( 'radio-inline' );
                radio.removeClass( 'radio' );
            }
        });

        this.$().on( 'sl-radio-group.changeValue', function( event, value ) {
            self.set( 'value', value );
        });
    }.on( 'didInsertElement' ),

    /**
     * Selects the radio input with the current value
     *
     * @function updateSelection
     * @observes didInsertElement event, value
     * @returns  {void}
     */
    updateSelection: function() {
        this.get( 'selectedInput' ).prop( 'checked', true );
    }.observes( 'value' ).on( 'didInsertElement' ),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * The currently selected radio input
     *
     * @property selectedInput
     * @observes value
     * @returns  {object}
     */
    selectedInput: function() {
        return this.$( 'input[value="' + this.get( 'value' ) + '"]' );
    }.property( 'value' )

    // -------------------------------------------------------------------------
    // Private Methods

});
