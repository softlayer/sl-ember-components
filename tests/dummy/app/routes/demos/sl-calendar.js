import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return new Ember.A([
            {
                date: new Date(),
                label: 'Today!'
            }
        ]);
    }
});
