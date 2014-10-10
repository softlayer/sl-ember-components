import Ember from 'ember';

/**
 * Lookup and render the template for a split-grid row's record
 *
 * @param {object} options - The Ember-supplied bound options representing the calling view's state
 */
export default function( options ) {
    var templateName = options.data.keywords.view.detailTemplate;

    options.contexts.push( options.data.keywords.view );
    options.types[ 0 ] = 'STRING';

    return Ember.Handlebars.helpers.render.call( this, templateName, 'activeRecord', options );
}
