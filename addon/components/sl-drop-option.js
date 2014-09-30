import Ember from 'ember';

/**
 * @module components
 * @class sl-drop-option
 */
export default Ember.Component.extend({

    /**
     * Component actions hash
     *
     * @property {object} actions
     */
    actions: {

        /**
         * Send the primary action when the click action is triggered
         *
         * @method actions.click
         */
        click: function() {
            this.sendAction( 'action' );
        }
    },

    /**
     * Class name bindings for the root element
     *
     * @property {array} classNameBindings
     */
    classNameBindings: [ 'optionType' ],

    /**
     * Class names for the root element
     *
     * @property {array} classNames
     */
    classNames: [ 'sl-drop-option' ],

    /**
     * Represents the type of option; "divider" if the label is undefined, or
     * "presentation" otherwise
     *
     * @property {string} optionType
     */
    optionType: function() {
        return this.get( 'label' ) ? 'presentation' : 'divider';
    }.property( 'label' ),

    /**
     * HTML tag name for the root element
     *
     * @property {string} tagName
     * @default "li"
     */
    tagName: 'li'
});
