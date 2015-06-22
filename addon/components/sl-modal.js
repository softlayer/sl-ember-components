import Ember from 'ember';
import layout from '../templates/components/sl-modal';

/**
 * @module
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
    classNameBindings:[
        'animated:fade'
    ],

    /** @type {String[]} */
    classNames: [
        'modal fade in'
    ],

    /** @type {String[]} */
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
     * aria-describedby attribute 
     *
     * @type {?String}
     * */
    'aria-describedby': null,

    /**
     *  aria-hidden attribute to inform assistive technologies to skip the
     *  modal's DOM elements
     *
     * @type {String}
     *                          */
    'aria-hidden': 'true',

    /**
     * The aria-role value
     *
     * @type {String}
     *                     */
    ariaRole: 'dialog',

    /*
     * Whether to show Bootstrap's backdrop
     *
     * @type {Boolean|String}
     */
    backdrop: true,

    /**
     * The close button text
     *
     * @type {String}
     */
    closeText: 'Close',
    
    /**
     * The modal service used to register and unregister this modal component
     *
     * @type {ember/Service}
     */
    modalService: Ember.inject.service( 'modal' ), 
    
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
     * aria-labelledby attribute value
     *
     * @function
     * @returns {String}
     */
    'aria-labelledby': Ember.computed(
        'elementId',
        function() {
            return 'modalTitle' + this.get( 'elementId' );
        }
    ),

    /**
     * Register component on the modal service
     *
     * @function
     * @returns {function}
     */
    register: Ember.on(
       'init',
       function() {
           let name = this.get( 'name' );

           if ( name ) {
              this.get( 'modalService' ).register( this, name ); 
           }
       }
    ),
    
    /**
     * Set up the component as a Bootstrap Modal and listen for events
     *
     * @function
     * @returns {function}
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
               this.sendAction( 'afterShow' ); 
            });

            modal.on( 'hide.bs.modal', () => {
               this.sendAction( 'beforeHide' ); 
            });

            modal.on( 'hidden.bs.modal', () => {
               this.sendAction( 'afterHide' ); 
            });
         }
     ),

    // -----------------------------------------------------
    // Methods
    
    show() {
        this.$().modal( 'show' );
    },

    hide() {
        this.$().modal( 'hide' );
    },
    
    /**
     * Unregister model from modelService
     * @function unregister 
     * @returns {undefined}
     */
    unregister() {
        this.get( 'modalService' ).unregister( this.get( 'name' ) );
    }
});
