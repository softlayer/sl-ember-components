/* global alert */
import Ember from 'ember';
import SlGetTranslate from 'sl-ember-translate/mixins/sl-get-translation';

export default Ember.ObjectController.extend( SlGetTranslate, {
    actions: {
        testItemAction: function() {
            alert( 'This is a test from the sl-grid-item controller!' );
        }
    },

    fmtProvisionDate: function() {
        return this.get( 'provisionDate' ).format( 'MM-DD-YY' );
    }.property( 'provisionDate' ),

    rowExpanderComponent: 'row-expander-content',

    actionsButton: [
        { action: 'testItemAction', label: 'Test' }
    ]
});
