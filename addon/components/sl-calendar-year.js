import Ember from 'ember';
import layout from '../templates/components/sl-calendar-year';

/**
 * @module components
 * @class  sl-calendar-year
 */
export default Ember.Component.extend({ layout,

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * HTML tag name for the component's root element
     *
     * @property {Ember.String} tagName
     * @default  "span"
     */
    tagName: 'span',

    /**
     * Class name bindings for the component's root element
     *
     * @property {Ember.Array} classNameBindings
     */
    classNameBindings: [ 'active', 'new', 'old' ],

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    /**
     * Send back primary action with this year value
     *
     * @function click
     * @returns  {void}
     */
    click() {
        this.sendAction( 'action', this.get( 'year' ) );
    },

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether the year this component represents is the currently active year
     * of the parent calendar component
     *
     * @property {boolean} active
     * @default  false
     */
    active: false,

    /**
     * Whether the year this component represents is in the next decade from the
     * parent calendar's current year
     *
     * @property {boolean} new
     * @default  false
     */
    'new': false,

    /**
     * Whether the year this component represents is in the previous decade from
     * the parent calendar's current year
     *
     * @property {boolean} old
     * @default  false
     */
    old: false,

    /**
     * The year number this component represents
     *
     * @property {number} year
     * @default  null
     */
    year: null

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
