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

test( 'updateData() is called once', function( assert ) {
    let component = this.subject({
        options: testOptions, 
        series: testSeries 
    });

    let spy = sinon.spy( component, 'updateData');

    this.render();

    assert.equal(
        spy.calledOnce,
        true,
        'updateData() is called once'
    );
});

test( '"Options" property needs to be an object', function( assert ) {
    let assertionThrown = false;

    try {
        this.subject({
            options: null,
            series: testSeries
        });
    }  catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'testOptions was empty'
    );

    assertionThrown = false;

    try {
        this.subject({
            options: "string",
            series: testOptions
        });
    }  catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'testOptions was string'
    );

    assertionThrown = false;

    try {
        this.subject({
            options: undefined,
            series: testSeries
        });
    }  catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'testOptions was undefined'
    );

    assertionThrown = false;

    try {
        this.subject({
            options: true,
            series: testSeries
        });
    }  catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'testOptions was a boolean'
    );

    assertionThrown = false;

    try {
        this.subject({
            options: 666,
            series: testSeries
        });
    }  catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'testOptions was number'
    );

    assertionThrown = false;

    try {
        this.subject({
            options: function(){},
            series: testSeries
        });
    }  catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'testOptions was a function'
    );

    assertionThrown = false;

    try {
        this.subject({
            options: testOptions,
            series: testSeries
        });
    }  catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        !assertionThrown,
        'testOptions was an Object'
    );
});

test( '"Series" property needs to be an array', function( assert ) {

    let assertionThrown = false;

    try {
        this.subject({
            options: testOptions,
            series: null
        });
    }  catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'testSeries was empty'
    );

    assertionThrown = false;

    try {
        this.subject({
            options: testOptions,
            series: "string"
        });
    }  catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'testSeries was string'
    );

    assertionThrown = false;

    try {
        this.subject({
            options: testOptions,
            series: undefined
        });
    }  catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'testSeries was undefined'
    );

    assertionThrown = false;

    try {
        this.subject({
            options: testOptions,
            series: true
        });
    }  catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'testSeries was a boolean'
    );

    assertionThrown = false;

    try {
        this.subject({
            options: testOptions,
            series: 666
        });
    }  catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'testSeries was number'
    );

    assertionThrown = false;

    try {
        this.subject({
            options: testOptions,
            series: function(){}
        });
    }  catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'testSeries was a function'
    );

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
        'testSeries was an Array'
    );
});

test( "Style method returns correct string", function( assert ) {
    let component = this.subject({
        options: testOptions, 
        series: testSeries
    });

    assert.equal( component.get( 'style' ).string, 'height: auto; width: auto;' );

    component.set( 'height', 10 );

    assert.equal( component.get( 'style' ).string, 'height: 10; width: auto;' );
});

test( "Title property is set", function( assert ) {
    let component = this.subject({
        options: testOptions, 
        series: testSeries
    });

    assert.equal( component.get( 'title' ), null );

    component.set( 'title', 'Peak server hours' );

    assert.equal( component.get( 'title' ), 'Peak server hours' );
});

test( "Chart property is set after setupChart() is ran", function( assert ) {
    let component = this.subject({
        options: testOptions, 
        series: testSeries
    });

    assert.equal( component.get( 'chart' ), null);

    this.render();

    assert.ok( component.get( 'chart' ), 'chart is rendered' );
});