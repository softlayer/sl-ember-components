import Ember from 'ember';

export default Ember.Component.extend({
    classNameBindings: [
        'required:list-group-item-warning'
    ],

    classNames: [
        'list-group-item'
    ],

    required: false
});
