import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import layout from '../templates/components/sl-date-time';

/**
 * Valid date format strings
 *
 * @memberof module:components/sl-date-time
 * @enum {String}
 */
const Format = Object.freeze({
    DATE: 'date',
    DATETIME: 'datetime',
    RELATIVE: 'relative'
});
export { Format };

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
    attributeBindings: [
        'datetime'
    ],

    /** @type {String[]} */
    classNames: [
        'sl-datetime'
    ],

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
    format: Format.DATETIME,

    /**
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
     * @type {Array|Date|moment|Number|Object|String|undefined}
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
            const timezoneString = this.get( 'timezoneString' );

            if ( timezoneString ) {
                return window.moment( this.get( 'value' ) )
                    .format( 'YYYY-MM-DD HH:mm ' ) +
                    timezoneString;
            }

            return null;
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
            let formattedString = null;

            if ( momentValue ) {
                switch ( this.get( 'format' ) ) {
                    case Format.DATE:
                        formattedString = momentValue.format( 'YYYY-MM-DD' );
                        break;

                    case Format.RELATIVE:
                        formattedString = momentValue.fromNow();
                        break;

                    default:
                    case Format.DATETIME:
                        if ( this.get( 'timezoneString' ) ) {
                            formattedString =
                                momentValue.format( 'dddd, MMMM Do YYYY, h:mm A' ) +
                                ' ' +
                                this.get( 'timezoneString', 'en' );
                        }
                        break;
                }
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
            const locale = this.get( 'locale' );

            if ( locale ) {
                return window.moment( this.get( 'value' ) )
                    .locale( locale );
            }

            return null;
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
            const momentValue = this.get( 'momentValue' ),
                timezone = this.get( 'timezone' );

            if ( momentValue && timezone ) {
                return momentValue
                    .tz( timezone ).format( 'z' );
            }

            return null;
        }
    )

});
