import Ember from 'ember';
import StreamEnabled from 'ember-stream/mixins/stream-enabled';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import layout from '../templates/components/sl-button';
import { containsValue, warn } from '../utils/all';

/**
 * Valid size values for the sl-button component
 *
 * @memberof module:components/sl-button
 * @enum {String}
 */
export const Size = Object.freeze({
    EXTRA_SMALL: 'extra-small',
    LARGE: 'large',
    MEDIUM: 'medium',
    SMALL: 'small'
});

/**
 * Valid Bootstrap theme values for buttons
 *
 * @memberof module:components/sl-button
 * @enum {String}
 */
export const Theme = Object.freeze({
    DANGER: 'danger',
    DEFAULT: 'default',
    HOVER: 'hover',
    INFO: 'info',
    LINK: 'link',
    PRIMARY: 'primary',
    SUCCESS: 'success',
    WARNING: 'warning'
});

/**
 * @module
 * @augments ember/Component
 * @augments ember-stream/mixins/stream-enabled
 * @augments module:mixins/sl-tooltip-enabled
 */
export default Ember.Component.extend( StreamEnabled, TooltipEnabled, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    attributeBindings: [
        'data-target',
        'data-toggle',
        'disabled',
        'type'
    ],

    /** @type {String[]} */
    classNameBindings: [
        'pending',
        'sizeClass',
        'themeClass'
    ],

    /** @type {String[]} */
    classNames: [
        'btn',
        'sl-button'
    ],

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
     * @throws {ember.assert} Thrown if the modal is not found in modal service
     * @returns {Boolean} - The `bubbles` property value
     */
    click() {
        const showModalWithStreamName = this.get( 'showModalWithStreamName' );

        if ( showModalWithStreamName ) {
            this.get( 'streamService' ).send( showModalWithStreamName, 'show' );
        }

        this.sendAction();

        return this.get( 'bubbles' );
    },

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether or not the button should bubble actions to its parent
     *
     * @type {Boolean}
     */
    bubbles: true,

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
     * @type {?String}
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
     * @type {?String}
     */
    pendingLabel: null,

    /**
     * The name of a registered modal stream to trigger opening of
     *
     * @type {?String}
     */
    showModalWithStreamName: null,

    /**
     * The size of the button
     *
     * @type {Size}
     */
    size: Size.MEDIUM,

    /**
     * The bootstrap "theme" name
     *
     * @type {Theme}
     */
    theme: Theme.DEFAULT,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * The current label text for the button
     *
     * @function
     * @returns {?String}
     */
    currentLabel: Ember.computed(
        'label',
        'pending',
        'pendingLabel',
        function() {
            const pendingLabel = this.get( 'pendingLabel' );

            if ( this.get( 'pending' ) && pendingLabel ) {
                return pendingLabel;
            }

            const label = this.get( 'label' );

            if ( label ) {
                return label;
            }

            return null;
        }
    ),

    /**
     * Converted size string to Bootstrap button class
     *
     * @function
     * @throws {ember.assert} Thrown if the supplied `size` value is not one
     *         defined in the enum Size
     * @returns {?String}
     */
    sizeClass: Ember.computed(
        'size',
        function() {
            const size = this.get( 'size' );

            if ( !containsValue( size, Size ) ) {
                warn( `Invalid size value "${size}"` );
            }

            let sizeClass = null;
            switch ( size ) {
                case Size.EXTRA_SMALL:
                    sizeClass = 'btn-xs';
                    break;

                case Size.SMALL:
                    sizeClass = 'btn-sm';
                    break;

                case Size.LARGE:
                    sizeClass = 'btn-lg';
                    break;
            }

            return sizeClass;
        }
    ),

    /**
     * Converted theme string to Bootstrap button class
     *
     * @function
     * @throws {ember.assert} Thrown if the supplied `theme` value is one not
     *         defined in the enum Theme
     * @returns {String} Defaults to "btn-default"
     */
    themeClass: Ember.computed(
        'theme',
        function() {
            const theme = this.get( 'theme' );

            if ( !containsValue( theme, Theme ) ) {
                warn( `Invalid theme value "${theme}"` );
            }

            return `btn-${theme}`;
        }
    )

});
