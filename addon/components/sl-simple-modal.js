import Ember from 'ember';
import ModalMixin from '../mixins/sl-modal';

/**
 * @module components
 * @class  sl-simple-modal
 */
export default Ember.Component.extend( ModalMixin, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Text string for the "accept" button
     *
     * @property {string} acceptText
     * @default  "Accept"
     */
    acceptText: 'Accept',

    /**
     * Text string for the "cancel" button
     *
     * @property {string} cancelText
     * @default  "Cancel"
     */
    cancelText: 'Cancel',

    /**
     * Binding for whether the modal is shown or not
     *
     * @property {boolean} show
     * @default  false
     */
    show: false,

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Observes the `show` value and appropriately shows or hides the modal
     *
     * @function toggle
     * @observes show
     * @returns  {void}
     */
    toggle: function() {
        this.$().modal( this.get( 'show' ) ? 'show' : 'hide' );
    }.observes( 'show' ),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Custom simple-modal handler for setting the `show` property to false
     *
     * @function hideHandler
     * @returns  {void}
     */
    hideHandler: function() {
        this._super();
        this.set( 'show', false );
    }

});
