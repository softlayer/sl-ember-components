import Ember from 'ember';

/**
 * @module
 * @augments ember/View
 */
export default Ember.View.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

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

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Actions

    /**
     * Method called on mouseenter event
     *
     * @function
     * @returns {undefined}
     */
    mouseEnter() {
        this.send( 'showAll' );
    },

    // -------------------------------------------------------------------------
    // Properties

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Target pointer to the parent view
     *
     * @function
     * @observes parentView
     * @return {ember/View}
     */
    target: Ember.computed( 'parentView', function() {
        return this.get( 'parentView' );
    })

    // -------------------------------------------------------------------------
    // Methods

});
