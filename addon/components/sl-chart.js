import Ember from 'ember';

/**
 * @module components
 * @class  sl-calendar-chart
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * Class names for the root element
     *
     * @property {Ember.Array} classNames
     */
    classNames: [ 'panel', 'panel-default', 'sl-chart', 'sl-panel' ],

    /**
     * Class name bindings for the root element
     *
     * @property {Ember.Array} classNameBindings
     */
    classNameBindings: [ 'isLoading:sl-loading' ],

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * The highchart instantiation
     *
     * @property {Ember.Object} chart
     * @default  null
     */
    chart: null,

    /**
     * Height value used for inline style
     *
     * @property {Ember.String} height
     * @default  "auto"
     */
    height: 'auto',

    /**
     * When true, the chart's panel body will be in a loading state
     *
     * @property {boolean} isLoading
     * @default  false
     */
    isLoading: false,

    /**
     * The collection of series data for the chart
     *
     * @property {Ember.Array} series
     * @default  null
     */
    series: null,

    /**
     * Width value used for inline style
     *
     * @property {Ember.String} width
     * @default  "auto"
     */
    width: 'auto',

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Sets up Highcharts initialization
     *
     * @function setupChart
     * @observes didInsertElement event
     * @returns  {void}
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
     * @returns  {void}
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

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Inline style containing height and width, required by Highcharts
     *
     * @function style
     * @observes height, width
     * @returns  {Ember.String}
     */
    style: function() {
        return 'height: ' + this.get( 'height' ) + '; width: ' + this.get( 'width' ) + ';';
    }.property( 'height', 'width' )

    // -------------------------------------------------------------------------
    // Private Methods

});
