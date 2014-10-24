import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';

/**
 * @module components
 * @class  sl-tooltip
 */
export default Ember.Component.extend( TooltipEnabled, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * The tag type of the root element
     *
     * @property {Ember.String} tagName
     * @default  "span"
     */
    tagName: 'span'

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
