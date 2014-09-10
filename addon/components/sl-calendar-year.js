import Ember from 'ember';

/**
 * @module components
 * @class sl-calendar-year
 */
export default Ember.Component.extend({

    /**
     * Class name bindings for the component's root element
     * @property {Array} classNameBindings
     */
    classNameBindings: [ 'active', 'new', 'old' ],

    /**
     * Function triggered by clicking the year; sends back primary action with
     * this year value
     * @method click
     */
    click: function () {
        this.sendAction( 'action', this.get( 'year' ));
    },

    /**
     * HTML tag name for the component's root element
     * @property {String} tagName
     * @default "span"
     */
    tagName: 'span'
});