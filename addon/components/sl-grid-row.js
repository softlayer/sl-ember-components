import Ember from 'ember';
import config from 'ember-get-config';

/**
 * @module
 * @augments ember/Component
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    classNameBindings: [
        'active:active'
    ],

    /** @type {String} */
    tagName: 'tr',

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    /**
     * @function
     * @param {Event} event - The raw click event
     * @returns {undefined}
     */
    click( event ) {
        const dropButtonClass = `.${config.componentClassPrefix}-drop-button`;
        if ( this.$( event.target ).closest( dropButtonClass ).length < 1 ) {
            this.sendAction( 'onClick', this );
        }
    },

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether the row is selected
     *
     * @type {Boolean}
     */
    active: false,

    /**
     * The row record model instance
     *
     * @type {?Object}
     */
    record: null

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
