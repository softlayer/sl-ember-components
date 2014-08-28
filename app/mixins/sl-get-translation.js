import Ember from 'ember';

export default Ember.Mixin.create({
    get : function( key ){
        var translationsRegex = /translate\.(.*)/,
            matches = key.match( translationsRegex );
        if( matches ){
            return this.translate( matches[1] );
        }
        return this._super( key );
    },

    translate: function( key ){
        return this.translationService.translateKey( key );
    }
});
