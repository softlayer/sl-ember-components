import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {

        pageChange( pageNumber ) {
            console.log( 'Page changed to', pageNumber );
        }

    }

});
