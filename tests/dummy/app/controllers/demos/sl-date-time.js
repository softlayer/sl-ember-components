import Ember from 'ember';
/* global moment */

export default Ember.Controller.extend({
    firstDayDate: Ember.computed( function () {
        return moment().dayOfYear( 1 );
    }),

    threeMonthsAgoDate: Ember.computed( function () {
        var now = moment();

        return moment().month( now.month() - 3 );
    })
});
