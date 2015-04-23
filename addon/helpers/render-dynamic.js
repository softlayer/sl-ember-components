import Ember from 'ember';

/**
 * @module helpers
 */

/**
 * Call the render handlebars helper with a key value for the template name
 * lookup (render requires a string argument)
 *
 * @property {Object} render-dynamic
 */
export default {

    helperFunction( params, hash, options, env ) {
        params[ 0 ] = env.data.view._parentView[ params[ 0 ]._label ];

        return Ember.Handlebars.helpers.render.helperFunction(
            params, hash, options, env
        );
    },

    isHelper: true,

    isHTMLBars: true

};
