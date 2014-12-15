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
    var name = options.data.keywords.view.detailName;

    options.contexts.push( options.data.keywords.view );
    options.types[ 0 ] = 'STRING';

    Ember.Handlebars.helpers.render.call( this, name, 'activeRecord', options );
}
