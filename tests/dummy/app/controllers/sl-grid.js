import Ember from 'ember';
import SlGridMixin from 'sl-components/mixins/sl-grid-controller';
 
export default Ember.ArrayController.extend( SlGridMixin, {

    actions: {
        testAction: function(){
            alert( 'This is a test from the sl-grid controller!' );
        }
    },

    itemController: 'sl-grid-item',

    modelName: 'device',

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
                hideable: false
            },
            {
                key: 'ip',
                title: 'IP Address',
                sortable: true
            },
            {
                key: 'type',
                title: 'Device Type',
                sortable: true
            },
            {
                key: 'fmtProvisionDate',
                title: 'Provision Date',
                sortable: false
            }
        ]
    }
});
