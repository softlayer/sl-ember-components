import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-grid-table-header', 'Unit - component: sl-grid-table-header' );

test( 'It renders', function( assert ) {
    // Create the component instance
    var component = this.subject();
    assert.equal( component._state, 'preRender' );

    // Render the component to the page
    this.render();
    assert.equal( component._state, 'inDOM' );
});
