import Ember from 'ember';
import AjaxAware from '../mixins/ajaxaware';

/**
 * @module components
 * @class sl-button
 */
export default Ember.Component.extend( AjaxAware, {

    /**
     * The text to display during AJAX activity
     * @property activeLabelText
     * @default null
     */
    activeLabelText: null,

    /**
     * Attribute bindings for the button component
     * @property {array} attributeBindings
     */
    attributeBindings: [ 'class', 'data-target', 'data-toggle', 'disabled', 'title', 'type' ],

    /**
     * Class bindings for the button component
     * @property {array} classNameBindings
     */
    classNameBindings: [ 'themeClassName' ],

    /**
     * Class names to apply to the button
     * @property {array} classNames
     */
    classNames: [ 'btn', 'sl-button' ],

    /**
     * Alert external code about the click
     * @method click
     */
    click: function() {
        this.sendAction();
    },

    /**
     * Whether or not the button should be disabled during AJAX activity
     * @property {boolean} disableOnAjax
     * @default false
     */
    disableOnAjax: false,

    /**
     * Whether or not the button should be hidden during AJAX activity
     * @property {boolean} hideOnAjax
     * @default false
     */
    hideOnAjax: false,

    /**
     * This is primarily used internally to avoid losing the "default" value of the label when switching
     * to the active text
     * @property {string} inactiveLabelText
     * @default null
     */
    inactiveLabelText: null,

    /**
     * Initialize labels
     * @method initLabel
     */
    initLabel: function() {
        if ( Ember.isBlank( this.get( 'inactiveLabelText' ))) {
            this.set( 'inactiveLabelText', this.get( 'label' ));
        }
    }.on( 'init' ),

    /**
     * The text to apply to the button label.  It is preferred you use this to set your "default"
     * text rather than inactiveLabelText, which will take this value as a default
     * @property {string} label
     * @default null
     */
    label: null,

    /**
     * Register our behaviors with the convenience method from the AJAX mixin
     * @method setupHandlers
     */
    setupHandlers: function() {
        this.registerAjaxBehavior( function() {
            var props = this.getProperties([ 'activeLabelText', 'disableOnAjax', 'hideOnAjax' ]);

            if ( !Ember.isBlank( props.activeLabelText )) {
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

            if ( !Ember.isBlank( 'activeLabelText' )) {
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
     * The root component element
     * @property {string} tagName
     * @default "button"
     */
    tagName: 'button',

    /**
     * The bootstrap "theme" name
     * @property {string} theme
     * @default "default"
     */
    theme: 'default',

    /**
     * Assemble the button theme's class name
     * @property {string} themeClassName
     * @default "btn-default"
     */
    themeClassName: function () {
        return 'btn-' + this.get( 'theme' );
    }.property( 'theme' )
});
