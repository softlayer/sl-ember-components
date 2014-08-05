import Ember from 'ember';

export default Ember.Object.extend( Ember.Evented, {

    childSelection: function( key ) {
        if ( typeof key === 'string' ) {
            key = parseInt( key, 10 );
        }

        this.trigger( 'childSelected', key );
    },

    drillDown: function( key ) {
        this.trigger( 'drillDown', key );
    },

    closeAll: function() {
        this.trigger( 'closeAll' );
    },

    showAll: function() {
        this.trigger( 'showAll' );
    }

});
