import Ember from 'ember';
import GetKeyHelper from 'sl-ember-components/helpers/get-key';
import RenderComponentHelper from 'sl-ember-components/helpers/render-component';
import RenderTabPaneHelper from 'sl-ember-components/helpers/render-tab-pane';
import RenderTemplateHelper from 'sl-ember-components/helpers/render-template';

/**
@module initializers
@class  register-helpers
*/
export default function() {
    Ember.Handlebars.registerHelper( 'get-key', GetKeyHelper );
    Ember.Handlebars.registerHelper( 'render-component', RenderComponentHelper );
    Ember.Handlebars.registerHelper( 'render-tab-pane', RenderTabPaneHelper );
    Ember.Handlebars.registerHelper( 'render-template', RenderTemplateHelper );
}