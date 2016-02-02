import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.A([
            {
                startDate: window.moment().subtract( 5, 'days' ),
                title: 'Some meeting five days ago'
            },
            {
                startDate: window.moment().add( 3, 'days' ),
                title: 'Lunch meeting three days from now'
            }
        ]);
    }
});
