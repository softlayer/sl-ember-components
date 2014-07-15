import Ember from 'ember';

/**
 * @module components
 * @class sl-modal
 */
export default Ember.Component.extend({

    /**
     * Text to display on the "accept" button
     * @property {string} acceptText
     * @default 'Accept'
     */
    acceptText: 'Accept',

    /**
     * Object of action functions
     * @property {object} actions
     */
    actions: {

        /**
         * Action to take when "accept" is triggered
         * @method accept
         */
        accept: function ( context ) {
            this.sendAction( 'accept', context );
        },

        /**
         * Action to take when "close" is triggered
         * @method close
         */
        close: function ( context ) {
            this.sendAction( 'close', context );
        }
    },

    /**
     * Class name bindings for the containing element
     * @property {array} classNameBindings
     */
    classNameBindings: [ 'fade:fade' ],

    /**
     * Class names for the containing element
     * @property {array} classNames
     */
    classNames: [ 'modal', 'sl-modal' ],

    /**
     * Whether to animate the modal with a fade effect
     * @property {boolean} fade
     * @default false
     */
    fade: false
});
