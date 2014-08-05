import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(templateName, model, options) {
    options.types[0] = 'STRING';
    return Ember.Handlebars.helpers.render.call(this, templateName, model, options);
});
