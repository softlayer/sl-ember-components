import Ember from 'ember';
import ClassPrefix from '../mixins/class-prefix';
import ComponentInputId from '../mixins/sl-component-input-id';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import Namespace from '../mixins/sl-namespace';
import layout from '../templates/components/sl-date-picker';
import {
    View as View
} from './sl-calendar';

/**
 * @module
 * @augments ember/Component
 * @augments module:mixins/sl-component-input-id
 * @augments module:mixins/sl-namespace
 * @augments module:mixins/sl-tooltip-enabled
 */
export default Ember.Component.extend( ClassPrefix, ComponentInputId, Namespace, TooltipEnabled, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    classNames: [
        'form-group'
    ],

    /** @type {Object} */
    layout,

    // -------------------------------------------------------------------------
    // Actions

    /** @type {Object} */
    actions: {

        /**
         * Watch focus-out from input helper
         *
         * @function actions:inputBlurred
         * @returns {undefined}
         */
        inputBlurred() {
            this.trigger( 'focusOut' );
        },

        /**
         * Watch focus-in from input helper
         *
         * @function actions:inputFocused
         * @returns {undefined}
         */
        inputFocused() {
            this.trigger( 'focusIn' );
        },

        /**
         * Watch for keyUp events from input helper
         * Triggers parsing of input value if a non-command key was pressed
         *
         * @function actions:inputKeyUp
         * @param {String} value - Current value property of the input
         * @param {Event} event - keyUp event object
         * @returns {undefined}
         */
        inputKeyUp( value, event ) {
            // not a tab or modifier key
            if ( event.keyCode !== 9 && ( event.keyCode > 18 || event.keyCode < 16 ) ) {
                this.checkInput();
            }
        },

        /**
         * sl-calendar has triggered a date selection
         * Triggers bound action "action"
         *
         * @function actions:selectDate
         * @param {moment} date - date selected by sl-calendar
         * @returns {undefined}
         */
        selectDate( date ) {
            this.selectDate( date );

            if ( this.get( 'autoClose' ) ) {
                this.set( 'hasFocus', false );
            }

            this.sendAction( 'action', date );
        }

    },

    // -------------------------------------------------------------------------
    // Events

    /**
     * Track focus on the component for opening sl-calendar
     *
     * @returns {undefined}
     */
    focusIn( event ) {
        this._super( ...arguments );

        this.set( 'hasFocus', true );

        const losingFocus = this.get( 'losingFocus' );
        Ember.run.cancel( losingFocus );

        if ( event === undefined ) {
            return;
        }

        if ( event.target === this.$().get( 0 ) ) {
            this.$( '> input' ).get( 0 ).focus();
        }
    },

    /**
     * Track focus on the component for closing sl-calendar
     *
     * @returns {undefined}
     */
    focusOut() {
        this._super( ...arguments );

        const runNext = Ember.run.next( this, () => {
            this.set( 'hasFocus', false );
        });

        this.set( 'losingFocus', runNext );
    },

    // -------------------------------------------------------------------------
    // Properties


    /**
     * Whether to close the datepicker immediately when a date is selected
     *
     * @type {Boolean}
     */
    autoClose: true,

    /**
     * Component class that will be prefixed with base component class
     *
     * @type {String}
     */
    componentClass: 'date-picker',

    /**
     * When true, the input field is disabled and the datepicker will never display
     *
     * @type {Boolean}
     */
    disabled: false,

    /**
     * The date format for input field
     * Only effects how selected day is represented in the input value
     * This is a moment-based format string
     *
     * @type {?String}
     */
    format: null,

    /**
     * Whether the component has focus and should display the sl-calendar
     *
     * @type {Boolean}
     */
    hasFocus: false,

    /**
     * The help text below the datepicker
     *
     * @type {?String}
     */
    helpText: null,

    /**
     * The label text above the datepicker's input field
     *
     * @type {?String}
     */
    label: null,

    /**
     * The locale string to use for moment date values
     *
     * @type {String}
     */
    locale: 'en',

    /**
     * An Ember.run object for cancelling closing of sl-calendar
     *
     * @private
     * @type {Boolean|Object}
     */
    losingFocus: false,

    /**
     * The placeholder text that the datepicker input should show
     *
     * @type {?String}
     */
    placeholder: null,

    /**
     * A constraint object to pass throught to sl-calendar
     *
     * @type {Object}
     */
    selectConstraint: {
        start: null,
        end: null
    },

    /**
     * The currently selected date
     *
     * @type {moment}
     */
    selectedDate: null,

    /**
     * The calendar view when open
     *
     * @type {String}
     */
    viewMode: View.DAYS,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Check if the client entered string can be parsed to a moment
     *
     * @returns {undefined}
     */
    checkInput() {
        let value = this.get( 'value' );
        const parseFormats = this.get( 'parseFormats' );
        const selectConstraint = this.get( 'selectConstraint' );

        if ( !value ) {
            return;
        }

        value = value.replace( /\W+/g, '-' );

        const date = window.moment( value, parseFormats, this.get( 'locale' ), true );

        if ( selectConstraint.start ) {
            if ( date.isBefore( selectConstraint.start ) ) {
                return;
            }
        }

        if ( selectConstraint.end ) {
            if ( date.isAfter( selectConstraint.end ) ) {
                return;
            }
        }

        if ( !date.isValid() ) {
            return;
        }

        this.set( 'selectedDate', date );
    },


    /**
     * The string to parse client input against
     * Defaults to long format from moment
     *
     * @returns {String}
     */
    formatString: Ember.computed(
        'format',
        function() {
            return this.get( 'format' ) || window.moment().localeData().longDateFormat( 'L' );
        }
    ),

    /**
     * Create an array of format strings to compare typed input against.
     *
     * @returns {String[]}
     */
    parseFormats: Ember.computed(
        'locale',
        function() {
            const formats = Ember.A();
            const localeData = window.moment().localeData();

            formats.push(
                localeData.longDateFormat( 'L' ).replace( /\W+/g, '-' ),
                localeData.longDateFormat( 'LL' ).replace( /\W+/g, '-' ),
                localeData.longDateFormat( 'L' ).replace( 'DD', 'D' ).replace( 'MM', 'M' ).replace( /\W+/g, '-' )
            );

            return formats;
        }
    ),

    /**
     * Select a date.
     *
     * @param {moment} date - date to select
     * @returns {undefined}
     */
    selectDate( date ) {
        this.set( 'selectedDate', date );
    },

    /**
     * Generate value for input field.
     *
     * @returns {String}
     */
    value: Ember.computed(
        'selectedDate',
        'formatString',
        function() {
            const selectedDate = this.get( 'selectedDate' );
            const format = this.get( 'formatString' );

            if ( null === selectedDate ) {
                return;
            }

            return selectedDate.format( format );
        }
    ),

    /**
     * Sets the viewingDate to the selectedDate.
     *
     * @returns {moment}
     */
    viewingDate: Ember.computed(
        'selectedDate',
        function() {
            return this.get( 'selectedDate' );
        }
    )
});
