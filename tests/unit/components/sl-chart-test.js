import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

let testOptions = {
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

let testSeries = [{
    name: 'Alice',
    data: [ 1, 0, 4 ]
}];

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
    let component = this.subject({
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
    let component = this.subject({
        options: testOptions,
        series: testSeries
    });

    this.render();

    let spy = sinon.spy( component, 'updateData' );
    let changedTestSeries = [];

    component.set( 'series' , changedTestSeries );

    assert.ok(
        spy.calledOnce,
        'updateData() is called once after series modified'
    );
});

test( '"Options" property needs to be an object', function( assert ) {

    // Null
    let assertionThrown = false;

    try {
        this.subject({
            options: null,
            series: testSeries
        });
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'property was null'
    );

    // Array
    assertionThrown = false;

    try {
        this.subject({
            options: [],
            series: testSeries
        });
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'property was an array'
    );

    // String
    assertionThrown = false;

    try {
        this.subject({
            options: "string",
            series: testSeries
        });
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'property was string'
    );

    // Undefined
    assertionThrown = false;

    try {
        this.subject({
            options: undefined,
            series: testSeries
        });
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'property was undefined'
    );

    // Boolean
    assertionThrown = false;

    try {
        this.subject({
            options: true,
            series: testSeries
        });
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'property was a boolean'
    );

    // Number
    assertionThrown = false;

    try {
        this.subject({
            options: 123,
            series: testSeries
        });
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'property was number'
    );

    // Function
    assertionThrown = false;

    try {
        this.subject({
            options: function(){},
            series: testSeries
        });
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'property was a function'
    );

    // Object
    assertionThrown = false;

    try {
        this.subject({
            options: testOptions,
            series: testSeries
        });
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        !assertionThrown,
        'property was an Object'
    );
});

test( '"Series" property needs to be an array', function( assert ) {

    // Null
    let assertionThrown = false;

    try {
        this.subject({
            options: testOptions,
            series: null
        });
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'property was null'
    );

    // Object
    assertionThrown = false;

    try {
        this.subject({
            options: testOptions,
            series: {}
        });
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'property was an object'
    );

    // String
    assertionThrown = false;

    try {
        this.subject({
            options: testOptions,
            series: "string"
        });
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'property was string'
    );

    // Undefined
    assertionThrown = false;

    try {
        this.subject({
            options: testOptions,
            series: undefined
        });
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'property was undefined'
    );

    // Boolean
    assertionThrown = false;

    try {
        this.subject({
            options: testOptions,
            series: true
        });
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'property was a boolean'
    );

    // Number
    assertionThrown = false;

    try {
        this.subject({
            options: testOptions,
            series: 123
        });
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'property was number'
    );

    // Function
    assertionThrown = false;

    try {
        this.subject({
            options: testOptions,
            series: function(){}
        });
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'property was a function'
    );

    // Array
    assertionThrown = false;

    try {
        this.subject({
            options: testOptions,
            series: testSeries
        });
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        !assertionThrown,
        'property was an Array'
    );
});

test( "Chart div uses the correct style", function( assert ) {
    let component = this.subject({
        options: testOptions,
        series: testSeries
    });

    assert.equal(
        component.get( 'style' ).string,
        'height: auto; width: auto;'
    );

    assert.equal(
        this.$( 'div.chart' ).attr( 'style' ),
        component.get( 'style' ).string,
        'Chart div has automatic height and width'
    );

    Ember.run( () => {
        component.set( 'height', 10 );
        component.set( 'width', 20 );
    });

    assert.equal(
        component.get( 'style' ).string,
        'height: 10; width: 20;'
    );

    assert.equal(
        this.$( 'div.chart' ).attr( 'style' ),
        component.get( 'style' ).string,
        'Chart div has height 10 and width 20'
    );
});

test( "Title property is set", function( assert ) {
    let component = this.subject({
        options: testOptions,
        series: testSeries
    });

    assert.strictEqual(
        this.$( '.panel-heading' )[0],
        undefined,
        'No chart title is rendered when title is not set'
    );

    let testTitle = "Peak server hours";

    Ember.run( () => {
        component.set( 'title', testTitle );
    });

    assert.equal(
        this.$( '.panel-heading' ).html(),
        testTitle,
        'Chart title is created with title value'
    );
});


test( "setupChart initializes chart and updates data upon render", function( assert ) {
    let chartTest = "a test chart";
    let chartDivMock = {
        highcharts( options ) {
            if ( Ember.typeOf( options ) === "undefined" ) {
                return chartTest;
            } else {
                return null;
            }
        }
    };

    let component = this.subject({
        options: testOptions,
        series: testSeries,
        $: function() {
            return chartDivMock;
        },
        updateData: function() {
            return;
        }
    });

    let setupSpy = sinon.spy( component, 'setupChart' );
    let updateSpy = sinon.spy( component, 'updateData' );
    let highchartsSpy = sinon.spy( chartDivMock, 'highcharts' );

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
    let component = this.subject({
        options: testOptions,
        series: testSeries
    });
    let chartStyle = {
        fontFamily: '"Benton Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
        fontSize: '13px'
    };
    let options = Ember.$.extend( true, {
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