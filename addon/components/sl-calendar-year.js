import Ember from 'ember';

/** @module sl-components/components/sl-calendar-year */
export default Ember.Component.extend({

    /**
     * HTML tag name for the component's root element
     *
     * @property {Ember.String} tagName
     * @default  "span"
     */
    tagName: 'span',

    /**
     * Class name bindings for the component's root element
     *
     * @property {Ember.Array} classNameBindings
     */
    classNameBindings: [ 'active', 'new', 'old' ],

    /**
     * Function triggered by clicking the year; sends back primary action with
     * this year value
     *
     * @function click
     * @returns  {void}
     */
    click: function() {
        this.sendAction( 'action', this.get( 'year' ) );
    }
});
