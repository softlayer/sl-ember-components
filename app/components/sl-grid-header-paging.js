import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'span',

    actions: {
        changePage: function( page ){
            this.triggerAction( 'changePage', page );
        }
    },

    firstLinkDisabled: function(){
        return this.get( 'currentPage' ) === 1;
    }.property(),

    prevLinkDisabled: Ember.computed.alias( 'firstLinkDisabled' ),

    nextLinkDisabled: function(){
        return this.get( 'currentPage' ) === this.get( 'totalPages' );
    }.property(),

    lastLinkDisabled: Ember.computed.alias( 'nextLinkDisabled' )
});
