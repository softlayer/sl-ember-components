import Ember from 'ember';

export default Ember.Route.extend({
    generateString: function( min, max ) {
        var chars,
            word = '',
            offset = max - min,
            wordLength = Math.floor( min + Math.random() * offset );

        chars = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'y', 'z', ' '
        ];

        while ( word.length < wordLength ) {
            word += chars[ Math.floor( Math.random() * chars.length )];
        }

        return Ember.String.capitalize( word );
    },

    model: function() {
        var data = [];

        for ( var i = 0; i < 50; i++ ) {
            data.push({
                id        : Math.floor( Math.random() * 9999999999 ),
                firstName : this.generateString( 3, 5 ),
                lastName  : this.generateString( 4, 6 ),
                title     : this.generateString( 6, 10 )
            });
        }

        return data;
    }
});
