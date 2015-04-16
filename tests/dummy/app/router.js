import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType,

    scrollToTopAfterRouteTransition: Ember.observer( 'url', function() {
        window.scrollTo( 0, 0 );
    })
});

Router.map( function() {
    this.route( 'index', { path: '/' });
    this.route( 'browsers' );

    this.resource( 'demos', function() {
        this.route( 'sl-alert' );
        this.route( 'sl-button' );
        this.route( 'sl-calendar' );
        this.route( 'sl-chart' );
        this.route( 'sl-checkbox' );
        this.route( 'sl-date-picker' );
        this.route( 'sl-date-range-picker' );
        this.route( 'sl-date-time' );
        this.route( 'sl-dialog' );
        this.route( 'sl-drop-button' );
        this.route( 'sl-input' );
        this.route( 'sl-grid' );
        this.route( 'sl-loading-icon' );
        this.route( 'sl-menu' );
        this.route( 'sl-pagination-controls' );
        this.route( 'sl-pagination-info' );
        this.route( 'sl-pagination-per-page-select' );
        this.route( 'sl-panel' );
        this.route( 'sl-progress-bar' );
        this.route( 'sl-radio' );
        this.route( 'sl-radio-group' );
        this.route( 'sl-select' );
        this.route( 'sl-span' );
        this.route( 'sl-tab-panel' );
        this.route( 'sl-textarea' );
        this.route( 'sl-tooltip' );
    });
});

export default Router;
