import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return [
            {
                name: 'Red',
                fruit: 'Apple',
                hexCode: '#ff0000'
            }, {
                name: 'Orange',
                fruit: 'Orange',
                hexCode: '#ff7700'
            }, {
                name: 'Yellow',
                fruit: 'Banana',
                hexCode: '#ffff00'
            }, {
                name: 'Green',
                fruit: 'Lime',
                hexCode: '#00ff00'
            }, {
                name: 'Blue',
                fruit: 'Blueberry',
                hexCode: '#0000ff'
            }, {
                name: 'Purple',
                fruit: 'Grape',
                hexCode: '#ff00ff'
            }
        ];
    }
});
