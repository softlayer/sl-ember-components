'use strict';

module.exports = function( environment ) {
    var ENV = {
        environment: environment,

        EmberENV: {
            FEATURES: {
            // Here you can enable experimental features on an ember canary build
            // e.g. 'with-controller': true
            }
        },

        APP: {
          // Here you can pass flags/options to your application instance when it is created
          // Also put default values here
        }
    };

    // overwrite default values for different environments as needed

    if ( 'development' === environment ) {
    }

    if ( 'test' === environment ) {
    }

    if ( 'production' === environment ) {
    }

    return ENV;
};
