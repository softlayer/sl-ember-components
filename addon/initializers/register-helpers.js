import Ember from 'ember';
import GetKeyHelper from 'sl-ember-components/helpers/get-key';
import GridCellHelper from 'sl-ember-components/helpers/grid-cell';
import RenderDynamicHelper from 'sl-ember-components/helpers/render-dynamic';

/**
@module initializers
@class  register-helpers
*/
export default function() {
    Ember.Handlebars.registerHelper( 'get-key', GetKeyHelper );
    Ember.Handlebars.registerHelper( 'grid-cell', GridCellHelper );
    Ember.Handlebars.registerHelper( 'render-dynamic', RenderDynamicHelper );
}
