import Ember from 'ember';

export default Ember.Controller.extend({
    firstDayDate: Ember.computed(
        function() {
            return window.moment().dayOfYear( 1 );
        }
    ),

    threeMonthsAgoDate: Ember.computed(
        function() {
            const now = window.moment();

            return window.moment().month( now.month() - 3 );
        }
    )
});
