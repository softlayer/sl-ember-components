import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        return Ember.A([
            {
                name: 'Jane',
                data: [ 1, 0, 4 ]
            }, {
                name: 'John',
                data: [ 5, 7, 3 ]
            }
        ]);
    }
});
