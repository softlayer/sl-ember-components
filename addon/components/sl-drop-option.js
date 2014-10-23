import Ember from 'ember';

/** @module sl-components/components/sl-drop-option */
export default Ember.Component.extend({

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
     * Component actions hash
     *
     * @property {Ember.Object} actions
     */
    actions: {

        /**
         * Send the primary action when the click action is triggered
         *
         * @method  actions.click
         * @returns {void}
         */
        click: function() {
            this.sendAction( 'action' );
        }
    },

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Represents the type of option; "divider" if the label is undefined, or
     * "presentation" otherwise
     *
     * @method   optionType
     * @observes label
     * @returns  {Ember.String}
     */
    optionType: function() {
        return this.get( 'label' ) ? 'presentation' : 'divider';
    }.property( 'label' )
});
