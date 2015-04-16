import Ember from 'ember';
import layout from '../templates/components/sl-grid-table-row-expander';

/**
 * @module components
 * @class  sl-grid-table-row-expander
 */
export default Ember.Component.extend({ layout,

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
    style: Ember.String.htmlSafe( 'width: 30px;' )

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
