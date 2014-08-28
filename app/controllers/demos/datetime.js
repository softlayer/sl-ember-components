import Ember from 'ember';

export default Ember.Controller.extend({
    firstDayDate: function () {
        return moment().dayOfYear( 1 );
    }.property(),

    threeMonthsAgoDate: function () {
        var now = moment();

        return moment().month( now.month() - 3 );
    }.property()
});
