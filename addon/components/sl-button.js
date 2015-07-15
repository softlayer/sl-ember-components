import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import layout from '../templates/components/sl-button';

/**
 * Valid size values for the sl-button component
 *
 * @memberof module:components/sl-button
 * @enum {String}
 */
const SIZE = {
    EXTRA_SMALL: 'extra-small',
    LARGE: 'large',
    MEDIUM: 'medium',
    SMALL: 'small'
};
export { SIZE };

/**
 * Valid Bootstrap theme values for buttons
 *
 * @memberof module:components/sl-button
 * @enum {String}
 */
const THEME = {
    DANGER: 'danger',
    DEFAULT: 'default',
    HOVER: 'hover',
    INFO: 'info',
    LINK: 'link',
    PRIMARY: 'primary',
    SUCCESS: 'success',
    WARNING: 'warning'
};
export { THEME };

/**
 * @module
 * @augments ember/Component
 * @augments module:mixins/sl-tooltip-enabled
 */
export default Ember.Component.extend( TooltipEnabled, {

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

    /**
     * The modal service which will be used to open modals
     *
     * @type {ember/Service}
     */
    modalService: Ember.inject.service( 'sl-modal' ),

    /** @type {String} */
    tagName: 'button',

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    /**
     * @function
     * @throws {ember.assert} Thrown if the modal is not found in modal service
     * @returns {undefined}
     */
    click() {
        let openModal = this.get( 'openModal' );

        if ( openModal ) {
            let modal = this.get( 'modalService' ).find( openModal );
            Ember.assert(
                `Modal with name "${openModal}" was not found`,
                modal
            );
            modal.show();
        }

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
     * @returns {String}
     */
    currentLabel: Ember.computed(
        'label',
        'pending',
        'pendingLabel',
        function() {
            let pendingLabel = this.get( 'pendingLabel' );
            if ( this.get( 'pending' ) && pendingLabel ) {
                return pendingLabel;
            }

            let label = this.get( 'label' );
            if ( label ) {
                return label;
            }
        }
    ),

    /**
     * Converted size string to Bootstrap button class
     *
     * @function
     * @throws {ember.assert} Thrown if the supplied `size` value is not one
     *         defined in the enum SIZE
     * @returns {?String} Defaults to undefined
     */
    sizeClass: Ember.computed(
        'size',
        function() {
            let size = this.get( 'size' );

            Ember.assert(
                'Error: Invalid size value',
                Object.keys( SIZE ).map( ( key ) => SIZE[ key ] ).indexOf( size ) > -1
            );

            let sizeClass;
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
        }
    ),

    /**
     * Converted theme string to Bootstrap button class
     *
     * @function
     * @throws {ember.assert} Thrown if the supplied `theme` value is one not
     *         defined in the enum THEME
     * @returns {String} Defaults to "btn-default"
     */
    themeClass: Ember.computed(
        'theme',
        function() {
            let theme = this.get( 'theme' );

            Ember.assert(
                'Error: Invalid theme value',
                Object.keys( THEME ).map( ( key ) => THEME[ key ] ).indexOf( theme ) > -1
            );

            return `btn-${theme}`;
        }
    )

});
