import Ember from 'ember';

export default Ember.View.extend({

    didInsertElement: function() {
        Ember.$( document ).on( 'keypress.menu', function( e ) {
            if ( e.charCode >= 49 && e.charCode <= 57 ) {
                var keypressed = e.charCode - 48;
                this.get( 'controller.keyHandler' ).childSelection( keypressed );
            } else if ( e.charCode === 45 ) {
                this.get( 'controller.keyHandler' ).drillDown( '-' );
            } else if ( e.charCode === 48 ) {
                this.get( 'controller.keyHandler' ).showAll();
            }
        }.bind( this ));

        // keypress doesn't appear to catch ESC
        Ember.$( document ).on( 'keyup.menu', function( e ) {
            if ( e.keyCode === 27 ) {
                this.get( 'controller.keyHandler' ).closeAll();
            }
        }.bind( this ));

        // need to capture TAB key with keydown event
        Ember.$( document ).on( 'keydown.menu', function( e ) {
            if ( 9 === e.keyCode && this.get( 'controller.keyboardInUse' ) ) {
                e.preventDefault();

                if ( e.shiftKey ) {
                    this.get( 'controller.keyHandler' ).cycleRootSelectionPrevious();
                } else {
                    this.get( 'controller.keyHandler' ).cycleRootSelectionNext();
                }
            }
        }.bind( this ));
    },

    willDestroyElement: function() {
        Ember.$( document ).off( 'keypress.menu' ).off( 'keyup.menu' ).off( 'keydown.menu' );
    }

});
