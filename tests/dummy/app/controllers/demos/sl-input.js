import Ember from 'ember';

export default Ember.Controller.extend({
    colors: [
        { id: 'Red' },
        { id: 'Orange' },
        { id: 'Yellow' },
        { id: 'Green' }
    ],

    colorValue: null
});
