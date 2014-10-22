/* global moment */

import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';

/** @module sl-components/components/sl-date-time */
export default Ember.Component.extend( TooltipEnabled, {

    /**
     * The HTML tag type of the component's root element
     *
     * @property {string}       tagName
     * @type     {Ember.String}
     * @default  "time"
     */
    tagName: 'time',

    /**
     * Class names for the component's root element, <time>
     *
     * @property {array}       classNames
     * @type     {Ember.Array}
     */
    classNames: [ 'sl-datetime' ],

    /**
     * Bindings for the date-time's attribute values
     *
     * @property {array}       attributeBindings
     * @type     {Ember.Array}
     */
    attributeBindings: [ 'datetime' ],

    /**
     * String name for the format to render inline; can be "date", "datetime",
     * or "relative"
     *
     * @property {string} format
     * @type     {Ember.String}
     * @default  "datetime"
     */
    format: 'datetime',

    /**
     * The date-time's value formatted as a datetime string
     *
     * @function datetime
     * @observes timezoneString, value
     * @return   {string}
     */
    datetime: function() {
        return moment( this.get( 'value' )).format( 'YYYY-MM-DD HH:mm ' ) + this.get( 'timezoneString' );
    }.property( 'timezoneString', 'value' ),

    /**
     * Formatted string based on value and supplied format
     *
     * @function formattedValue
     * @observes format, momentValue
     * @return   {string}
     */
    formattedValue: function() {
        var momentValue = this.get( 'momentValue' );

        switch ( this.get( 'format' ) ) {
            case 'date':
                return momentValue.format( 'YYYY-MM-DD' );

            case 'relative':
                return momentValue.fromNow();

            default:
            case 'datetime':
                return momentValue.format( 'dddd, MMMM Do YYYY, h:mm A ' ) + this.get( 'timezoneString' );
        }
    }.property( 'format', 'momentValue' ),

    /**
     * The component's current value wrapped in moment
     *
     * @function momentValue
     * @observes value
     * @return   {object}
     */
    momentValue: function() {
        return moment( this.get( 'value' ) );
    }.property( 'value' ),

    /**
     * Formatted timezone string based on component's timezone value
     *
     * @functon timezoneString
     * @observes timezone, momentValue
     * @return  {string}
     */
    timezoneString: function() {
        return this.get( 'momentValue' ).tz( this.get( 'timezone' ) ).format( 'z' );
    }.property( 'timezone', 'momentValue' ),

    /**
     * The text to use for the component's tooltip
     *
     * @function title
     * @observes datetime
     * @return   {string}
     */
    title: function() {
        return this.get( 'datetime' );
    }.property( 'datetime' ),

    /**
     * The bound value of the component's date value
     *
     * @function value
     * @return   {date}
     */
    value: function() {
        return new Date();
    }.property()
});
