import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return [
            {
                name: 'red',
                fruit: 'apple',
                hexCode: '#ff0000'
            }, {
                name: 'orange',
                fruit: 'orange',
                hexCode: '#ff7700'
            }, {
                name: 'yellow',
                fruit: 'banana',
                hexCode: '#ffff00'
            }, {
                name: 'green',
                fruit: 'lime',
                hexCode: '#00ff00'
            }, {
                name: 'blue',
                fruit: 'blueberry',
                hexCode: '#0000ff'
            }, {
                name: 'purple',
                fruit: 'grape',
                hexCode: '#ff00ff'
            }
        ];
    }
});
