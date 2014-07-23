import Ember from 'ember';

var Router = Ember.Router.extend({
    location: SlComponentsENV.locationType
});

Router.map( function () {
    this.route( 'index', { path: '/' });

    this.route( 'sl-alert' );
    this.route( 'sl-button' );
    this.route( 'sl-calendar' );
    this.route( 'sl-chart' );
    this.route( 'sl-checkbox' );
    this.route( 'sl-datepicker' );
    this.route( 'sl-dropbutton' );
    this.route( 'sl-grid' );
    this.route( 'sl-input' );
    this.route( 'sl-radiogroup' );
    this.route( 'sl-select' );
    this.route( 'sl-simplemodal' );
    this.route( 'sl-tabpanel' );
    this.route( 'sl-textarea' );
    this.route( 'sl-tooltip' );
});

export default Router;
