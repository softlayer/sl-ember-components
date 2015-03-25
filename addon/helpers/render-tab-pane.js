import Ember from 'ember';

/**
 * @module helpers
 */

/**
 * Render the sl-tab-pane content based on template key string
 *
 * @function render-tab-pane
 * @param    {string} templateKey - The string key for the template name lookup
 * @return   {string} The rendered template
 */
export default function( templateKey, options ) {
    let templateName = this.get( `context.${templateKey}` );

    return Ember.Handlebars.helpers.render.helperFunction.call( this, [ templateName ], options, options, options );
}
