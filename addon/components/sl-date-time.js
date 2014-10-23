/* global moment */

import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';

/** @module sl-components/components/sl-date-time */
export default Ember.Component.extend( TooltipEnabled, {

    /**
     * The HTML tag type of the component's root element
     *
     * @property {Ember.String} tagName
     * @default  "time"
     */
    tagName: 'time',

    /**
     * Class names for the component's root element, <time>
     *
     * @property {Ember.Array} classNames
     */
    classNames: [ 'sl-datetime' ],

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Bindings for the date-time's attribute values
     *
     * @property {Ember.Array} attributeBindings
     */
    attributeBindings: [ 'datetime' ],

    /**
     * String name for the format to render inline; can be "date", "datetime",
     * or "relative"
     *
     * @property {Ember.String} format
     * @default  "datetime"
     */
    format: 'datetime',

    // -------------------------------------------------------------------------
    // Functions

    /**
     * The date-time's value formatted as a datetime string
     *
     * @method   datetime
     * @observes timezoneString, value
     * @returns  {string}
     */
    datetime: function() {
        return moment( this.get( 'value' )).format( 'YYYY-MM-DD HH:mm ' ) + this.get( 'timezoneString' );
    }.property( 'timezoneString', 'value' ),

    /**
     * Formatted string based on value and supplied format
     *
     * @method   formattedValue
     * @observes format, momentValue
     * @returns  {string}
     */
    formattedValue: function() {
        var momentValue     = this.get( 'momentValue' ),
            formattedString = '';

        switch ( this.get( 'format' ) ) {
            case 'date':
                formattedString = momentValue.format( 'YYYY-MM-DD' );
                break;

            case 'relative':
                formattedString = momentValue.fromNow();
                break;

            default:
            case 'datetime':
                formattedString = momentValue.format( 'dddd, MMMM Do YYYY, h:mm A' ) + ' ' + this.get( 'timezoneString' );
        }

        return formattedString;
    }.property( 'format', 'momentValue' ),

    /**
     * The component's current value wrapped in moment
     *
     * @method   momentValue
     * @observes value
     * @returns  {object}
     */
    momentValue: function() {
        return moment( this.get( 'value' ) );
    }.property( 'value' ),

    /**
     * Formatted timezone string based on component's timezone value
     *
     * @method   timezoneString
     * @observes timezone, momentValue
     * @returns  {string}
     */
    timezoneString: function() {
        return this.get( 'momentValue' ).tz( this.get( 'timezone' ) ).format( 'z' );
    }.property( 'timezone', 'momentValue' ),

    /**
     * The text to use for the component's tooltip
     *
     * @method   title
     * @observes datetime
     * @returns  {string}
     */
    title: function() {
        return this.get( 'datetime' );
    }.property( 'datetime' ),

    /**
     * The bound value of the component's date value
     *
     * @method  value
     * @returns {date}
     */
    value: function() {
        return new Date();
    }.property()
});
