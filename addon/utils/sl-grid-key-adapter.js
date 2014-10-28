import Ember from 'ember';

/**
 * @module helpers
 * @class  sl-grid-key-adapter
 */
export default Ember.Object.extend( Ember.Evented, {

    /**
     * Triggers the grid's reload action
     *
     * @function reload
     * @returns  {void}
     */
    reload: function() {
        this.trigger( 'reload' );
    },

    /**
     * Triggers the grid's changePage action
     *
     * @function changePage
     * @param   {number} page
     * @returns {void}
     */
    changePage: function( page ) {
        this.trigger( 'changePage', page );
    }
});