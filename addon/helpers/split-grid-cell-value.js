import Ember from 'ember';

/**
 * Lookup and output a split-grid row's cell value based on column's path
 *
 * @param {object} options - The Ember-supplied bound options representing the calling view's state
 */
export default function( options ) {
    var column = options.data.keywords.column,
        path = Ember.get( column, 'path' ),
        row = options.data.keywords.row;

    return new Ember.Handlebars.SafeString( Ember.get( row, path ));
}
