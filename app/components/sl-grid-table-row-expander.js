import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'tr',
    style: 'display:none',
    actions: {
        expandRow: function(){
            console.log( 'expanding row:',this);
        }
    }
});
