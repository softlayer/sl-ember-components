import { test, moduleForComponent } from 'ember-qunit';

moduleForComponent( 'sl-grid-header-settings', 'SlGridHeaderSettingsComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
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
