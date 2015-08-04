export default function( value, Enum ) {
    return Object.keys( Enum ).map( key => Enum[ key ] ).indexOf( value ) > -1;
}
