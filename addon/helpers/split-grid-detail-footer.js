import Ember from 'ember';

/**
 * @module helpers
 */

/**
 * Lookup and output a split-grid row's cell value based on column's path
 *
 * @function split-grid-detail-footer
 * @param    {object} options - The Ember-supplied bound options representing
 *                    the calling view's state
 * @returns  {void}
 */
export default function( options ) {
    var templateName = options.data.keywords.view.detailFooterTemplate,
        detailName   = options.data.keywords.view.detailName;

    options.contexts.push( options.data.keywords.view );
    options.hash.controller = detailName;
    options.types[ 0 ] = 'STRING';

    Ember.Handlebars.helpers.render.call( this, templateName, 'activeRecord', options );
}
