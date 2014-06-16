export default Ember.Component.extend({
    columns: function () {
        return this.get( 'content' ).map( function ( item ) {
            return item.title;
        });
    }.property( 'content' )
});
