import Ember from 'ember';
import layout from '../templates/components/sl-drop-option';

/**
 * @module components
 * @class sl-drop-option
 * @augments Ember.Component
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    ariaRole: 'menuitem',

    classNameBindings: [ 'optionType' ],

    classNames: [ 'sl-drop-option' ],

    layout,

    tagName: 'li',

    // -------------------------------------------------------------------------
    // Actions

    actions: {

        /**
         * Send the primary action when the click action is triggered
         *
         * @function actions.click
         * @returns {undefined}
         */
        click() {
            this.sendAction();
        }

    },

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Represents the type of option; "divider" if the label is undefined, or
     * "presentation" otherwise
     *
     * @function optionType
     * @observes label
     * @returns {String}
     */
    optionType: Ember.computed( 'label', function() {
        return this.get( 'label' ) ? 'presentation' : 'divider';
    })

});
