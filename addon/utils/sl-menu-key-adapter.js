import Ember from 'ember';

/**
 * @module
 * @augments Ember/Object
 * @mixes Ember/Evented
 */
export default Ember.Object.extend( Ember.Evented, {

    /**
     * Trigger the menu's childSelection action
     *
     * @function
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
     * @function
     * @returns {undefined}
     */
    closeAll() {
        this.trigger( 'closeAll' );
    },

    /**
     * Trigger the menu's cycleRootSelectionNext action
     *
     * @function
     * @returns {undefined}
     */
    cycleRootSelectionNext() {
        this.trigger( 'cycleRootSelectionNext' );
    },

    /**
     * Trigger the menu's cycleRootSelectionPrevious action
     *
     * @function
     * @returns {undefined}
     */
    cycleRootSelectionPrevious() {
        this.trigger( 'cycleRootSelectionPrevious' );
    },

    /**
     * Trigger the menu's drillDown action
     *
     * @function
     * @param {String} key
     * @returns {undefined}
     */
    drillDown( key ) {
        this.trigger( 'drillDown', key );
    },

    /**
     * Trigger the menu's showAll action
     *
     * @function
     * @returns {undefined}
     */
    showAll() {
        this.trigger( 'showAll' );
    }

});
