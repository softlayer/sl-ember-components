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
    var column       = options.data.keywords.column,
        row          = options.data.keywords.row,
        templateName = Ember.get( column, 'template' ),
        valuePath    = Ember.get( column, 'valuePath' );

    if ( valuePath ) {
        return new Ember.Handlebars.SafeString( Ember.get( row, valuePath ) );
    }

    options.contexts.push( options.data.keywords.view );
    options.types[ 0 ] = 'STRING';

    Ember.Handlebars.helpers.render.call( this, templateName, 'row', options );
}