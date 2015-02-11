import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('sl-grid-table-header', 'SlGridTableHeaderComponent', {
    // Specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar']
});

test( 'it renders', function() {
    expect( 2 );

    // Creates the component instance
    var component = this.subject();
    equal( component._state, 'preRender' );

    // Renders the component to the page
    this.render();
    equal( component._state, 'inDOM' );
});
