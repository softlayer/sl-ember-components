import Ember from 'ember';
import layout from '../templates/components/sl-modal-footer';

/**
 * @module
 * @augments ember/Component
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

   /**
     * The close button text
     *
     * @type {String}
     */
    buttonText: 'Close',

    /** @type {String[]} */
    classNames: [
        'modal-footer'
    ],

    /** @type {Object} */
    layout: layout

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods
});
