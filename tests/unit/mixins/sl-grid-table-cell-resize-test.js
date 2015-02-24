import Ember from 'ember';
import SlGridTableCellResizeMixin from 'sl-ember-components/mixins/sl-grid-table-cell-resize';

module( 'Unit - mixin: sl-grid-table-cell-resize' );

// Replace this with your real tests.
test( 'It works', function( assert ) {
    var SlGridTableCellResizeObject = Ember.Component.extend( SlGridTableCellResizeMixin ),
        subject = SlGridTableCellResizeObject.create();

    assert.ok( subject );
});
