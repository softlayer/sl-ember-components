import Ember from 'ember';
import layout from '../templates/components/sl-pagination-info';

/**
 * @module components
 * @class  sl-pagination-info
 */
export default Ember.Component.extend({ layout,

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * HTML tag name for the root element
     *
     * @property {Ember.String} tagName
     * @default  "span"
     */
    tagName: 'span',

    /**
     * Class names for the root element
     *
     * @property {Ember.Array} classNames
     */
    classNames: [ 'sl-pagination-info' ]

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
