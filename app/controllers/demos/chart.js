import Ember from 'ember';

export default Ember.ArrayController.extend({
    actions: {
        logOptions: function () {
            console.log( this.get( 'chartOptions' ));
        },

        logSeries: function () {
            console.log( this.get( 'content' ));
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