import Ember from 'ember';
import InputBased from '../mixins/sl-input-based';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';

/**
 * @module components
 * @class  sl-textarea
 */
export default Ember.Component.extend( InputBased, TooltipEnabled, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * Class names for the component
     *
     * @property {Ember.Array} classNames
     */
    classNames: [ 'form-group', 'sl-textarea' ],

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
     * The ID of the textarea input element
     *
     * @function inputId
     * @observes elementId
     * @returns  {Ember.String}
     */
    inputId: function() {
        return this.get( 'elementId' ) + 'Input';
    }.property( 'elementId' )

});
