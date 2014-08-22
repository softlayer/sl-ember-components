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
        var width = this.get( 'column.width' );
        
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
        $('body').on( 'mousemove', this.mouseMoveListener );
        $('body').on( 'mouseup', this.mouseUpListener );
    },
    setUpBoundListeners: function(){

        this.set( 'mouseUpListener', Ember.run.bind( this, function(){
            var newIndex = this.get( 'newIndex' ),
                oldIndex = this.get( 'oldIndex' ),
                reorderCol = this.get( 'reorderCol' ),
                hlReorderCol = this.get( 'hlReorderCol' );

            if( reorderCol ){
                reorderCol.remove();
                this.set( 'reorderCol', null );
            }
            if( hlReorderCol ){
                hlReorderCol.remove();
                this.set( 'hlReorderCol', null );
            }


            $('body').removeClass( 'reordering' );
            $('body').off( 'mousemove', this.mouseMoveListener );
            $('body').off( 'mouseup', this.mouseUpListener );

            if( newIndex !== oldIndex ){
                this.triggerAction({
                    action: 'reorderColumn',
                    actionContext: [ oldIndex, newIndex ]
                });
            }
         }));
        
        this.set( 'mouseMoveListener', Ember.run.bind( this, function( e ){
            var reorderCol = this.get( 'reorderCol' ); 
            
            if( ! reorderCol ){ 
                $('body').addClass( 'reordering' );
                
                reorderCol = $('<div class="reordering"></div>');
                reorderCol.text( this.$()[0].textContent );
                reorderCol.css( {
                    top: this.$().offset().top+'px',
                    left: this.$().offset().left+'px',
                    padding: this.$().css( 'padding' ),
                    width: this.$().width()+'px',
                    height: this.$().parents( 'table' ).outerHeight()+'px',
                    font: this.$().css( 'font' )
                });
                reorderCol.appendTo($('body')); 
                this.set( 'reorderCol', reorderCol );
                
                this.set( 'oldIndex', this.getCurrentColumnIndex() );
                this.set( 'newIndex', this.get( 'oldIndex' ) );
                this.set( 'oldPosition', this.getPosition( reorderCol ) );
            }
            reorderCol.offset( { left: e.pageX } );
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
        var currentLeft = this.get( 'reorderCol' ).offset().left;
        var thisId = this.$()[0].id;
        /*jshint unused: false*/
        var offsets = headers.map( function( index, el ){ 
            if( el.id === thisId ){
                return this.get( 'oldPosition' );
            }
            return this.getPosition( el );
        }.bind( this ) );
        var lastIndex = this.get( 'newIndex' );
       
        var currentIndex = Array.prototype.slice.call( offsets ).reduce( function( prev, el, index ){ 
            return currentLeft > el.left ? index : prev;
        }, 0);
        if( lastIndex !== currentIndex ){
            var hlReorderCol = this.get( 'hlReorderCol' );
            if( hlReorderCol ){
                hlReorderCol.remove();
            }
            hlReorderCol = $( '<div class="reordering">&nbsp;</div>');
            hlReorderCol.css({
                top: this.$().offset().top+'px',
                left: offsets[ currentIndex ].left+'px',
                width: '8px',
                height: this.$().parents( 'table' ).outerHeight()+'px',
            });
            hlReorderCol.appendTo( $('body') );
            this.set( 'hlReorderCol', hlReorderCol );
        }     
        this.set( 'newIndex', currentIndex );
    }

});
