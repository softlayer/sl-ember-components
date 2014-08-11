import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'td',

    styleTag: function(){
        var width = this.get( 'column.width' );
        return width ? 'width:'+width+'px;' : '';
    }.property( 'column.width' )

});
