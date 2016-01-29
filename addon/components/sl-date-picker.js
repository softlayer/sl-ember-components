import Ember from 'ember';
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

            // this.updateValue();
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

            if ( this.get( 'autoClose' ) ) {
                this.set( 'hasFocus', false );
            }

            this.sendAction( 'action', date );
        }

    },

    // -------------------------------------------------------------------------
    // Events

    focusIn( event ) {
        this._super( ...arguments );

        this.set( 'hasFocus', true );
        // this.set( 'isOpen', true );

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
    autoClose: true,

    /**
     * When true, the input field is disabled and the datepicker will never display
     *
     * @type {Boolean}
     */
    disabled: false,

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
    // forceParse: true,

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

    locale: 'en',

    losingFocus: false,

    /**
     * The placeholder text that the datepicker input should show
     *
     * @type {?String}
     */
    placeholder: null,

    selectConstraint: {
        start: null,
        end: null
    },

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

    checkInput() {
        let value = this.get( 'value' );
        // const format = this.get( 'format' );
        const parseFormats = this.get( 'parseFormats' );
        const selectConstraint = this.get( 'selectConstraint' );

        if ( !value ) {
            return;
        }

        // console.log( 'from value observer: ', this.get( 'value' ) );

        value = value.replace( /\W+/g, "-" );

        const date = window.moment( value, parseFormats, this.get( 'locale' ), true );
        // console.log( 'date entered: ', date.format( format ) );
        // return;
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

    formatString: Ember.computed(
        function() {
            return this.get( 'format' ) || window.moment().localeData().longDateFormat( 'L' );
        }
    ),

    parseFormats: Ember.computed(
        'locale',
        function() {
            const formats = Ember.A();
            const localeData = window.moment().localeData();

            formats.push(
                localeData.longDateFormat( 'L' ).replace( /\W+/g, "-" ),
                localeData.longDateFormat( 'LL' ).replace( /\W+/g, "-" ),
                localeData.longDateFormat( 'L' ).replace( 'DD', 'D' ).replace( 'MM', 'M' ).replace( /\W+/g, "-" )
            );

            return formats;
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

            if ( null === selectedDate ) {
                return;
            }

            return selectedDate.format( format );
        }
    ),

    viewingDate: Ember.computed(
        'selectedDate',
        function() {
            return this.get( 'selectedDate' );
        }
    )
});
