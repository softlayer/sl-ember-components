import Ember from 'ember';

/**
 * @module helpers
 */

/**
 * Lookup and render the template for a split-grid row's record
 *
 * @function split-grid-detail-content
 * @param    {object} options - The Ember-supplied bound options representing the calling view's state
 * @returns  {void}
 */
export default function( options ) {
    var templateName = options.data.keywords.view.detailTemplate;

    options.contexts.push( options.data.keywords.view );
    options.types[ 0 ] = 'STRING';

    Ember.Handlebars.helpers.render.call( this, templateName, 'activeRecord', options );
}
