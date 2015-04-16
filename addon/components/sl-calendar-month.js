/* global moment */

import Ember from 'ember';
import layout from '../templates/components/sl-calendar-month';

/**
 * @module components
 * @class  sl-calendar-month
 */
export default Ember.Component.extend({ layout,

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * HTML tag name of the component's root element
     *
     * @property {Ember.String} tagName
     * @default  "span"
     */
    tagName: 'span',

    /**
     * Class names for the component's root element
     *
     * @property {Ember.Array} classNames
     */
    classNames: [ 'month' ],

    /**
     * Class name bindings for the component's root element
     *
     * @property {Ember.Array} classNameBindings
     */
    classNameBindings: [ 'active' ],

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    /**
     * Send back the primary bound action with this month number
     *
     * @function click
     * @returns  {void}
     */
    click() {
        this.sendAction( 'action', this.get( 'month' ) );
    },

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether the month that this component represents is selected by the
     * overall calendar component
     *
     * @property {boolean} active
     * @default  false
     */
    active: false,

    /**
     * The number of the month (1-12)
     *
     * @property {number} month
     * @default  null
     */
    month: null,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * The short string name of the represented month
     *
     * @function shortName
     * @returns  {Ember.String}
     */
    shortName: Ember.computed( 'month', function() {
        return moment([ 1, this.get( 'month' ) - 1 ]).format( 'MMM' );
    })

});
