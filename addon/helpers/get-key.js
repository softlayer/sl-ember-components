import Ember from 'ember';

export default function( objectKey, pathKey, context ) {
    var object = Ember.get( context, `data.view._keywords.${objectKey}` ),
        path   = Ember.get( context, `data.view._keywords.${pathKey}` );

    return Ember.get( object, path );
}
