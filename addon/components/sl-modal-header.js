import Ember from 'ember';
import layout from '../templates/components/sl-modal-header';

/**
 * @module
 * @augments ember/Component
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {Object} */
    layout: layout,

    /** @type {String} */
    tagName: 'div',

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

    /**
     * aria-labelledby value
     *
     * @function
     * @returns {String}
     */
    'ariaLabelledby': Ember.computed(
        'elementId',
        function() {
            return 'modalTitle' + this.get( 'elementId' );
        }
    )
});
