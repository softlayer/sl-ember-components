/**
 * TabPanel component, wrapping functionality from bs_for_ember's TabsComponent
 * and TabsPanesComponent into a single custom component.
 */
export default Ember.Component.extend({

    /**
     * Collects "title" attributes from content value to form column names
     */
    columns: function () {
        return this.get( 'content' ).map( function ( item ) {
            return item.title;
        });
    }.property( 'content' )
});
