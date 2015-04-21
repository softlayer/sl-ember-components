import Ember from 'ember';
import GetKeyHelper from 'sl-ember-components/helpers/get-key';
import GridCellHelper from 'sl-ember-components/helpers/grid-cell';
import RenderComponentHelper from 'sl-ember-components/helpers/render-component';
import RenderDynamicHelper from 'sl-ember-components/helpers/render-dynamic';

/**
@module initializers
@class  register-helpers
*/
export default function() {
    Ember.Handlebars.registerHelper( 'get-key', GetKeyHelper );
    Ember.Handlebars.registerHelper( 'grid-cell', GridCellHelper );
    Ember.Handlebars.registerHelper( 'render-component', RenderComponentHelper );
    Ember.Handlebars.registerHelper( 'render-dynamic', RenderDynamicHelper );
}
