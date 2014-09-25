import Ember from 'ember';
import ModalMixin from '../mixins/sl-modal';

/**
 * @module components
 * @class sl-simple-modal
 */
export default Ember.Component.extend( ModalMixin, {

    /**
     * Text string for the "accept" button
     *
     * @property {string} acceptText
     * @default "Accept"
     */
    acceptText: 'Accept',

    /**
     * Text string for the "cancel" button
     *
     * @property {string} cancelText
     * @default "Cancel"
     */
    cancelText: 'Cancel',

    /**
     * Custom simple-modal handler for setting the `show` property to false
     *
     * @method hideHandler
     */
    hideHandler: function() {
        this._super();
        this.set( 'show', false );
    },

    /**
     * Binding for whether the modal is shown or not
     *
     * @property {boolean} show
     * @default false
     */
    show: false,

    /**
     * Observes the `show` value and appropriately shows or hides the modal
     *
     * @method toggle
     */
    toggle: function() {
        this.$().modal( this.get( 'show' ) ? 'show' : 'hide' );
    }.observes( 'show' )
});
