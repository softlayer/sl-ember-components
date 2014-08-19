import Ember from 'ember';

/**
 * @module mixins
 * @class sl-modal
 */
export default Ember.Mixin.create({

    /**
     * Component actions
     * @property {object} actions
     */
    actions: {

        /**
         * Action to hide the modal
         * @method actions.close
         */
        close: function() {
            if ( this.$() ) {
                this.$().modal( 'hide' );
            }
        }
    },

    /**
     * `aria-describedby` attribute value
     *
     * @property {string} aria-describedby
     * @default null
     */
    'aria-describedby': null,

    /**
     * `aria-hidden` attribute to inform assistive technologies to skip the
     * modal's DOM elements
     * @property {string} aria-hidden
     * @default "true"
     */
    'aria-hidden': 'true',

    /**
     * `aria-labelledby` attribute value
     * @property {string} aria-labelledby
     */
    'aria-labelledby': function() {
        return 'modalTitle-' + Math.random();
    }.property(),

    /**
     * Attribute value bindings for the containing element
     * @property {array} attributeBindings
     */
    attributeBindings: [
        'aria-hidden', 'tabindex', 'role', 'aria-labelledby', 'aria-describedby'
    ],

    /**
     * Class names for the containing element.
     * @property {array} classNames
     */
    classNames: [ 'fade', 'modal' ],

    /**
     * Overridable method stub
     * Triggered by Twitter Bootstrap 3 modal's `hidden.bs.modal` event
     * @method hiddenHandler
     */
    hiddenHandler: function () {},

    /**
     * Overridable method stub
     * Triggered by Twitter Bootstrap 3 modal's `hide.bs.modal` event
     * @method hideHandler
     */
    hideHandler: function () {},

    /**
     * ?
     * @property {string} layoutName
     * @default "sl-modal"
     */
    layoutName: 'sl-modal',

    /**
     * Overridable method stub
     * Triggered by Twitter Bootstrap 3 modal's `loaded.bs.modal` event
     * @method loadedHandler
     */
    loadedHandler: function () {},

    /**
     * On 'didInsertElement', executes any defined handlers for exposed Twitter
     * Bootstrap 3 modal events
     * @method modalize
     */
    modalize: function () {
        var modal = this.$().modal({
            keyboard : true,
            show     : false,
            backdrop : 'static'
        });

        modal.on( 'show.bs.modal', this.showHandler.bind( this ));
        modal.on( 'shown.bs.modal', this.shownHandler.bind( this ));
        modal.on( 'hide.bs.modal', this.hideHandler.bind( this ));
        modal.on( 'hidden.bs.modal', this.hiddenHandler.bind( this ));
        modal.on( 'loaded.bs.modal', this.loadedHandler.bind( this ));
    }.on( 'didInsertElement' ),

    /**
     * `role` attribute value
     * @property {string} role
     * @default 'dialog'
     */
    role: 'dialog',

    /**
     * Overridable method stub
     * Triggered by Twitter Bootstrap 3 modal's `show.bs.modal` event
     * @method showHandler
     */
    showHandler: function () {},

    /**
     * Overridable method stub
     * Triggered by Twitter Bootstrap 3 modal's `shown.bs.modal` event
     * @method shownHandler
     */
    shownHandler: function () {},

    /**
     * `tabindex` attribute value
     * @property {string} tab index
     * @default '-1'
     */
    tabindex: '-1'

});