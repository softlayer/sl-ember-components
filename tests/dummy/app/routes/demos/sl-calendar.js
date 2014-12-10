import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        return [
            {
                date: new Date(),
                label: 'Today!'
            }
        ];
    }
});