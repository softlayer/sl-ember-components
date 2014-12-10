import Ember from 'ember';
import KeyManager from 'sl-ember-components/utils/sl-menu-key-adapter';

export default Ember.ObjectController.extend({

    keyHandler: KeyManager.create(),

    /**
     * Is the menu being interacted with via the keyboard?
     *
     * This value gets set by the inner workings of the component and is exposed for use by view logic
     *
     * @param {boolean}
     */
    keyboardInUse: null,

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
