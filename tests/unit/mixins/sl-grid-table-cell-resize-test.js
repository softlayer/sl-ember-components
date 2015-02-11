import Ember from 'ember';
import SlGridTableCellResizeMixin from 'sl-ember-components/mixins/sl-grid-table-cell-resize';

module('SlGridTableCellResizeMixin');

// Replace this with your real tests.
test( 'It works', function() {
    var SlGridTableCellResizeObject = Ember.Component.extend( SlGridTableCellResizeMixin ),
        subject = SlGridTableCellResizeObject.create();

    ok( subject );
});
