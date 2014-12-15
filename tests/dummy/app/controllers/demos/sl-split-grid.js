import Ember from 'ember';

export default Ember.ArrayController.extend({
    columns: [
        {
            valuePath: 'name',
            title: 'Color'
        }, {
            valuePath: 'fruit',
            size: 'small',
            title: 'Fruit'
        }, {
            valuePath: 'hexCode',
            size: 'small',
            title: 'Hex Code'
        }
    ]
});
