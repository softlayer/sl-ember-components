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
    },

    /**
     * Height value used for inline style
     * @property {string} height
     * @default "auto"
     */
    height: 'auto',

    /**
     * Inline style containing height and width, required by highcharts
     * @property {string} style
     */
    style: function () {
        return 'height: ' + this.get( 'height' ) + '; width: ' + this.get( 'width' ) + ';';
    }.property( 'height', 'width' ),

    /**
     * Width value used for inline style
     * @property {string} width
     * @default "auto"
     */
    width: 'auto'
});
