import Ember from 'ember';
import GetKeyHelper from 'sl-ember-components/helpers/get-key';
import RenderDynamicHelper from 'sl-ember-components/helpers/render-dynamic';

/**
 * @module
 */

/**
 * Register the addon helpers to Handlebars
 *
 * @function
 * @returns {undefined}
*/
export default function() {
    Ember.Handlebars.registerHelper( 'get-key', GetKeyHelper );
    Ember.Handlebars.registerHelper( 'render-dynamic', RenderDynamicHelper );
}
