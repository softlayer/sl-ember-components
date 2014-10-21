/* global moment */

import Ember from 'ember';

/** @module sl-components/components/sl-calendar-month */
export default Ember.Component.extend({

    /**
     * HTML tag name of the component's root element
     *
     * @property {string}       tagName
     * @type     {Ember.String}
     * @default  "span"
     */
    tagName: 'span',

    /**
     * Class names for the component's root element
     *
     * @property {array}       classNames
     * @type     {Ember.Array}
     */
    classNames: [ 'month' ],

    /**
     * Class name bindings for the component's root element
     *
     * @property {array}       classNameBindings
     * @type     {Ember.Array}
     */
    classNameBindings: [ 'active' ],

    /**
     * Function triggered by clicking a calendar month; sends back the primary
     * bound action with this month number
     *
     * @function click
     * @return   {void}
     */
    click: function() {
        this.sendAction( 'action', this.get( 'month' ) );
    },

    /**
     * The short string name of the represented month
     *
     * @function shortName
     * @returns  {Ember.String}
     */
    shortName: function() {
        return moment([ 1, this.get( 'month' ) - 1 ]).format( 'MMM' );
    }.property()
});
