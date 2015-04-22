import Ember from 'ember';

/**
 * @module helpers
 */

/**
 * Call the render handlebars helper with a key value for the template name
 * lookup (render requires a string argument)
 *
 * @function render-dynamic
 * @param {String} viewPath - The name of the keyword variable to render
 * @param {String} modelPath - The name of the keyword variable to use for model
 * @param {Ember.Object} env - The env context of the helper caller
 * @returns {undefined}
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
