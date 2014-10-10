import Ember from 'ember';

export default Ember.ArrayController.extend({
    columns: [
        {
            path: 'name',
            title: 'Color'
        }, {
            path: 'fruit',
            size: 'tiny',
            title: 'Fruit'
        }, {
            path: 'hexCode',
            size: 'tiny',
            title: 'Hex Code'
        }
    ]
});
