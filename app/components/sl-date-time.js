import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';

/**
 * @module components
 * @class sl-date-time
 */
export default Ember.Component.extend( TooltipEnabled, {

    /**
     * Bindings for the date-time's attribute values
     * @property {array} attributeBindings
     */
    attributeBindings: [ 'datetime' ],

    /**
     * Class names for the component's root element, <time>
     * @property {array} classNames
     */
    classNames: [ 'sl-datetime' ],

    /**
     * The date-time's value formatted as a datetime string
     * @property {string} datetime
     */
    datetime: function () {
        return moment( this.get( 'value' )).format( 'YYYY-MM-DD HH:mm A [GMT]ZZ' );
    }.property( 'format', 'value' ),

    /**
     * String name for the format to render inline. Can be "date", "datetime",
     * or "relative".
     * @property {string} format
     */
    format: 'datetime',

    /**
     * Formatted string based on value and supplied format
     * @property {string} formattedValue
     */
    formattedValue: function () {
        var momentValue = moment( this.get( 'value' ));

        switch ( this.get( 'format' )) {
            case 'date':     return momentValue.format( 'YYYY-MM-DD' );
            case 'datetime': return momentValue.format( 'dddd, MMMM Do YYYY, h:mm A' );
            case 'relative': return momentValue.fromNow();
        }
    }.property( 'format', 'value' ),

    /**
     * The HTML tag type of the component's root element
     * @property {string} tagName
     * @default "time"
     */
    tagName: 'time',

    /**
     * The text to use for the component's tooltip
     * @property {string} title
     */
    title: function () {
        return this.get( 'datetime' );
    }.property( 'datetime' ),

    /**
     * The bound value of the component's date value
     * @property {date|string} value
     * @default new Date()
     */
    value: function () {
        return new Date();
    }.property()
});
