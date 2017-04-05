import Ember from 'ember';
import ClassPrefix from '../mixins/class-prefix';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import { throwDateTimeError } from '../utils/error';
import layout from '../templates/components/sl-date-time';

/**
 * Valid date format strings
 *
 * @memberof module:addon/components/sl-date-time
 * @enum {String}
 * @property {String} DATE 'date'
 * @property {String} DATETIME 'datetime'
 * @property {String} RELATIVE 'relative'
 */
export const Format = Object.freeze({
    DATE: 'date',
    DATETIME: 'datetime',
    RELATIVE: 'relative'
});

/**
 * @module
 * @augments ember/Component
 * @augments module:mixins/sl-tooltip-enabled
 */
export default Ember.Component.extend( ClassPrefix, TooltipEnabled, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    attributeBindings: [
        'datetime'
    ],

    /** @type {String[]} */
    classNameBindings: [
        'componentClassName'
    ],

    /** @type {Object} */
    layout,

    /** @type {String} */
    tagName: 'time',

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    /**
     * Check passed parameters on initialization
     *
     * @throws {sl-ember-components/utils/error/dateTime} timezone property must be a string
     * @throws {sl-ember-components/utils/error/dateTime} timezone property provided is not valid
     * @returns {undefined}
     */
    init() {
        this._super( ...arguments );

        if ( 'string' !== Ember.typeOf( this.get( 'timezone' ) ) ) {
            throwDateTimeError( 'Timezone property must be a string' );
        }

        const validTimeZonesArray = window.moment.tz.names();

        if ( !validTimeZonesArray.includes( this.get( 'timezone' ) ) ) {
            throwDateTimeError( 'Timezone property provided is not valid' );
        }
    },

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Component class that will be prefixed with base component class
     *
     * @type {String}
     */
    componentClass: 'date-time',

    /**
     * String name for the format to render inline; can be "date", "datetime",
     * or "relative"
     *
     * @type {String}
     */
    format: Format.DATETIME,

    /**
     * The locale string to use for moment date formats.
     *
     * @type {String}
     */
    locale: 'en',

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
     * @type {module:addon/components/sl-date-time~datetime}
     */
    title: Ember.computed.alias( 'datetime' ),

    /**
     * The bound value of the component's date value
     *
     * @default new Date()
     * @type {Array|Date|moment|Number|Object|String}
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
     * @returns {String}
     */
    datetime: Ember.computed(
        'timezoneString',
        'value',
        function() {
            return window.moment( this.get( 'value' ) )
                .format( 'YYYY-MM-DD HH:mm ' ) +
                this.get( 'timezoneString' );
        }
    ),

    /**
     * Formatted string based on value and supplied format
     *
     * @function
     * @returns {String}
     */
    formattedValue: Ember.computed(
        'format',
        'momentValue',
        function() {
            const momentValue = this.get( 'momentValue' );
            let formattedString = '';

            switch ( this.get( 'format' ) ) {
                case Format.DATE:
                    formattedString = momentValue.format( 'YYYY-MM-DD' );
                    break;

                case Format.RELATIVE:
                    formattedString = momentValue.fromNow();
                    break;

                default:
                case Format.DATETIME:
                    formattedString =
                        momentValue.format( 'dddd, MMMM Do YYYY, h:mm A' ) +
                        ' ' +
                        this.get( 'timezoneString', 'en' );
            }

            return formattedString;
        }
    ),

    /**
     * The component's current value wrapped in moment
     *
     * @function
     * @returns {Object}
     */
    momentValue: Ember.computed(
        'value',
        function() {
            return window.moment( this.get( 'value' ) )
                .locale( this.get( 'locale' ) );
        }
    ),

    /**
     * Formatted timezone string based on component's timezone value
     *
     * @function
     * @returns {String}
     */
    timezoneString: Ember.computed(
        'timezone',
        'momentValue',
        function() {
            return this.get( 'momentValue' )
                .tz( this.get( 'timezone' ) ).format( 'z' );
        }
    )

});
