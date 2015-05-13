import Ember from 'ember';
import layout from '../templates/components/sl-chart';

/**
 * @module components
 * @class sl-calendar-chart
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    classNameBindings: [ 'isLoading:sl-loading' ],

    classNames: [ 'panel', 'panel-default', 'sl-chart', 'sl-panel' ],

    layout,

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * The highchart instantiation
     *
     * @property {Object} chart
     * @default null
     */
    chart: null,

    /**
     * Height value used for inline style
     *
     * @property {String} height
     * @default "auto"
     */
    height: 'auto',

    /**
     * When true, the chart's panel body will be in a loading state
     *
     * @property {Boolean} isLoading
     * @default false
     */
    isLoading: false,

    /**
     * The collection of series data for the chart
     *
     * @property {?Array} series
     * @default null
     */
    series: null,

    /**
     * Width value used for inline style
     *
     * @property {Number|String} width
     * @default "auto"
     */
    width: 'auto',

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Sets up Highcharts initialization
     *
     * @function setupChart
     * @listens didInsertElement
     * @returns {undefined}
     */
    setupChart: Ember.on( 'didInsertElement', function() {
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
    }),

    /**
     * Updates the chart's series data
     *
     * @function updateSeries
     * @observes series
     * @returns {undefined}
     */
    updateData: Ember.observer( 'series', function() {
        var chart  = this.get( 'chart' ),
            series = this.get( 'series' );

        if ( !chart.hasOwnProperty( 'series' ) ) {
            chart.series = [];
        }

        for ( let i = 0; i < series.length; i++ ) {
            if ( chart.series.length <= i ) {
                chart.addSeries( series[ i ] );
            } else {
                chart.series[ i ].setData( series[ i ].data );
            }
        }
    }),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Inline style containing height and width, required by Highcharts
     *
     * @function style
     * @observes height, width
     * @returns {String}
     */
    style: Ember.computed( 'height', 'width', function() {
        var height = this.get( 'height' ),
            width  = this.get( 'width' );

        return Ember.String.htmlSafe( `height: ${height}; width: ${width};` );
    })

});
