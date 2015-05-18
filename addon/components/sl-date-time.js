import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import layout from '../templates/components/sl-date-time';

/**
 * @module
 * @augments ember/Component
 * @augments module:mixins/sl-tooltip-enabled
 */
export default Ember.Component.extend( TooltipEnabled, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    attributeBindings: [ 'datetime' ],

    /** @type {String[]} */
    classNames: [ 'sl-datetime' ],

    /** @type {Object} */
    layout,

    /** @type {String} */
    tagName: 'time',

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * String name for the format to render inline; can be "date", "datetime",
     * or "relative"
     *
     * @type {String}
     */
    format: 'datetime',

    /**
     * String representing the full timezone name, as used by and interpreted by
     * Moment-timezone: http://momentjs.com/timezone/docs/#/using-timezones/
     *
     * @type {?String}
     */
    timezone: null,

    /**
     * Alias to `datetime`; the text to use for the component's tooltip
     *
     * @type {String}
     */
    title: Ember.computed.alias( 'datetime' ),

    /**
     * The bound value of the component's date value
     *
     * @type {Date}
     */
    value: new Date(),

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * The date-time's value formatted as a datetime string
     *
     * @function
     * @observes timezoneString, value
     * @returns {String}
     */
    datetime: Ember.computed( 'timezoneString', 'value', function() {
        return window.moment( this.get( 'value' ) ).format( 'YYYY-MM-DD HH:mm ' ) + this.get( 'timezoneString'
        );
    }),

    /**
     * Formatted string based on value and supplied format
     *
     * @function
     * @observes format, momentValue
     * @returns {String}
     */
    formattedValue: Ember.computed( 'format', 'momentValue', function() {
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
    }),

    /**
     * The component's current value wrapped in moment
     *
     * @function
     * @observes value
     * @returns {Object}
     */
    momentValue: Ember.computed( 'value', function() {
        return window.moment( this.get( 'value' ) );
    }),

    /**
     * Formatted timezone string based on component's timezone value
     *
     * @function
     * @observes timezone, momentValue
     * @returns {String}
     */
    timezoneString: Ember.computed( 'timezone', 'momentValue', function() {
        return this.get( 'momentValue' ).tz( this.get( 'timezone' ) ).format( 'z' );
    })

});
