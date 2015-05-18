import Ember from 'ember';
import layout from '../templates/components/sl-menu';

/**
 * @module
 * @augments ember/View
 */
export default Ember.View.extend({

    /**
     * HTML tag name of the root element
     *
     * @type {String}
     */
    tagName: 'li',

    /**
     * Class names for the AllView view
     *
     * @type {String[]}
     */
    classNames: [ 'all' ],

    /**
     * Method called on mouseenter event
     *
     * @function
     * @returns {undefined}
     */
    mouseEnter() {
        this.send( 'showAll' );
    },

    /**
     * Target pointer to the parent view
     *
     * @function
     * @observes parentView
     * @return {Ember.View}
     */
    target: Ember.computed( 'parentView', function() {
        return this.get( 'parentView' );
    })

});
