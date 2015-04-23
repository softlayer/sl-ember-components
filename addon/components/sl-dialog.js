import Ember from 'ember';
import ModalMixin from '../mixins/sl-modal';
import layout from '../templates/components/sl-dialog';

/**
 * @module components
 * @class sl-dialog
 * @augments Ember.Component
 * @mixes sl-modal
 */
export default Ember.Component.extend( ModalMixin, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    layout,

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Text string for the "cancel" button
     *
     * @property {String} cancelText
     * @default "Close"
     */
    buttonText: 'Close',

    /**
     * Binding for whether the dialog is shown or not
     *
     * @property {Boolean} show
     * @default false
     */
    show: false,

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Observes the `show` value and appropriately shows or hides the dialog
     *
     * @function toggle
     * @observes show
     * @returns {undefined}
     */
    toggle: Ember.observer( 'show', function() {
        this.$().modal( this.get( 'show' ) ? 'show' : 'hide' );
    }),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Custom dialog handler for setting the `show` property to false
     *
     * @override
     * @function hideHandler
     * @returns {undefined}
     */
    hideHandler: function() {
        this._super();
        this.set( 'show', false );
    }

});
