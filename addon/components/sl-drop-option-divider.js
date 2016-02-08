import Ember from 'ember';
import layout from '../templates/components/sl-drop-option-divider';

/**
 * @module
 * @augments ember/Component
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String} */
    ariaRole: 'separator',

    /** @type {String[]} */
    classNames: [
        'divider'
    ],

    /** @type {Object} */
    layout,

    /** @type {String} */
    tagName: 'li'

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
