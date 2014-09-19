import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route( 'index', { path: '/' });

    this.route( 'alert',             { path: '/sl-alert' });
    this.route( 'button',            { path: '/sl-button' });
    this.route( 'calendar',          { path: '/sl-calendar' });
    this.route( 'chart',             { path: '/sl-chart' });
    this.route( 'checkbox',          { path: '/sl-checkbox' });
    this.route( 'date-picker',       { path: '/sl-date-picker' });
    this.route( 'date-range-picker', { path: '/sl-date-range-picker' });
    this.route( 'date-time',         { path: '/sl-date-time' });
    this.route( 'drop-button',       { path: '/sl-drop-button' });
    this.route( 'grid',              { path: '/sl-grid' });
    this.route( 'input',             { path: '/sl-input' });
    this.route( 'loading-icon',      { path: '/sl-loading-icon' });
    this.route( 'menu',              { path: '/sl-menu' });
    this.route( 'pagination',        { path: '/sl-pagination' });
    this.route( 'panel',             { path: '/sl-panel' });
    this.route( 'progress-bar',      { path: '/sl-progress-bar' });
    this.route( 'radio-group',       { path: '/sl-radio-group' });
    this.route( 'select',            { path: '/sl-select' });
    this.route( 'simple-modal',      { path: '/sl-simple-modal' });
    this.route( 'span',              { path: '/sl-span' });
    this.route( 'tab-panel',         { path: '/sl-tab-panel' });
    this.route( 'textarea',          { path: '/sl-textarea' });
    this.route( 'tooltip',           { path: '/sl-tooltip' });
});

export default Router;
