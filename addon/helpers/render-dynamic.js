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
export default function( viewPath, modelPath, env ) {
    var hash     = {},
        viewName = Ember.get( env, `data.view._keywords.view.${viewPath}` ),
        options  = [],
        model;

    if ( modelPath ) {
        model = Ember.get( env, `data.view._keywords.view.${modelPath}` );
    }

    if ( model ) {
        return Ember.Handlebars.helpers.render.helperFunction(
            [ viewName.replace( /\//g, '.' ), model ],
            hash, options, env
        );
    }
}
