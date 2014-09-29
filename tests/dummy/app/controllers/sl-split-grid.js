import Ember from 'ember';

export default Ember.ArrayController.extend({
    splitGridColumns: [
        {
            path: 'name',
            title: 'Color'
        }, {
            path: 'fruit',
            title: 'Fruit'
        }, {
            path: 'hexCode',
            title: 'Hex Code'
        }
    ]
});
