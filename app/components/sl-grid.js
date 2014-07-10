import Ember from 'ember';

export default Ember.Component.extend({
    classNameBindings: [ 'striped:table-striped' ],

    classNames: [ 'table' ],

    columnValue: function () {
        console.log( 'columnValue:', arguments );
        return 'okay';
    },

    tagName: 'table'
});
