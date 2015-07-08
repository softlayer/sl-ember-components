import Ember from 'ember';
import ModalMixin from '../mixins/sl-modal';
import layout from '../templates/components/sl-dialog';

/**
 * @module
 * @augments ember/Component
 * @augments module:mixins/sl-modal
 */
export default Ember.Component.extend( ModalMixin, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {Object} */
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
     * @type {String}
     */
    buttonText: 'Close',

    /**
     * Binding for whether the dialog is shown or not
     *
     * @type {Boolean}
     */
    show: false,

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Observes the `show` value and appropriately shows or hides the dialog
     *
     * @function
     * @returns {undefined}
     */
    toggle: Ember.observer(
        'show',
        function() {
            this.$().modal( this.get( 'show' ) ? 'show' : 'hide' );
        }
    ),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Custom dialog handler for setting the `show` property to false
     *
     * @override sl-ember-components/mixins/sl-modal
     * @function
     * @returns {undefined}
     */
    hideHandler() {
        this._super();
        this.set( 'show', false );
    }

});
