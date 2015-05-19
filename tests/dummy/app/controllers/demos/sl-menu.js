import Ember from 'ember';
import KeyManager from 'sl-ember-components/utils/sl-menu-key-adapter';

export default Ember.Controller.extend({

    keyHandler: KeyManager.create(),

    /**
     * Is the menu being interacted with via the keyboard?
     *
     * This value gets set by the inner workings of the component and is exposed
     * for use by view logic
     *
     * @param {boolean} keyboardInUse
     */
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
