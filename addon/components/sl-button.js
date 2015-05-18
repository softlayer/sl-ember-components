import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import layout from '../templates/components/sl-button';

/**
 * Valid size values for the sl-button component
 *
 * @name module:components/sl-button.SIZE
 * @enum {String}
 */
export const SIZE = {
    EXTRA_SMALL : 'extra-small',
    LARGE       : 'large',
    MEDIUM      : 'medium',
    SMALL       : 'small'
};

/**
 * Valid Bootstrap theme values for buttons
 *
 * @name module:components/sl-button.THEME
 * @enum {String}
 */
export const THEME = {
    DANGER  : 'danger',
    DEFAULT : 'default',
    HOVER   : 'hover',
    INFO    : 'info',
    LINK    : 'link',
    PRIMARY : 'primary',
    SUCCESS : 'success',
    WARNING : 'warning'
};

/**
 * @module
 * @augments ember/Component
 * @augments MIXES:sl-ember-components/mixins/sl-tooltip-enabled
 */
export default Ember.Component.extend( TooltipEnabled, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    attributeBindings: [ 'data-target', 'data-toggle', 'disabled', 'type' ],

    /** @type {String[]} */
    classNameBindings: [ 'pending', 'sizeClass', 'themeClass' ],

    /** @type {String[]} */
    classNames: [ 'btn', 'sl-button' ],

    /** @type {Object} */
    layout,

    /** @type {String} */
    tagName: 'button',

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    /**
     * @function
     * @returns {undefined}
     */
    click() {
        this.sendAction();
    },

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether or not the button should be disabled during AJAX activity
     *
     * @type {Boolean}
     */
    disableOnAjax: false,

    /**
     * Whether or not the button should be hidden during AJAX activity
     *
     * @type {Boolean}
     */
    hideOnAjax: false,

    /**
     * Text to apply to the button label
     *
     * It is preferred you use this to set your "default" text rather than
     * inactiveLabelText, which will take this value as a default.
     *
     * @type {String}
     */
    label: null,

    /**
     * Whether the button is in a "pending" state
     *
     * @type {Boolean}
     */
    pending: false,

    /**
     * The text to display during AJAX activity
     *
     * @type {String}
     */
    pendingLabel: null,

    /**
     * The size of the button
     *
     * @type {SIZE}
     */
    size: SIZE.MEDIUM,

    /**
     * The bootstrap "theme" name
     *
     * @type {THEME}
     */
    theme: THEME.DEFAULT,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * The current label text for the button
     *
     * @function
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
     * @function
     * @observes size
     * @returns {?String} Defaults to undefined
     */
    sizeClass: Ember.computed( 'size', function() {
        var size = this.get( 'size' ),
            sizeClass;

        Ember.assert(
            'Error: Invalid size value',
            Object.keys( SIZE ).map( ( key ) => SIZE[ key ] ).indexOf( size ) > -1
        );

        switch ( size ) {
            case SIZE.EXTRA_SMALL:
                sizeClass = 'btn-xs';
                break;

            case SIZE.SMALL:
                sizeClass = 'btn-sm';
                break;

            case SIZE.LARGE:
                sizeClass = 'btn-lg';
                break;
        }

        return sizeClass;
    }),

    /**
     * Converted theme string to Bootstrap button class
     *
     * @function
     * @observes theme
     * @returns {String} Defaults to "btn-default"
     */
    themeClass: Ember.computed( 'theme', function() {
        var theme = this.get( 'theme' );

        Ember.assert(
            'Error: Invalid theme value',
            Object.keys( THEME ).map( ( key ) => THEME[ key ] ).indexOf( theme ) > -1
        );

        return `btn-${theme}`;
    })

});
