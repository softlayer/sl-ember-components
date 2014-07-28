import Ember from 'ember';

export default Ember.Component.extend({
    classNameBindings: [ 'active' ],

    classNames: [ 'month' ],

    click: function () {
        this.sendAction( 'action', this.get( 'month' ));
    },

    shortName: function () {
        switch ( this.get( 'month' )) {
            case 1: return 'Jan';
            case 2: return 'Feb';
            case 3: return 'Mar';
            case 4: return 'Apr';
            case 5: return 'May';
            case 6: return 'Jun';
            case 7: return 'Jul';
            case 8: return 'Aug';
            case 9: return 'Sep';
            case 10: return 'Oct';
            case 11: return 'Nov';
            case 12: return 'Dec';
        }
    }.property(),

    tagName: 'span'
});