import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'tr',
    attributeBindings: [ 'style' ],
    style: function(){
        var isOpen = this.get( 'row.rowExpanderIsOpen' );
        if( isOpen ){
            return '';
        }
        return 'display:none';
    }.property( 'row.rowExpanderIsOpen' ),
    animateOpen: false,
    toggleAnimateOpen: function(){
        Ember.run.later( this, function(){
         //   this.set( 'animateOpen', this.get( 'row.rowExpanderIsOpen' ) );
        });
    }.observes( 'row.rowExpanderIsOpen' )
});
