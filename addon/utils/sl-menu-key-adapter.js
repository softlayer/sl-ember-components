import Ember from 'ember';

/**
 * @module utils
 * @class sl-menu-key-adapter
 * @augments Ember.Object
 * @mixes Ember.Evented
 */
export default Ember.Object.extend( Ember.Evented, {

    /**
     * Trigger the menu's childSelection action
     *
     * @function childSelection
     * @param {String} key
     * @returns {undefined}
     */
    childSelection( key ) {
        if ( typeof key === 'string' ) {
            key = parseInt( key, 10 );
        }

        this.trigger( 'childSelected', key );
    },

    /**
     * Trigger the menu's closeAll action
     *
     * @function closeAll
     * @returns {undefined}
     */
    closeAll() {
        this.trigger( 'closeAll' );
    },

    /**
     * Trigger the menu's cycleRootSelectionNext action
     *
     * @function cycleRootSelectionNext
     * @returns {undefined}
     */
    cycleRootSelectionNext() {
        this.trigger( 'cycleRootSelectionNext' );
    },

    /**
     * Trigger the menu's cycleRootSelectionPrevious action
     *
     * @function cycleRootSelectionPrevious
     * @returns {undefined}
     */
    cycleRootSelectionPrevious() {
        this.trigger( 'cycleRootSelectionPrevious' );
    },

    /**
     * Trigger the menu's drillDown action
     *
     * @function drillDown
     * @param {String} key
     * @returns {undefined}
     */
    drillDown( key ) {
        this.trigger( 'drillDown', key );
    },

    /**
     * Trigger the menu's showAll action
     *
     * @function showAll
     * @returns {undefined}
     */
    showAll() {
        this.trigger( 'showAll' );
    }

});
