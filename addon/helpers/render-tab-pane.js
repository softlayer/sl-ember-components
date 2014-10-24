import Ember from 'ember';

/**
 * Render the sl-tab-pane content based on template key string
 *
 * @module   helpers
 * @function render-tab-pane
 * @param    {string} templateKey - The string key for the template name lookup
 * @return   {string} The rendered template
 */
export default function( templateKey, options ) {
    var templateName = options.contexts[ 0 ][ templateKey ];

    options.types[ 0 ] = 'STRING';

    return Ember.Handlebars.helpers.render.call( this, templateName, options );
}
