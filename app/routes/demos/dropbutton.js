import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        return [
            {
                action: 'setDanger',
                label: 'Danger'
            }, {
                action: 'setDefault',
                label: 'Default'
            }, {
                action: 'setInfo',
                label: 'Info'
            }, {
                action: 'setPrimary',
                label: 'Primary'
            }, {
                action: 'setWarning',
                label: 'Warning'
            }, {
                action: 'setSuccess',
                label: 'Success'
            }
        ];
    }
});