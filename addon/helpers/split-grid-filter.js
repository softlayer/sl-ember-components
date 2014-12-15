import Ember from 'ember';

/**
 * @module helpers
 */

/**
 * Render the split-grid's filter template based on templateKey
 *
 * @function split-grid-filter
 * @param    {object} options
 * @returns  {string}
 */
export default function( options ) {
    var name = options.data.keywords.view.filterName;

    options.types[ 0 ] = 'STRING';

    Ember.Handlebars.helpers.render.call( this, name, options );
}
