import Ember from 'ember';

/**
 * @module helpers
 */

/**
 * Call the render handlebars helper with a key value for the template name
 * lookup (render requires a string argument)
 *
 * @function render-dynamic
 * @param    {Ember.String} renderKey - The key variable name to lookup and render
 * @param    {Ember.Object} model     - A model to use for the rendered view
 * @param    {Ember.Object} options   - Handlebars helper options
 * @returns
 */
export default function( renderKey, model, options ) {
    if ( !options ) {
        options = model;
        model = null;
    }

    var viewName = options.data.keywords.view[ renderKey ];

    options.types[ 0 ] = 'STRING';

    if ( model === null ) {
        return Ember.Handlebars.helpers.render( viewName, options );
    } else {
        return Ember.Handlebars.helpers.render( viewName, model, options );
    }
}
