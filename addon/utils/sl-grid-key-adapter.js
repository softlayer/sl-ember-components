import Ember from 'ember';

export default Ember.Object.extend( Ember.Evented, {

    reload: function() {
        this.trigger( 'reload' );
    },

    changePage: function( page ) {
        this.trigger( 'changePage', page );
    }

});