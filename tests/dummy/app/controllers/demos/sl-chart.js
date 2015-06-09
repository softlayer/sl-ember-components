import Ember from 'ember';

export default Ember.ArrayController.extend({
    actions: {
        logOptions: function () {
            window.console.log( 'Chart options:', this.get( 'chartOptions' ));
        },

        logSeries: function () {
            window.console.log( 'Content:', this.get( 'content' ));
        }
    },

    chartOptions: {
        chart: {
            type: 'bar'
        },

        xAxis: {
            categories: [ 'Apples', 'Bananas', 'Oranges' ]
        },

        yAxis: {
            title: {
                text: 'Fruit Eaten'
            }
        }
    }
});
