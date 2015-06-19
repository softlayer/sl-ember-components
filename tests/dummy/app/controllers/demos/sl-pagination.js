import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        changePage( pageNumber ) {
            window.console.log( 'Page changed to', pageNumber );
        }
    }
});
