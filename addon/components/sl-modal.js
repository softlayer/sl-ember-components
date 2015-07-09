import Ember from 'ember';
import layout from '../templates/components/sl-modal';

/**
 * @module
 * @augments ember/Component
 */
export default Ember.Component.extend({
    // -----------------------------------------------------
    // Dependencies


    // -----------------------------------------------------
    // Attributes


    /** @type {String[]} */
    attributeBindings: [
        'aria-describedby',
        'aria-hidden',
        'aria-labelledby',
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

    /** @type {String} */
    tagName: 'div',

    /** @type {Object} */
    layout: layout,


    // -----------------------------------------------------
    // Actions


    /** @type {Object} */
    actions: {
        /**
         * Trigger hiding the model
         *
         * @function actions:hide
         * @returns {undefined}
         */
        hide() {
            this.hide();
        },

         /**
         * Trigger showing the model
         *
         * @function actions:show
         * @returns {undefined}
         */
        show() {
            this.show();
        }
    },


    // -----------------------------------------------------
    // Events


    // -----------------------------------------------------
    // Properties

    /**
     * Whether the modal is animated with transition or not
     *
     * @type {Boolean}
     */
    animated: true,

    /**
     * aria-describedby attribute
     *
     * @type {?String}
     */
    'aria-describedby': null,

    /**
     *  aria-hidden attribute to inform assistive technologies to skip the
     *  modal's DOM elements
     *
     * @type {String}
     */
    'aria-hidden': 'true',

     /**
      * aria-labelledby attribute value
      *
      * @function
      * @returns {String}
      */
    'aria-labelledby': null,

    /**
     * The aria-role value
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
     * The modal service used to register and unregister this modal component
     *
     * @type {ember/Service}
     */
    modalService: Ember.inject.service( 'sl-modal' ),

    /**
     * The unique name use to register this modal with the modal service
     *
     * If this value is left null(default), then the component will not
     * be registered on the modal service.
     *
     * @type {?String}
     */
    name: null,

    /**
     * tabindex attribute value
     *
     * @type {String}
     */
    tabindex: '-1',


    // -----------------------------------------------------
    // Observers

    /**
     * Get aria-labelledby target element id
     *
     * @function
     * @returns {undefined}
     */
    getLabelledBy: Ember.on(
        'willInsertElement',
        function() {
            this.set( 'aria-labelledby', this.$('[id^="modalTitle"]').attr( 'id' ) );
        }
    ),

    /**
     * Register component on the modal service
     *
     * @function
     * @returns {undefined}
     */
    register: Ember.on(
       'init',
       function() {
           let name = this.get( 'name' );

           if ( name ) {
              this.get( 'modalService' ).register( this );
           }
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
            let modal = this.$().modal({
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
     * @function unbindHandlers
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

    /**
     * Unregister modal from modal service
     *
     * @function unregister
     * @returns {undefined}
     */
    unregister: Ember.on(
        'willDestroyElement',
        function() {
            let modalService = this.get( 'modalService' );
            if ( modalService.find( this ) ) {
                modalService.unregister( this );
            }
        }
    ),

    // -----------------------------------------------------
    // Methods

    hide() {
        this.$().modal( 'hide' );
    },

    show() {
        this.$().modal( 'show' );
    }
});
