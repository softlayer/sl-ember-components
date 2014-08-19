import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        return [
            {
                name: 'One',
                template: 'demos/tabs/one'
            }, {
                name: 'Two',
                template: 'demos/tabs/two'
            }, {
                name: 'Three',
                template: 'demos/tabs/three'
            }
        ];
    }
});