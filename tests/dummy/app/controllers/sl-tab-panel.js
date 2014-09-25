import Ember from 'ember';

export default Ember.ArrayController.extend({
    needs: [ 'tabs/one' ],

    one: Ember.computed.alias( 'controllers.tabs/one' )
});
