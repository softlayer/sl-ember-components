import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper( function ( object, key ) {
    return object[key];
});
