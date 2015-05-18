import Ember from 'ember';

/**
 * @module
 */

/**
 * Call the render handlebars helper with a key value for the template name
 * lookup (render requires a string argument)
 *
 * @type {Object}
 */
export default {

    /**
     * @function
     * @param {Object} params
     * @param {Object} hash
     * @param {Object} options
     * @param {Object} env
     * @returns {String}
     */
    helperFunction( params, hash, options, env ) {
        params[ 0 ] = env.data.view._parentView[ params[ 0 ]._label ];

        return Ember.Handlebars.helpers.render.helperFunction(
            params, hash, options, env
        );
    },

    /** @type {Boolean} */
    isHelper: true,

    /** @type {Boolean} */
    isHTMLBars: true

};
