import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import startApp from '../../helpers/start-app';

let App;

moduleForComponent( 'sl-tab-pane', 'Unit | Component | sl tab pane', {
    needs: [ 'component:sl-tab-panel' ],

    beforeEach() {
        App = startApp();
    },

    afterEach() {
        Ember.run( App, App.destroy );
    },

    unit: true
});

test( 'Default property values', function( assert ) {
    const component = this.subject( {
        label: 'Test Label',
        name: 'Test Name'
    } );

    assert.strictEqual(
        component.get( 'data-tab-label' ),
        'Test Label',
        '"data-tab-label" is set to the value of "label"'
    );

    assert.strictEqual(
        component.get( 'data-tab-name' ),
        'Test Name',
        '"data-tab-name" is set to the value of "name"'
    );
});
