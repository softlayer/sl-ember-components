import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

const testOptions = {
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
};

const testSeries = [
    {
        name: 'Alice',
        data: [ 1, 0, 4 ]
    }
];

moduleForComponent( 'sl-chart', 'Unit | Component | sl chart', {
    unit: true
});

test( 'Default classNames are present', function( assert ) {
    this.subject({
        options: testOptions,
        series: testSeries
    });

    assert.ok(
        this.$().hasClass( 'panel' ),
        'Default rendered component has class "panel"'
    );

    assert.ok(
        this.$().hasClass( 'panel-default' ),
        'Default rendered component has class "panel-default"'
    );

    assert.ok(
        this.$().hasClass( 'sl-chart' ),
        'Default rendered component has class "sl-chart"'
    );

    assert.ok(
        this.$().hasClass( 'sl-panel' ),
        'Default rendered component has class "sl-panel"'
    );
});

test( 'Loading state adds loading class', function( assert ) {
    const component = this.subject({
        options: testOptions,
        series: testSeries
    });

    assert.strictEqual(
        this.$().hasClass( 'sl-loading' ),
        false,
        'Default rendered component does not have "sl-loading" class'
    );

    Ember.run( () => {
        component.set( 'isLoading', true );
    });

    assert.ok(
        this.$().hasClass( 'sl-loading' ),
        'Rendered component gains "sl-loading" class'
    );
});

test( 'updateData() is called after series property is modified', function( assert ) {
    const component = this.subject({
        options: testOptions,
        series: testSeries
    });

    this.render();

    const spy = window.sinon.spy( component, 'updateData' );
    const changedTestSeries = [];

    component.set( 'series', changedTestSeries );

    assert.ok(
        spy.calledOnce,
        'updateData() is called once after series modified'
    );
});

test( '"Options" property needs to be an object', function( assert ) {
    const properties = Ember.Object.create({
        series: testSeries
    });

    const callSubject = () => this.subject( properties );

    // null
    Ember.run( () => {
        properties.set( 'options', null );
    });

    assert.throws(
        callSubject,
        'property was null'
    );

    // Array
    Ember.run( () => {
        properties.set( 'options', [] );
    });

    assert.throws(
        callSubject,
        'property was an Array'
    );

    // String
    Ember.run( () => {
        properties.set( 'options', 'test string' );
    });

    assert.throws(
        callSubject,
        'property was a String'
    );

    // undefined
    Ember.run( () => {
        properties.set( 'options', undefined );
    });

    assert.throws(
        callSubject,
        'property was undefined'
    );

    // Boolean
    Ember.run( () => {
        properties.set( 'options', false );
    });

    assert.throws(
        callSubject,
        'property was a Boolean'
    );

    // Number
    Ember.run( () => {
        properties.set( 'options', 132 );
    });

    assert.throws(
        callSubject,
        'property was a Number'
    );

    // Function
    Ember.run( () => {
        properties.set( 'options', function() {} );
    });

    assert.throws(
        callSubject,
        'property was a Function'
    );

    // Object
    Ember.run( () => {
        properties.set( 'options', {} );
    });

    assert.ok(
        callSubject(),
        'property was an Object'
    );
});

test( '"Series" property needs to be an array', function( assert ) {
    const properties = Ember.Object.create({
        options: testOptions
    });

    const callSubject = () => this.subject( properties );

    // null
    Ember.run( () => {
        properties.set( 'series', null );
    });

    assert.throws(
        callSubject,
        'property was null'
    );

    // String
    Ember.run( () => {
        properties.set( 'series', 'test string' );
    });

    assert.throws(
        callSubject,
        'property was a String'
    );

    // undefined
    Ember.run( () => {
        properties.set( 'series', undefined );
    });

    assert.throws(
        callSubject,
        'property was undefined'
    );

    // Boolean
    Ember.run( () => {
        properties.set( 'series', false );
    });

    assert.throws(
        callSubject,
        'property was a Boolean'
    );

    // Number
    Ember.run( () => {
        properties.set( 'series', 132 );
    });

    assert.throws(
        callSubject,
        'property was a Number'
    );

    // Function
    Ember.run( () => {
        properties.set( 'series', function() {} );
    });

    assert.throws(
        callSubject,
        'property was a Function'
    );

    // Object
    Ember.run( () => {
        properties.set( 'series', {} );
    });

    assert.throws(
        callSubject,
        'property was an Object'
    );

    // Array
    Ember.run( () => {
        properties.set( 'series', [] );
    });

    assert.ok(
        callSubject(),
        'property was an Array'
    );
});

test( 'Chart div uses the correct style', function( assert ) {
    const component = this.subject({
        options: testOptions,
        series: testSeries
    });

    assert.equal(
        component.get( 'style' ),
        'height: auto; width: auto;'
    );

    assert.equal(
        this.$( 'div.chart' ).attr( 'style' ),
        component.get( 'style' ),
        'Chart div has automatic height and width'
    );

    Ember.run( () => {
        component.set( 'height', 10 );
        component.set( 'width', 20 );
    });

    assert.equal(
        component.get( 'style' ),
        'height: 10; width: 20;'
    );

    assert.equal(
        this.$( 'div.chart' ).attr( 'style' ),
        component.get( 'style' ),
        'Chart div has height 10 and width 20'
    );
});

test( 'Title property is set', function( assert ) {
    const component = this.subject({
        options: testOptions,
        series: testSeries
    });

    assert.strictEqual(
        this.$( '.panel-heading' )[ 0 ],
        undefined,
        'No chart title is rendered when title is not set'
    );

    const testTitle = 'Peak server hours';

    Ember.run( () => {
        component.set( 'title', testTitle );
    });

    assert.equal(
        this.$( '.panel-heading' ).html(),
        testTitle,
        'Chart title is created with title value'
    );
});

test( 'setupChart initializes chart and updates data upon render', function( assert ) {
    const chartTest = 'a test chart';
    const chartDivMock = {
        highcharts( options ) {
            return ( 'undefined' === Ember.typeOf( options ) ) ? chartTest : null;
        }
    };

    const component = this.subject({
        options: testOptions,
        series: testSeries,
        $: function() {
            return chartDivMock;
        },
        updateData: function() {
            return;
        }
    });

    const setupSpy = window.sinon.spy( component, 'setupChart' );
    const updateSpy = window.sinon.spy( component, 'updateData' );
    const highchartsSpy = window.sinon.spy( chartDivMock, 'highcharts' );

    assert.equal(
        component.get( 'chart' ),
        null,
        'Chart is null upon initilization'
    );

    this.render();

    assert.ok(
        setupSpy.calledOnce,
        'setupChart was called once upon render'
    );

    assert.ok(
        updateSpy.calledOnce,
        'updateData was called once upon render'
    );

    assert.ok(
        highchartsSpy.calledTwice,
        'highcharts was called twice upon render'
    );

    assert.ok(
        highchartsSpy.calledWithExactly( component.get( 'highchartsOptions' ) ),
        'highcharts was called once with options'
    );

    assert.ok(
        highchartsSpy.calledWithExactly(),
        'highcharts was called once with no parameters'
    );

    assert.equal(
        component.get( 'chart' ),
        chartTest,
        'chart is initialized'
    );
});

test( 'highchartsOptions returns expected options', function( assert ) {
    const component = this.subject({
        options: testOptions,
        series: testSeries
    });
    const chartStyle = {
        fontFamily: '"Benton Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
        fontSize: '13px'
    };
    const options = Ember.$.extend( true, {
        chart: {
            animation: false,
            backgroundColor: 'rgba(255, 255, 255, 0)',
            style: chartStyle
        },
        title: null,
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
    }, component.get( 'options' ) || {} );

    assert.deepEqual(
        options,
        component.get( 'highchartsOptions' ),
        'highchartsOptions returns expected options'
    );
});

test( 'title property is not missing in highchartsOptions and set to null', function( assert ) {
    const component = this.subject({
        options: testOptions,
        series: testSeries
    });

    assert.strictEqual(
        component.get( 'highchartsOptions' ).title,
        null,
        'title property in highchartsOptions is set to null in order to supress default behavior for our usage'
    );
});
