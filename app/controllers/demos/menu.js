import Ember from 'ember';
import KeyManager from 'sl-components/utils/slmenukeyadapter';

export default Ember.ObjectController.extend({

    keyHandler: KeyManager.create(),

    actions: {
        selectionMadeHandler: function( path ) {
            console.log( 'Selection:', path );
        },

        actionInitiatedHandler: function( actionName, data ) {
            console.log( 'Action [', actionName, ']' );
            if ( data ) {
                console.log( '   data:', data );
            }
        },

        changeRouteHandler: function( route ) {
            this.transitionToRoute( route );
        }
    }

});
