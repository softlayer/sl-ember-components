import Ember from 'ember';

export default function( templateKey, options ) {
    var templateName = options.contexts[ 0 ][ templateKey ];

    options.types[ 0 ] = 'STRING';

    return Ember.Handlebars.helpers.render.call( this, templateName, options );
}
