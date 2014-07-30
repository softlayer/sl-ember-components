import Ember from 'ember';

export default Ember.Controller.extend({
    colors: [
        { name: 'Black' },
        { name: 'Blue' },
        { name: 'Gray' },
        { name: 'Green' },
        { name: 'Orange' },
        { name: 'Purple' },
        { name: 'Red' },
        { name: 'White' },
        { name: 'Yellow' }
    ],

    colorValue: null
});