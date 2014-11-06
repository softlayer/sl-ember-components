import Ember from 'ember';
 
export default Ember.ObjectController.extend( {
    actions: {
        testItemAction: function(){
            alert( 'This is a test from the sl-grid-item controller!' );
        }
    },

    fmtProvisionDate: function(){
        return this.get( 'provisionDate' ).format( 'MM-DD-YY' );
    }.property( 'provisionDate' ),

    rowExpanderComponent: 'row-expander-content',

    actionsButton: [
        { action: 'testItemAction', label: 'Test'}
    ]
});