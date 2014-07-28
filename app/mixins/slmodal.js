import Ember from 'ember';

export default Ember.Mixin.create({

    layoutName: 'slmodal',

    classNames: [ 'modal', 'fade' ],

    /* Empty implementations of modal hooks - override these to implement custom response handling */
    showHandler: function(){ },
    shownHandler: function(){ },
    hideHandler: function(){ },
    hiddenHandler: function(){ },
    loadedHandler: function(){ },

    modalize: function() {
       this.$().modal({
            keyboard : true,
            show     : false,
            backdrop : 'static'
        }).on( 'show.bs.modal', function() {
            this.showHandler();
        }.bind( this )).on( 'shown.bs.modal', function() {
            this.shownHandler();
        }.bind( this )).on( 'hide.bs.modal', function() {
            this.hideHandler();
        }.bind( this )).on( 'hidden.bs.modal', function() {
            this.hiddenHandler();
        }.bind( this )).on( 'loaded.bs.modal', function() {
            this.loadedHandler();
        }.bind( this ));
    }.on( 'didInsertElement' ),

    actions: {

        close: function() {

            if ( this.$() ) {
                this.$().modal( 'hide' );
            }
        }

    }

});