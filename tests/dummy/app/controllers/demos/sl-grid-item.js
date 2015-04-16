/* global alert */
import Ember from 'ember';
import SlGetTranslate from 'sl-ember-translate/mixins/sl-get-translation';

export default Ember.Controller.extend( SlGetTranslate, {
    actions: {
        testItemAction() {
            alert( 'This is a test from the sl-grid-item controller!' );
        }
    },

    fmtProvisionDate: Ember.computed( 'provisionDate', function() {
        return this.get( 'provisionDate' ).format( 'MM-DD-YY' );
    }),

    rowExpanderComponent: 'row-expander-content',

    actionsButton: [
        { action: 'testItemAction', label: 'Test' }
    ]
});
