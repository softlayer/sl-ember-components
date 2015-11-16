import Ember from 'ember';
import StreamEnabled from 'ember-stream/mixins/stream-enabled';
import layout from '../templates/components/sl-modal';

/**
 * Valid size values for the sl-modal component
 *
 * @memberof module:components/sl-modal
 * @enum {String}
 */
export const Size = Object.freeze({
    LARGE: 'modal-lg',
    MEDIUM: 'modal-md',
    SMALL: 'modal-sm'
});

/**
 * @module
 * @augments ember/Component
 * @augments ember-stream/mixins/stream-enabled
 */
export default Ember.Component.extend( StreamEnabled, {

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
        'modal'
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

    /**
     * Set ariaLabelledBy target element id
     *
     * @function
     * @returns {undefined}
     */
    setLabelledby: Ember.on(
        'init',
        function() {
            this.set( 'ariaLabelledBy', 'modalTitle-' + this.get( 'elementId' ) );
        }
    ),

    /**
     * Setup stream actions bindings
     *
     * @function
     * @returns {undefined}
     */
    setupStreamActions: Ember.on(
        'init',
        function() {
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
        }
    ),

    /**
     * Set up the component as a Bootstrap Modal and listen for events
     *
     * @function
     * @returns {undefined}
     */
    setupModal: Ember.on(
        'didInsertElement',
        function() {
            const modal = this.$().modal({
                keyboard: true,
                show: false,
                backdrop: this.get( 'backdrop' )
            });

            modal.on( 'show.bs.modal', () => {
                this.sendAction( 'beforeShow' );
            });

            modal.on( 'shown.bs.modal', () => {
                this.set( 'isOpen', true );
                this.sendAction( 'afterShow' );
            });

            modal.on( 'hide.bs.modal', () => {
                this.sendAction( 'beforeHide' );
            });

            modal.on( 'hidden.bs.modal', () => {
                this.set( 'isOpen', false );
                this.sendAction( 'afterHide' );
            });
        }
    ),

    /**
     * Unbind bootstrap event handlers
     *
     * @function
     * @returns {undefined}
     */
    unbindHandlers: Ember.on(
        'willClearRender',
        function() {
            this.$().off( 'show.bs.modal' );
            this.$().off( 'shown.bs.modal' );
            this.$().off( 'hide.bs.modal' );
            this.$().off( 'hidden.bs.modal' );
        }
    ),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Hide the modal by triggering Bootstrap's modal( hide )
     *
     * @function
     * @returns {undefined}
     */
    hide() {
        this.$().modal( 'hide' );
    },

    /**
     * Show the modal by triggering Bootstrap's modal( show )
     *
     * @function
     * @returns {undefined}
     */
    show() {
        this.$().modal( 'show' );
    }

});
