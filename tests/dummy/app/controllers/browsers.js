import Ember from 'ember';

export default Ember.Controller.extend({
    components: Ember.A([
        {
            name: 'sl-alert',
            lib: { 'twb': true }
        },
        {
            name: 'sl-button',
            lib: { 'twb': true }
        },
        {
            name: 'sl-calendar',
            lib: { 'sec': true }
        },
        {
            name: 'sl-chart',
            lib: { 'hc': true }
        },
        {
            name: 'sl-checkbox',
            lib: { 'twb': true }
        },
        {
            name: 'sl-date-picker',
            lib: { 'sec': true }
        },
        {
            name: 'sl-date-range-picker',
            lib: { 'sec': true }
        },
        {
            name: 'sl-date-time',
            lib: { 'sec': true }
        },
        {
            name: 'sl-drop-button',
            lib: { 'twb': true }
        },
        {
            name: 'sl-drop-option',
            lib: { 'twb': true }
        },
        {
            name: 'sl-grid',
            lib: { 'sec': true }
        },
        {
            name: 'sl-input',
            lib: { 'twb': true, 'ta': true }
        },
        {
            name: 'sl-menu',
            lib: { 'sec': true }
        },
        {
            name: 'sl-modal',
            lib: { 'twb': true }
        },
        {
            name: 'sl-pagination',
            lib: { 'sec': true }
        },
        {
            name: 'sl-panel',
            lib: { 'twb': true }
        },
        {
            name: 'sl-progress-bar',
            lib: { 'twb': true }
        },
        {
            name: 'sl-radio',
            lib: { 'sec': true }
        },
        {
            name: 'sl-radio-group',
            lib: { 'twb': true }
        },
        {
            name: 'sl-select',
            lib: { 's2': true }
        },
        {
            name: 'sl-span',
            lib: { 'sec': true }
        },
        {
            name: 'sl-tab-pane',
            lib: { 'twb': true }
        },
        {
            name: 'sl-tab-panel',
            lib: { 'twb': true }
        },
        {
            name: 'sl-textarea',
            lib: { 'sec': true }
        },
        {
            name: 'sl-tooltip',
            lib: { 'twb': true }
        }
    ])
});
