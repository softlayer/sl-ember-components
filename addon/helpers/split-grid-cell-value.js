import Ember from 'ember';

export default function( options ) {
    var column = options.data.keywords.column,
        path = Ember.get( column, 'path' ),
        row = options.data.keywords.row;

    return new Ember.Handlebars.SafeString( Ember.get( row, path ));
}
