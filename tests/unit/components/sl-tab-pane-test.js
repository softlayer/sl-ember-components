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
    const component = this.subject();

    assert.strictEqual(
        component.get( 'label' ),
        null,
        '"label" is "null"'
    );

    assert.strictEqual(
        component.get( 'name' ),
        null,
        '"name" is "null"'
    );

    assert.strictEqual(
        component.get( 'data-tab-label' ),
        null,
        '"data-tab-label" is "null"'
    );

    assert.strictEqual(
        component.get( 'data-tab-name' ),
        null,
        '"data-tab-name" is "null"'
    );
});
