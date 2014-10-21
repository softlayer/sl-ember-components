import Ember from 'ember';

/** @module sl-components/components/sl-calendar-year */
export default Ember.Component.extend({

    /**
     * HTML tag name for the component's root element
     *
     * @property {string}       tagName
     * @type     {Ember.String}
     * @default  "span"
     */
    tagName: 'span',

    /**
     * Class name bindings for the component's root element
     *
     * @property {array}       classNameBindings
     * @type     {Ember.Array}
     */
    classNameBindings: [ 'active', 'new', 'old' ],

    /**
     * Function triggered by clicking the year; sends back primary action with
     * this year value
     *
     * @function click
     * @return   {void}
     */
    click: function() {
        this.sendAction( 'action', this.get( 'year' ) );
    }
});
