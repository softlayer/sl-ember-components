import Ember from 'ember';

/**
 * @module components
 * @class sl-calendar-day
 */
export default Ember.Component.extend({

    /**
     * Class name bindings for the component
     * @property {Array} classNameBindings
     */
    classNameBindings: [ 'active', 'new', 'old' ],

    /**
     * Class names for the component's root element
     * @property {Array} classNames
     */
    classNames: [ 'day' ],

    /**
     * Function triggered by clicking a calendar day
     * @method click
     */
    click: function () {
        this.sendAction( 'action', this.get( 'content' ));
    },

    /**
     * The HTML tag name of the component's root element
     * @property {String} tagName
     * @default "td"
     */
    tagName: 'td'
});