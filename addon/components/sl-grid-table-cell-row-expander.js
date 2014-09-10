import Ember from 'ember';
import SlGridTableCell from './sl-grid-table-cell';

export default SlGridTableCell.extend({
    actions: {
        toggleRowExpander: function(){
            //dummy action, click will fire below
        }
    },
    click: function(){
        this.toggleProperty( 'row.rowExpanderIsOpen' );
    },
    classNames: [ 'sl-grid-table-cell-expander' ],
    expanded: Ember.computed.bool( 'row.rowExpanderIsOpen' )
});
