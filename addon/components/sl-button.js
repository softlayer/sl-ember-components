import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';

/**
 * @module components
 * @class  sl-button
 */
export default Ember.Component.extend( TooltipEnabled, {

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
    classNameBindings: [ 'pending', 'sizeClass', 'themeClass' ],

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    /**
     * Alert external code about the click
     *
     * @function click
     * @returns  {void}
     */
    click() {
        this.sendAction();
    },

    // -------------------------------------------------------------------------
    // Properties

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
     * Whether the button is in a "pending" state
     *
     * @property {boolean} pending
     * @default  false
     */
    pending: false,

    /**
     * The text to display during AJAX activity
     *
     * @property {Ember.String} pendingLabel
     * @default  null
     */
    pendingLabel: null,

    /**
     * The size of the button
     *
     * @property {string} size
     * @default  "medium"
     */
    size: 'medium',

    /**
     * The bootstrap "theme" name
     *
     * @property {Ember.String} theme
     * @default  "default"
     */
    theme: 'default',

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * The current label text for the button
     *
     * @function currentLabel
     * @observes label, pending, pendingLabel
     * @returns  {Ember.String}
     */
    currentLabel: Ember.computed( 'label', 'pending', 'pendingLabel', function() {
        var label        = this.get( 'label' ),
            pending      = this.get( 'pending' ),
            pendingLabel = this.get( 'pendingLabel' );

        if ( pending && pendingLabel ) {
            return pendingLabel;
        }

        if ( label ) {
            return label;
        }
    }),

    /**
     * Converted size string to Bootstrap button class
     *
     * @function sizeClass
     * @observes size
     * @returns  {Ember.String} Defaults to undefined
     */
    sizeClass: Ember.computed( 'size', function() {
        var size = this.get( 'size' ),
            sizeClass;

        switch ( size ) {
            case 'extra-small':
                sizeClass = 'btn-xs';
                break;

            case 'small':
                sizeClass = 'btn-sm';
                break;

            case 'large':
                sizeClass = 'btn-lg';
                break;
        }

        return sizeClass;
    }),

    /**
     * Converted theme string to Bootstrap button class
     *
     * @function themeClass
     * @observes theme
     * @returns  {Ember.String} Defaults to "btn-default"
     */
    themeClass: Ember.computed( 'theme', function() {
        return 'btn-' + this.get( 'theme' );
    })

});
