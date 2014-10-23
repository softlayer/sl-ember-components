import Ember from 'ember';

/** @module sl-components/components/sl-calendar-year */
export default Ember.Component.extend({

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
     * Function triggered by clicking the year; sends back primary action with
     * this year value
     *
     * @function click
     * @returns  {void}
     */
    click: function() {
        this.sendAction( 'action', this.get( 'year' ) );
    }

    // -------------------------------------------------------------------------
    // Properties

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    // -------------------------------------------------------------------------
    // Private Methods
});
