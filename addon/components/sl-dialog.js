import Ember from 'ember';
import ModalMixin from '../mixins/sl-modal';
import layout from '../templates/components/sl-dialog';

/**
 * @module
 * @augments Ember.Component
 * @mixes sl-ember-components/mixins/sl-modal
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
     * @default
     */
    buttonText: 'Close',

    /**
     * Binding for whether the dialog is shown or not
     *
     * @type {Boolean}
     * @default
     */
    show: false,

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Observes the `show` value and appropriately shows or hides the dialog
     *
     * @function
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
     * @function
     * @returns {undefined}
     */
    hideHandler() {
        this._super();
        this.set( 'show', false );
    }

});
