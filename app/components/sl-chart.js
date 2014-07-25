import Ember from 'ember';

/**
 * @module components
 * @class sl-chart
 */
export default Ember.Component.extend({

    /**
     * The highchart instantiation for the component
     * @property {object} chart
     * @default null
     */
    chart: null,

    /**
     * Class names for the root element
     * @property {array} classNames
     */
    classNames: [ 'panel', 'panel-default', 'sl-chart' ],

    /**
     * Height value used for inline style
     * @property {string} height
     * @default "auto"
     */
    height: 'auto',

    /**
     * The collection of series data for the chart
     * @property {array} series
     */
    series: null,

    /**
     * Sets up highchart initialization
     * @method setupChart
     */
    setupChart: function () {
        var chartDiv = this.$( 'div.chart' );
        var options = this.get( 'options' );

        options.title = '';

        chartDiv.highcharts( options );
        this.set( 'chart', chartDiv.highcharts() );
        this.updateData();
    }.on( 'didInsertElement' ),

    /**
     * Inline style containing height and width, required by highcharts
     * @property {string} style
     */
    style: function () {
        return 'height: ' + this.get( 'height' ) + '; width: ' + this.get( 'width' ) + ';';
    }.property( 'height', 'width' ),

    /**
     * Updates the chart's series data
     * @method updateSeries
     */
    updateData: function () {
        var chart = this.get( 'chart' ),
            series = this.get( 'series' );

        if ( !chart.hasOwnProperty( 'series' )) {
            chart.series = [];
        }

        for ( var i = 0; i < series.length; i++ ) {
            if ( chart.series.length <= i ) {
                chart.addSeries( series[ i ]);
            } else {
                chart.series[i].setData( series[ i ].data );
            }
        }
    }.observes( 'series' ),

    /**
     * Width value used for inline style
     * @property {string} width
     * @default "auto"
     */
    width: 'auto'
});
