import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        return [
            {
                label: 'One',
                name: 'one',
                template: 'tabs/one'
            }, {
                label: 'Two',
                name: 'two',
                template: 'tabs/two'
            }, {
                label: 'Three',
                name: 'three',
                template: 'tabs/three'
            }
        ];
    }
});
