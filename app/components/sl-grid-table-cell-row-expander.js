import Ember from 'ember';
import SlGridTableCell from './sl-grid-table-cell';

export default SlGridTableCell.extend({
    actions: {
        expandRow: function(){
            this.toggleProperty( 'row.rowExpanderIsOpen' );
        }
    },
    expanded: Ember.computed.bool( 'row.rowExpanderIsOpen' )
});
