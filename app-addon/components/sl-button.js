module Ember from 'ember';

/**
 * Button component, currently based on EmberUI's ButtonComponent
 */
export default Ember.Component.extend({

    attributeBindings: [ 'disabled', 'class', 'href' ],

    tagName: 'button'
});
