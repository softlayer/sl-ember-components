import Ember from 'ember';

/**
 * @module components
 * @class sl-calendar-month
 */
export default Ember.Component.extend({

    /**
     * Class name bindings for the component's root element
     * @property {Array} classNameBindings
     */
    classNameBindings: [ 'active' ],

    /**
     * Class names for the component's root element
     * @property {Array} classNames
     */
    classNames: [ 'month' ],

    /**
     * Function triggered by clicking a calendar month; sends back the primary
     * bound action with this month number
     * @method click
     */
    click: function () {
        this.sendAction( 'action', this.get( 'month' ));
    },

    /**
     * The short string name of the represented month
     * @property {String} shortName
     */
    shortName: function () {
        switch ( this.get( 'month' )) {
            case 1: return 'Jan';
            case 2: return 'Feb';
            case 3: return 'Mar';
            case 4: return 'Apr';
            case 5: return 'May';
            case 6: return 'Jun';
            case 7: return 'Jul';
            case 8: return 'Aug';
            case 9: return 'Sep';
            case 10: return 'Oct';
            case 11: return 'Nov';
            case 12: return 'Dec';
        }
    }.property(),

    /**
     * HTML tag name of the component's root element
     * @property {String} tagname
     * @default "span"
     */
    tagName: 'span'
});