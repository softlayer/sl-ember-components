import Ember from 'ember';

var Router = Ember.Router.extend({
    location: SlComponentsENV.locationType
});

Router.map( function () {
    this.route( 'index', { path: '/' });

    this.route( 'demos/alert',       { path: '/sl-alert' });
    this.route( 'demos/button',      { path: '/sl-button' });
    this.route( 'demos/calendar',    { path: '/sl-calendar' });
    this.route( 'demos/chart',       { path: '/sl-chart' });
    this.route( 'demos/checkbox',    { path: '/sl-checkbox' });
    this.route( 'demos/datepicker',  { path: '/sl-datepicker' });
    this.route( 'demos/dropbutton',  { path: '/sl-dropbutton' });
    this.route( 'demos/grid',        { path: '/sl-grid' });
    this.route( 'demos/input',       { path: '/sl-input' });
    this.route( 'demos/menu',        { path: '/sl-menu' });
    this.route( 'demos/radiogroup',  { path: '/sl-radiogroup' });
    this.route( 'demos/select',      { path: '/sl-select' });
    this.route( 'demos/simplemodal', { path: '/sl-simplemodal' });
    this.route( 'demos/tabpanel',    { path: '/sl-tabpanel' });
    this.route( 'demos/textarea',    { path: '/sl-textarea' });
    this.route( 'demos/tooltip',     { path: '/sl-tooltip' });
});

export default Router;
