import Ember from 'ember';

/** @module sl-components/components/sl-drop-option */
export default Ember.Component.extend({

    /**
     * HTML tag name for the root element
     *
     * @property {string}       tagName
     * @type     {Ember.String}
     * @default  "li"
     */
    tagName: 'li',

    /**
     * Class names for the root element
     *
     * @property {array}       classNames
     * @type     {Ember.Array}
     */
    classNames: [ 'sl-drop-option' ],

    /**
     * Class name bindings for the root element
     *
     * @property {array}       classNameBindings
     * @type     {Ember.Array}
     */
    classNameBindings: [ 'optionType' ],

    /**
     * Component actions hash
     *
     * @property {object}       actions
     * @type     {Ember.Object}
     */
    actions: {

        /**
         * Send the primary action when the click action is triggered
         *
         * @function actions.click
         * @return   {void}
         */
        click: function() {
            this.sendAction( 'action' );
        }
    },

    /**
     * Represents the type of option; "divider" if the label is undefined, or
     * "presentation" otherwise
     *
     * @function optionType
     * @type     {Ember.String}
     * @observes label
     * @return   {string}
     */
    optionType: function() {
        return this.get( 'label' ) ? 'presentation' : 'divider';
    }.property( 'label' )
});
