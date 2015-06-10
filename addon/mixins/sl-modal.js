import Ember from 'ember';

/**
 * @module
 * @augments ember/Mixin
 */
export default Ember.Mixin.create({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    attributeBindings: [
        'aria-describedby',
        'aria-hidden',
        'aria-labelledby',
        'tabindex'
    ],

    /** @type {String} */
    ariaRole: 'dialog',

    /** @type {String[]} */
    classNameBindings: [
        'animated:fade'
    ],

    /** @type {String[]} */
    classNames: [
        'modal'
    ],

    /** @type {String} */
    layoutName: 'sl-modal',

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
     * `aria-describedby` attribute value
     *
     * @type {?String}
     */
    'aria-describedby': null,

    /**
     * `aria-hidden` attribute to inform assistive technologies to skip the
     * modal's DOM elements
     *
     * @type {String}
     */
    'aria-hidden': 'true',

    /**
     * Bootstrap's modal backdrop option
     *
     * @type {Boolean|String}
     */
    backdrop: true,

    /**
     * Whether the modal is shown initially or not
     *
     * @type {Boolean}
     */
    show: false,

    /**
     * `tabindex` attribute value
     *
     * @type {String}
     */
    tabindex: '-1',

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Binds handlers for exposed Twitter Bootstrap 3 modal events
     *
     * @function
     * @listens didInsertElement
     * @returns {undefined}
     */
    modalize: Ember.on(
        'didInsertElement',
        function() {
            let modal = this.$().modal({
                keyboard: true,
                show: this.get( 'show' ),
                backdrop: this.get( 'backdrop' )
            });

            modal.on( 'show.bs.modal', () => {
                this.showHandler();
            });

            modal.on( 'shown.bs.modal', () => {
                this.shownHandler();
            });

            modal.on( 'hide.bs.modal', () => {
                this.hideHandler();
            });

            modal.on( 'hidden.bs.modal', () => {
                this.hiddenHandler();
            });
        }
    ),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * `aria-labelledby` attribute value
     *
     * Is a randomly-generated unique string
     *
     * @function
     * @returns {String}
     */
    'aria-labelledby': Ember.computed(
        function() {
            return 'modalTitle-' + Math.random();
        }
    ),

    /**
     * Overridable method stub
     *
     * Triggered by Twitter Bootstrap 3 modal's `hidden.bs.modal` event.
     *
     * @abstract
     * @function
     * @returns {undefined}
     */
    hiddenHandler() {},

    /**
     * Overridable method stub
     *
     * Triggered by Twitter Bootstrap 3 modal's `hide.bs.modal` event.
     *
     * @abstract
     * @function
     * @returns {undefined}
     */
    hideHandler() {},

    /**
     * Overridable method stub
     *
     * Triggered by Twitter Bootstrap 3 modal's `loaded.bs.modal` event.
     *
     * @abstract
     * @function
     * @returns {undefined}
     */
    loadedHandler() {},

    /**
     * Overridable method stub
     *
     * Triggered by Twitter Bootstrap 3 modal's `show.bs.modal` event.
     *
     * @abstract
     * @function
     * @returns {undefined}
     */
    showHandler() {},

    /**
     * Overridable method stub
     *
     * Triggered by Twitter Bootstrap 3 modal's `shown.bs.modal` event.
     *
     * @abstract
     * @function
     * @returns {undefined}
     */
    shownHandler() {}

});
