import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        return [
            {
                action: 'setDanger',
                label: 'Danger'
            }, {
                action: 'setInfo',
                label: 'Info'
            }, {
                action: 'setWarning',
                label: 'Warning'
            }, {
                // divider
            }, {
                action: 'setSuccess',
                label: 'Success'
            }
        ];
    }
});