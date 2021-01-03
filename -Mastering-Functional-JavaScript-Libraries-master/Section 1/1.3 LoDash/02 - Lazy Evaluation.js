// Execute these lines in an LoDash environment

console.log( 'First example: ' );

_( [1,2,3] ).map( x => {
    console.log( 'map', x );
    return 2*x;
} ).filter( x => {
    console.log( 'filter', x ); 
    return x > 3; 
} );

console.log( 'Second example: ' );

_( [1,2,3] ).map( x => {
    console.log( 'map', x );
    return 2*x;
} ).filter( x => {
    console.log( 'filter', x ); 
    return x > 3; 
} ).first();