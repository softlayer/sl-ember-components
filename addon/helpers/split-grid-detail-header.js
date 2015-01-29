import Ember from 'ember';

/**
 * @module helpers
 */

/**
 * Render a split-grid table header cell based on relevant split-grid view settings
 *
 * @function split-grid-detail-header
 * @param    {Ember.Object} options - The Ember-supplied bound options
 *                          representing the calling view's state
 * @returns  {void}
 */
export default function( options ) {
    var templateName = options.data.keywords.view.detailHeader,
        detailName   = options.data.keywords.view.detail;

    options.contexts.push( options.data.keywords.view );
    options.hash.controller = detailName;
    options.types[ 0 ] = 'STRING';

    Ember.Handlebars.helpers.render.call( this, templateName, 'activeRecord', options );
}
