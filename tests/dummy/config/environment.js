/* jshint node: true */

module.exports = function( environment ) {
    const ENV = {
        modulePrefix: 'dummy',
        environment: environment,
        baseURL: '/',
        baseAssetsURL: '/sl-ember-components/',
        locationType: 'auto',

        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary
                // build (e.g. 'with-controller': true)
            }
        },

        APP: {
            // Here you can pass flags/options to your application instance
            // when it is created
        }
    };

    if ( 'development' === environment ) {
        // We want to be able to host the demo app without `ember serve`
        ENV.locationType = 'hash';

        // ENV.APP.LOG_RESOLVER = true;
        // ENV.APP.LOG_ACTIVE_GENERATION = true;
        // ENV.APP.LOG_TRANSITIONS = true;
        // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
        // ENV.APP.LOG_VIEW_LOOKUPS = true;
    }

    if ( 'test' === environment ) {
        // Testem prefers this...
        ENV.baseURL = '/';
        ENV.locationType = 'none';

        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;

        ENV.APP.rootElement = '#ember-testing';
    }

    // if ( 'production' === environment ) {

    return ENV;
};
