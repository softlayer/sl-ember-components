import Ember from 'ember';

export default Ember.Controller.extend({
    needs: [ 'demos/tabs/one' ],

    one: Ember.computed.alias( 'controllers.demos/tabs/one' )
});
