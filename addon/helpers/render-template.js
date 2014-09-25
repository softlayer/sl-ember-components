import Ember from 'ember';

/**
 * Render a specified template with a model and options
 *
 * @param {string} templateName - Name of the template to render
 * @param {object} model - Model instance to supply the template with
 * @param {object} options - Options hash for render options
 */
export default function( templateName, model, options ) {
    options.types[ 0 ] = 'STRING';
    return Ember.Handlebars.helpers.render.call( this, templateName, model, options );
}
