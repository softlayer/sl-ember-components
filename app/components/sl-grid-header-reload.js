import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'span',
    actions: {
        reload: function(){
            this.triggerAction({
                action: 'bubbleAction', 
                actionContext: [ 'reload' ]
            });
            this.$('button').blur();
        }
    }
});
