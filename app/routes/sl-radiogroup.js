import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        return [
            {
                label: 'Red',
                value: 'red'
            }, {
                label: 'Green',
                value: 'green'
            }, {
                label: 'Blue',
                value: 'blue'
            }, {
                label: 'Splorge',
                disabled: true
            }
        ];
    }
});