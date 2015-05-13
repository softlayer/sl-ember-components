import Ember from 'ember';

const LETTERS = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'y', 'z'
];

function capitalize( string ) {
    return string[ 0 ].toUpperCase() + string.substr( 1 );
}

function generateRecords( number ) {
    var content = Ember.A(); 

    for ( let i = 0; i < number; i++ ) {
        let firstName = generateString( 3, 6 );
        let lastName  = generateString( 4, 8 );

        content.pushObject({
            email     : `${firstName}@example.com`,
            firstName : capitalize( firstName ),
            lastName  : capitalize( lastName )
        });
    }

    return content;
}

function generateString( minLength, maxLength ) {
    var length = Math.floor(
            minLength + Math.random() * ( maxLength - minLength )
        ),
        name   = '';

    while ( name.length < length ) {
        name += LETTERS[ Math.floor( Math.random() * LETTERS.length ) ];
    }

    return name;
}

export default Ember.Route.extend({

    actions: {

        requestData( /* limit, offset */ ) {
            this.set( 'controller.model', generateRecords( 25 ) );
        }

    },

    model() {
        return generateRecords( 25 );
    }

});
