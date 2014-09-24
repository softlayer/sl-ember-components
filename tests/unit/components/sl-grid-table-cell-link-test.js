import { test, moduleForComponent } from 'ember-qunit';

moduleForComponent( 'sl-grid-table-cell-link', 'Component: Sl-Grid-Table-Cell-Link', {
    needs: [ 'helper:get-key' ]
});

test( 'it renders', function() {
  expect( 2 );

  // Creates the component instance
  var component = this.subject();
  equal( component.state, 'preRender' );

  // Appends the component to the page
  this.append();
  equal( component.state, 'inDOM' );
});
