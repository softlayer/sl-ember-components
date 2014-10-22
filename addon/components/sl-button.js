import Ember from 'ember';
import AjaxAware from '../mixins/sl-ajax-aware';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';

/** @module sl-components/components/sl-button */
export default Ember.Component.extend( AjaxAware, TooltipEnabled, {

    /**
     * The root component element
     *
     * @property {string}       tagName
     * @type     {Ember.String}
     * @default  "button"
     */
    tagName: 'button',

    /**
     * Class names to apply to the button
     *
     * @property {array}       classNames
     * @type     {Ember.Array}
     */
    classNames: [ 'btn', 'sl-button' ],

    /**
     * Attribute bindings for the button component
     *
     * @property {array}       attributeBindings
     * @type     {Ember.Array}
     */
    attributeBindings: [ 'class', 'data-target', 'data-toggle', 'disabled', 'type' ],

    /**
     * Class bindings for the button component
     *
     * @property {array}       classNameBindings
     * @type     {Ember.Array}
     */
    classNameBindings: [ 'sizeClass', 'themeClass' ],

    /**
     * Alert external code about the click
     *
     * @function click
     * @return   {void}
     */
    click: function() {
        this.sendAction();
    },

    /**
     * The text to display during AJAX activity
     *
     * @property {string}       activeLabelText
     * @type     {Ember.String}
     * @default  null
     */
    activeLabelText: null,

    /**
     * Whether or not the button should be disabled during AJAX activity
     *
     * @property {boolean} disableOnAjax
     * @type     {boolean}
     * @default  false
     */
    disableOnAjax: false,

    /**
     * Whether or not the button should be hidden during AJAX activity
     *
     * @property {boolean} hideOnAjax
     * @type     {boolean}
     * @default  false
     */
    hideOnAjax: false,

    /**
     * This is primarily used internally to avoid losing the "default" value of
     * the label when switching to the active text
     *
     * @property {string}       inactiveLabelText
     * @type     {Ember.String}
     * @default  null
     */
    inactiveLabelText: null,

    /**
     * Text to apply to the button label
     *
     * It is preferred you use this to set your "default" text rather than
     * inactiveLabelText, which will take this value as a default.
     *
     * @property {string}       label
     * @type     {Ember.String}
     * @default  null
     */
    label: null,

    /**
     * The bootstrap "theme" name
     *
     * @property {string}       theme
     * @type     {Ember.String}
     * @default  "default"
     */
    theme: 'default',

    /**
     * Initialize labels
     *
     * @function initLabel
     * @observes init event
     * @return   {void}
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
     * @observes init event
     * @return   {void}
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

    /**
     * Converted size string to Bootstrap button class
     *
     * @function {string}       sizeClass
     * @observes size
     * @return   {Ember.String} Defaults to undefined
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
     * @function {string}       themeClass
     * @observes theme
     * @return   {Ember.String} Defaults to "btn-default"
     */
    themeClass: function() {
        return 'btn-' + this.get( 'theme' );
    }.property( 'theme' )
});
