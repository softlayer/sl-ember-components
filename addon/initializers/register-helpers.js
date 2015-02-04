import Ember from 'ember';
import getKeyHelper from 'sl-ember-components/helpers/get-key';
import renderComponentHelper from 'sl-ember-components/helpers/render-component';
import renderDynamicHelper from 'sl-ember-components/helpers/render-dynamic';
import splitGridCellHelper from 'sl-ember-components/helpers/split-grid-cell';

/**
 * @module   initializers
 * @function register-helpers
 * @returns  {void}
*/
export default function() {
    Ember.Handlebars.helper( 'get-key', getKeyHelper );
    Ember.Handlebars.registerHelper( 'render-component', renderComponentHelper );
    Ember.Handlebars.registerHelper( 'render-dynamic', renderDynamicHelper );
    Ember.Handlebars.registerHelper( 'split-grid-cell', splitGridCellHelper );
}
