/* global moment */

import Ember from 'ember';

/**
 * @module components
 * @class  sl-calendar-month
 */
export default Ember.Component.extend({

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
    click: function() {
        this.sendAction( 'action', this.get( 'month' ) );
    },

    // -------------------------------------------------------------------------
    // Properties

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
    shortName: function() {
        return moment([ 1, this.get( 'month' ) - 1 ]).format( 'MMM' );
    }.property()

    // -------------------------------------------------------------------------
    // Private Methods

});
