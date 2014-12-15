import Ember from 'ember';

/**
 * @module helpers
 */

/**
 * Lookup and output a split-grid row's cell value based on column's path
 *
 * @function split-grid-cell
 * @param    {object} options - The Ember-supplied bound options representing the calling view's state
 * @returns
 */
export default function( options ) {
    var templateName = options.data.keywords.view.column;

    options.contexts.push( options.data.keywords.view );
    options.types[ 0 ] = 'STRING';

    Ember.Handlebars.helpers.render.call( this, templateName, 'activeRecord', options );
}
