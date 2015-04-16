/* global alert */

import Ember from 'ember';
import SlGridMixin from 'sl-ember-components/mixins/sl-grid-controller';

export default Ember.ArrayController.extend( SlGridMixin, {

    actions: {

        testAction() {
            alert( 'This is a test from the sl-grid controller!' );
        }

    },

    itemController: 'demos.sl-grid-item',

    gridDefinition: {
        options: {
            rowExpander  : true,
            settingsMenu : {
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
                component: 'sl-grid-table-cell-row-expander',
                cssClass: 'sl-grid-table-cell-row-expander',
                cssThClass: 'sl-grid-table-cell-row-expander',
                movable: false,
                fixedWidth: 30
            }, {
                component: 'sl-grid-table-cell',
                key: 'name',
                title: 'HOSTNAME',
                defaultText: 'translate.UNKNOWNDEVICE',
                sortable: true,
                resizable: true,
                widthHint: 2
            }, {
                component: 'sl-grid-table-cell',
                key: 'ip',
                title: 'IPADDRESS',
                sortable: true,
                hideable: true,
                resizable: true,
                widthHint: 1
            }, {
                component: 'sl-grid-table-cell',
                key: 'type',
                title: 'DEVICETYPE',
                sortable: true,
                hideable: true,
                resizable: true,
                widthHint: 1
            }, {
                component: 'sl-grid-table-cell',
                key: 'notes',
                title: 'NOTES',
                hideable: true,
                resizable: true,
                widthHint: 2
            }, {
                component: 'sl-grid-table-cell',
                key: 'fmtProvisionDate',
                title: 'PROVISIONDATE',
                hideable: true,
                resizable: true,
                widthHint: 1
            }, {
                cssClass: 'sl-grid-table-cell-actions',
                cssThClass: 'sl-grid-table-cell-actions',
                component: 'sl-grid-table-cell-actions',
                movable: false,
                fixedWidth: 120
            }
        ]
    }

});
