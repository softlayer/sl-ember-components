import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        return [
            {
                action: 'alertRed',
                label: 'Red'
            }, {
                action: 'alertGreen',
                label: 'Green'
            }, {
                action: 'alertBlue',
                label: 'Blue'
            }, {
                // divider
            }, {
                action: 'alertWhite',
                label: 'White'
            }
        ];
    }
});
