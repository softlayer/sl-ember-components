import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {

        changePage( pageNumber ) {
            console.log( 'Page changed to', pageNumber );
        }

    }

});
