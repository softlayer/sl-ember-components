import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-grid-table-header', 'Unit - component: sl-grid-table-header' );

test( 'It renders', function() {
    // Create the component instance
    var component = this.subject();
    equal( component._state, 'preRender' );

    // Render the component to the page
    this.render();
    equal( component._state, 'inDOM' );
});
