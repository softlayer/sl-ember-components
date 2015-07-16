import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return new Ember.A([
            {
                label: 'Red',
                description: 'Apples',
                value: 'red'
            }, {
                label: 'Orange',
                description: 'Oranges',
                value: 'orange'
            }, {
                label: 'Yellow',
                description: 'Bananas',
                value: 'yellow'
            }, {
                label: 'Green',
                description: 'Avocados',
                value: 'green'
            }, {
                label: 'Purple',
                description: 'Blueberries',
                value: 'purple'
            }, {
                label: 'Splorge',
                description: '???',
                value: 'splorge'
            }
        ]);
    }
});
