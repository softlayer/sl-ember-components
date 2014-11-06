/* global moment */

import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';

/**
 * @module components
 * @class  sl-date-time
 */
export default Ember.Component.extend( TooltipEnabled, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

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
    // Actions

    // -------------------------------------------------------------------------
    // Events

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

    /**
     * String representing the full timezone name, as used by and interpreted by
     * Moment-timezone: http://momentjs.com/timezone/docs/#/using-timezones/
     *
     * @property {Ember.String} timezone
     * @default  null
     */
    timezone: null,

    /**
     * The bound value of the component's date value
     *
     * @property {date} value
     * @default  (new Date)
     */
    value: new Date(),

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * The date-time's value formatted as a datetime string
     *
     * @function datetime
     * @observes timezoneString, value
     * @returns  {string}
     */
    datetime: function() {
        return moment( this.get( 'value' )).format( 'YYYY-MM-DD HH:mm ' ) + this.get( 'timezoneString' );
    }.property( 'timezoneString', 'value' ),

    /**
     * Formatted string based on value and supplied format
     *
     * @function formattedValue
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
     * @function momentValue
     * @observes value
     * @returns  {object}
     */
    momentValue: function() {
        return moment( this.get( 'value' ) );
    }.property( 'value' ),

    /**
     * Formatted timezone string based on component's timezone value
     *
     * @function timezoneString
     * @observes timezone, momentValue
     * @returns  {string}
     */
    timezoneString: function() {
        return this.get( 'momentValue' ).tz( this.get( 'timezone' ) ).format( 'z' );
    }.property( 'timezone', 'momentValue' ),

    /**
     * The text to use for the component's tooltip
     *
     * @function title
     * @observes datetime
     * @returns  {string}
     */
    title: function() {
        return this.get( 'datetime' );
    }.property( 'datetime' )

});
