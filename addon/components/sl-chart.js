import Ember from 'ember';
import layout from '../templates/components/sl-chart';

/**
 * @module
 * @augments ember/Component
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    classNameBindings: [
        'isLoading:sl-loading'
    ],

    /** @type {String[]} */
    classNames: [
        'panel',
        'panel-default',
        'sl-chart',
        'sl-panel'
    ],

    /** @type {Object} */
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
     * @type {?Object}
     */
    chart: null,

    /**
     * Height value used for inline style
     *
     * @type {String}
     */
    height: 'auto',

    /**
     * When true, the chart's panel body will be in a loading state
     *
     * @type {Boolean}
     */
    isLoading: false,

    /**
     * The collection of series data for the chart
     *
     * @type {?Object[]}
     */
    series: null,

    /**
     * Width value used for inline style
     *
     * @type {Number|String}
     */
    width: 'auto',

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Check passed parameters on initialization
     *
     * @function
     * @throws {ember.assert} Series property must be an Array
     * @throws {ember.assert} Options property must be an Object
     * @returns {undefined}
     */
    initialize: Ember.on(
        'init',
        function() {
            if ( 'array' !== Ember.typeOf( this.get( 'series' ) ) ) {
                throw new Ember.Error( 'Series property must be an array' );
            }

            /* jshint ignore:start */
            const options = this.get( 'options' );
            if (
                (
                    'instance' !== Ember.typeOf( options ) &&
                    'object' !== Ember.typeOf( options )
                ) ||
                'symbol' === typeof options
            ) {
                throw new Ember.Error( 'Options property must be an Object' );
            }
            /* jshint ignore:end */
        }
    ),

    /**
     * Sets up Highcharts initialization
     *
     * @function
     * @returns {undefined}
     */
    setupChart: Ember.on(
        'didInsertElement',
        function() {
            const chartDiv = this.$( 'div.chart' );

            chartDiv.highcharts( this.get( 'highchartsOptions' ) );
            this.set( 'chart', chartDiv.highcharts() );
            this.updateData();
        }
    ),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Options for Highcharts
     *
     * @function
     * @returns {Object}
     */
    highchartsOptions: Ember.computed(
        function() {
            const chartStyle = {
                fontFamily: [
                    '"Benton Sans"',
                    '"Helvetica Neue"',
                    'Helvetica',
                    'Arial',
                    'sans-serif'
                ].join( ', ' ),
                fontSize: '13px'
            };

            const options = Ember.$.extend( true, {
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

            // Title property in options must be kept null in order to
            // suppress its default behavior for our specific usage
            options.title = null;

            return options;
        }
    ),
    /**
     * Updates the chart's series data
     *
     * @function
     * @returns {undefined}
     */
    updateData: Ember.observer(
        'series',
        function() {
            const chart = this.get( 'chart' );
            const series = this.get( 'series' );

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
        }
    ),

    /**
     * Inline style containing height and width, required by Highcharts
     *
     * @function
     * @returns {String}
     */
    style: Ember.computed(
        'height',
        'width',
        function() {
            const height = this.get( 'height' );
            const width = this.get( 'width' );

            return Ember.String.htmlSafe(
                `height: ${height}; width: ${width};`
            );
        }
    )

});
