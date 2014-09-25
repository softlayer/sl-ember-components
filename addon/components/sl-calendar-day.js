import Ember from 'ember';

/**
 * @module components
 * @class sl-calendar-day
 */
export default Ember.Component.extend({

    /**
     * Class name bindings for the component
     *
     * @property {array} classNameBindings
     */
    classNameBindings: [ 'active', 'new', 'old' ],

    /**
     * Class names for the component's root element
     *
     * @property {array} classNames
     */
    classNames: [ 'day' ],

    /**
     * Function triggered by clicking a calendar day
     *
     * @method click
     */
    click: function() {
        this.sendAction( 'action', this.get( 'content' ));
    },

    /**
     * The HTML tag name of the component's root element
     *
     * @property {string} tagName
     * @default "td"
     */
    tagName: 'td'
});
