import Ember from 'ember';
import layout from '../templates/components/sl-drop-option';

/**
 * @module components
 * @class  sl-drop-option
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
     * @default  "li"
     */
    tagName: 'li',

    /**
     * Class names for the root element
     *
     * @property {Ember.Array} classNames
     */
    classNames: [ 'sl-drop-option' ],

    /**
     * Class name bindings for the root element
     *
     * @property {Ember.Array} classNameBindings
     */
    classNameBindings: [ 'optionType' ],

    /**
     * The ARIA role name for the drop button option
     *
     * @property {string} ariaRole
     * @default  "menuItem"
     */
    ariaRole: 'menuitem',

    // -------------------------------------------------------------------------
    // Actions

    /**
     * Component actions hash
     *
     * @property {Ember.Object} actions
     */
    actions: {

        /**
         * Send the primary action when the click action is triggered
         *
         * @function actions.click
         * @returns  {void}
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
     * @returns  {Ember.String}
     */
    optionType: Ember.computed( 'label', function() {
        return this.get( 'label' ) ? 'presentation' : 'divider';
    })

});
