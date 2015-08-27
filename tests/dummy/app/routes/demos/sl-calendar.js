import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return new Ember.A([
            {
                date: new Date(),
                label: 'Today!'
            },
            {
                date: new Date( 2015, 7, 21 ),
                label: 'Tomorrow!'
            },
            {
                date: new Date( 2015, 7, 21 ),
                label: 'Tomorrow 2!'
            }
        ]);
    }
});
