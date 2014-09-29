import Ember from 'ember';

import DisplayValueHelper from '../helpers/display-value';
import GetKeyHelper from '../helpers/get-key';
import RenderComponentHelper from '../helpers/render-component';
import RenderTabPaneHelper from '../helpers/render-tab-pane';
import RenderTemplateHelper from '../helpers/render-template';

export default function () {
    Ember.Handlebars.registerHelper( 'display-value', DisplayValueHelper );
    Ember.Handlebars.registerHelper( 'get-key', GetKeyHelper );
    Ember.Handlebars.registerHelper( 'render-component', RenderComponentHelper );
    Ember.Handlebars.registerHelper( 'render-tab-pane', RenderTabPaneHelper );
    Ember.Handlebars.registerHelper( 'render-template', RenderTemplateHelper );
}
