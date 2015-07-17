import Ember from 'ember';

export default Ember.Controller.extend({
    components: new Ember.A([
        {
            name: 'alert',
            lib: { 'twb': true }
        }, {
            name: 'button',
            lib: { 'twb': true }
        }, {
            name: 'calendar',
            lib: { 'sec': true }
        }, {
            name: 'chart',
            lib: { 'hc': true }
        }, {
            name: 'checkbox',
            lib: { 'twb': true }
        }, {
            name: 'date-picker',
            lib: { 'bd': true }
        }, {
            name: 'date-range-picker',
            lib: { 'bd': true }
        }, {
            name: 'date-time',
            lib: { 'sec': true }
        }, {
            name: 'drop-button',
            lib: { 'twb': true }
        }, {
            name: 'drop-option',
            lib: { 'twb': true }
        }, {
            name: 'grid',
            lib: { 'sec': true }
        }, {
            name: 'input',
            lib: { 'twb': true, 'ta': true }
        }, {
            name: 'loading-icon',
            lib: { 'sec': true }
        }, {
            name: 'menu',
            lib: { 'sec': true }
        }, {
            name: 'modal',
            lib: { 'twb': true }
        }, {
            name: 'pagination',
            lib: { 'sec': true }
        }, {
            name: 'panel',
            lib: { 'twb': true, 'bd': true }
        }, {
            name: 'progress-bar',
            lib: { 'twb': true }
        }, {
            name: 'radio',
            lib: { 'sec': true }
        }, {
            name: 'radio-group',
            lib: { 'twb': true }
        }, {
            name: 'select',
            lib: { 's2': true }
        }, {
            name: 'span',
            lib: { 'sec': true }
        }, {
            name: 'tab-pane',
            lib: { 'twb': true }
        }, {
            name: 'tab-panel',
            lib: { 'twb': true }
        }, {
            name: 'textarea',
            lib: { 'sec': true }
        }, {
            name: 'tooltip',
            lib: { 'twb': true }
        }
    ])
});
