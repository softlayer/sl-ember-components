import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        logLabel( date, data ) {
            window.console.log( 'logLabel: ', date, data );
        }
    },

    selectConstraint: {
        start: '01/05/2016',
        end: '02/05/2016'
    },

    startDate: window.moment( '01/07/2016', 'MM/DD/YYYY' ),
    endDate: window.moment( '01/28/2016', 'MM/DD/YYYY' )
});
