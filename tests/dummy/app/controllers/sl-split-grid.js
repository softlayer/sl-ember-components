import Ember from 'ember';

export default Ember.ArrayController.extend({
    splitGridColumns: [
        {
            path: 'name',
            title: 'Color'
        }, {
            path: 'fruit',
            title: 'Fruit',
            width: 100
        }, {
            path: 'hexCode',
            title: 'Hex Code',
            width: 150
        }
    ]
});
