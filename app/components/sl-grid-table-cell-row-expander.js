import Ember from 'ember';
import SlGridTableCell from './sl-grid-table-cell';

export default SlGridTableCell.extend({
    actions: {
        expandRow: function(){
            this.toggleProperty( 'row.rowExpanderIsOpen' );
        }
    },
    classNames: [ 'sl-grid-table-cell-expander' ],
    expanded: Ember.computed.bool( 'row.rowExpanderIsOpen' )
});
