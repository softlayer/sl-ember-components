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
     * @param {Object} params - Parameters passed in by a consuming template
     * @param {Object} hash - Values bound in a consuming template
     * @param {Object} options - The full options from the consuming template
     * @param {Object} env - The context this helper is run inside
     * @returns {String}
     */
    helperFunction( params, hash, options, env ) {
        const label = Ember.get( params[ 0 ], '_label' );
        const parentView = Ember.get( env.data.view, '_parentView' );

        params[ 0 ] = parentView[ label ];

        return Ember.Handlebars.helpers.render.helperFunction(
            params, hash, options, env
        );
    },

    /** @type {Boolean} */
    isHelper: true,

    /** @type {Boolean} */
    isHTMLBars: true

};
