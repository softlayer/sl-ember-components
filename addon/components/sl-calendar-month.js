/* global moment */

import Ember from 'ember';
import layout from '../templates/components/sl-calendar-month';

/**
 * @module components
 * @class sl-calendar-month
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    classNameBindings: [ 'active' ],

    classNames: [ 'month' ],

    layout,

    tagName: 'span',

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    click() {
        this.sendAction( 'action', this.get( 'month' ) );
    },

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether the month that this component represents is selected by the
     * overall calendar component
     *
     * @property {Boolean} active
     * @default false
     */
    active: false,

    /**
     * The number of the month (1-12)
     *
     * @property {Number} month
     * @default null
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
     * @returns {String}
     */
    shortName: Ember.computed( 'month', function() {
        return moment([ 1, this.get( 'month' ) - 1 ]).format( 'MMM' );
    })

});
