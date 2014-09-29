import Ember from 'ember';

export default function( key, options ) {
    console.log( options.contexts[ 0 ]);

    options.types[ 0 ] = 'STRING';

    return 'Okay';
}
