import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import layout from '../templates/components/sl-button';

/**
 * @module components
 * @class sl-button
 * @augments Ember.Component
 * @mixes sl-tooltip-enabled
 */
export default Ember.Component.extend( TooltipEnabled, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    attributeBindings: [ 'data-target', 'data-toggle', 'disabled', 'type' ],

    classNameBindings: [ 'pending', 'sizeClass', 'themeClass' ],

    classNames: [ 'btn', 'sl-button' ],

    layout,

    tagName: 'button',

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    click() {
        this.sendAction();
    },

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether or not the button should be disabled during AJAX activity
     *
     * @property {Boolean} disableOnAjax
     * @default false
     */
    disableOnAjax: false,

    /**
     * Whether or not the button should be hidden during AJAX activity
     *
     * @property {Boolean} hideOnAjax
     * @default false
     */
    hideOnAjax: false,

    /**
     * Text to apply to the button label
     *
     * It is preferred you use this to set your "default" text rather than
     * inactiveLabelText, which will take this value as a default.
     *
     * @property {String} label
     * @default null
     */
    label: null,

    /**
     * Whether the button is in a "pending" state
     *
     * @property {Boolean} pending
     * @default false
     */
    pending: false,

    /**
     * The text to display during AJAX activity
     *
     * @property {String} pendingLabel
     * @default null
     */
    pendingLabel: null,

    /**
     * The size of the button
     *
     * @property {String} size
     * @default "medium"
     */
    size: 'medium',

    /**
     * The bootstrap "theme" name
     *
     * @property {String} theme
     * @default "default"
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
     * @returns {String}
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
     * @returns {?String} Defaults to undefined
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
     * @returns {String} Defaults to "btn-default"
     */
    themeClass: Ember.computed( 'theme', function() {
        return 'btn-' + this.get( 'theme' );
    })

});
