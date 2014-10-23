import Ember from 'ember';

/** @module sl-components/components/sl-calendar-day */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * The HTML tag name of the component's root element
     *
     * @property {Ember.String} tagName
     * @default  "td"
     */
    tagName: 'td',

    /**
     * Class names for the component's root element
     *
     * @property {Ember.Array} classNames
     */
    classNames: [ 'day' ],

    /**
     * Class name bindings for the component
     *
     * @property {Ember.Array} classNameBindings
     */
    classNameBindings: [ 'active', 'new', 'old' ],

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Function triggered by clicking a calendar day
     *
     * @method  click
     * @returns {void}
     */
    click: function() {
        this.sendAction( 'action', this.get( 'content' ) );
    }

    // -------------------------------------------------------------------------
    // Private Methods

});
