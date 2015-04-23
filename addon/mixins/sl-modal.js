import Ember from 'ember';

/**
 * @module mixins
 * @class sl-modal
 * @augments Ember.Mixin
 */
export default Ember.Mixin.create({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    attributeBindings: [
        'aria-describedby',
        'aria-hidden',
        'aria-labelledby',
        'tabindex'
    ],

    ariaRole: 'dialog',

    classNames: [ 'fade', 'modal' ],

    layoutName: 'sl-modal',

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * `aria-describedby` attribute value
     *
     * @property {?String} aria-describedby
     * @default null
     */
    'aria-describedby': null,

    /**
     * `aria-hidden` attribute to inform assistive technologies to skip the
     * modal's DOM elements
     *
     * @property {String} aria-hidden
     * @default "true"
     */
    'aria-hidden': 'true',

    /**
     * Bootstrap's modal backdrop option
     *
     * @property {Boolean|String} backdrop
     * @default true
     */
    backdrop: true,

    /**
     * `tabindex` attribute value
     *
     * @property {String} tab index
     * @default "-1"
     */
    tabindex: '-1',

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Binds handlers for exposed Twitter Bootstrap 3 modal events
     *
     * @function modalize
     * @listens didInsertElement
     * @returns {undefined}
     */
    modalize: Ember.on( 'didInsertElement', function() {
        var modal = this.$().modal({
            keyboard : true,
            show     : false,
            backdrop : this.get( 'backdrop' )
        });

        modal.on( 'show.bs.modal', Ember.run.bind( this, this.showHandler ) );
        modal.on( 'shown.bs.modal', Ember.run.bind( this, this.shownHandler ) );
        modal.on( 'hide.bs.modal', Ember.run.bind( this, this.hideHandler ) );
        modal.on( 'hidden.bs.modal', Ember.run.bind( this, this.hiddenHandler ) );
        modal.on( 'loaded.bs.modal', Ember.run.bind( this, this.loadedHandler ) );
    }),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * `aria-labelledby` attribute value
     *
     * Is a randomly-generated unique string
     *
     * @function aria-labelledby
     * @returns {String}
     */
    'aria-labelledby': Ember.computed( function() {
        return 'modalTitle-' + Math.random();
    }),

    /**
     * Overridable method stub
     *
     * Triggered by Twitter Bootstrap 3 modal's `hidden.bs.modal` event.
     *
     * @abstract
     * @function hiddenHandler
     * @returns {undefined}
     */
    hiddenHandler() {},

    /**
     * Overridable method stub
     *
     * Triggered by Twitter Bootstrap 3 modal's `hide.bs.modal` event.
     *
     * @abstract
     * @function hideHandler
     * @returns {undefined}
     */
    hideHandler() {},

    /**
     * Overridable method stub
     *
     * Triggered by Twitter Bootstrap 3 modal's `loaded.bs.modal` event.
     *
     * @abstract
     * @function loadedHandler
     * @returns {undefined}
     */
    loadedHandler() {},

    /**
     * Overridable method stub
     *
     * Triggered by Twitter Bootstrap 3 modal's `show.bs.modal` event.
     *
     * @abstract
     * @function showHandler
     * @returns {undefined}
     */
    showHandler() {},

    /**
     * Overridable method stub
     *
     * Triggered by Twitter Bootstrap 3 modal's `shown.bs.modal` event.
     *
     * @abstract
     * @function shownHandler
     * @returns {undefined}
     */
    shownHandler() {}

});
