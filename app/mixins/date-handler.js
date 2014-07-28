import Ember from 'ember';

export default Ember.Mixin.create({

    /**
     * Whether or not to close the datepicker immediately when a date is selected
     * @property {boolean} autoclose
     * @default false
     */
    autoclose: false,

    /**
     * A function that takes a date as a parameter and returns one of the following:
     * - undefined to have no effect
     * - A boolean, indicationg whether or not this date is selectable
     * - A string, representing additional CSS classes to apply to the date's cell
     * - An object with the following properties:
     *   - `enabled` : same as the boolean value above
     *   - `classes` : same as the string value above
     *   - `tooltip` : a tooltip to apply to this date, via the `title` attribute
     * @property {mixed} beforeShowDay
     * @default jQuery.noop
     */
    beforeShowDay: function () {
        return this.$.noop;
    }.property(),

    /**
     * Whether or not to show week numbers to the left of week rows
     * @property {boolean} calendarWeeks
     * @default false
     */
    calendarWeeks: false,

    /**
     * If true, displays a "Clear" button at the bottom of the datepicker to
     * clear the input value. If "autoclose" is also set to true, this button
     * will also close the datepicker.
     * @property {boolean} clearBtn
     * @default false
     */
    clearBtn: false,

    /**
     * Days of the week that should be disabled. Values are 0 (Sunday) to
     * 6 (Saturday). Multiple values should be comma-separated.
     * @property {array|string} daysOfWeekDisabled
     * @default []
     */
    daysOfWeekDisabled: [],

    /**
     * The latest date that may be selected; all later dates will be disabled.
     * @property {date} endDate
     * @default null
     */
    endDate: null,

    /**
     * Whether or not to force parsing of the input value when the picker is
     * closed. That is, when an invalid date is left in the input field by the
     * user, the picker will forcibly parse that value, and set the input's
     * value to the new, valid date, conforming to the given _format_.
     * @property {boolean} forceParse
     * @default true
     */
    forceParse: true,

    /**
     * The date format; combination of d, dd, D, DD, m, mm, M, MM, yy, yyyy
     * - d, dd: Numeric date, no leading zero and leading zero, respectively
     * - D, DD: Abbreviated and full weekday names, respectively
     * - m, mm: Numeric month, no leading zero and leading zero, respectively
     * - M, MM: Abbreviated and full month names, respectively
     * - yy, yyyy: 2- and 4-digit years, respectively
     * @property {string} format
     * @default "mm/dd/yyyy"
     */
    format: 'mm/dd/yyyy',

    /**
     * A list of inputs to be used in a range picker, which will be attached to
     * the selected element. Allows for explicitly creating a range picker on a
     * non-standard element.
     * @property {array} inputs
     * @default null
     */
    inputs: null,

    /**
     * Whether or not to allow date navigation by arrow keys
     * @property {boolean} keyboardNavigation
     * @default true
     */
    keyboardNavigation: true,

    /**
     * The IETF code of the language to use for month and day names
     * @property {string} language
     * @default "en"
     */
    language: 'en',

    /**
     * Set a limit for the view mode. Accepts "days", "months", or "years".
     * @property {string} minViewMode
     * @default "days"
     */
    minViewMode: 'days',

    /**
     * Enable multidate picking
     * @property {boolean} multidate
     * @default false
     */
    multidate: false,

    /**
     * The string that will appear between dates when multidate is true
     * @property {string} multidateSeparator
     * @default ","
     */
    multidateSeparator: ',',

    /**
     * Datepicker plugin options
     * @property {object} options
     */
    options: function () {
        return {
            autoclose:          this.get( 'autoclose' ),
            beforeShowDay:      this.get( 'beforeShowDay' ),
            calendarWeeks:      this.get( 'calendarWeeks' ),
            clearBtn:           this.get( 'clearBtn' ),
            daysOfWeekDisabled: this.get( 'daysOfWeekDisabled' ),
            endDate:            this.get( 'endDate' ),
            forceParse:         this.get( 'forceParse' ),
            format:             this.get( 'format' ),
            inputs:             this.get( 'inputs' ),
            keyboardNavigation: this.get( 'keyboardNavigation' ),
            language:           this.get( 'language' ),
            multidate:          this.get( 'multidate' ),
            multidateSeparator: this.get( 'multidateSeparator' ),
            orientation:        this.get( 'orientation' ),
            startDate:          this.get( 'startDate' ),
            startView:          this.get( 'startView' ),
            todayBtn:           this.get( 'todayBtn' ),
            todayHighlight:     this.get( 'todayHighlight' ),
            weekStart:          this.get( 'weekStart' )
        };
    }.property(),

    /**
     * A space-separated string consisting of one or two of "left" or "right",
     * "top" or "bottom", and "auto" (may be omitted). Refers to the location
     * of the picker popup's "anchor".
     * @property {string} orientation
     * @default "auto"
     */
    orientation: 'auto',

    /**
     * The earliest date that may be selected; all earlier dates will be disabled
     * @property {date} startDate
     * @default null
     */
    startDate: null,

    /**
     * The view that the datepicker should show when it is opened. Accepts
     * "month", "year", or "decade".
     * @property {string} startView
     * @default "month"
     */
    startView: 'month',

    /**
     * If true or "linked", displays a "Today" button at the bottom of the
     * datepicker to select the current date. If true, the "Today" button will
     * only move the current date into view; if "linked", the current date will
     * also be selected.
     * @property {boolean|string} todayBtn
     * @default false
     */
    todayBtn: false,

    /**
     * Whether to highlight the current date or not
     * @property {boolean} todayHighlight
     * @default false
     */
    todayHighlight: false,

    /**
     * Day of the week to start on. 0 (Sunday) to 6 (Saturday)
     * @property {number} weekStart
     * @default 0
     */
    weekStart: 0
});