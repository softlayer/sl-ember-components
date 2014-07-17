import Ember from 'ember';

export default Ember.Mixin.create({

    layoutName: 'slmodal',

    classNames: [ 'modal', 'fade' ],

    actions: {

        close: function() {

            if ( this.$() ) {
                this.$().modal( 'hide' );
            }
        }

    }

});