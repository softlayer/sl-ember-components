import Ember from 'ember';

/** @module sl-components/components/sl-calendar-chart */
export default Ember.Component.extend({

    /**
     * Class names for the root element
     *
     * @property {array}       classNames
     * @type     {Ember.Array}
     */
    classNames: [ 'panel', 'panel-default', 'sl-chart', 'sl-panel' ],

    /**
     * Class name bindings for the root element
     *
     * @property {array}       classNameBindings
     * @type     {Ember.Array}
     */
    classNameBindings: [ 'isLoading:sl-loading' ],

    /**
     * The highchart instantiation
     *
     * @property {object} chart
     * @type     {Ember.Object}
     * @default  null
     */
    chart: null,

    /**
     * Height value used for inline style
     *
     * @property {string} height
     * @type     {Ember.String}
     * @default  "auto"
     */
    height: 'auto',

    /**
     * When true, the chart's panel body will be in a loading state
     *
     * @property {boolean} isLoading
     * @type     {boolean}
     * @default  false
     */
    isLoading: false,

    /**
     * The collection of series data for the chart
     *
     * @property {array} series
     * @type     {Ember.Array}
     * @default  null
     */
    series: null,

    /**
     * Width value used for inline style
     *
     * @property {string} width
     * @type     {Ember.String}
     * @default  "auto"
     */
    width: 'auto',

    /**
     * Sets up Highcharts initialization
     *
     * @function setupChart
     * @observes didInsertElement event
     * @return   {void}
     */
    setupChart: function() {
        var chartDiv = this.$( 'div.chart' ),
            chartStyle,
            options;

        chartStyle = {
            fontFamily : '"Benton Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontSize   : '13px'
        };

        options = Ember.$.extend( true, {
            title: '',
            chart: {
                animation: false,
                backgroundColor: 'rgba(255, 255, 255, 0)',
                style: chartStyle
            },
            colors: [
                '#298fce',
                '#94302e',
                '#00a14b',
                '#f29c1e',
                '#fadb00',
                '#34495d'
            ],
            credits: {
                enabled: false
            },
            legend: {
                itemStyle: chartStyle
            },
            plotOptions: {
                bar: {
                    borderColor: 'transparent'
                },
                series: {
                    animation: false
                }
            },
            tooltip: {
                animation: false,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                borderWidth: 0,
                shadow: false,
                style: {
                    color: '#fff'
                }
            },
            xAxis: {
                labels: {
                    style: chartStyle
                }
            },
            yAxis: {
                labels: {
                    style: chartStyle
                }
            }
        }, this.get( 'options' ) || {} );

        chartDiv.highcharts( options );
        this.set( 'chart', chartDiv.highcharts() );
        this.updateData();
    }.on( 'didInsertElement' ),

    /**
     * Updates the chart's series data
     *
     * @function updateSeries
     * @observes series
     * @return   {void}
     */
    updateData: function() {
        var chart  = this.get( 'chart' ),
            series = this.get( 'series' );

        if ( !chart.hasOwnProperty( 'series' ) ) {
            chart.series = [];
        }

        for ( var i = 0; i < series.length; i++ ) {
            if ( chart.series.length <= i ) {
                chart.addSeries( series[ i ] );
            } else {
                chart.series[i].setData( series[ i ].data );
            }
        }
    }.observes( 'series' ),

    /**
     * Inline style containing height and width, required by Highcharts
     *
     * @function style
     * @observes height, width
     * @return   {Ember.String}
     */
    style: function() {
        return 'height: ' + this.get( 'height' ) + '; width: ' + this.get( 'width' ) + ';';
    }.property( 'height', 'width' )
});
