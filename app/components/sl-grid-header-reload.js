import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'span',
    actions: {
        reload: function(){
            this.sendAction();
            this.$('button').blur();
        }
    }
});
