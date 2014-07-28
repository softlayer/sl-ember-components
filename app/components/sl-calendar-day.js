import Ember from 'ember';

export default Ember.Component.extend({
    classNameBindings: [ 'active', 'new', 'old' ],

    classNames: [ 'day' ],

    click: function () {
        this.sendAction( 'action', this.get( 'content' ));
    },

    tagName: 'td'
});