import Ember from 'ember';
/* global moment */

/**
 * @module components
 * @class sl-calendar-month
 */
export default Ember.Component.extend({

    /**
     * Class name bindings for the component's root element
     * @property {Array} classNameBindings
     */
    classNameBindings: [ 'active' ],

    /**
     * Class names for the component's root element
     * @property {Array} classNames
     */
    classNames: [ 'month' ],

    /**
     * Function triggered by clicking a calendar month; sends back the primary
     * bound action with this month number
     * @method click
     */
    click: function () {
        this.sendAction( 'action', this.get( 'month' ));
    },

    /**
     * The short string name of the represented month
     * @property {String} shortName
     */
    shortName: function () {
        return moment([ 1, this.get( 'month' ) - 1 ]).format( 'MMM' );
    }.property(),

    /**
     * HTML tag name of the component's root element
     * @property {String} tagname
     * @default "span"
     */
    tagName: 'span'
});