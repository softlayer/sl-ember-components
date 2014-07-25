import Ember from 'ember';

export default Ember.ArrayController.extend({
    needs: [ 'demos/tabs/one', 'index' ],

    one: Ember.computed.alias( 'controllers.demos/tabs/one' )
});