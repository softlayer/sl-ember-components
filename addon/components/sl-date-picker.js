import Ember from 'ember';
import ComponentInputId from '../mixins/sl-component-input-id';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import Namespace from '../mixins/sl-namespace';
import layout from '../templates/components/sl-date-picker';

/**
 * @module
 * @augments ember/Component
 * @augments module:mixins/sl-component-input-id
 * @augments module:mixins/sl-namespace
 * @augments module:mixins/sl-tooltip-enabled
 */
export default Ember.Component.extend( ComponentInputId, TooltipEnabled, Namespace, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    classNames: [
        'form-group',
        'sl-date-picker'
    ],

    /** @type {Object} */
    layout,

    // -------------------------------------------------------------------------
    // Actions

    /** @type {Object} */
    actions: {

        inputBlurred() {
            this.trigger( 'focusOut' );

            //this.updateValue();
        },

        inputFocused() {
            this.trigger( 'focusIn' );
        },

        inputKeyUp( value, event ) {
            console.log( 'input key up' );

            // not a tab or modifier key
            if ( event.keyCode !== 9 && ( event.keyCode > 18 || event.keyCode < 16 ) ) {
                this.checkInput();
            }
        },

        selectDate( date ) {
            this.selectDate( date );
        }

    },

    // -------------------------------------------------------------------------
    // Events

    focusIn( event ) {
        this._super( ...arguments );

        this.set( 'hasFocus', true );
        //this.set( 'isOpen', true );

        const losingFocus = this.get( 'losingFocus' );
        Ember.run.cancel( losingFocus );

        if ( event === undefined ) {
            return;
        }

        if ( event.target === this.$().get( 0 ) ) {
            this.$( '> input' ).get( 0 ).focus();
        }
    },

    focusOut( event ) {
        this._super( ...arguments );


        const runNext = Ember.run.next( this, () => {
            /*if ( !this.get( 'hasFocus' ) ) {
                this.set( 'isOpen', false );
            }*/

            this.set( 'hasFocus', false );
        });

        this.set( 'losingFocus', runNext );
    },

    /*keyPress() {
        console.log( 'date picker: keypress' );
    },*/

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether or not to close the datepicker immediately when a date
     * is selected
     *
     * @type {Boolean}
     */
    //autoclose: true,

    /**
     * Whether or not to show week numbers to the left of week rows
     *
     * @type {Boolean}
     */
    //calendarWeeks: false,

    /**
     * When true, displays a "Clear" button at the bottom of the datepicker
     *
     * If "autoclose" is also set to true, this button will also close
     * the datepicker.
     *
     * @type {Boolean}
     */
    //clearBtn: false,

    /**
     * Days of the week that should be disabled
     *
     * Values are 0 (Sunday) to 6 (Saturday). Multiple values should be
     * comma-separated.
     *
     * @type {Array|String}
     */
    daysOfWeekDisabled: [],

    /**
     * When true, the input field is disabled and the datepicker will never display
     *
     * @type {Boolean}
     */
    disabled: false,

    /**
     * The latest date that may be selected; all later dates will be disabled
     *
     * @type {?Date|String}
     */
    //endDate: null,

    /**
     * Whether or not to force parsing of the input value when the picker is
     * closed
     *
     * When an invalid date is left in the input field by the user, the picker
     * will forcibly parse that value, and set the input's value to the new,
     * valid date, conforming to the given _format_.
     *
     * @type {Boolean}
     */
    //forceParse: true,

    /**
     * The date format
     *
     * Combination of the following:
     * - d, dd: Numeric date, no leading zero and leading zero, respectively
     * - D, DD: Abbreviated and full weekday names, respectively
     * - m, mm: Numeric month, no leading zero and leading zero, respectively
     * - M, MM: Abbreviated and full month names, respectively
     * - yy, yyyy: 2- and 4-digit years, respectively
     *
     * @type {?String}
     */
    format: null,

    formatString: Ember.computed(
        function() {
           return this.get( 'format' ) || window.moment().localeData().longDateFormat( 'L' );
        }
    ),

    /**
     * The help text below the datepicker
     *
     * @type {String}
     */
    helpText: null,

    /**
     * A list of inputs to be used in a range picker
     *
     * The inputs will be attached to the selected element. Allows for
     * explicitly creating a range picker on a non-standard element.
     *
     * @type {?Array}
     */
    //inputs: null,

    /**
     * Whether or not to allow date navigation by arrow keys
     *
     * @type {Boolean}
     */
    //keyboardNavigation: true,

    /**
     * The label text above the datepicker's input field
     *
     * @type {String}
     */
    label: null,

    /**
     * The IETF code of the language to use for month and day names
     *
     * @type {String}
     */
    //language: 'en',

    /**
     * Set a limit for the view mode; accepts "days", "months", or "years"
     *
     * @type {String}
     */
    //minViewMode: 'days',

    /**
     * Enable multidate picking
     *
     * Each date in month view acts as a toggle button, keeping track of which
     * dates the user has selected in order. If a number is given, the picker
     * will limit how many dates can be selected to that number, dropping the
     * oldest dates from the list when the number is exceeded. true equates to
     * no limit. The input’s value (if present) is set to a string generated by
     * joining the dates, formatted, with multidateSeparator.
     *
     * @type {Boolean|Number}
     */
    //multidate: false,

    /**
     * A space-separated string for the popup's anchor position
     *
     * Consists of one or two of "left" or "right", "top" or "bottom",
     * and "auto" (may be omitted).
     *
     * @type {String}
     */
    //orientation: 'auto',

    /**
     * The placeholder text that the datepicker should show
     *
     * @type {?String}
     */
    placeholder: null,

    /**
     * The earliest date that may be selected; all earlier dates will
     * be disabled
     *
     * @type {?Date|String}
     */
    //startDate: null,

    /**
     * The view that the datepicker should show when it is opened; accepts
     * "month", "year", or "decade"
     *
     * @type {String}
     */
    startView: 'month',

    /**
     * When true or "linked", displays a "Today" button at the bottom of the
     * datepicker to select the current date
     *
     * If true, the "Today" button will only move the current date into view.
     * If "linked", the current date will also be selected.
     *
     * @type {Boolean|String}
     */
    todayBtn: false,

    /**
     * Whether to highlight the current date or not
     *
     * @type {Boolean}
     */
    todayHighlight: false,

    /**
     * The date either selected by the datepicker or entered by the user
     *
     * @type {?String}
     */
    //value: null,

    /**
     * Day of the week to start on; 0 (Sunday) to 6 (Saturday)
     *
     * @type {Number}
     */
    weekStart: 0,

    locale: 'en',

    selectedDate: null,

    hasFocus: false,

    losingFocus: false,

    selectConstraint: {
        start: null,
        end: null
    },

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    checkInput() {
        let value = this.get( 'value' );
        //const format = this.get( 'format' );
        const parseFormats = this.get( 'parseFormats' );
        const selectConstraint = this.get( 'selectConstraint' );

        if ( !value ) {
            return;
        }

        //console.log( 'from value observer: ', this.get( 'value' ) );

        value = value.replace(/\W+/g, "-");

        const date = window.moment( value, parseFormats, this.get( 'locale' ), true );
        //console.log( 'date entered: ', date.format( format ) );
        //return;
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

    parseFormats: Ember.computed(
        'locale',
        function() {
            const formats = Ember.A();
            const localeData = window.moment().localeData();

            formats.push(
                localeData.longDateFormat('L').replace(/\W+/g, "-"),
                localeData.longDateFormat('LL').replace(/\W+/g, "-"),
                localeData.longDateFormat('L').replace('DD', 'D').replace('MM', 'M').replace(/\W+/g, "-")
            );

            return formats;
        }
    ),

    viewingDate: Ember.computed(
        'selectedDate',
        function() {
            return this.get( 'selectedDate' );
        }
    ),

    selectDate( date ) {
        this.set( 'selectedDate', date );
    },

    value: Ember.computed(
        'selectedDate',
        'formatString',
        function() {
            const selectedDate = this.get( 'selectedDate' );
            const format = this.get( 'formatString' );

            if ( selectedDate === null ) {
                return;
            }

            return selectedDate.format( format );
        }
    )

});
