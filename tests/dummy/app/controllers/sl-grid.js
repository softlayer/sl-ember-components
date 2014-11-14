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
                    actions: 'ACTIONS',
                    columns: 'COLUMNS',
                    resetColumnsToDefaults: 'RESETCOLUMNS'
                },
                actions: [
                    {
                        label: 'TESTACTION',
                        action: 'testAction'
                    }
                ],
                hideableColumns: true
            }
        },
        columns: [
            {
                key: 'name',
                title: 'HOSTNAME',
                defaultText: 'translate.UNKNOWNDEVICE',
                sortable: true,
                hideable: false,
                widthHint: 2
            },
            {
                key: 'ip',
                title: 'IPADDRESS',
                sortable: true,
                widthHint: 1
            },
            {
                key: 'type',
                title: 'DEVICETYPE',
                sortable: true,
                widthHint: 1
            },
            {
                key: 'notes',
                title: 'NOTES',
                sortable: false,
                widthHint: 3
            },
            {
                key: 'fmtProvisionDate',
                title: 'PROVISIONDATE',
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
