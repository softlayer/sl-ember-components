import Ember from 'ember';
import ModalManager from 'sl-ember-components/mixins/sl-modal-manager';

export default Ember.Route.extend( ModalManager, {
    setupController: function( controller, model ){
       console.log('setting up controller');
       controller.set( 'content', [ 'Aziz', 'Jeremy', 'Matt', 'Ryan' ] ); 
    }
});

