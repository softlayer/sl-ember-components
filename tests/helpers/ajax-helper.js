import Ember from 'ember';

export default {
    begin: function( endpoint ) {
        Ember.run( function() {
            if ( endpoint ) {
                Ember.$( document ).trigger( 'ajaxSend', [ null, { url: endpoint }]);
            } else {
                Ember.$( document ).trigger( 'ajaxStart' );
            }
        });
    },

    end: function( endpoint ) {
        Ember.run( function() {
            if ( endpoint ) {
                Ember.$( document ).trigger( 'ajaxComplete', [ null, { url: endpoint }]);
            } else {
                Ember.$( document ).trigger( 'ajaxStop' );
            }
        });
    }
};
