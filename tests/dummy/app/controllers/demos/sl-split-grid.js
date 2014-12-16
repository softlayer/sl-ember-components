import Ember from 'ember';

export default Ember.ArrayController.extend({

    columns: [
        {
            primary   : true,
            title     : 'Color',
            valuePath : 'name'
        }, {
            size      : 'small',
            title     : 'Fruit',
            valuePath : 'fruit'
        }, {
            size      : 'small',
            title     : 'Hex Code',
            valuePath : 'hexCode'
        }
    ]

});
