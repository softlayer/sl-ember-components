import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        return [
            {
                label: 'One',
                name: 'one',
                template: 'demos/tabs/one'
            }, {
                label: 'Two',
                name: 'two',
                template: 'demos/tabs/two'
            }, {
                label: 'Three',
                name: 'three',
                template: 'demos/tabs/three'
            }
        ];
    }
});