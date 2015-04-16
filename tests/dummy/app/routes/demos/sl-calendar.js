import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        return Ember.A([
            {
                date  : new Date(),
                label : 'Today!'
            }
        ]);
    }
});
