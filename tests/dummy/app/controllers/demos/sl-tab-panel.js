import Ember from 'ember';

export default Ember.Controller.extend({
    one: Ember.computed.alias( 'controllers.demos/tabs/one' )
});
