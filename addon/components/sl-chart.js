import Ember from 'ember';
import ClassPrefix from '../mixins/class-prefix';
import { throwChartError } from '../utils/error';
import layout from '../templates/components/sl-chart';

/**
 * @module
 * @augments ember/Component
 */
export default Ember.Component.extend( ClassPrefix, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    classNameBindings: [
        'componentClassName'
    ],

    /** @type {String[]} */
    classNames: [
        'panel',
        'panel-default'
    ],

    /** @type {Object} */
    layout,

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    /**
     * init event hook
     *
     * @returns {undefined}
     */
    init() {
        this._super( ...arguments );
        this.initialize();
    },

    /**
     * didInsertElement event hook
     *
     * @returns {undefined}
     */
    didInsertElement() {
        this._super( ...arguments );
        this.setupChart();
    },

    // -------------------------------------------------------------------------
    // Properties

    /**
     * The highchart instantiation
     *
     * @type {?Object}
     */
    chart: null,

    /**
     * Component class that will be prefixed with base component class
     *
     * @type {String}
     */
    componentClass: 'chart',

    /**
     * Height value used for inline style
     *
     * @type {Number|String}
     */
    height: 'auto',

    /**
     * When true, the chart's panel body will be in a loading state
     *
     * @type {Boolean}
     */
    loading: false,

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
     * Updates the chart's height
     *
     * @function
     * @returns {undefined}
     */
    setHeight: Ember.observer(
        'height',
        function() {
            this.$( '> .panel-body > div' ).height( this.get( 'height' ) );
        }
    ),

    /**
     * Updates the chart's width
     *
     * @function
     * @returns {undefined}
     */
    setWidth: Ember.observer(
        'width',
        function() {
            this.$( '> .panel-body > div' ).width( this.get( 'width' ) );
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
     * Update the chart's options
     *
     * @function
     * @returns {undefined}
     */
    updateOptions: Ember.observer(
        'options',
        function() {
            const chartDiv = this.$( '> .panel-body > div' );

            const highCharts = chartDiv.highcharts( this.highchartsOptions() );
            this.set( 'chart', highCharts );
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
    highchartsOptions() {
        const chartStyle = {
            fontFamily: [
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
            series: this.get( 'series' ),
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
    },

    /**
     * Check passed parameters on initialization
     *
     * @private
     * @throws {sl-ember-components/utils/error/chart} Series property must be an Array
     * @throws {sl-ember-components/utils/error/chart} Options property must be an Object
     * @returns {undefined}
     */
    initialize() {
        if ( 'array' !== Ember.typeOf( this.get( 'series' ) ) ) {
            throwChartError( 'Series property must be an array' );
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
            throwChartError( 'Options property must be an Object' );
        }
        /* jshint ignore:end */
    },

    /**
     * Sets up Highcharts initialization
     *
     * @private
     * @returns {undefined}
     */
    setupChart() {
        this.setHeight();
        this.setWidth();
        this.updateOptions();
    }

});
