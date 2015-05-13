import Ember from 'ember';
import layout from '../templates/components/sl-calendar-year';

/**
 * @module components
 * @class sl-calendar-year
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    classNameBindings: [ 'active', 'new', 'old' ],

    layout,

    tagName: 'span',

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    click() {
        this.sendAction( 'action', this.get( 'year' ) );
    },

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether the year this component represents is the currently active year
     * of the parent calendar component
     *
     * @property {Boolean} active
     * @default false
     */
    active: false,

    /**
     * Whether the year this component represents is in the next decade from the
     * parent calendar's current year
     *
     * @property {Boolean} new
     * @default false
     */
    'new': false,

    /**
     * Whether the year this component represents is in the previous decade from
     * the parent calendar's current year
     *
     * @property {Boolean} old
     * @default false
     */
    old: false,

    /**
     * The year number this component represents
     *
     * @property {Number} year
     * @default null
     */
    year: null

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
