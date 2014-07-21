import Ember from 'ember';

/**
 * @module components
 * @class sl-chart
 */
export default Ember.Component.extend({

    /**
     * Attribute bindings for root element
     * @property {array} attributeBindings
     */
    attributeBindings: [ 'style' ],

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
    classNames: [ 'sl-chart' ],

    /**
     * Sets up highchart initialization
     * @method didInsertElement
     */
    didInsertElement: function () {
        this.$().highcharts( this.get( 'options' ));
        this.set( 'chart', this.$().highcharts() );
        this.updateData();
    },

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
    updateData: Ember.observer( 'series', function () {
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
    }),

    /**
     * Width value used for inline style
     * @property {string} width
     * @default "auto"
     */
    width: 'auto'
});
