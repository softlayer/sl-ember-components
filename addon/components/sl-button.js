import Ember from 'ember';
import AjaxAware from '../mixins/sl-ajax-aware';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';

/**
 * @module components
 * @class  sl-button
 */
export default Ember.Component.extend( AjaxAware, TooltipEnabled, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * The root component element
     *
     * @property {Ember.String} tagName
     * @default  "button"
     */
    tagName: 'button',

    /**
     * Attribute bindings for the button component
     *
     * @property {Ember.Array} attributeBindings
     */
    attributeBindings: [ 'data-target', 'data-toggle', 'disabled', 'type' ],

    /**
     * Class names to apply to the button
     *
     * @property {Ember.Array} classNames
     */
    classNames: [ 'btn', 'sl-button' ],

    /**
     * Class bindings for the button component
     *
     * @property {Ember.Array} classNameBindings
     */
    classNameBindings: [ 'sizeClass', 'themeClass' ],

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * The text to display during AJAX activity
     *
     * @property {Ember.String} activeLabelText
     * @default  null
     */
    activeLabelText: null,

    /**
     * Whether or not the button should be disabled during AJAX activity
     *
     * @property {boolean} disableOnAjax
     * @default  false
     */
    disableOnAjax: false,

    /**
     * Whether or not the button should be hidden during AJAX activity
     *
     * @property {boolean} hideOnAjax
     * @default  false
     */
    hideOnAjax: false,

    /**
     * This is primarily used internally to avoid losing the "default" value of
     * the label when switching to the active text
     *
     * @property {Ember.String} inactiveLabelText
     * @default  null
     */
    inactiveLabelText: null,

    /**
     * Text to apply to the button label
     *
     * It is preferred you use this to set your "default" text rather than
     * inactiveLabelText, which will take this value as a default.
     *
     * @property {Ember.String} label
     * @default  null
     */
    label: null,

    /**
     * The bootstrap "theme" name
     *
     * @property {Ember.String} theme
     * @default  "default"
     */
    theme: 'default',

    /**
     * Handle element click event directly
     *
     * @function click
     * @returns  {void}
     */
    click: function() {
        this.sendAction();
    },

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Initialize labels
     *
     * @function initLabel
     * @observes "init" event
     * @returns  {void}
     */
    initLabel: function() {
        if ( Ember.isBlank( this.get( 'inactiveLabelText' ) ) ) {
            this.set( 'inactiveLabelText', this.get( 'label' ) );
        }
    }.on( 'init' ),

    /**
     * Register our behaviors with the convenience method from the AJAX mixin
     *
     * @function setupHandlers
     * @observes "init" event
     * @returns  {void}
     */
    setupHandlers: function() {
        this.registerAjaxBehavior( function() {
            var props = this.getProperties([ 'activeLabelText', 'disableOnAjax', 'hideOnAjax' ]);

            if ( !Ember.isBlank( props.activeLabelText ) ) {
                this.set( 'label', props.activeLabelText );
            }

            if ( props.disableOnAjax ) {
                this.set( 'disabled', true );
            }

            if ( props.hideOnAjax ) {
                this.$().css( 'visibility', 'hidden' );
            }
        }.bind( this ), function() {
            var props = this.getProperties([ 'activeLabelText', 'inactiveLabelText', 'disableOnAjax', 'hideOnAjax' ]);

            if ( !Ember.isBlank( 'activeLabelText' ) ) {
                this.set( 'label', props.inactiveLabelText );
            }

            if ( props.disableOnAjax ) {
                this.set( 'disabled', false );
            }

            if ( props.hideOnAjax ) {
                this.$().css( 'visibility', 'visible' );
            }
        }.bind( this ));
    }.on( 'init' ),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Converted size string to Bootstrap button class
     *
     * @function sizeClass
     * @observes size
     * @returns  {Ember.String} Defaults to undefined
     */
    sizeClass: function() {
        var size = this.get( 'size' );

        if ( size ) {
            return 'btn-' + size;
        }
    }.property( 'size' ),

    /**
     * Converted theme string to Bootstrap button class
     *
     * @function themeClass
     * @observes theme
     * @returns  {Ember.String} Defaults to "btn-default"
     */
    themeClass: function() {
        return 'btn-' + this.get( 'theme' );
    }.property( 'theme' )

});
