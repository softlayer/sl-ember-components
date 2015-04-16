import Ember from 'ember';
import layout from '../templates/components/sl-span';

/**
 * @module components
 * @class  sl-span
 */
export default Ember.Component.extend({ layout,

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * The HTML tag name of the component
     *
     * @property {Ember.String} tagname
     * @default  "span"
     */
    tagName: 'span',

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether to show the loading icon or content
     *
     * @property {boolean} loading
     * @default  false
     */
    loading: false

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
