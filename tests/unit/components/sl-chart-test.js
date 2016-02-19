import Ember from 'ember';
import ClassPrefix from 'sl-ember-components/mixins/class-prefix';
import { moduleForComponent, test } from 'ember-qunit';
import sinon from 'sinon';
import globalLibraries from '../../helpers/sl/synchronous/global-libraries';

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

test( 'Expected Mixins are present', function( assert ) {
    const component = this.subject({
        options: testOptions,
        series: testSeries
    });

    assert.ok(
        ClassPrefix.detect( component ),
        'ClassPrefix Mixin is present'
    );
});

test( 'Default property values are set correctly', function( assert ) {
    const component = this.subject({
        options: testOptions,
        series: testSeries
    });

    assert.strictEqual(
        component.get( 'componentClass' ),
        'chart',
        'componentClass is set to chart'
    );

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
        component.get( 'loading' ),
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
        component.highchartsOptions().title,
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

    component.set( 'series', [] );

    assert.ok(
        spy.calledOnce,
        'updateData() is called once after series modified'
    );
});

test( 'updateOptions() is called after options property is modified', function( assert ) {
    const component = this.subject({
        options: testOptions,
        series: testSeries
    });

    this.render();

    const spy = sinon.spy( component, 'updateOptions' );

    component.set( 'options', {} );

    assert.ok(
        spy.calledOnce,
        'updateOptions() is called once after options modified'
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

test( 'setupChart initializes chart upon render', function( assert ) {
    const component = this.subject({
        options: testOptions,
        series: testSeries,
        updateOptions: function() {
            return;
        }
    });

    const setupSpy = sinon.spy( component, 'setupChart' );
    const setHeightSpy = sinon.spy( component, 'setHeight' );
    const setWidthSpy = sinon.spy( component, 'setWidth' );
    const updateOptionsSpy = sinon.spy( component, 'updateOptions' );

    this.render();

    assert.ok(
        setupSpy.calledOnce,
        'setupChart was called once upon render'
    );

    assert.ok(
        setHeightSpy.calledOnce,
        'setHeight was called once upon render'
    );

    assert.ok(
        setWidthSpy.calledOnce,
        'setWidth was called once upon render'
    );

    assert.ok(
        updateOptionsSpy.calledOnce,
        'updateOptions was called once upon render'
    );
});

test( 'updateOptions initializes chart correctly', function( assert ) {
    const component = this.subject({
        options: testOptions,
        series: testSeries
    });
    const originalUpdateOptions = component.updateOptions;

    component.updateOptions = () => {};

    this.render();

    component.updateOptions = originalUpdateOptions;

    assert.strictEqual(
        component.get( 'chart' ),
        null,
        'Chart is null before options are updated'
    );

    const spyHighcharts = sinon.spy( Ember.$.fn, 'highcharts' );
    const optionsMatcher = ( options ) => {
        const optionsFromMethod = component.highchartsOptions();

        // Highcharts modifies options.chart and adds a options.chart.renderTo method
        // Since this is not a property that we pass in, copy over that property before doing a deepEqual
        optionsFromMethod.chart.renderTo = options.chart.renderTo;

        return sinon.deepEqual( optionsFromMethod, options );
    };

    component.updateOptions();

    assert.ok(
        spyHighcharts.calledOnce,
        'highcharts was called once upon render'
    );

    assert.ok(
        spyHighcharts.calledWithMatch( optionsMatcher ),
        'highcharts was called once with options'
    );

    assert.strictEqual(
        Ember.typeOf( component.get( 'chart' ) ),
        'object',
        'chart is set after options are updated'
    );
});

test( 'highchartsOptions returns expected options', function( assert ) {
    const component = this.subject({
        options: testOptions,
        series: testSeries
    });
    const chartStyle = {
        fontFamily: 'Helvetica, Arial, sans-serif',
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
        series: testSeries,
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
        component.highchartsOptions(),
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

    const updateOptionsKeys = [
        'options'
    ];

    assert.deepEqual(
        component.updateOptions.__ember_observes__,
        updateOptionsKeys,
        'Observer keys are correct for updateOptions()'
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

test( 'There are no references to Ember.$, $ or jQuery', function( assert ) {
    globalLibraries.setupSpies();

    const component = this.subject({
        options: testOptions,
        series: testSeries
    });

    this.render();

    globalLibraries.triggerEvents( component );

    assert.notOk(
        globalLibraries.called(),
        'Global libraries are not referenced in component'
    );

    globalLibraries.restoreSpies();
});
