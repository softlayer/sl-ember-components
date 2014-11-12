import Ember from 'ember';
import GetKeyHelper from 'sl-components/helpers/get-key';
import RenderComponentHelper from 'sl-components/helpers/render-component';
import RenderTabPaneHelper from 'sl-components/helpers/render-tab-pane';
import RenderTemplateHelper from 'sl-components/helpers/render-template';
import SplitGridCellValueHelper from 'sl-components/helpers/split-grid-cell-value';
import SplitGridDetailContentHelper from 'sl-components/helpers/split-grid-detail-content';
import SplitGridFilterHelper from 'sl-components/helpers/split-grid-filter';

/**
@module initializers
@class  register-helpers
*/
export default function() {
    Ember.Handlebars.registerHelper( 'get-key', GetKeyHelper );
    Ember.Handlebars.registerHelper( 'render-component', RenderComponentHelper );
    Ember.Handlebars.registerHelper( 'render-tab-pane', RenderTabPaneHelper );
    Ember.Handlebars.registerHelper( 'render-template', RenderTemplateHelper );
    Ember.Handlebars.registerHelper( 'split-grid-cell-value', SplitGridCellValueHelper );
    Ember.Handlebars.registerHelper( 'split-grid-detail-content', SplitGridDetailContentHelper );
    Ember.Handlebars.registerHelper( 'split-grid-filter', SplitGridFilterHelper );
}
