import Ember from 'ember';
import ModalMixin from '../mixins/sl-modal';

/**
 * @module components
 * @class  sl-dialog
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
     * Text string for the "cancel" button
     *
     * @property {Ember.String} cancelText
     * @default  "Close"
     */
    buttonText: 'Close',

    /**
     * Binding for whether the dialog is shown or not
     *
     * @property {boolean} show
     * @default  false
     */
    show: false,

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Observes the `show` value and appropriately shows or hides the dialog
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
     * Custom dialog handler for setting the `show` property to false
     *
     * @function hideHandler
     * @returns  {void}
     */
    hideHandler: function() {
        this._super();
        this.set( 'show', false );
    }

});
