import Ember from 'ember';

var Router = Ember.Router.extend({
    location: SlComponentsENV.locationType
});

Router.map( function () {
    this.route( 'index', { path: '/' });

    this.route( 'demos/alert',             { path: '/sl-alert' });
    this.route( 'demos/button',            { path: '/sl-button' });
    this.route( 'demos/calendar',          { path: '/sl-calendar' });
    this.route( 'demos/chart',             { path: '/sl-chart' });
    this.route( 'demos/checkbox',          { path: '/sl-checkbox' });
    this.route( 'demos/date-picker',       { path: '/sl-date-picker' });
    this.route( 'demos/date-range-picker', { path: '/sl-date-range-picker' });
    this.route( 'demos/date-time',         { path: '/sl-date-time' });
    this.route( 'demos/drop-button',       { path: '/sl-drop-button' });
    this.route( 'demos/grid',              { path: '/sl-grid' });
    this.route( 'demos/input',             { path: '/sl-input' });
    this.route( 'demos/loading-icon',      { path: '/sl-loading-icon' });
    this.route( 'demos/menu',              { path: '/sl-menu' });
    this.route( 'demos/panel',             { path: '/sl-panel' });
    this.route( 'demos/progress-bar',      { path: '/sl-progress-bar' });
    this.route( 'demos/radio-group',       { path: '/sl-radio-group' });
    this.route( 'demos/select',            { path: '/sl-select' });
    this.route( 'demos/simple-modal',      { path: '/sl-simple-modal' });
    this.route( 'demos/span',              { path: '/sl-span' });
    this.route( 'demos/tab-panel',         { path: '/sl-tab-panel' });
    this.route( 'demos/textarea',          { path: '/sl-textarea' });
    this.route( 'demos/tooltip',           { path: '/sl-tooltip' });
});

export default Router;
