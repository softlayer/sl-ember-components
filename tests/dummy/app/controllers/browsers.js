import Ember from 'ember';

export default Ember.Controller.extend({
    components: [
        { name: 'alert',                      lib: { 'twb': true } },
        { name: 'button',                     lib: { 'twb': true } },
        { name: 'calendar',                   lib: { 'sec': true } },
        { name: 'chart',                      lib: { 'hc': true } },
        { name: 'checkbox',                   lib: { 'twb': true } },
        { name: 'date-picker',                lib: { 'bd': true } },
        { name: 'date-range-picker',          lib: { 'bd': true } },
        { name: 'date-time',                  lib: { 'sec': true } },
        { name: 'dialog',                     lib: { 'twb': true } },
        { name: 'drop-button',                lib: { 'twb': true } },
        { name: 'grid system',                lib: { 'sec': true, 'set': true } },
        { name: 'input',                      lib: { 'twb': true, 'ta': true } },
        { name: 'loading-icon',               lib: { 'sec': true } },
        { name: 'menu',                       lib: { 'sec': true } },
        { name: 'pagination-controls',        lib: { 'sec': true } },
        { name: 'pagination-info',            lib: { 'sec': true, 'set': true, 'ses': true } },
        { name: 'pagination-per-page-select', lib: { 'sec': true, 'set': true, 's2': true } },
        { name: 'panel',                      lib: { 'twb': true, 'bd': true } },
        { name: 'progress-bar',               lib: { 'twb': true } },
        { name: 'radio',                      lib: { 'sec': true } },
        { name: 'radio-group',                lib: { 'twb': true } },
        { name: 'select',                     lib: { 's2': true } },
        { name: 'span',                       lib: { 'sec': true } },
        { name: 'split-grid',                 lib: { 'sec': true } },
        { name: 'tab-panel',                  lib: { 'twb': true } },
        { name: 'textarea',                   lib: { 'sec': true } },
        { name: 'tooltip',                    lib: { 'twb': true } }
    ]
});
