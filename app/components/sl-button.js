import Ember from 'ember';
import AjaxAware from '../mixins/ajaxaware';

/**
 * @module components
 * @class sl-button
 */
export default Ember.Component.extend( AjaxAware, {

    attributeBindings: [ 'class', 'data-target', 'data-toggle', 'disabled', 'title', 'type' ],

    classNameBindings: [ 'themeClassName' ],

    classNames: [ 'btn' ],

    tagName: 'button',

    /**
     * The bootstrap btn- "theme" name
     * @property {string} theme
     * @default 'default'
     */
    theme: 'default',

    /**
     * Assemble the button theme's class name
     */
    themeClassName: function () {
        return 'btn-' + this.get( 'theme' );
    }.property( 'theme' ),

    /**
     * The text to apply to the button label.  It is preferred you use this to set your "default"
     * text rather than inactiveLabelText, which will take this value as a default
     * @property label
     * @default null
     */
    label: null,

    /**
     * This is primarily used internally to avoid losing the "default" value of the label when switching
     * to the active text
     * @property inactiveLabelText
     * @default null
     */
    inactiveLabelText: null,

    /**
     * The text to display during AJAX activity
     * @property activeLabelText
     * @default null
     */
    activeLabelText: null,

    /**
     * Whether or not the button should be disabled during AJAX activity
     * @property disableOnAjax
     * @default false
     */
    disableOnAjax: false,

    /**
     * Whether or not the button should be hidden during AJAX activity
     * @property hideOnAjax
     * @default false
     */
    hideOnAjax: false,

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
     * Alert external code about the click
     * @method click
     */
    click: function() {
        this.sendAction();
    }
});
