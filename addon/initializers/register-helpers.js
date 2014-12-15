import Ember from 'ember';
import GetKeyHelper from 'sl-ember-components/helpers/get-key';
import RenderComponentHelper from 'sl-ember-components/helpers/render-component';
import RenderTabPaneHelper from 'sl-ember-components/helpers/render-tab-pane';
import RenderTemplateHelper from 'sl-ember-components/helpers/render-template';
import SplitGridCellHelper from 'sl-ember-components/helpers/split-grid-cell';
import SplitGridDetailContentHelper from 'sl-ember-components/helpers/split-grid-detail-content';
import SplitGridDetailFooterHelper from 'sl-ember-components/helpers/split-grid-detail-footer';
import SplitGridDetailHeaderHelper from 'sl-ember-components/helpers/split-grid-detail-header';
import SplitGridFilterHelper from 'sl-ember-components/helpers/split-grid-filter';

/**
@module initializers
@class  register-helpers
*/
export default function() {
    Ember.Handlebars.registerHelper( 'get-key', GetKeyHelper );
    Ember.Handlebars.registerHelper( 'render-component', RenderComponentHelper );
    Ember.Handlebars.registerHelper( 'render-tab-pane', RenderTabPaneHelper );
    Ember.Handlebars.registerHelper( 'render-template', RenderTemplateHelper );
    Ember.Handlebars.registerHelper( 'split-grid-cell', SplitGridCellHelper );
    Ember.Handlebars.registerHelper( 'split-grid-detail-content', SplitGridDetailContentHelper );
    Ember.Handlebars.registerHelper( 'split-grid-detail-footer', SplitGridDetailFooterHelper );
    Ember.Handlebars.registerHelper( 'split-grid-detail-header', SplitGridDetailHeaderHelper );
    Ember.Handlebars.registerHelper( 'split-grid-filter', SplitGridFilterHelper );
}
