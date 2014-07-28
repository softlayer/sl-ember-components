import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        setYear: function () {
            console.log( 'sl-calendar-year setYear' );
        }
    },

    classNameBindings: [ 'active', 'new', 'old' ],

    click: function () {
        this.sendAction( 'action', this.get( 'year' ));
    },

    tagName: 'span'
});