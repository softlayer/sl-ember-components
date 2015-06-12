import Ember from 'ember';
import KeyManager from 'sl-ember-components/utils/sl-menu-key-adapter';

export default Ember.Controller.extend({
    keyHandler: KeyManager.create(),

    keyboardInUse: null,

    actions: {
        selectionMadeHandler( path ) {
            window.console.log( 'Selection:', path );
        },

        actionInitiatedHandler( actionName, data ) {
            window.console.log( `Action [${actionName}]` );
            if ( data ) {
                window.console.log( '   data:', data );
            }
        },

        changeRouteHandler( route ) {
            this.transitionToRoute( route );
        }
    }
});
