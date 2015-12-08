import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import sinon from 'sinon';

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

test( 'Default property values are set correctly', function( assert ) {
    const component = this.subject({
        options: testOptions,
        series: testSeries
    });

    assert.strictEqual(
        component.get( 'chart' ),
        null,
        'chart: null'
    );

    assert.strictEqual(
        component.get( 'height' ),
        'auto',
        'height: "auto"'
    );

    assert.strictEqual(
        component.get( 'isLoading' ),
        false,
        'isLoading: false'
    );

    assert.deepEqual(
        component.get( 'series' ),
        testSeries,
        'series: null'
    );

    assert.strictEqual(
        component.get( 'width' ),
        'auto',
        'width: "auto"'
    );

    assert.strictEqual(
        component.get( 'highchartsOptions' ).title,
        null,
        `title property in highchartsOptions is set to null in order to
            suppress default behavior for our usage`
    );
});

test( 'updateData() is called after series property is modified', function( assert ) {
    const component = this.subject({
        options: testOptions,
        series: testSeries
    });

    this.render();

    const spy = sinon.spy( component, 'updateData' );
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
    properties.set( 'options', null );

    assert.throws(
        callSubject,
        'property was null'
    );

    // Array
    properties.set( 'options', [] );

    assert.throws(
        callSubject,
        'property was an Array'
    );

    // String
    properties.set( 'options', 'test string' );

    assert.throws(
        callSubject,
        'property was a String'
    );

    // undefined
    properties.set( 'options', undefined );

    assert.throws(
        callSubject,
        'property was undefined'
    );

    // Boolean
    properties.set( 'options', false );

    assert.throws(
        callSubject,
        'property was a Boolean'
    );

    // Number
    properties.set( 'options', 132 );

    assert.throws(
        callSubject,
        'property was a Number'
    );

    // Function
    properties.set( 'options', function() {} );

    assert.throws(
        callSubject,
        'property was a Function'
    );

    // Object
    properties.set( 'options', {} );

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
    properties.set( 'series', null );

    assert.throws(
        callSubject,
        'property was null'
    );

    // String
    properties.set( 'series', 'test string' );

    assert.throws(
        callSubject,
        'property was a String'
    );

    // undefined
    properties.set( 'series', undefined );

    assert.throws(
        callSubject,
        'property was undefined'
    );

    // Boolean
    properties.set( 'series', false );

    assert.throws(
        callSubject,
        'property was a Boolean'
    );

    // Number
    properties.set( 'series', 132 );

    assert.throws(
        callSubject,
        'property was a Number'
    );

    // Function
    properties.set( 'series', function() {} );

    assert.throws(
        callSubject,
        'property was a Function'
    );

    // Object
    properties.set( 'series', {} );

    assert.throws(
        callSubject,
        'property was an Object'
    );

    // Array
    properties.set( 'series', [] );

    assert.ok(
        callSubject(),
        'property was an Array'
    );
});

test( 'setupChart initializes chart and updates data upon render', function( assert ) {
    const spyHighcharts = sinon.spy( Ember.$.fn, 'highcharts' );

    const component = this.subject({
        options: testOptions,
        series: testSeries,
        updateData: function() {
            return;
        }
    });

    const setupSpy = sinon.spy( component, 'setupChart' );
    const updateSpy = sinon.spy( component, 'updateData' );

    assert.strictEqual(
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
        spyHighcharts.calledTwice,
        'highcharts was called twice upon render'
    );

    assert.ok(
        spyHighcharts.calledWithExactly( component.get( 'highchartsOptions' ) ),
        'highcharts was called once with options'
    );

    assert.ok(
        spyHighcharts.calledWithExactly(),
        'highcharts was called once with no parameters'
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

test( 'Observer keys are correct', function( assert ) {
    const component = this.subject({
        options: testOptions,
        series: testSeries
    });

    const updateDataKeys = [
        'series'
    ];

    assert.deepEqual(
        component.updateData.__ember_observes__,
        updateDataKeys,
        'Observer keys are correct for updateData()'
    );

    const setHeightKeys = [
        'height'
    ];

    assert.deepEqual(
        component.setHeight.__ember_observes__,
        setHeightKeys,
        'Observer keys are correct for setHeight()'
    );

    const setWidthKeys = [
        'width'
    ];

    assert.deepEqual(
        component.setWidth.__ember_observes__,
        setWidthKeys,
        'Observer keys are correct for setWidth()'
    );
});
