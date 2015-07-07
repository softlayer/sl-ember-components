import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

var object = {
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

var series = Ember.A([
    { name: 'Alice', data: [ 1, 0, 4 ] }
]);

moduleForComponent( 'sl-chart', 'Unit | Component | sl chart', {
	unit: true
});

test( 'Default classNames are present', function( assert ) {
    this.subject({ object, series });

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
    var component = this.subject({ object, series });

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

test('setupChart() is called once', function(assert) {
    var component = this.subject({ object, series });
    
    let spy = sinon.spy( component, 'setupChart');

    this.render();

    assert.equal(
        spy.calledOnce,
        true,
        'setupChart() is called once'
    );
});

test( '"Options" property needs to be an object', function( assert ) {
    let assertionThrown = false;

    try {
        this.subject({
            options: object,
            series: series
        });
    }  catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        !assertionThrown,
        'proptery was an Object'
    );
});

test( '"Series" property needs to be an array', function( assert ) {
    let assertionThrown = false;

    try {
        this.subject({
            options: object,
            series: series
        });
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        !assertionThrown,
        'Property was an Array'
    );
});