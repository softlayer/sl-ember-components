import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'th',
    attributeBindings: Ember.A([ 'style' ]),

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

    style: '',

    /**
     * columnWidthObserver updates the style string when the width of the
     * column changes.  If we try to make the style a computed property then
     * we will get render errors from Ember before the view is inserted into
     * the dom
     *
     * @return {undefined}
     */
    columnWidthObserver: function(){
        var width = this.get( 'column.width' ),
            elWidth = this.$().width();
        
        if( ! width && elWidth > 0 ){
            width = elWidth;
        }
        this.set( 'style', width ? 'width:'+width+'px;' : '' );
    }.observes( 'column.width' ),

    /**
     * columnWidthsDidInsert will update the width/style string once the view
     * has been inserted into the dom.  This avoids causing Ember/view
     * exceptions.
     *
     * @return {undefined}
     */
    columnWidthsDidInsert: function(){
        this.columnWidthObserver();
    }.on( 'didInsertElement' )


});
