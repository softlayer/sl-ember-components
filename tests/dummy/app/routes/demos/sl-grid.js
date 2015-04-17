import Ember from 'ember';

export default Ember.Route.extend({

    model: function() {
        return Ember.A([
            {
                name    : 'Red',
                fruit   : 'Apple',
                hexCode : '#FF0000'
            }, {
                name    : 'Orange',
                fruit   : 'Orange',
                hexCode : '#FF7700'
            }, {
                name    : 'Yellow',
                fruit   : 'Banana',
                hexCode : '#FFFF00'
            }, {
                name    : 'Green',
                fruit   : 'Lime',
                hexCode : '#00FF00'
            }, {
                name    : 'Blue',
                fruit   : 'Blueberry',
                hexCode : '#0000FF'
            }, {
                name    : 'Purple',
                fruit   : 'Grape',
                hexCode : '#FF00FF'
            }
        ]);
    }

});
