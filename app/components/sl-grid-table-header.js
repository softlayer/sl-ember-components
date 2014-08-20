import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'th',

    attributeBindings: Ember.A([ 'style' ]),

    classNameBindings: [ ':sl-grid-table-header' ],

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
    }.on( 'didInsertElement' ),

    mouseDown: function( ){
        this.$().addClass( 'reordering' );
        $('body').addClass( 'reordering' );
        $('body').on( 'mousemove', this.mouseMoveListener );
        $('body').on( 'mouseup', this.mouseUpListener );
        this.set( 'oldIndex', this.getCurrentColumnIndex() );
        this.set( 'newIndex', this.get( 'oldIndex' ) );
        this.set( 'oldPosition', this.getPosition( this.$()[0] ) );
    },
    setUpBoundListeners: function(){

        this.set( 'mouseUpListener', Ember.run.bind( this, function(){
            var newIndex = this.get( 'newIndex' ),
                oldIndex = this.get( 'oldIndex' );

            this.$().removeClass( 'reordering' );
            $('body').removeClass( 'reordering' );
            $('body').off( 'mousemove', this.mouseMoveListener );
            $('body').off( 'mouseup', this.mouseUpListener );

            if( newIndex !== oldIndex ){
                this.triggerAction({
                    action: 'reorderColumn',
                    actionContext: [ this.get( 'column' ), this.get( 'newIndex' ) ]
                });
            }
         }));
        
        this.set( 'mouseMoveListener', Ember.run.bind( this, function( e ){
            this.$().offset( { left: e.pageX } );
            this.setNewColumnIndex();
            return false;
        }));
    }.on( 'init' ),

    getCurrentColumnIndex: function(){
        return this.$().parent().children( 'th.sl-grid-table-header' ).index( this.$() );
    },

    getPosition: function( el ){
        var elLeft = $( el ).offset().left;
        return { 
            id: el.id,
            left: elLeft,
        };
    },
    
    setNewColumnIndex: function(){

        //get all siblings and offsetsdd
        var headers = this.$().parent().children( 'th.sl-grid-table-header' );
        var currentLeft = this.$().offset().left;
        var thisId = this.$()[0].id;
        var offsets = headers.map( function( index, el ){ 
            if( el.id === thisId ){
                return this.get( 'oldPosition' );
            }
            return this.getPosition( el );
        }.bind( this ) );
       
        var currentIndex = Array.prototype.slice.call( offsets ).reduce( function( prev, el, index ){ 
            return currentLeft > el.left ? index : prev;
        }, 0);
            
       this.set( 'newIndex', currentIndex );
    }

});
