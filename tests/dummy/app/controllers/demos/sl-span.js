import Ember from 'ember';

export default Ember.Controller.extend({
    initialize: Ember.on(
        'init',
        function() {
            setTimeout( () => {
                this.set( 'isLoading', false );
            }, 5000 );
        }
    ),

    isLoading: true
});
