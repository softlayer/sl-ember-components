import Ember from 'ember';
import ComponentClassPrefix from '../mixins/sl-component-class-prefix';
import StreamEnabled from 'ember-stream/mixins/stream-enabled';
import layout from '../templates/components/sl-modal';
import Namespace from '../mixins/sl-namespace';
import { containsValue, warn } from '../utils/all';

/**
 * Valid size values for the sl-modal component
 *
 * @memberof module:components/sl-modal
 * @enum {String}
 */
export const Size = Object.freeze({
    LARGE: 'large',
    MEDIUM: 'medium',
    SMALL: 'small'
});

/**
 * @module
 * @augments ember/Component
 * @augments ember-stream/mixins/stream-enabled
 * @augments module:mixins/sl-namespace
 */
export default Ember.Component.extend( ComponentClassPrefix, Namespace, StreamEnabled, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    attributeBindings: [
        'ariaDescribedBy:aria-describedby',
        'ariaHidden:aria-hidden',
        'ariaLabelledBy:aria-labelledby',
        'tabindex'
    ],

    /** @type {String[]} */
    classNames: [
        'modal',
        'sl-ember-components'
    ],

    /** @type {String[]} */
    classNameBindings: [
        'animated:fade'
    ],

    /** @type {Object} */
    layout: layout,

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    /**
     * init event hook
     *
     * @returns {undefined}
     */
    init() {
        this._super( ...arguments );
        this.setLabelledby();
        this.setupStreamActions();
    },

    /**
     * didInsertElement event hook
     *
     * @returns {undefined}
     */
    didInsertElement() {
        this._super( ...arguments );
        this.setupModal();
    },

    /**
     * willClearRender event hook
     *
     * @returns {undefined}
     */
    willClearRender() {
        this._super( ...arguments );
        this.unbindHandlers();
    },

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether the modal is animated with transition or not
     *
     * @type {Boolean}
     */
    animated: true,

    /**
     * ariaDescribedBy property, the value of this will be set as the value to
     * the aria-describedby attribute
     *
     * @type {?String}
     */
    ariaDescribedBy: null,

    /**
     * ariaHidden property, the value of this will be set as the value to the
     * aria-hidden attribute
     *
     * @type {String}
     */
    ariaHidden: 'true',

     /**
      * ariaLabelledBy property, the value of this will be set as the value to
      * the aria-labelledby attribute
      *
      * @function
      * @returns {String}
      */
    ariaLabelledBy: null,

    /**
     * The ariaRole property, the value of this will be set as the value to the
     * aria-role attribute
     *
     * @type {String}
     */
    ariaRole: 'dialog',

    /*
     * Whether to show Bootstrap's backdrop
     *
     * @type {Boolean}
     */
    backdrop: true,

    /**
     * Component class that will be prefixed
     * with base component class
     *
     * @type {String}
     */
    componentClass: 'modal',

    /*
     * Whether to modal is open or not
     *
     * @type {Boolean}
     */
    isOpen: false,

    /**
     * The size of the modal
     *
     * @type {Size}
     */
    size: Size.MEDIUM,

    /**
     * tabindex attribute value
     *
     * @type {String}
     */
    tabindex: '-1',

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Set ariaLabelledBy target element id
     *
     * @private
     * @returns {undefined}
     */
    setLabelledby() {
        this.set( 'ariaLabelledBy', 'modalTitle-' + this.get( 'elementId' ) );
    },

    /**
     * Setup stream actions bindings
     *
     * @private
     * @returns {undefined}
     */
    setupStreamActions() {
        const stream = this.get( 'stream' );

        if ( !stream ) {
            return;
        }

        stream.on( 'hide', () => {
            this.hide();
        });

        stream.on( 'show', () => {
            this.show();
        });
    },

    /**
     * Set up the component as a Bootstrap Modal and listen for events
     *
     * @private
     * @returns {undefined}
     */
    setupModal() {
        const modal = this.$().modal({
            keyboard: true,
            show: false,
            backdrop: this.get( 'backdrop' )
        });

        modal.on( this.namespaceEvent( 'show.bs.modal' ), () => {
            this.sendAction( 'beforeShow' );
        });

        modal.on( this.namespaceEvent( 'shown.bs.modal' ), () => {
            this.set( 'isOpen', true );
            this.sendAction( 'afterShow' );
        });

        modal.on( this.namespaceEvent( 'hide.bs.modal' ), () => {
            this.sendAction( 'beforeHide' );
        });

        modal.on( this.namespaceEvent( 'hidden.bs.modal' ), () => {
            this.set( 'isOpen', false );
            this.sendAction( 'afterHide' );
        });
    },

    /**
     * Unbind bootstrap event handlers
     *
     * @private
     * @returns {undefined}
     */
    unbindHandlers() {
        this.$().off( this.namespaceEvent( 'show.bs.modal' ) );
        this.$().off( this.namespaceEvent( 'shown.bs.modal' ) );
        this.$().off( this.namespaceEvent( 'hide.bs.modal' ) );
        this.$().off( this.namespaceEvent( 'hidden.bs.modal' ) );
    },

    /**
     * Hide the modal by triggering Bootstrap's modal( hide )
     *
     * @returns {undefined}
     */
    hide() {
        this.$().modal( 'hide' );
    },

    /**
     * Show the modal by triggering Bootstrap's modal( show )
     *
     * @returns {undefined}
     */
    show() {
        this.$().modal( 'show' );
    },

    /**
     * Converted size string to Bootstrap modal class
     *
     * @function
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
                case Size.SMALL:
                    sizeClass = 'modal-sm';
                    break;

                case Size.MEDIUM:
                    sizeClass = 'modal-md';
                    break;

                case Size.LARGE:
                    sizeClass = 'modal-lg';
                    break;
            }

            return sizeClass;
        }
    )
});
