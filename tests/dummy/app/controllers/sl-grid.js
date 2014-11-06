import Ember from 'ember';
import SlGridMixin from 'sl-components/mixins/sl-grid-controller';
 
export default Ember.ArrayController.extend( SlGridMixin, {

    actions: {
        /**
         * Trigger reload of the model
         *
         * @function actions.reload
         * @returns  {void}
         */
        reload: function() {
            this.reloadModel( true );
        },

        /**
         * testAction - simple test action
         * @return {void}
         */
        testAction: function(){
            alert( 'This is a test from the sl-grid controller!' );
        }
    },

    itemController: 'sl-grid-item',

    gridDefinition: {
        options: {
            rowExpander      : true,
            actionsColumn    : true,
            settingsMenu     : {
                translationKeys: {
                    actions: 'Actions',
                    columns: 'Columns',
                    resetColumnsToDefaults: 'Reset Columns'
                },
                actions: [
                    {
                        icon: '',
                        label: 'Test Action',
                        action: 'testAction'
                    }
                ],
                hideableColumns: true
            }
        },
        columns: [
            {
                key: 'name',
                title: 'Hostname',
                sortable: true,
                hideable: false,
                widthHint: 2
            },
            {
                key: 'ip',
                title: 'IP Address',
                sortable: true,
                widthHint: 1
            },
            {
                key: 'type',
                title: 'Device Type',
                sortable: true,
                widthHint: 1
            },
            {
                key: 'fmtProvisionDate',
                title: 'Provision Date',
                sortable: false,
                widthHint: 1
            }
        ]
    },

    /**
     * Reload the model for this controller
     *
     * @function reloadModel
     * @return {void}
     */
    reloadModel: function() {
        var model = this.store.find( 'device' );

        this.set( 'model', model );
    },
});
