import Ember from 'ember';

export default Ember.Controller.extend({
    colors: [
        { id: 'Black' },
        { id: 'Blue' },
        { id: 'Gray' },
        { id: 'Green' },
        { id: 'Orange' },
        { id: 'Purple' },
        { id: 'Red' },
        { id: 'White' },
        { id: 'Yellow' }
    ],

    names: [
        'Jeff',
        'Michael',
        'Jeremy'
    ]
});
