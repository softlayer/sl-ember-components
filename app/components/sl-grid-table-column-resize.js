import Ember from 'ember';

export default Ember.Component.extend({
    changeTag: function(){
        if( this.get( 'header' ) ){
            this.set( 'tagName', 'th' );
        }
    }.on('init'),

    tagName: 'td'
});
