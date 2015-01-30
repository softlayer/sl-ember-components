import Ember from 'ember';
import GetKeyHelper from 'sl-ember-components/helpers/get-key';
import RenderComponentHelper from 'sl-ember-components/helpers/render-component';
import RenderDynamicHelper from 'sl-ember-components/helpers/render-dynamic';
import SplitGridCellHelper from 'sl-ember-components/helpers/split-grid-cell';

/**
@module initializers
@class  register-helpers
*/
export default function() {
    Ember.Handlebars.registerHelper( 'get-key', GetKeyHelper );
    Ember.Handlebars.registerHelper( 'render-component', RenderComponentHelper );
    Ember.Handlebars.registerHelper( 'render-dynamic', RenderDynamicHelper );
    Ember.Handlebars.registerHelper( 'split-grid-cell', SplitGridCellHelper );
}
