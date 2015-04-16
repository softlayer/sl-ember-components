import Ember from 'ember';

/**
 * @module utils
 * @class  sl-menu-key-adapter
 */
export default Ember.Object.extend( Ember.Evented, {

    /**
     * Trigger the menu's childSelection action
     *
     * @function childSelection
     * @param   {Ember.String} key
     * @returns {void}
     */
    childSelection( key ) {
        if ( typeof key === 'string' ) {
            key = parseInt( key, 10 );
        }

        this.trigger( 'childSelected', key );
    },

    /**
     * Trigger the menu's drillDown action
     *
     * @function drillDown
     * @param   {Ember.String} key
     * @returns {void}
     */
    drillDown( key ) {
        this.trigger( 'drillDown', key );
    },

    /**
     * Trigger the menu's cycleRootSelectionNext action
     *
     * @function cycleRootSelectionNext
     * @returns {void}
     */
    cycleRootSelectionNext() {
        this.trigger( 'cycleRootSelectionNext' );
    },

    /**
     * Trigger the menu's cycleRootSelectionPrevious action
     *
     * @function cycleRootSelectionPrevious
     * @returns {void}
     */
    cycleRootSelectionPrevious() {
        this.trigger( 'cycleRootSelectionPrevious' );
    },

    /**
     * Trigger the menu's closeAll action
     *
     * @function closeAll
     * @returns {void}
     */
    closeAll() {
        this.trigger( 'closeAll' );
    },

    /**
     * Trigger the menu's showAll action
     *
     * @function showAll
     * @returns {void}
     */
    showAll() {
        this.trigger( 'showAll' );
    }

});
