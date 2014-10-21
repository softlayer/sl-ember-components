import Ember from 'ember';

/** @module sl-components/components/sl-calendar-day */
export default Ember.Component.extend({

    /**
     * The HTML tag name of the component's root element
     *
     * @property {string}       tagName
     * @type     {Ember.String}
     * @default  "td"
     */
    tagName: 'td',

    /**
     * Class names for the component's root element
     *
     * @property {array}       classNames
     * @type     {Ember.Array}
     */
    classNames: [ 'day' ],

    /**
     * Class name bindings for the component
     *
     * @property {array}       classNameBindings
     * @type     {Ember.Array}
     */
    classNameBindings: [ 'active', 'new', 'old' ],

    /**
     * Function triggered by clicking a calendar day
     *
     * @function click
     * @return   {void}
     */
    click: function() {
        this.sendAction( 'action', this.get( 'content' ) );
    }
});
