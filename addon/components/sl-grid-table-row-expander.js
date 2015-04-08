import Ember from 'ember';

/**
 * @module components
 * @class  sl-grid-table-row-expander
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * Bindings for the base element's attributes
     *
     * @property {Ember.Array} attributeBindings
     */
    attributeBindings: [ 'style' ],

    /**
     * HTML tag name for root element
     *
     * @property {Ember.String} tagName
     * @default  "tr"
     */
    tagName: 'tr',

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * The style attribute value for the rendered component element
     *
     * @property {Ember.String} style
     */
    style: 'width: 30px;'

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
