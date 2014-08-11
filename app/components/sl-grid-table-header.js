import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'th',

    actions: {
        sortColumn: function( key ){
            this.sendAction( 'action', key );
        }
    },

    sortClasses: function(){
        var isSorted = this.get( 'column.isSorted' ),
            sortAscending = this.get( 'column.sortAscending' );

        if( isSorted ){
            return 'fa '+( sortAscending ? 'fa-chevron-up' : 'fa-chevron-down' );
        }
        
        return '';

    }.property( 'column.isSorted', 'column.sortAscending' ),

    styleTag: function(){
        var width = this.get( 'column.width' );
        return width ? 'width:'+width+'px;' : '';
    }.property( 'column.width' )

});
